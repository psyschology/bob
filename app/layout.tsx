import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'bob Landing Page',
  description: 'Ride comparison app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}