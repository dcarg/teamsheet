import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import localFont from "next/font/local"

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import { findOrCreateUser } from '@functions/user'

import { GlobalContextProvider } from './globalContext'

import './globals.css'

// Load fontawesome css at the root of the app to stop 'flashing' icon
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false;

import NavBar from '@components/NavBar'

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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_VERCEL_URL}`),
  title: 'Teamsheet',
  description: 'Choose your Team',
  openGraph: {
    images: [
      {
        height: 630,
        url: '/api/ogImages',
        width: 1200,
      },
    ],
    title: 'TeamSheet',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'teamsheet.online',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()

  findOrCreateUser(kindeUser)

  return (
    <html lang="en">
      <body className={`${futura.className} ${inter.className} flex flex-col items-center`}>
        <GlobalContextProvider>
          <NavBar title="TEAMSHEET" />

          <div className="max-w-column w-full">
            {children}
          </div>
        </GlobalContextProvider>
      </body>
      <Script src="https://platform.twitter.com/widgets.js" />
    </html>
  )
}
