import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useAppState } from '../context/AppStateContext'
import {
  LayoutDashboard,
  Calendar,
  HelpCircle,
  Layers,
  Award,
  Cpu,
  Globe,
  Database as DatabaseIcon,
  Server,
  Cloud,
  Building2,
  Users,
  BookMarked,
  Settings,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Search,
  Flame
} from 'lucide-react'

interface SidebarProps {
  collapsed: boolean
  setCollapsed: (val: boolean) => void
  onOpenSearch: () => void
}

interface NavItem {
  name: string
  path: string
  icon: React.FC<{ size?: number; className?: string }>
}

interface NavGroup {
  label: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    label: 'OVERVIEW',
    items: [
      { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    ]
  },
  {
    label: 'PREPARATION',
    items: [
      { name: 'Study Plan', path: '/study-plan', icon: Calendar },
      { name: 'Interview Questions', path: '/questions', icon: HelpCircle },
      { name: 'Flashcards', path: '/flashcards', icon: Layers },
      { name: 'Mock Interviews', path: '/mock-interviews', icon: Award },
    ]
  },
  {
    label: 'SUBJECTS',
    items: [
      { name: 'System Design', path: '/theory?tab=system-design', icon: Cpu },
      { name: 'ASP.NET Core', path: '/theory?tab=dotnet', icon: Globe },
      { name: 'React', path: '/theory?tab=react', icon: Server },
      { name: 'SQL Server', path: '/theory?tab=sql', icon: DatabaseIcon },
      { name: 'Azure', path: '/theory?tab=azure', icon: Cloud },
      { name: 'Architecture', path: '/theory?tab=architecture', icon: Building2 },
      { name: 'Behavioral', path: '/theory?tab=behavioral', icon: Users },
    ]
  },
  {
    label: 'UTILITIES',
    items: [
      { name: 'Bookmarks', path: '/bookmarks', icon: BookMarked },
      { name: 'Scenarios', path: '/scenarios', icon: Settings },
    ]
  }
]

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed, onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme()
  const { streak, getOverallProgress } = useAppState()
  const location = useLocation()
  const progress = getOverallProgress()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    if (path.includes('?')) {
      const basePath = path.split('?')[0]
      return location.pathname === basePath && location.search.includes(path.split('?')[1])
    }
    return location.pathname.startsWith(path)
  }

  return (
    <aside
      className="fixed top-0 left-0 z-30 h-screen flex flex-col transition-all duration-300 overflow-hidden"
      style={{
        width: collapsed ? '72px' : '280px',
        backgroundColor: 'var(--bg-sidebar)',
        borderRight: '1px solid var(--border)',
      }}
    >
      {/* Brand Header */}
      <div
        className="h-16 flex items-center justify-between px-4 shrink-0"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight" style={{ color: 'var(--text-primary)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black shrink-0" style={{ background: 'var(--primary)' }}>
              IM
            </div>
            <span>InterviewMaster</span>
            <span className="text-xs px-2 py-0.5 rounded font-bold" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
              PRO
            </span>
          </Link>
        )}
        {collapsed && (
          <Link to="/" className="mx-auto">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black" style={{ background: 'var(--primary)' }}>
              IM
            </div>
          </Link>
        )}
        {!collapsed && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-md transition-colors hover:opacity-80"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-tertiary)' }}
            aria-label="Collapse sidebar"
          >
            <ChevronLeft size={16} />
          </button>
        )}
      </div>

      {/* Search Shortcut */}
      {!collapsed && (
        <button
          onClick={onOpenSearch}
          className="mx-4 mt-4 mb-1 flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all hover:opacity-80"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-tertiary)', border: '1px solid var(--border)' }}
        >
          <Search size={16} />
          <span className="flex-1 text-left">Search...</span>
          <kbd className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-tertiary)' }}>
            ⌘K
          </kbd>
        </button>
      )}
      {collapsed && (
        <button
          onClick={onOpenSearch}
          className="mx-auto mt-4 mb-1 p-2.5 rounded-lg transition-colors hover:opacity-80"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-tertiary)' }}
          aria-label="Search"
        >
          <Search size={18} />
        </button>
      )}

      {/* Navigation Groups */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto space-y-6">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <div className="text-xs font-extrabold uppercase tracking-widest px-3 mb-2" style={{ color: 'var(--text-tertiary)' }}>
                {group.label}
              </div>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon
                const active = isActive(item.path)
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-150 relative"
                    style={{
                      background: active ? 'var(--bg-sidebar-active)' : 'transparent',
                      color: active ? 'var(--primary)' : 'var(--text-secondary)',
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = 'var(--bg-elevated)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = 'transparent'
                      }
                    }}
                    title={collapsed ? item.name : undefined}
                  >
                    {active && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full" style={{ background: 'var(--primary)' }} />
                    )}
                    <Icon size={18} className={active ? 'text-[var(--primary)]' : ''} />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Section: Progress + Theme + Profile */}
      <div className="shrink-0 px-4 py-4 space-y-4" style={{ borderTop: '1px solid var(--border)' }}>
        {/* Progress Bar */}
        {!collapsed && (
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1.5" style={{ color: 'var(--text-tertiary)' }}>
              <span>Overall Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: 'var(--primary)' }}
              />
            </div>
          </div>
        )}

        {/* Streak */}
        {!collapsed && streak > 0 && (
          <div className="flex items-center gap-2 text-xs font-bold px-2.5 py-1.5 rounded-lg" style={{ background: 'var(--warning-light)', color: 'var(--warning)' }}>
            <Flame size={14} className="fill-current" />
            <span>{streak} Day Streak</span>
          </div>
        )}

        {/* Theme + Collapse Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors hover:opacity-80"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {collapsed && (
            <button
              onClick={() => setCollapsed(false)}
              className="p-2 rounded-lg transition-colors hover:opacity-80"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
              aria-label="Expand sidebar"
            >
              <ChevronRight size={16} />
            </button>
          )}

          {!collapsed && (
            <div className="text-right">
              <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Praveen Kumar</div>
              <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Senior .NET & React</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
