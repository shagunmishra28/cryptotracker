// Components
import Toolbar from './Toolbar'
import Footer from './Footer'

// Types
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 text-slate-700">
      <Toolbar />
      {children}
      <Footer />
    </div>
  )
}
