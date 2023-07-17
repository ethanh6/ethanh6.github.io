import React from 'react';
import Content from '@components/Content'
import Link from 'next/link'

export default function Home() {
  return (
    <Content title="writings">
      <div className="grid grid-row-3 gap-24">
        <div>
          <div className="text-1xl">Sample Blog Content</div>
        </div>
      </div>
    </Content>
  )
}
