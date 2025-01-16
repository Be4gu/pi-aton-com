import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import SessionWrapper from './SessionWrapper'

export const metadata: Metadata = {
  title: 'Piñaton.com',
  description: 'Created by Entrellaves',
  icons: {
    icon: '/img-title.png' // Ruta de tu favicon
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>

      <Script src='https://scripts.simpleanalyticscdn.com/latest.js' />
    </html>
  )
}
