import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { Bookmark, RefreshCw, ChevronLeft, ChevronRight, HelpCircle, Layers, Keyboard } from 'lucide-react'
import { useAppState } from '../context/AppStateContext'
import { questionData } from '../data/questionBankData'

export const FlashcardSystem: React.FC = () => {
  const { bookmarkedFlashcards, toggleFlashcardBookmarked } = useAppState()

  const [selectedCategory, setSelectedCategory] = useState<string>('C#')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const categories = useMemo(() => {
    return ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'React', 'Azure', 'System Design', 'Behavioral']
  }, [])

  const filteredFlashcards = useMemo(() => {
    return questionData.filter((q) => q.category === selectedCategory)
  }, [selectedCategory])

  const currentCard = filteredFlashcards[currentIndex] || null
  const isBookmarked = currentCard ? bookmarkedFlashcards.includes(currentCard.id) : false

  const handleNext = useCallback(() => {
    if (currentIndex < filteredFlashcards.length - 1) {
      setFlipped(false)
      setTimeout(() => setCurrentIndex((prev) => prev + 1), 150)
    }
  }, [currentIndex, filteredFlashcards.length])

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setFlipped(false)
      setTimeout(() => setCurrentIndex((prev) => prev - 1), 150)
    }
  }, [currentIndex])

  const handleRandom = useCallback(() => {
    if (filteredFlashcards.length <= 1) return
    let randomIndex = currentIndex
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * filteredFlashcards.length)
    }
    setFlipped(false)
    setTimeout(() => setCurrentIndex(randomIndex), 150)
  }, [currentIndex, filteredFlashcards.length])

  const handleFlip = useCallback(() => {
    setFlipped((prev) => !prev)
  }, [])

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      } else if (e.key === ' ') {
        e.preventDefault()
        handleFlip()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrev, handleNext, handleFlip])

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setCurrentIndex(0)
    setFlipped(false)
  }

  const progressPct = filteredFlashcards.length > 0 ? ((currentIndex + 1) / filteredFlashcards.length) * 100 : 0

  return (
    <div className="space-y-6 pb-12 max-w-2xl mx-auto px-2 md:px-4">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>Revision Flashcards</h1>
        <p className="text-sm md:text-base mt-1" style={{ color: 'var(--text-tertiary)' }}>
          Reinforce key definitions, patterns, and concepts using quick revision cards.
        </p>
      </div>

      {/* Category Selector */}
      <div className="flex justify-center flex-wrap gap-2 p-2 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className="px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all"
            style={{
              background: selectedCategory === cat ? 'var(--primary)' : 'transparent',
              color: selectedCategory === cat ? 'var(--text-on-primary)' : 'var(--text-secondary)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {currentCard ? (
        <div className="space-y-5">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <span className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>
                Card {currentIndex + 1} of {filteredFlashcards.length}
              </span>
              <button
                onClick={() => toggleFlashcardBookmarked(currentCard.id)}
                className="inline-flex items-center gap-1 text-xs font-semibold transition-all hover:opacity-70"
                style={{ color: isBookmarked ? 'var(--warning)' : 'var(--text-tertiary)' }}
              >
                <Bookmark size={15} className={isBookmarked ? 'fill-current' : ''} />
                {isBookmarked ? 'Bookmarked' : 'Bookmark'}
              </button>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
              <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progressPct}%`, background: 'var(--primary)' }} />
            </div>
          </div>

          {/* 3D Flip Card */}
          <div onClick={handleFlip} className="w-full h-80 perspective-1000 cursor-pointer">
            <div className={`w-full h-full relative preserve-3d transition-transform duration-500 select-none ${flipped ? 'rotate-y-180' : ''}`}>
              {/* Front */}
              <div
                className="absolute inset-0 rounded-xl p-8 flex flex-col justify-between items-center text-center backface-hidden"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                  <HelpCircle size={26} />
                </div>
                <div className="flex-1 flex items-center justify-center px-4">
                  <h2 className="text-base md:text-lg font-bold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {currentCard.question}
                  </h2>
                </div>
                <div className="text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-tertiary)' }}>
                  <RefreshCw size={13} />
                  Click or press Space to reveal
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 rounded-xl p-8 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180"
                style={{ background: 'var(--primary)', color: 'white' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <Layers size={26} />
                </div>
                <div className="flex-1 flex items-center justify-center overflow-y-auto max-h-44 py-2 px-4">
                  <p className="text-sm md:text-base leading-relaxed font-semibold" style={{ color: 'rgba(255,255,255,0.95)' }}>
                    {currentCard.answer}
                  </p>
                </div>
                <div className="text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <RefreshCw size={13} />
                  Click or press Space to flip back
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 px-1">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40"
              style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <button
              onClick={handleRandom}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            >
              <RefreshCw size={15} />
              Random
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === filteredFlashcards.length - 1}
              className="flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-40"
              style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Keyboard Hints */}
          <div className="flex justify-center gap-5 text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>
            <span className="flex items-center gap-1"><Keyboard size={14} /> ← Previous</span>
            <span>Space Flip</span>
            <span>→ Next</span>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 rounded-xl text-sm" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-tertiary)' }}>
          No flashcards found for this category.
        </div>
      )}
    </div>
  )
}
