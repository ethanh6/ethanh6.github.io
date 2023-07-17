import React from 'react';
import Content from '@components/Content'
import Link from 'next/link'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'

import matter from 'gray-matter';

import fs from 'fs'
import path from 'path'

import {POSTS_PATH, postFilePaths} from "@lib/mdxUtils"

export default function Home() {
  return (
    <Content title="writings">
      <div className={"grid grid-row-3 gap-4"}>
        {postFilePaths.map((filePath) => {
          // read raw file
          const rawFileContent = fs.readFileSync(path.join(POSTS_PATH, filePath), 'utf-8')

          // extract front-matter (meta data)
          const { data, content } = matter(rawFileContent);
          const { title, description, slug, date, type } = data

          const source = serialize(content)

          // date is a Javascript Date Object
          const year = date.getFullYear()
          const month = date.getMonth()
          const dateOfMonth = date.getDate()

          return (
            <div key={filePath}>
              <p>{title}</p>
              <p>{description}</p>
              <p>{slug}</p>
              <p>{type}</p>
              <p>{year}</p>
              <p>{month}</p>
              <p>{dateOfMonth}</p>
              <MDXRemote source={content}/>
            </div>
          )})}
      </div>
    </Content>
  )
}
