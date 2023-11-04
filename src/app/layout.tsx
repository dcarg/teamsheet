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
      <body className={`${inter.className} flex justify-center`}>
        <div className="flex flex-col max-w-screen-lg">
          {/* @ts-expect-error Server Component */}
          <TopBar />

          {children}
        </div>
      </body>
    </html>
  )
}
