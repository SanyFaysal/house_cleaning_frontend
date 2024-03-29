

import Providers from '@/lib/Providers'
import './globals.css'

import { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel='icon' href='/favicon.ico' />
        </head>
        <body className=''>
          {children}
        </body>
      </html>
    </Providers>

  )
}
