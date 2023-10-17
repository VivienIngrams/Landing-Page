import '/styles/globals.css'
import type { Metadata } from 'next'
import { PT_Sans } from 'next/font/google'

const pt_sans = PT_Sans({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Tosquias e banhos',
  description: 'Tosquias e banhos para cães e gatos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={pt_sans.className}>{children}</body>
    </html>
  )
}
