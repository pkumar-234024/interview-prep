import React, { useState, useMemo } from 'react'
import { Eye, Play, Star, RefreshCw, CheckCircle2, X } from 'lucide-react'
import { useAppState } from '../context/AppStateContext'
import { questionData } from '../data/questionBankData'
import { mockInterviewData } from '../data/mockInterviewData'
import { CustomAreaChart } from '../components/CustomAreaChart'
import { SafeChartWrapper } from '../components/SafeChartWrapper'

interface MockQuestion {
  id: string
  question: string
  answer: string
  category: string
}

export const MockInterview: React.FC = () => {
  const { mockScores, saveMockScore } = useAppState()

  const [activeSession, setActiveSession] = useState<{
    category: string
    questions: MockQuestion[]
    currentIndex: number
    userNotes: Record<number, string>
    scores: Record<number, number>
    revealed: Record<number, boolean>
  } | null>(null)

  const [selectedCategory, setSelectedCategory] = useState<string>('Technical Round 1')
  const [sessionCompleted, setSessionCompleted] = useState(false)
  const [finalScoreSummary, setFinalScoreSummary] = useState<{ total: number; avg: number } | null>(null)

  const categories = [
    { name: 'Technical Round 1', desc: 'C#, ASP.NET Core, and Entity Framework Core fundamentals.', emoji: '⚙️' },
    { name: 'Technical Round 2', desc: 'React, SQL Server, and Azure Cloud solutions.', emoji: '🌐' },
    { name: 'System Design', desc: 'High-level scale, partitioning, API design, trade-offs.', emoji: '🏗️' },
    { name: 'Managerial', desc: 'Behavioral scenarios, leadership, and mentoring.', emoji: '👥' },
    { name: 'HR', desc: 'Communication, conflict resolution, values alignment.', emoji: '🤝' }
  ]

  const handleStartSession = (categoryName: string) => {
    let pool: MockQuestion[] = []
    if (categoryName === 'Technical Round 1') {
      pool = questionData.filter((x) => x.category === 'C#' || x.category === 'ASP.NET Core' || x.category === 'Entity Framework')
    } else if (categoryName === 'Technical Round 2') {
      pool = questionData.filter((x) => x.category === 'React' || x.category === 'SQL Server' || x.category === 'Azure')
    } else if (categoryName === 'System Design') {
      pool = questionData.filter((x) => x.category === 'System Design')
    } else {
      pool = questionData.filter((x) => x.category === 'Behavioral')
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 5).map((q) => ({
      id: q.id, question: q.question, answer: q.answer, category: q.category
    }))

    const fileMocks = mockInterviewData.filter((x) => x.category === categoryName as any)
    if (fileMocks.length > 0) {
      fileMocks.forEach((fm, i) => {
        if (i < 2) {
          selected[i] = { id: fm.id, question: fm.question, answer: fm.answer, category: categoryName }
        }
      })
    }

    setActiveSession({
      category: categoryName, questions: selected, currentIndex: 0,
      userNotes: {}, scores: {}, revealed: {}
    })
    setSessionCompleted(false)
    setFinalScoreSummary(null)
  }

  const handleRevealAnswer = () => {
    if (!activeSession) return
    setActiveSession((prev) => {
      if (!prev) return null
      return { ...prev, revealed: { ...prev.revealed, [prev.currentIndex]: true } }
    })
  }

  const handleScoreQuestion = (rating: number) => {
    if (!activeSession) return
    const { currentIndex, questions } = activeSession

    setActiveSession((prev) => {
      if (!prev) return null
      return { ...prev, scores: { ...prev.scores, [currentIndex]: rating } }
    })

    if (currentIndex < questions.length - 1) {
      setActiveSession((prev) => {
        if (!prev) return null
        return { ...prev, currentIndex: prev.currentIndex + 1 }
      })
    } else {
      const allScores = { ...activeSession.scores, [currentIndex]: rating }
      const totalRating = Object.values(allScores).reduce((a, b) => a + b, 0)
      const avgRating = totalRating / questions.length
      saveMockScore(activeSession.category, avgRating)
      setFinalScoreSummary({ total: totalRating, avg: avgRating })
      setSessionCompleted(true)
    }
  }

  const handleNotesChange = (text: string) => {
    if (!activeSession) return
    const idx = activeSession.currentIndex
    setActiveSession((prev) => {
      if (!prev) return null
      return { ...prev, userNotes: { ...prev.userNotes, [idx]: text } }
    })
  }

  const categoryHistory = useMemo(() => {
    return mockScores
      .filter((x) => x.category === selectedCategory)
      .map((x, i) => ({ name: `Run ${i + 1}`, Score: Math.round(x.score * 20) }))
  }, [mockScores, selectedCategory])

  return (
    <div className="pb-12 px-2 md:px-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>Mock Interview Workspace</h1>
        <p className="text-sm md:text-base mt-1" style={{ color: 'var(--text-tertiary)' }}>
          Simulate timed technical and behavioral interviews to evaluate readiness.
        </p>
      </div>

      {/* Session Selector */}
      {!activeSession && !sessionCompleted && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Select Interview Round</div>
            <div className="space-y-3">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="p-5 rounded-xl flex items-center justify-between gap-4 transition-all group hover:shadow-md"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0" style={{ background: 'var(--bg-elevated)' }}>
                      {cat.emoji}
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-bold" style={{ color: 'var(--text-primary)' }}>{cat.name}</h3>
                      <p className="text-xs md:text-sm mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{cat.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleStartSession(cat.name)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all hover:scale-105 shrink-0"
                    style={{ background: 'var(--primary)', color: 'var(--text-on-primary)' }}
                  >
                    <Play size={14} />
                    Start
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Sidebar */}
          <div className="lg:col-span-1 p-5 rounded-xl space-y-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            <div>
              <h2 className="text-sm md:text-base font-bold" style={{ color: 'var(--text-primary)' }}>Performance History</h2>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>Score progression over sessions</p>
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-10 px-3 text-sm rounded-lg outline-none border"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
              aria-label="Category filter"
            >
              {categories.map((c) => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>

            <div className="h-44 w-full">
              {categoryHistory.length === 0 ? (
                <div className="h-full flex items-center justify-center text-xs md:text-sm italic rounded-lg" style={{ color: 'var(--text-tertiary)', border: '1px dashed var(--border)' }}>
                  No session logs yet
                </div>
              ) : (
                <SafeChartWrapper height={176}>
                  {(width, height) => <CustomAreaChart width={width} height={height} data={categoryHistory} />}
                </SafeChartWrapper>
              )}
            </div>

            {mockScores.length > 0 && (
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Recent Scores</div>
                {mockScores.slice(-3).reverse().map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-xs md:text-sm p-2.5 rounded-lg" style={{ background: 'var(--bg-elevated)' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{s.category}</span>
                    <span className="font-bold" style={{ color: 'var(--primary)' }}>{(s.score).toFixed(1)}/5</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Active Session — Focused Mode */}
      {activeSession && !sessionCompleted && (
        <div className="max-w-3xl mx-auto px-2">
          <div className="rounded-xl overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
            {/* Session Header */}
            <div className="p-5 flex items-center justify-between" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-elevated)' }}>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded-md" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                  {activeSession.category}
                </span>
                <span className="text-xs md:text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                  Question {activeSession.currentIndex + 1} of 5
                </span>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {activeSession.questions.map((_, idx) => (
                    <div
                      key={idx}
                      className="w-2.5 h-2.5 rounded-full transition-all"
                      style={{
                        background: idx < activeSession.currentIndex ? 'var(--success)' :
                          idx === activeSession.currentIndex ? 'var(--primary)' : 'var(--border)',
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => {
                    if (confirm('Cancel this session? Progress will be lost.')) {
                      setActiveSession(null)
                    }
                  }}
                  className="p-1.5 rounded-lg transition-all hover:opacity-70 border"
                  style={{ background: 'var(--bg-card)', color: 'var(--text-tertiary)', borderColor: 'var(--border)' }}
                  aria-label="Quit session"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Question */}
            <div className="p-6 space-y-6">
              <div className="p-5 rounded-lg" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}>
                <h3 className="text-base md:text-lg font-bold leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {activeSession.questions[activeSession.currentIndex].question}
                </h3>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: 'var(--text-tertiary)' }}>
                  Your Answer Notes
                </label>
                <textarea
                  value={activeSession.userNotes[activeSession.currentIndex] || ''}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  placeholder="List key points, patterns, or architecture decisions you'd discuss..."
                  className="w-full h-36 p-4 rounded-lg text-sm md:text-base outline-none resize-none transition-colors border"
                  style={{ background: 'var(--bg)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                />
              </div>

              {/* Revealed Answer */}
              {activeSession.revealed[activeSession.currentIndex] ? (
                <div className="space-y-5 pt-5 animate-fade-in" style={{ borderTop: '1px solid var(--border)' }}>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-tertiary)' }}>Model Answer</h4>
                    <div className="p-5 rounded-lg text-sm md:text-base leading-relaxed whitespace-pre-wrap" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)', color: 'var(--text-secondary)' }}>
                      {activeSession.questions[activeSession.currentIndex].answer}
                    </div>
                  </div>

                  {/* Self Rating */}
                  <div className="p-5 rounded-lg space-y-4 text-center" style={{ background: 'var(--primary-light)', border: '1px solid var(--primary-muted)' }}>
                    <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>Rate Your Answer</h4>
                    <div className="flex justify-center gap-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => handleScoreQuestion(star)}
                          className="p-1.5 rounded-full transition-all hover:scale-125"
                          style={{ color: 'var(--warning)' }}
                          title={`Rate: ${star}/5`}
                        >
                          <Star size={28} className="hover:fill-current" />
                        </button>
                      ))}
                    </div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      1 = Weak alignment · 5 = Strong technical match
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center pt-2">
                  <button
                    onClick={handleRevealAnswer}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02]"
                    style={{ background: 'var(--primary)', color: 'var(--text-on-primary)' }}
                  >
                    <Eye size={16} />
                    Reveal Model Answer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Session Complete Summary */}
      {sessionCompleted && finalScoreSummary && (
        <div className="max-w-lg mx-auto text-center p-8 rounded-xl space-y-6 animate-scale-in" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{ background: 'var(--success-light)', color: 'var(--success)' }}>
            <CheckCircle2 size={36} />
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Assessment Complete!</h2>
            <p className="text-sm mt-1" style={{ color: 'var(--text-tertiary)' }}>Your session results have been logged.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 p-5 rounded-lg border" style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-light)' }}>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Total Score</div>
              <div className="text-3xl font-extrabold mt-1" style={{ color: 'var(--primary)' }}>{finalScoreSummary.total}/25</div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border)' }}>
              <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Average</div>
              <div className="text-3xl font-extrabold mt-1" style={{ color: 'var(--primary)' }}>{(finalScoreSummary.avg).toFixed(1)}/5</div>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => { setSessionCompleted(false); setActiveSession(null) }}
              className="px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all border"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
            >
              Back to Selector
            </button>
            {activeSession && (
              <button
                onClick={() => handleStartSession(activeSession.category)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: 'var(--primary)', color: 'var(--text-on-primary)' }}
              >
                <RefreshCw size={14} />
                Retake
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
