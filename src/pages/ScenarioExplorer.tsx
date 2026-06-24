import React, { useState, useMemo } from 'react'
import { Search, Bookmark, CheckCircle2, Circle, X, AlertOctagon } from 'lucide-react'
import { useAppState } from '../context/AppStateContext'
import { scenariosData } from '../data/scenariosData'
import { type ProductionScenario } from '../types'

export const ScenarioExplorer: React.FC = () => {
  const {
    completedScenarios,
    bookmarkedScenarios,
    toggleScenarioCompleted,
    toggleScenarioBookmarked
  } = useAppState()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false)
  const [activeScenario, setActiveScenario] = useState<ProductionScenario | null>(null)

  const categories = ['All', 'Performance', 'Concurrency', 'Security', 'Azure', 'Microservices', 'Database', 'Deployment']

  // Filter scenarios dynamically
  const filteredScenarios = useMemo(() => {
    return scenariosData.filter((s) => {
      const matchesSearch =
        searchQuery === '' ||
        s.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.resolution.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory
      
      const isBookmarked = bookmarkedScenarios.includes(s.id)
      const matchesBookmark = !showOnlyBookmarked || isBookmarked

      return matchesSearch && matchesCategory && matchesBookmark
    })
  }, [searchQuery, selectedCategory, showOnlyBookmarked, bookmarkedScenarios])

  return (
    <div className="space-y-6 pb-12 px-2 md:px-4">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>Production Scenario Explorer</h1>
        <p className="text-sm md:text-base mt-1" style={{ color: 'var(--text-tertiary)' }}>
          Study 100 real-world production incidents, root-cause analyses, code fixes, and interview answers.
        </p>
      </div>

      {/* Filtering Controls */}
      <div className="rounded-xl p-5 shadow-sm space-y-4 border transition-colors" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search problem statement, root cause, code fixes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-4 text-sm rounded-lg border outline-none transition-colors"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} style={{ color: 'var(--text-tertiary)' }} />
          </div>

          <button
            onClick={() => setShowOnlyBookmarked(!showOnlyBookmarked)}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-bold border transition-all hover:opacity-90"
            style={{
              background: showOnlyBookmarked ? 'var(--warning-light)' : 'var(--bg-elevated)',
              color: showOnlyBookmarked ? 'var(--warning)' : 'var(--text-secondary)',
              borderColor: 'var(--border)'
            }}
          >
            <Bookmark size={15} className={showOnlyBookmarked ? 'fill-current' : ''} />
            Show Bookmarked Only
          </button>
        </div>

        {/* Category selector */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
            Categories
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all border"
                style={{
                  background: selectedCategory === cat ? 'var(--primary)' : 'var(--bg-elevated)',
                  color: selectedCategory === cat ? 'var(--text-on-primary)' : 'var(--text-secondary)',
                  borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Total search results summary */}
      <div className="text-xs md:text-sm font-bold px-1" style={{ color: 'var(--text-tertiary)' }}>
        Found {filteredScenarios.length} Scenarios
      </div>

      {/* Grid of Scenario Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredScenarios.map((scenario) => {
          const isBookmarked = bookmarkedScenarios.includes(scenario.id)
          const isCompleted = completedScenarios.includes(scenario.id)

          return (
            <div
              key={scenario.id}
              className="rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md border transition-all flex flex-col justify-between items-start gap-5"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <span className="text-xs px-2.5 py-0.5 rounded font-bold uppercase tracking-wider" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                    {scenario.category}
                  </span>
                  <span className="text-xs font-bold" style={{ color: 'var(--text-tertiary)' }}>
                    ID: {scenario.id.toUpperCase()}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleScenarioCompleted(scenario.id)}
                    className="p-2 rounded-lg border transition-all hover:scale-105"
                    style={{
                      background: isCompleted ? 'var(--success-light)' : 'var(--bg-elevated)',
                      color: isCompleted ? 'var(--success)' : 'var(--text-tertiary)',
                      borderColor: 'var(--border)'
                    }}
                    title={isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                    aria-label="Toggle completed state"
                  >
                    {isCompleted ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                  </button>
                  <button
                    onClick={() => toggleScenarioBookmarked(scenario.id)}
                    className="p-2 rounded-lg border transition-all hover:scale-105"
                    style={{
                      background: isBookmarked ? 'var(--warning-light)' : 'var(--bg-elevated)',
                      color: isBookmarked ? 'var(--warning)' : 'var(--text-tertiary)',
                      borderColor: 'var(--border)'
                    }}
                    title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Scenario'}
                    aria-label="Toggle bookmark"
                  >
                    <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
                  </button>
                </div>
              </div>

              <div className="space-y-2 w-full flex-1">
                <h3 className="text-base font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {scenario.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                  {scenario.problem}
                </p>
              </div>

              <div className="w-full pt-3 flex justify-end border-t border-dashed" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => setActiveScenario(scenario)}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-extrabold transition-colors hover:opacity-80"
                  style={{ color: 'var(--primary)' }}
                >
                  Analyze Incident & Answer
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Scenario Incident Overlay Modal */}
      {activeScenario && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all animate-scale-in border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            {/* Modal Header */}
            <div className="p-6 flex justify-between items-start gap-4" style={{ borderBottom: '1px solid var(--border)' }}>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                    {activeScenario.category}
                  </span>
                  <span className="text-xs font-bold" style={{ color: 'var(--text-tertiary)' }}>
                    ID: {activeScenario.id.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold leading-relaxed pr-6" style={{ color: 'var(--text-primary)' }}>
                  {activeScenario.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveScenario(null)}
                className="p-1.5 rounded-lg transition-colors border"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-tertiary)', borderColor: 'var(--border)' }}
                aria-label="Close details overlay"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {/* Problem Description */}
              <div className="space-y-2 bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                <h4 className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--danger)' }}>
                  <AlertOctagon size={15} />
                  Problem Statement
                </h4>
                <p className="font-bold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {activeScenario.problem}
                </p>
              </div>

              {/* Investigation Script */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  Diagnostic & Investigation Checklist
                </h4>
                <ul className="space-y-2">
                  {activeScenario.investigationSteps.map((step, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span style={{ color: 'var(--primary)' }}>•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code / Resolution */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  Incident Resolution Patch
                </h4>
                <div className="p-4 rounded-xl border font-mono text-xs md:text-sm leading-relaxed overflow-x-auto" style={{ background: '#0F172A', color: '#4ADE80', borderColor: '#334155' }}>
                  <pre className="whitespace-pre-wrap">{activeScenario.resolution}</pre>
                </div>
              </div>

              {/* Prevention */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  Incident Prevention Policy
                </h4>
                <p>
                  {activeScenario.prevention}
                </p>
              </div>

              {/* Interview Framework */}
              <div className="space-y-2 p-4 rounded-xl border" style={{ background: 'var(--primary-light)', borderColor: 'var(--primary-muted)' }}>
                <h4 className="text-xs font-extrabold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>
                  Structural Interview Answer Framework
                </h4>
                <p className="italic leading-relaxed">
                  {activeScenario.interviewAnswer}
                </p>
              </div>
            </div>

            {/* Footer Control Panel */}
            <div className="p-5 flex flex-wrap justify-between items-center gap-3 bg-slate-50 dark:bg-slate-950" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleScenarioCompleted(activeScenario.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs md:text-sm font-bold border transition-all"
                  style={{
                    background: completedScenarios.includes(activeScenario.id) ? 'var(--success)' : 'var(--bg-card)',
                    color: completedScenarios.includes(activeScenario.id) ? 'white' : 'var(--text-secondary)',
                    borderColor: completedScenarios.includes(activeScenario.id) ? 'var(--success)' : 'var(--border)'
                  }}
                >
                  <CheckCircle2 size={15} />
                  {completedScenarios.includes(activeScenario.id) ? 'Completed' : 'Mark Complete'}
                </button>
                <button
                  onClick={() => toggleScenarioBookmarked(activeScenario.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs md:text-sm font-bold border transition-all"
                  style={{
                    background: bookmarkedScenarios.includes(activeScenario.id) ? 'var(--warning-light)' : 'var(--bg-card)',
                    color: bookmarkedScenarios.includes(activeScenario.id) ? 'var(--warning)' : 'var(--text-secondary)',
                    borderColor: bookmarkedScenarios.includes(activeScenario.id) ? 'var(--warning-muted)' : 'var(--border)'
                  }}
                >
                  <Bookmark size={15} className={bookmarkedScenarios.includes(activeScenario.id) ? 'fill-current' : ''} />
                  {bookmarkedScenarios.includes(activeScenario.id) ? 'Bookmarked' : 'Bookmark'}
                </button>
              </div>

              <button
                onClick={() => setActiveScenario(null)}
                className="px-5 py-2 rounded-lg text-xs md:text-sm font-bold shadow transition-all hover:opacity-90"
                style={{ background: 'var(--primary)', color: 'var(--text-on-primary)' }}
              >
                Close Analysis
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
