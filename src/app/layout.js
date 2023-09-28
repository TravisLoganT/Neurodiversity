import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Embrace Neurodiversity',
  description: 'Learn all about neurodiversity!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <div className='wrapper'>
            <Navbar/>
              {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
