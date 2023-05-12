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
      {/* Aqui deberia de ir la sidebar */}
      <body className={` $(inter.className} flex  h-screen`}>
        <Sidebar />
        <main className='w-full p-4'>{children}</main>
      </body>
    </html>
  )
}
