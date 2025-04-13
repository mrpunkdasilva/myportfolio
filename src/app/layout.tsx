import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import '../styles/globals.sass'

export const metadata: Metadata = {
  title: 'Gustavo Henrique | Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}