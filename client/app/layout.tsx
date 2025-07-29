import Navbar from '@/components/layout/Navbar'
import '.././styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LMS Mini',
  description: 'Hệ thống quản lý khóa học',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='' lang="vi">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  )
}
