import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, HelpCircle, FileText, BookOpen, LayoutDashboard, Calendar, Layers, Award, ArrowRight, X } from 'lucide-react'
import { questionData } from '../data/questionBankData'
import { scenariosData } from '../data/scenariosData'
import { motion, AnimatePresence } from 'framer-motion'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

interface SearchResult {
  type: 'page' | 'question' | 'scenario'
  title: string
  subtitle: string
  path: string
  icon: React.ReactNode
}

const pages: SearchResult[] = [
  { type: 'page', title: 'Dashboard', subtitle: 'Overview & stats', path: '/', icon: <LayoutDashboard size={16} /> },
  { type: 'page', title: 'Study Plan', subtitle: '10-day preparation roadmap', path: '/study-plan', icon: <Calendar size={16} /> },
  { type: 'page', title: 'Interview Questions', subtitle: '650+ categorized questions', path: '/questions', icon: <HelpCircle size={16} /> },
  { type: 'page', title: 'Flashcards', subtitle: 'Quick revision cards', path: '/flashcards', icon: <Layers size={16} /> },
  { type: 'page', title: 'Mock Interviews', subtitle: 'Simulated interview sessions', path: '/mock-interviews', icon: <Award size={16} /> },
  { type: 'page', title: 'Scenario Explorer', subtitle: 'Production troubleshooting', path: '/scenarios', icon: <FileText size={16} /> },
  { type: 'page', title: 'Theory Portal', subtitle: 'Deep-dive study guides', path: '/theory', icon: <BookOpen size={16} /> },
]

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  const results = useMemo((): SearchResult[] => {
    if (!query.trim()) return pages

    const q = query.toLowerCase().trim()

    const matchedPages = pages.filter(
      (p) => p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q)
    )

    const matchedQuestions = questionData
      .filter((qn) => qn.question.toLowerCase().includes(q) || qn.tags.some((t) => t.toLowerCase().includes(q)))
      .slice(0, 8)
      .map((qn): SearchResult => ({
        type: 'question',
        title: qn.question.length > 70 ? qn.question.substring(0, 70) + '...' : qn.question,
        subtitle: `${qn.category} · ${qn.level}`,
        path: '/questions',
        icon: <HelpCircle size={16} />,
      }))

    const matchedScenarios = scenariosData
      .filter((s) => s.title.toLowerCase().includes(q) || s.problem.toLowerCase().includes(q))
      .slice(0, 5)
      .map((s): SearchResult => ({
        type: 'scenario',
        title: s.title.length > 70 ? s.title.substring(0, 70) + '...' : s.title,
        subtitle: `Scenario · ${s.category}`,
        path: '/scenarios',
        icon: <FileText size={16} />,
      }))

    return [...matchedPages, ...matchedQuestions, ...matchedScenarios]
  }, [query])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault()
      navigate(results[selectedIndex].path)
      onClose()
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  const handleSelect = (result: SearchResult) => {
    navigate(result.path)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.4)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg rounded-xl overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            }}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
              <Search size={18} style={{ color: 'var(--text-tertiary)' }} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type to search questions, pages, scenarios..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-[14px] font-medium placeholder:font-normal"
                style={{ color: 'var(--text-primary)' }}
              />
              <button onClick={onClose} className="p-1 rounded hover:opacity-70" style={{ color: 'var(--text-tertiary)' }}>
                <X size={16} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-80 overflow-y-auto py-2 px-2">
              {results.length === 0 && (
                <div className="py-8 text-center text-[13px]" style={{ color: 'var(--text-tertiary)' }}>
                  No results found for "{query}"
                </div>
              )}
              {results.map((result, idx) => (
                <button
                  key={`${result.type}-${result.title}-${idx}`}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors"
                  style={{
                    background: idx === selectedIndex ? 'var(--bg-elevated)' : 'transparent',
                    color: 'var(--text-primary)',
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => handleSelect(result)}
                >
                  <div className="shrink-0" style={{ color: idx === selectedIndex ? 'var(--primary)' : 'var(--text-tertiary)' }}>
                    {result.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium truncate">{result.title}</div>
                    <div className="text-[11px] truncate" style={{ color: 'var(--text-tertiary)' }}>{result.subtitle}</div>
                  </div>
                  {idx === selectedIndex && (
                    <ArrowRight size={14} style={{ color: 'var(--text-tertiary)' }} />
                  )}
                </button>
              ))}
            </div>

            {/* Footer Hints */}
            <div className="flex items-center gap-4 px-4 py-2 text-[10px] font-medium" style={{ borderTop: '1px solid var(--border)', color: 'var(--text-tertiary)' }}>
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
