import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import glob from 'fast-glob';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import path from 'path';

const blogsDirectory = join(process.cwd(), 'posts/blogs');

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export interface BlogProps {
  title: string;
  author: string;
  date: string;
  categories: Array<string>;
  tags: Array<string>;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export interface PostsProps {
  source: MDXRemoteSerializeResult;
  data: { [key: string]: any };
  content: string;
}

// get posts under ./posts
export const getPosts = (category: string): Promise<PostsProps[]> => {
  const baseDir = path.join(process.cwd(), './posts');
  const contentGlob = path.join(path.join(baseDir, category), '/*.mdx');
  const files = glob.sync(contentGlob);

  return Promise.all(
    files.map(async (file) => {
      const raw = fs.readFileSync(file, 'utf8');
      const { data, content } = matter(raw);

      const source = await serialize(content, {
        scope: data,
      });

      return { data, content: content.trim(), source };
    }),
  );
};
