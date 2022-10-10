import fs from 'fs';
import glob from 'fast-glob';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

/* export interface ExperienceProps { */
/*   Description: string; */
/*   Name: string; */
/*   DateSlug: string; */
/*   Order: number; */
/* } */

const baseDir = path.join(process.cwd(), './posts/experiences');

export interface ExperienceProps {
  source: MDXRemoteSerializeResult;
  data: { [key: string]: any };
  content: string;
}

export const getExperiences = (): Promise<ExperienceProps[]> => {
  const contentGlob = path.join(baseDir, '/*.mdx');
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
