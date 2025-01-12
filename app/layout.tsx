import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

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
      <body>{children}</body>
      <Script src='https://scripts.simpleanalyticscdn.com/latest.js' />
    </html>
  )
}
