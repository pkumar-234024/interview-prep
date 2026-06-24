import React, { useState, useMemo } from 'react'
import { Bookmark, CheckCircle2, Circle, Search, Filter, ChevronDown, BookOpen } from 'lucide-react'
import { useAppState } from '../context/AppStateContext'
import { questionData } from '../data/questionBankData'
import { motion, AnimatePresence } from 'framer-motion'
import { csharpDiagrams } from '../data/csharpDiagrams'

export const QuestionBank: React.FC = () => {
  const {
    completedQuestions,
    bookmarkedQuestions,
    toggleQuestionCompleted,
    toggleQuestionBookmarked
  } = useAppState()

  const totalQuestions = questionData.length
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedLevel, setSelectedLevel] = useState<string>('All')
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false)
  const [showOnlyCompleted, setShowOnlyCompleted] = useState<string>('All')
  const [showFilters, setShowFilters] = useState(true)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Track which question detail panels are expanded inline
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({})

  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 25

  const categories = useMemo(() => {
    return ['All', 'C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'React', 'Azure', 'System Design', 'Behavioral']
  }, [])

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredQuestions = useMemo(() => {
    return questionData.filter((q) => {
      const matchesSearch =
        searchQuery === '' ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory
      const matchesLevel = selectedLevel === 'All' || q.level === selectedLevel
      const isBookmarked = bookmarkedQuestions.includes(q.id)
      const matchesBookmark = !showOnlyBookmarked || isBookmarked
      const isCompleted = completedQuestions.includes(q.id)
      let matchesCompleted = true
      if (showOnlyCompleted === 'Completed') matchesCompleted = isCompleted
      else if (showOnlyCompleted === 'Uncompleted') matchesCompleted = !isCompleted
      return matchesSearch && matchesCategory && matchesLevel && matchesBookmark && matchesCompleted
    })
  }, [searchQuery, selectedCategory, selectedLevel, showOnlyBookmarked, showOnlyCompleted, bookmarkedQuestions, completedQuestions])

  const paginatedQuestions = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return filteredQuestions.slice(0, startIndex + pageSize)
  }, [filteredQuestions, currentPage, pageSize])

  const hasMore = filteredQuestions.length > paginatedQuestions.length

  const handleLoadMore = () => setCurrentPage((prev) => prev + 1)

  const handleFilterChange = (type: string, value: string | boolean) => {
    setCurrentPage(1)
    if (type === 'category') setSelectedCategory(value as string)
    if (type === 'level') setSelectedLevel(value as string)
    if (type === 'bookmark') setShowOnlyBookmarked(value as boolean)
    if (type === 'completed') setShowOnlyCompleted(value as string)
  }

  const toggleQuestionExpanded = (id: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const handleExpandAll = () => {
    const nextState: Record<string, boolean> = {}
    filteredQuestions.forEach((q) => {
      nextState[q.id] = true
    })
    setExpandedQuestions(nextState)
  }

  const handleCollapseAll = () => {
    setExpandedQuestions({})
  }

  const getLevelColor = (level: string) => {
    if (level === 'Beginner') return { bg: 'var(--success-light)', color: 'var(--success)' }
    if (level === 'Intermediate') return { bg: 'var(--warning-light)', color: 'var(--warning)' }
    return { bg: 'var(--danger-light)', color: 'var(--danger)' }
  }

  // Check if all filtered questions are currently expanded
  const areAllExpanded = useMemo(() => {
    if (filteredQuestions.length === 0) return false
    return filteredQuestions.every((q) => expandedQuestions[q.id])
  }, [filteredQuestions, expandedQuestions])

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
          className="w-full h-10 pl-9 pr-3 text-sm rounded-lg outline-none transition-colors"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} style={{ color: 'var(--text-tertiary)' }} />
      </div>

      {/* Categories */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-tertiary)' }}>Category</div>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange('category', cat)}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all"
              style={{
                background: selectedCategory === cat ? 'var(--primary-light)' : 'transparent',
                color: selectedCategory === cat ? 'var(--primary)' : 'var(--text-secondary)',
              }}
            >
              {cat}
              {cat !== 'All' && (
                <span className="float-right text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {questionData.filter(q => q.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-tertiary)' }}>Difficulty</div>
        <div className="space-y-1">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => handleFilterChange('level', lvl)}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all"
              style={{
                background: selectedLevel === lvl ? 'var(--primary-light)' : 'transparent',
                color: selectedLevel === lvl ? 'var(--primary)' : 'var(--text-secondary)',
              }}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Status */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-tertiary)' }}>Status</div>
        <div className="space-y-1">
          {['All', 'Completed', 'Uncompleted'].map((s) => (
            <button
              key={s}
              onClick={() => handleFilterChange('completed', s)}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all"
              style={{
                background: showOnlyCompleted === s ? 'var(--primary-light)' : 'transparent',
                color: showOnlyCompleted === s ? 'var(--primary)' : 'var(--text-secondary)',
              }}
            >
              {s === 'All' ? 'All Status' : s}
            </button>
          ))}
        </div>
      </div>

      {/* Bookmarked Toggle */}
      <button
        onClick={() => handleFilterChange('bookmark', !showOnlyBookmarked)}
        className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-medium transition-all"
        style={{
          background: showOnlyBookmarked ? 'var(--warning-light)' : 'var(--bg-elevated)',
          color: showOnlyBookmarked ? 'var(--warning)' : 'var(--text-secondary)',
          border: '1px solid var(--border)',
        }}
      >
        <Bookmark size={16} className={showOnlyBookmarked ? 'fill-current' : ''} />
        Bookmarked Only
      </button>
    </div>
  )

  return (
    <div className="pb-12 px-2 md:px-4">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>Question Bank</h1>
        <p className="text-sm md:text-base mt-1" style={{ color: 'var(--text-tertiary)' }}>
          {totalQuestions} curated technical and behavioral interview questions with model answers shown simultaneously.
        </p>
      </div>

      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar — Filters (Desktop) */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              className="hidden lg:block shrink-0"
              style={{ width: '260px' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="sticky top-20 rounded-xl p-5 space-y-6"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <FiltersContent />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Panel — Question List */}
        <div className="flex-1 min-w-0">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 p-3 rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3">
              {/* Desktop Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="hidden lg:flex items-center gap-2 text-xs md:text-sm font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-70"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
              >
                <Filter size={14} />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>

              {/* Mobile Filters Toggle Button */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden flex items-center gap-2 text-xs md:text-sm font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-70"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
              >
                <Filter size={14} />
                {showMobileFilters ? 'Hide Filters' : 'Filter & Search'}
              </button>

              <span className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                {filteredQuestions.length} questions found
              </span>
            </div>

            {/* Expand / Collapse All */}
            <div className="flex items-center gap-2">
              <button
                onClick={areAllExpanded ? handleCollapseAll : handleExpandAll}
                className="flex items-center gap-1.5 text-xs md:text-sm font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-85"
                style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}
              >
                <BookOpen size={14} />
                {areAllExpanded ? 'Collapse All Explanations' : 'Expand All Explanations'}
              </button>
            </div>
          </div>

          {/* Mobile Filter Panel (Stacks on top on mobile) */}
          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                className="lg:hidden mb-6 p-5 rounded-xl space-y-6"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiltersContent />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Question Cards (Simultaneous Q&A layout) */}
          <div className="space-y-4">
            {paginatedQuestions.map((q) => {
              const isBookmarked = bookmarkedQuestions.includes(q.id)
              const isCompleted = completedQuestions.includes(q.id)
              const levelStyle = getLevelColor(q.level)
              const isExpanded = !!expandedQuestions[q.id]

              return (
                <div
                  key={q.id}
                  className="p-5 md:p-6 rounded-xl transition-all"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                >
                  {/* Top Header / Meta Info */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>{q.category}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md" style={{ background: levelStyle.bg, color: levelStyle.color }}>{q.level}</span>
                        {isCompleted && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--success-light)', color: 'var(--success)' }}>
                            ✓ Completed
                          </span>
                        )}
                      </div>
                      <h3 className="text-base md:text-lg font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>{q.question}</h3>
                    </div>

                    {/* Meta Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => toggleQuestionCompleted(q.id)}
                        className="p-2 rounded-lg transition-all hover:scale-105"
                        style={{
                          background: isCompleted ? 'var(--success-light)' : 'var(--bg-elevated)',
                          color: isCompleted ? 'var(--success)' : 'var(--text-tertiary)',
                          border: '1px solid var(--border)'
                        }}
                        title={isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                      >
                        {isCompleted ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                      </button>
                      <button
                        onClick={() => toggleQuestionBookmarked(q.id)}
                        className="p-2 rounded-lg transition-all hover:scale-105"
                        style={{
                          background: isBookmarked ? 'var(--warning-light)' : 'var(--bg-elevated)',
                          color: isBookmarked ? 'var(--warning)' : 'var(--text-tertiary)',
                          border: '1px solid var(--border)'
                        }}
                        title={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
                      >
                        <Bookmark size={18} className={isBookmarked ? 'fill-current' : ''} />
                      </button>
                    </div>
                  </div>

                  {/* MODEL ANSWER - Rendered simultaneously with the question */}
                  <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Model Answer</div>
                    <div className="p-4 rounded-lg whitespace-pre-wrap text-sm md:text-base leading-relaxed" style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border-light)' }}>
                      {q.answer}
                    </div>
                  </div>

                  {/* Visual concept diagram if mapped */}
                  {csharpDiagrams[q.id] && (
                    <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-light)' }}>
                      <div className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-tertiary)' }}>Visual Concept Diagram</div>
                      <div
                        className="diagram-container p-4 rounded-xl border flex justify-center items-center overflow-x-auto bg-white dark:bg-slate-900/40"
                        style={{ borderColor: 'var(--border-light)' }}
                        dangerouslySetInnerHTML={{ __html: csharpDiagrams[q.id] }}
                      />
                    </div>
                  )}

                  {/* Inline Footer + Collapsible Explanation Toggle */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {q.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2.5 py-0.5 rounded font-medium" style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                    {(q.explanation || q.realWorldExample || (q.followUps && q.followUps.length > 0)) && (
                      <button
                        onClick={() => toggleQuestionExpanded(q.id)}
                        className="text-xs md:text-sm font-bold flex items-center gap-1 hover:opacity-80 transition-all px-2.5 py-1.5 rounded-lg"
                        style={{ color: 'var(--primary)', background: 'var(--primary-light)' }}
                      >
                        {isExpanded ? 'Hide Technical Notes' : 'Show Technical Notes'}
                        <ChevronDown size={14} className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Collapsible Details Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className="overflow-hidden space-y-4 mt-4 pt-4 border-t border-dashed"
                        style={{ borderColor: 'var(--border)' }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {q.explanation && (
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Technical Notes</div>
                            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{q.explanation}</p>
                          </div>
                        )}

                        {q.realWorldExample && (
                          <div className="p-4 rounded-lg" style={{ background: 'var(--primary-light)', border: '1px solid var(--primary-muted)' }}>
                            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--primary)' }}>Real-World Scenario</div>
                            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{q.realWorldExample}</p>
                          </div>
                        )}

                        {q.followUps && q.followUps.length > 0 && (
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Follow-up Questions</div>
                            <ul className="space-y-1.5 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                              {q.followUps.map((fu, idx) => (
                                <li key={idx} className="flex gap-2.5">
                                  <span style={{ color: 'var(--primary)' }}>•</span>
                                  <span>{fu}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center pt-6">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: 'var(--primary)', color: 'var(--text-on-primary)' }}
              >
                Load More Questions
                <ChevronDown size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
