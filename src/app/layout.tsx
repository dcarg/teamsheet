import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Load fontawesome css at the root of the app to stop 'flashing' icon
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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

        <div className="max-w-column w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
