import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Livepeer Rooms',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </head>

        <body className={inter.className}>{children}</body>
    </html>
  )
}
