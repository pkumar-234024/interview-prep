import React, { useState } from 'react'
import { Bookmark, BookOpen, AlertCircle, CheckCircle2, ChevronRight, HelpCircle, Code, Layers, ShieldCheck } from 'lucide-react'
import { useAppState } from '../context/AppStateContext'
import { theoryData } from '../data/theoryData'

type TheoryCategory = 'dotnet' | 'react' | 'sql' | 'azure' | 'systemDesign' | 'architecture'

export const TheoryPortal: React.FC = () => {
  const { bookmarkedTopics, toggleTopicBookmarked } = useAppState()
  const [selectedCategory, setSelectedCategory] = useState<TheoryCategory>('dotnet')
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0)

  const categories: { key: TheoryCategory; name: string }[] = [
    { key: 'dotnet', name: '.NET & ASP.NET Core' },
    { key: 'react', name: 'React 18 Architecture' },
    { key: 'sql', name: 'SQL Server Database' },
    { key: 'azure', name: 'Azure Cloud Services' },
    { key: 'systemDesign', name: 'System Design Scaling' },
    { key: 'architecture', name: 'Clean Architecture & SOLID' }
  ]

  const topicsList = theoryData[selectedCategory] || []
  const activeTopic = (topicsList[selectedTopicIndex] || null) as any
  const isBookmarked = activeTopic ? bookmarkedTopics.includes(activeTopic.topic) : false

  const handleCategoryChange = (key: TheoryCategory) => {
    setSelectedCategory(key)
    setSelectedTopicIndex(0)
  }

  return (
    <div className="space-y-6 pb-12 px-2 md:px-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>Theory Portal</h1>
        <p className="text-sm md:text-base mt-1" style={{ color: 'var(--text-tertiary)' }}>
          Deepen your technical knowledge on architecture, lifecycles, and code patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {/* Categories select */}
          <div className="rounded-xl p-4 shadow-sm space-y-2 border transition-colors" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
              Category
            </div>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-bold text-left transition-all hover:opacity-90 border"
                  style={{
                    background: selectedCategory === cat.key ? 'var(--primary)' : 'var(--bg-elevated)',
                    color: selectedCategory === cat.key ? 'white' : 'var(--text-secondary)',
                    borderColor: selectedCategory === cat.key ? 'var(--primary)' : 'var(--border)'
                  }}
                >
                  {cat.name}
                  <ChevronRight size={14} className={selectedCategory === cat.key ? 'text-white' : 'text-slate-400'} />
                </button>
              ))}
            </div>
          </div>

          {/* Topics selection list */}
          <div className="rounded-xl p-4 shadow-sm space-y-2 border transition-colors" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
            <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
              Topics List
            </div>
            <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
              {topicsList.length === 0 ? (
                <div className="px-3 py-4 text-sm text-slate-400 italic">No topics available</div>
              ) : (
                topicsList.map((t: any, idx: number) => (
                  <button
                    key={t.topic}
                    onClick={() => setSelectedTopicIndex(idx)}
                    className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold text-left transition-all hover:opacity-95"
                    style={{
                      background: selectedTopicIndex === idx ? 'var(--bg-sidebar-active)' : 'transparent',
                      color: selectedTopicIndex === idx ? 'var(--primary)' : 'var(--text-secondary)',
                      border: selectedTopicIndex === idx ? '1px solid var(--primary-muted)' : '1px solid transparent'
                    }}
                  >
                    <span className="truncate pr-2">{t.topic}</span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Detailed Study Panel */}
        <div className="lg:col-span-3 rounded-xl shadow-sm overflow-hidden flex flex-col transition-colors min-h-[500px] border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
          {activeTopic ? (
            <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
              {/* Header block */}
              <div className="p-6 flex justify-between items-center bg-slate-50/50 dark:bg-slate-950/20">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>
                    {categories.find((c) => c.key === selectedCategory)?.name} Guide
                  </span>
                  <h2 className="text-lg md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {activeTopic.topic}
                  </h2>
                </div>

                <button
                  onClick={() => toggleTopicBookmarked(activeTopic.topic)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs md:text-sm font-bold border transition-all hover:scale-105"
                  style={{
                    background: isBookmarked ? 'var(--warning-light)' : 'var(--bg-card)',
                    color: isBookmarked ? 'var(--warning)' : 'var(--text-secondary)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <Bookmark size={15} className={isBookmarked ? 'fill-current' : ''} />
                  {isBookmarked ? 'Bookmarked' : 'Bookmark Guide'}
                </button>
              </div>

              {/* Body sections */}
              <div className="p-6 space-y-6 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {/* Definition / Core explanation */}
                <div className="space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-tertiary)' }}>
                    <BookOpen size={15} className="text-[var(--primary)]" />
                    Core Theory Definition
                  </h3>
                  <p className="font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {activeTopic.definition || activeTopic.explanation || activeTopic.theory}
                  </p>
                </div>

                {/* Architecture Diagram */}
                {activeTopic.architecture && (
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-tertiary)' }}>
                      <Layers size={15} className="text-[var(--primary)]" />
                      Pipeline / Structural Architecture
                    </h3>
                    <div className="p-4 rounded-xl font-mono text-xs md:text-sm leading-normal overflow-x-auto border" style={{ background: '#0F172A', color: '#CBD5E1', borderColor: '#334155' }}>
                      <pre>{activeTopic.architecture}</pre>
                    </div>
                  </div>
                )}

                {/* Code Examples */}
                {activeTopic.codeExample && (
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-tertiary)' }}>
                      <Code size={15} className="text-[var(--primary)]" />
                      Syntax & Code Implementation
                    </h3>
                    <div className="font-mono rounded-xl overflow-hidden border shadow-sm" style={{ background: '#0F172A', borderColor: '#334155' }}>
                      <div className="h-9 px-4 flex items-center justify-between text-xs" style={{ background: '#1E293B', borderBottom: '1px solid #334155', color: '#64748B' }}>
                        <span>Code Implementation Sample</span>
                        <span>C# / TS</span>
                      </div>
                      <div className="p-4 flex gap-4 overflow-x-auto">
                        <div className="select-none text-right" style={{ color: '#475569' }}>
                          {activeTopic.codeExample.split('\n').map((_: string, index: number) => (
                            <div key={index}>{index + 1}</div>
                          ))}
                        </div>
                        <pre className="text-emerald-400 leading-relaxed whitespace-pre font-mono text-xs md:text-sm">
                          {activeTopic.codeExample}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Example / Scenarios */}
                {(activeTopic.projectExample || activeTopic.realWorldExample || activeTopic.realWorldScenario) && (
                  <div className="space-y-2.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-tertiary)' }}>
                      <ShieldCheck size={15} className="text-[var(--primary)]" />
                      Enterprise Project Application
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {activeTopic.projectExample || activeTopic.realWorldExample || activeTopic.realWorldScenario}
                    </p>
                  </div>
                )}

                {/* Common Mistakes & Best Practices Callout cards */}
                {(activeTopic.commonMistakes || activeTopic.bestPractices || activeTopic.advantages || activeTopic.disadvantages) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                    {/* Common Mistakes / Disadvantages */}
                    {(activeTopic.commonMistakes || activeTopic.disadvantages) && (
                      <div className="p-4.5 rounded-xl border border-rose-500/10 bg-rose-500/5 space-y-1.5">
                        <div className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--danger)' }}>
                          <AlertCircle size={15} />
                          {activeTopic.commonMistakes ? 'Common Mistakes' : 'Disadvantages'}
                        </div>
                        <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {activeTopic.commonMistakes || activeTopic.disadvantages}
                        </p>
                      </div>
                    )}

                    {/* Best Practices / Advantages */}
                    {(activeTopic.bestPractices || activeTopic.advantages) && (
                      <div className="p-4.5 rounded-xl border border-emerald-500/10 bg-emerald-500/5 space-y-1.5">
                        <div className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--success)' }}>
                          <CheckCircle2 size={15} />
                          {activeTopic.bestPractices ? 'Best Practices' : 'Advantages'}
                        </div>
                        <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {activeTopic.bestPractices || activeTopic.advantages}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Anticipated Interview Questions */}
                {activeTopic.interviewQuestions && activeTopic.interviewQuestions.length > 0 && (
                  <div className="pt-5 space-y-3 border-t" style={{ borderColor: 'var(--border)' }}>
                    <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-tertiary)' }}>
                      <HelpCircle size={15} className="text-[var(--primary)]" />
                      Topic-Specific Interview Questions
                    </h3>
                    <ul className="space-y-2.5">
                      {activeTopic.interviewQuestions.map((q: string, idx: number) => (
                        <li
                          key={idx}
                          className="p-3 rounded-lg border text-sm md:text-base font-semibold"
                          style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}
                        >
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-sm md:text-base text-slate-400 italic">
              Select a category and topic to study
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
