import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: ReadonlyArray<string>;
};

export type Post = PostMeta & {
  contentHtml: string;
  readingMinutes: number;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

const isPublished = (frontmatter: { draft?: boolean; date?: string }) => {
  if (frontmatter.draft) return false;
  if (frontmatter.date && new Date(frontmatter.date).getTime() > Date.now()) return false;
  return true;
};

const readPost = (filename: string): { meta: PostMeta; raw: string } | null => {
  const slug = filename.replace(/\.md$/, "");
  const fullPath = path.join(POSTS_DIR, filename);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  if (!isPublished(data)) return null;

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    author: String(data.author ?? "Adaptyx"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };

  return { meta, raw: content };
};

export const getAllPostMeta = (): ReadonlyArray<PostMeta> => {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .filter((p): p is { meta: PostMeta; raw: string } => p !== null)
    .map(({ meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostSlugs = (): ReadonlyArray<string> =>
  getAllPostMeta().map((m) => m.slug);

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const filename = `${slug}.md`;
  const fullPath = path.join(POSTS_DIR, filename);
  if (!fs.existsSync(fullPath)) return null;
  const result = readPost(filename);
  if (!result) return null;
  const { meta, raw } = result;
  const contentHtml = await marked.parse(raw, { gfm: true, breaks: false });
  const wordCount = raw.split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(wordCount / 220));
  return { ...meta, contentHtml, readingMinutes };
};
