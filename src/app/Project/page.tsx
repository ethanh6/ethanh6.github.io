import React from 'react';
import Content from '@components/Content'
import Link from 'next/link'

export default function Home() {
  return (
    <Content title="projects">
      <div className="grid grid-row-3 gap-24">
        <div>
          <Link href="https://github.com/ethanh6/CryptoArb" className="text-3xl">CryptoArb</Link>
          <div className="text-1xl">Cryptocurrenty arbitrage trading using C++.</div>
        </div>
        <div>
          <Link href="https://ethanh6.github.io" className="text-3xl">This Website</Link>
          <div className="text-1xl">Next.js, TailwindCSS, Typescript</div>
        </div>
        <div>
          <Link href="https://github.com/ethanh6/nvim-config" className="text-3xl">Neovim Configuration</Link>
          <div className="text-1xl">Lue, Vimscript.</div>
        </div>
      </div>
    </Content>
  )
}
