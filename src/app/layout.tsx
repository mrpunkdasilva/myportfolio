import type { Metadata, Viewport } from 'next'
import { Footer } from '@/components/Footer'
import { CyberNav } from '@/components/CyberNav'
import '../styles/globals.sass'
import { Toaster } from 'react-hot-toast'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Gustavo Henrique | Portfolio',
  description: 'Full Stack Developer especializado em React, Node.js, e tecnologias modernas. Confira meus projetos e experiência em desenvolvimento web.',
  metadataBase: new URL('https://mrpunkdasilva.vercel.app'),
  keywords: 'Full Stack Developer, React, Node.js, TypeScript, Web Development, Portfolio',
  authors: [{ name: 'Gustavo Henrique' }],
  creator: 'Gustavo Henrique',
  publisher: 'Gustavo Henrique',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mrpunkdasilva.vercel.app',
    siteName: 'Gustavo Henrique Portfolio',
    title: 'Gustavo Henrique | Full Stack Developer',
    description: 'Full Stack Developer especializado em React, Node.js, e tecnologias modernas.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gustavo Henrique Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Henrique | Full Stack Developer',
    description: 'Full Stack Developer especializado em React, Node.js, e tecnologias modernas.',
    creator: '@MrPunkSama',
    images: ['/og-image.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <CyberNav />
        {children}
        <Footer />
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}