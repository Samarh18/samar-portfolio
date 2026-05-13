import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Samar Abu Hegly — HCI, AI & Education Researcher',
  description: 'Researcher and builder at the intersection of people and technology, with a focus on making AI more human, ethical, and accessible.',
  openGraph: {
    title: 'Samar Abu Hegly',
    description: 'Researcher and builder at the intersection of people and technology.',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
