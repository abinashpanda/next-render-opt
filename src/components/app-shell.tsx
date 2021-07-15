import React from 'react'
import dynamic from 'next/dynamic'

const SideBar = dynamic(() => import('components/side-bar'), { ssr: false })

export default function AppShell(props: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen h-screen bg-gray-100">
      <div className="w-[200px] bg-white">
        <SideBar />
      </div>
      <div className="h-full p-4 overflow-auto">{props.children}</div>
    </div>
  )
}
