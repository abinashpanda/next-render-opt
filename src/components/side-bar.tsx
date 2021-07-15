import { useMemo } from 'react'
import Link from 'next/link'

const links = [
  { name: 'Coins', path: '/coins' },
  { name: 'Home', path: '/' },
]

export default function SideBar() {
  return useMemo(function renderMenu() {
    return (
      <div className="w-full h-full p-4 space-y-4">
        {links.map(({ name, path }) => {
          return (
            <Link key={path} href={path}>
              <a className="block px-4 py-2 text-sm border rounded-md">{name}</a>
            </Link>
          )
        })}
      </div>
    )
  }, [])
}
