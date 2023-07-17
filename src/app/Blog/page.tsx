import React from 'react';
import Content from '@components/Content'
import Link from 'next/link'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {
  return (
    <Content title="writings">
      <div className="grid grid-row-3 gap-24">
        <div>
          <div className="text-1xl">Sample Blog Content</div>
          <MDXRemote source={`# Hello World This is from Server Components!`}/>
        </div>
      </div>
    </Content>
  )
}
