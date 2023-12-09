import type { Metadata } from 'next'
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
      // {
      //   path: "../../public/fonts/futura-pt.ttf",
      //   weight: "400",
      // },
      {
        path: "../../public/fonts/futura-pt-bold.ttf",
        weight: "700",
      },
      // {
      //   path: "../../public/fonts/futura-pt-light.ttf",
      //   weight: "400",
      // }
    ],
    variable: "--font-futura",
  }
)

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
      <body className={`${futura.className} ${inter.className} flex flex-col items-center`}>
        <NavBar title="TEAMSHEET" />

        <TopBar />

        <div className="max-w-column w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
