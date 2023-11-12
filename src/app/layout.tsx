import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import TopBar from '@components/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teamsheet',
  description: 'Choose your Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center`}>
        <TopBar />

        <div className="max-w-screen-lg w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
