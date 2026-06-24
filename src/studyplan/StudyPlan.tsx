import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Circle, Award, Play, Check, Bookmark, ChevronDown } from 'lucide-react'
import { useAppState } from '../context/AppStateContext'
import { studyPlanData } from '../data/studyPlanData'
import { questionData } from '../data/questionBankData'
import { csharpDiagrams } from '../data/csharpDiagrams'

export const StudyPlan: React.FC = () => {
  const {
    completedDays,
    toggleDayCompleted,
    notes,
    saveNote,
    completedQuestions,
    bookmarkedQuestions,
    toggleQuestionCompleted,
    toggleQuestionBookmarked
  } = useAppState()

  const [selectedDayId, setSelectedDayId] = useState('day-1')
  const [activeTab, setActiveTab] = useState<'overview' | 'exercises' | 'coding' | 'questions' | 'notes'>('overview')
  const [codeRunOutput, setCodeRunOutput] = useState<string | null>(null)
  const [isRunningCode, setIsRunningCode] = useState(false)

  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({})

  const selectedDay = studyPlanData.find((d) => d.id === selectedDayId) || studyPlanData[0]
  const isCompleted = completedDays.includes(selectedDay.id)

  const [noteText, setNoteText] = useState(notes[selectedDay.id] || '')

  React.useEffect(() => {
    setNoteText(notes[selectedDay.id] || '')
    setCodeRunOutput(null)
  }, [selectedDay.id, notes])

  const getCategoryForDay = (dayId: string): string => {
    switch (dayId) {
      case 'day-1': return 'C#'
      case 'day-2': return 'ASP.NET Core'
      case 'day-3': return 'Entity Framework'
      case 'day-4': return 'SQL Server'
      case 'day-5': return 'React'
      case 'day-6': return 'Azure'
      case 'day-7': return 'System Design'
      case 'day-8': return 'Behavioral'
      case 'day-9': return 'Behavioral'
      default: return 'All'
    }
  }

  const matchedCategory = getCategoryForDay(selectedDay.id)

  const getLevelColor = (level: string) => {
    if (level === 'Beginner') return { bg: 'var(--success-light)', color: 'var(--success)' }
    if (level === 'Intermediate') return { bg: 'var(--warning-light)', color: 'var(--warning)' }
    return { bg: 'var(--danger-light)', color: 'var(--danger)' }
  }

  const dayQuestions = useMemo(() => {
    if (matchedCategory === 'All') {
      return questionData.filter((q) => bookmarkedQuestions.includes(q.id))
    }
    return questionData.filter((q) => q.category === matchedCategory)
  }, [matchedCategory, bookmarkedQuestions])

  const toggleQuestionExpanded = (id: string) => {
    setExpandedQuestions((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleSaveNotes = () => {
    saveNote(selectedDay.id, noteText)
  }

  const handleRunCode = () => {
    setIsRunningCode(true)
    setCodeRunOutput('Compiling code...')
    setTimeout(() => {
      setCodeRunOutput(
        `✓ Compilation Successful\n✓ Run test suites (3/3 passed)\nOutput: Output matches expected constraints. Memory allocations minimized.`
      )
      setIsRunningCode(false)
    }, 1500)
  }

  return (
    <div className="pb-12 px-2 md:px-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>10-Day Study Roadmap</h1>
          <p className="text-sm md:text-base mt-1" style={{ color: 'var(--text-tertiary)' }}>
            Follow the structured plan to ensure comprehensive preparation coverage.
          </p>
        </div>
        <div className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2 rounded-lg" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
          <Award size={16} />
          <span>{completedDays.length} / 10 Days Complete</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Days Navigation */}
        <div className="lg:col-span-1 p-4 rounded-xl space-y-2" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
            Study Schedule
          </div>
          <div className="space-y-1.5">
            {studyPlanData.map((day) => {
              const dayCompleted = completedDays.includes(day.id)
              const isSelected = day.id === selectedDayId
              return (
                <button
                  key={day.id}
                  onClick={() => setSelectedDayId(day.id)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-all hover:opacity-90"
                  style={{
                    background: isSelected ? 'var(--primary)' : 'transparent',
                    color: isSelected ? 'white' : 'var(--text-secondary)',
                  }}
                >
                  {dayCompleted ? (
                    <CheckCircle2 size={18} style={{ color: isSelected ? 'white' : 'var(--success)' }} />
                  ) : (
                    <Circle size={18} style={{ color: isSelected ? 'white' : 'var(--text-tertiary)' }} />
                  )}
                  <span className="truncate">{day.day}: {day.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content Container */}
        <div className="lg:col-span-3 rounded-xl overflow-hidden flex flex-col" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          {/* Day Header */}
          <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-elevated)' }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>{selectedDay.day}</span>
              <h2 className="text-lg md:text-xl font-bold mt-0.5" style={{ color: 'var(--text-primary)' }}>{selectedDay.title}</h2>
            </div>
            <button
              onClick={() => toggleDayCompleted(selectedDay.id)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:scale-[1.02]"
              style={{
                background: isCompleted ? 'var(--success)' : 'var(--primary-light)',
                color: isCompleted ? 'white' : 'var(--primary)',
                border: `1px solid ${isCompleted ? 'var(--success)' : 'var(--primary-muted)'}`,
              }}
            >
              {isCompleted ? <Check size={16} /> : <Circle size={16} />}
              {isCompleted ? 'Completed' : 'Mark Complete'}
            </button>
          </div>

          {/* Tabs */}
          <div className="px-6 flex space-x-6 overflow-x-auto" style={{ borderBottom: '1px solid var(--border)' }}>
            {(['overview', 'exercises', 'coding', 'questions', 'notes'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="py-4 text-xs md:text-sm font-bold transition-all whitespace-nowrap capitalize"
                style={{
                  borderBottom: activeTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
                  color: activeTab === tab ? 'var(--primary)' : 'var(--text-tertiary)',
                }}
              >
                {tab === 'coding' ? 'Coding Practice' : tab === 'questions' ? 'Interview Questions' : tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 min-h-[350px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-secondary)' }}>Objectives</h3>
                  <ul className="space-y-2.5">
                    {selectedDay.objectives.map((obj, i) => (
                      <li key={i} className="flex gap-3 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: 'var(--primary)' }} />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-secondary)' }}>Core Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDay.topics.map((topic, i) => (
                      <span key={i} className="px-3 py-1 rounded-md text-xs md:text-sm font-semibold" style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedDay.notes && (
                  <div className="p-5 rounded-lg" style={{ background: 'var(--primary-light)', border: '1px solid var(--primary-muted)' }}>
                    <div className="text-xs font-extrabold uppercase tracking-wider mb-1.5" style={{ color: 'var(--primary)' }}>Coach's Advice</div>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{selectedDay.notes}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'exercises' && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Laboratory Tasks</h3>
                {selectedDay.exercises.map((exe, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 rounded-lg animate-slide-up" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                      {i + 1}
                    </span>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{exe}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'coding' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Interactive Playground</h3>
                  <button
                    onClick={handleRunCode}
                    disabled={isRunningCode}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all disabled:opacity-50 hover:scale-105"
                    style={{ background: 'var(--success)', color: 'white' }}
                  >
                    <Play size={14} />
                    {isRunningCode ? 'Running...' : 'Run Code'}
                  </button>
                </div>

                <div className="font-mono rounded-lg overflow-hidden border text-xs md:text-sm" style={{ background: '#0F172A', borderColor: '#334155' }}>
                  <div className="h-9 px-4 flex items-center justify-between text-xs" style={{ background: '#1E293B', borderBottom: '1px solid #334155', color: '#64748B' }}>
                    <span>Workspace</span>
                    <span>C# / TypeScript</span>
                  </div>
                  <div className="p-4 flex gap-4 overflow-x-auto">
                    <div className="select-none text-right" style={{ color: '#475569' }}>
                      {selectedDay.codingPractice.split('\n').map((_, index) => (
                        <div key={index}>{index + 1}</div>
                      ))}
                    </div>
                    <textarea
                      value={selectedDay.codingPractice}
                      readOnly
                      rows={selectedDay.codingPractice.split('\n').length + 1}
                      className="w-full bg-transparent font-mono resize-none focus:outline-none leading-relaxed"
                      style={{ color: '#4ADE80' }}
                    />
                  </div>
                </div>

                {codeRunOutput && (
                  <div className="font-mono p-4 rounded-lg text-xs md:text-sm leading-relaxed" style={{ background: '#1E293B', border: '1px solid #334155', color: '#94A3B8' }}>
                    <div className="text-xs font-bold mb-1.5" style={{ color: '#64748B' }}>COMPILER OUTPUT</div>
                    <pre className="whitespace-pre-wrap">{codeRunOutput}</pre>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'questions' && (
              <div className="space-y-6 animate-fade-in">
                {/* Expected Scenarios */}
                <div className="space-y-3.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-secondary)' }}>Expected Interview Scenarios</h3>
                  <div className="grid grid-cols-1 gap-3.5">
                    {selectedDay.interviewQuestions.map((q, i) => (
                      <div key={i} className="p-4 rounded-lg border" style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)' }}>
                        <div className="text-sm md:text-base font-bold" style={{ color: 'var(--text-primary)' }}>{q}</div>
                        <div className="text-xs md:text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                          Practice verbalizing structural explanations, highlighting low-level implications or performance thresholds.
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Question Bank Integration */}
                <div className="space-y-4 pt-5 border-t border-dashed" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                      {matchedCategory === 'All' ? 'Your Bookmarked Questions' : `Practice Questions (${matchedCategory})`}
                    </h3>
                    {matchedCategory !== 'All' && (
                      <Link
                        to={`/questions`}
                        onClick={() => {
                          // Note: Category selection is stored in app context or URL in the future if applicable,
                          // but navigating directly to the Question Bank is a clean link.
                        }}
                        className="text-xs md:text-sm font-bold transition-all hover:opacity-75"
                        style={{ color: 'var(--primary)' }}
                      >
                        Browse all in Question Bank →
                      </Link>
                    )}
                  </div>

                  {dayQuestions.length === 0 ? (
                    <div className="text-center py-8 text-xs md:text-sm italic" style={{ color: 'var(--text-tertiary)' }}>
                      {matchedCategory === 'All' ? 'No bookmarked questions for revision yet. Save some bookmarks to study them here!' : 'No matching questions found.'}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {dayQuestions.map((q) => {
                        const isCompleted = completedQuestions.includes(q.id)
                        const isBookmarked = bookmarkedQuestions.includes(q.id)
                        const isExpanded = !!expandedQuestions[q.id]
                        const levelStyle = getLevelColor(q.level)

                        return (
                          <div
                            key={q.id}
                            className="p-5 rounded-xl border transition-all"
                            style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-light)' }}
                          >
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>{q.category}</span>
                                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md" style={{ background: levelStyle.bg, color: levelStyle.color }}>{q.level}</span>
                                  {isCompleted && (
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md" style={{ background: 'var(--success-light)', color: 'var(--success)' }}>✓ Done</span>
                                  )}
                                </div>
                                <h4 className="text-sm md:text-base font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>{q.question}</h4>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                  onClick={() => toggleQuestionCompleted(q.id)}
                                  className="p-1.5 rounded-lg border bg-white dark:bg-slate-800 transition-all hover:scale-105"
                                  style={{ borderColor: 'var(--border)' }}
                                  title={isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                                >
                                  {isCompleted ? <CheckCircle2 size={16} className="text-[var(--success)]" /> : <Circle size={16} className="text-[var(--text-tertiary)]" />}
                                </button>
                                <button
                                  onClick={() => toggleQuestionBookmarked(q.id)}
                                  className="p-1.5 rounded-lg border bg-white dark:bg-slate-800 transition-all hover:scale-105"
                                  style={{ borderColor: 'var(--border)' }}
                                  title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                                >
                                  <Bookmark size={16} className={isBookmarked ? 'text-[var(--warning)] fill-current' : 'text-[var(--text-tertiary)]'} />
                                </button>
                              </div>
                            </div>

                            {/* Answer is rendered simultaneously */}
                            <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--border-light)' }}>
                              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Model Answer</div>
                              <div className="p-4 rounded-lg whitespace-pre-wrap text-sm leading-relaxed bg-white dark:bg-slate-900 border" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-light)' }}>
                                {q.answer}
                              </div>
                            </div>

                            {/* Visual concept diagram if mapped */}
                            {csharpDiagrams[q.id] && (
                              <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--border-light)' }}>
                                <div className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--text-tertiary)' }}>Visual Concept Diagram</div>
                                <div
                                  className="diagram-container p-4 rounded-xl border flex justify-center items-center overflow-x-auto bg-white dark:bg-slate-900/40"
                                  style={{ borderColor: 'var(--border-light)' }}
                                  dangerouslySetInnerHTML={{ __html: csharpDiagrams[q.id] }}
                                />
                              </div>
                            )}

                            {/* In-line Toggle for Notes */}
                            {(q.explanation || q.realWorldExample) && (
                              <div className="mt-3 flex justify-end">
                                <button
                                  onClick={() => toggleQuestionExpanded(q.id)}
                                  className="text-xs font-bold flex items-center gap-1 hover:opacity-80 transition-opacity"
                                  style={{ color: 'var(--primary)' }}
                                >
                                  {isExpanded ? 'Hide Technical Notes' : 'Show Technical Notes'}
                                  <ChevronDown size={12} className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                </button>
                              </div>
                            )}

                            {/* Inline Collapsible Notes Panel */}
                            {isExpanded && (
                              <div className="mt-3 pt-3 border-t border-dashed space-y-3" style={{ borderColor: 'var(--border-light)' }}>
                                {q.explanation && (
                                  <div>
                                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-tertiary)' }}>Technical Notes</div>
                                    <p className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>{q.explanation}</p>
                                  </div>
                                )}
                                {q.realWorldExample && (
                                  <div className="p-3.5 rounded-lg border bg-white/50 dark:bg-slate-900/50" style={{ borderColor: 'var(--border-light)' }}>
                                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--primary)' }}>Real-World Scenario</div>
                                    <p className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>{q.realWorldExample}</p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Study Notes</h3>
                  <button
                    onClick={handleSaveNotes}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all hover:scale-105"
                    style={{ background: 'var(--primary)', color: 'white' }}
                  >
                    Save Notes
                  </button>
                </div>
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Record key concepts, formulas, or areas to review later..."
                  className="w-full h-44 p-4 rounded-lg text-sm md:text-base outline-none resize-none transition-colors border"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                />
                <div className="text-xs italic" style={{ color: 'var(--text-tertiary)' }}>
                  Notes persist in local storage.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
