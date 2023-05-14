import Sidebar from './components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Autozone',
  description: 'Autozone metrics calculator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Sidebar />
        <main className='w-full px-4'>{children}</main>
      </body>
    </html>
  )
}
