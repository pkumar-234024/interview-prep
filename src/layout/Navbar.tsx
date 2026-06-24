import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Sun, Moon, Flame } from 'lucide-react'
import { useAppState } from '../context/AppStateContext'
import { useTheme } from '../context/ThemeContext'
import { studyPlanData } from '../data/studyPlanData'

interface NavbarProps {
  onOpenSearch: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const location = useLocation()
  const { streak, getOverallProgress, completedDays } = useAppState()
  const { theme, toggleTheme } = useTheme()
  const progress = getOverallProgress()

  // Determine current study day based on completed days
  const currentDayIndex = completedDays.length
  const currentDay = studyPlanData[Math.min(currentDayIndex, studyPlanData.length - 1)]

  // Generate breadcrumbs from path
  const getBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x)
    if (pathnames.length === 0) {
      return [{ name: 'Dashboard', path: '/' }]
    }
    return [
      { name: 'Dashboard', path: '/' },
      ...pathnames.map((value, index) => {
        const path = `/${pathnames.slice(0, index + 1).join('/')}`
        const name = value
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        return { name, path }
      })
    ]
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <header
      className="sticky top-0 z-20 h-14 flex items-center justify-between px-6 backdrop-blur-sm transition-colors"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(15,23,42,0.85)' : 'rgba(248,250,252,0.85)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-sm">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={crumb.path}>
            {idx > 0 && <span style={{ color: 'var(--text-tertiary)' }}>/</span>}
            {idx === breadcrumbs.length - 1 ? (
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                {crumb.name}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="hover:opacity-70 transition-opacity"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {crumb.name}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Current Study Day Badge */}
        {currentDay && (
          <div
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md"
            style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}
          >
            <span>{currentDay.day}</span>
            <span>·</span>
            <span>{currentDay.title}</span>
          </div>
        )}

        {/* Progress Indicator */}
        <div
          className="hidden sm:flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-md"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
        >
          <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: 'var(--primary)' }}
            />
          </div>
          <span>{progress}%</span>
        </div>

        {/* Streak */}
        {streak > 0 && (
          <div
            className="hidden sm:flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md"
            style={{ background: 'var(--warning-light)', color: 'var(--warning)' }}
          >
            <Flame size={12} className="fill-current" />
            <span>{streak}</span>
          </div>
        )}

        {/* Search Button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all hover:opacity-85"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-tertiary)', border: '1px solid var(--border)' }}
          aria-label="Open search"
        >
          <Search size={14} />
          <span className="hidden md:inline">Search</span>
          <kbd className="hidden md:inline text-xs font-semibold px-1.5 py-0.5 rounded ml-1" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            ⌘K
          </kbd>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition-all hover:opacity-80"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Profile Avatar */}
        <div className="flex items-center gap-2 pl-2" style={{ borderLeft: '1px solid var(--border)' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: 'var(--primary)' }}>
            PK
          </div>
          <div className="hidden lg:block text-left">
            <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Praveen Kumar</div>
            <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Azure & .NET Architect</div>
          </div>
        </div>
      </div>
    </header>
  )
}
