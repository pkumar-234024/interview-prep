import React, { useState, useEffect, useCallback } from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import { CommandPalette } from '../components/CommandPalette'
import { Menu, X } from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Track viewport size for sidebar margin
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) {
        setCollapsed(true)
        setMobileMenuOpen(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Global Ctrl+K handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleOpenSearch = useCallback(() => {
    setSearchOpen(true)
  }, [])

  const sidebarWidth = collapsed ? 72 : 280

  return (
    <div className="min-h-screen transition-colors" style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-3 left-3 z-40 p-2 rounded-lg md:hidden transition-all"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-25 md:hidden"
          style={{ background: 'rgba(0,0,0,0.3)' }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} onOpenSearch={handleOpenSearch} />
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-y-0 left-0 z-30">
          <Sidebar
            collapsed={false}
            setCollapsed={() => setMobileMenuOpen(false)}
            onOpenSearch={() => { setMobileMenuOpen(false); handleOpenSearch() }}
          />
        </div>
      )}

      {/* Main Content Area */}
      <div
        className="flex flex-col min-h-screen transition-all duration-300"
        style={{ marginLeft: isMobile ? 0 : `${sidebarWidth}px` }}
      >
        <Navbar onOpenSearch={handleOpenSearch} />

        <main className="flex-1 px-4 py-6 md:px-6 lg:px-8 w-full mx-auto animate-fade-in" style={{ maxWidth: '1600px' }}>
          {children}
        </main>
      </div>

      {/* Command Palette */}
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
