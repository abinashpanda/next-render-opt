import React, { useMemo } from 'react'
import Link from 'next/link'

const links = [
  { name: 'Coins', path: '/coins' },
  { name: 'Home', path: '/' },
]

export default function AppShell(props: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen h-screen bg-gray-100">
      {useMemo(function renderMenu() {
        return (
          <div className="w-[200px] border-r bg-white space-y-4 p-4">
            {links.map(({ name, path }) => {
              return (
                <Link key={path} href={path}>
                  <a className="block px-4 py-2 text-sm border rounded-md">{name}</a>
                </Link>
              )
            })}
          </div>
        )
      }, [])}
      <div className="h-full p-4 overflow-auto">{props.children}</div>
    </div>
  )
}
