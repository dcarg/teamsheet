import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import localFont from "next/font/local"
import './globals.css'

// Load fontawesome css at the root of the app to stop 'flashing' icon
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false;

import NavBar from '@components/NavBar'
import TopBar from '@components/TopBar'

const inter = Inter({ subsets: ['latin'] })

const futura = localFont(
  {
    src: [
      {
        path: "../../public/fonts/futura-pt-medium.ttf",
        weight: "500",
        style: "normal",
      },
      {
        path: "../../public/fonts/futura-pt-bold.ttf",
        weight: "600",
        style: "normal",
      },
      {
        path: "../../public/fonts/futura-pt.ttf",
        weight: "400",
        style: "normal",
      }
    ],
    variable: "--font-futura",
  }
)

export const metadata: Metadata = {
  title: 'Teamsheet',
  description: 'Choose your Team',
  openGraph: {
    images: [
      {
        height: 630,
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/ogImages`,
        width: 1200,
      },
    ],
    title: 'TeamSheet',
    type: 'website',
    url: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
  twitter: {
    card: 'summary_large_image',
    site: 'teamsheet.online',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${futura.className} ${inter.className} flex flex-col items-center`}>
        <NavBar title="TEAMSHEET" />

        <TopBar />

        <div className="max-w-column w-full">
          {children}
        </div>
      </body>
      <Script src="https://platform.twitter.com/widgets.js" />
    </html>
  )
}
