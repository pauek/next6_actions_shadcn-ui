
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="flex flex-row h-screen">
        <div className="w-32 bg-green-300">
            Side bar
        </div>
        {children}
    </div>
  )
}
