import React, { useMemo } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Search, HelpCircle, FileText, BookOpen, ArrowRight } from 'lucide-react'
import { questionData } from '../data/questionBankData'
import { scenariosData } from '../data/scenariosData'
import { theoryData } from '../data/theoryData'

export const GlobalSearch: React.FC = () => {
  const location = useLocation()

  const query = useMemo(() => {
    const params = new URLSearchParams(location.search)
    return params.get('q') || ''
  }, [location.search])

  const results = useMemo(() => {
    if (!query.trim()) return { questions: [], scenarios: [], theory: [] }
    const cleanQuery = query.toLowerCase().trim()

    const matchedQuestions = questionData.filter(
      (q) => q.question.toLowerCase().includes(cleanQuery) || q.answer.toLowerCase().includes(cleanQuery) || q.tags.some((t) => t.toLowerCase().includes(cleanQuery))
    )

    const matchedScenarios = scenariosData.filter(
      (s) => s.title.toLowerCase().includes(cleanQuery) || s.problem.toLowerCase().includes(cleanQuery) || s.resolution.toLowerCase().includes(cleanQuery)
    )

    const matchedTheory: { topic: string; category: string }[] = []
    Object.entries(theoryData).forEach(([cat, topics]) => {
      topics.forEach((t: any) => {
        if (t.topic.toLowerCase().includes(cleanQuery) || t.definition.toLowerCase().includes(cleanQuery) || (t.theory && t.theory.toLowerCase().includes(cleanQuery))) {
          matchedTheory.push({ topic: t.topic, category: cat === 'dotnet' ? '.NET Core' : cat.toUpperCase() })
        }
      })
    })

    return { questions: matchedQuestions.slice(0, 20), scenarios: matchedScenarios.slice(0, 20), theory: matchedTheory }
  }, [query])

  const totalHits = results.questions.length + results.scenarios.length + results.theory.length

  const ResultSection: React.FC<{ icon: React.ReactNode; title: string; count: number; children: React.ReactNode }> = ({ icon, title, count, children }) => (
    <div className="p-5 rounded-xl space-y-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
        {icon} {title} ({count})
      </h2>
      {children}
    </div>
  )

  return (
    <div className="pb-12 px-2 md:px-4">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
          <Search size={26} style={{ color: 'var(--primary)' }} />
          Search Results
        </h1>
        <p className="text-sm md:text-base mt-1" style={{ color: 'var(--text-tertiary)' }}>
          Results for: <span className="font-semibold" style={{ color: 'var(--primary)' }}>"{query}"</span>
        </p>
      </div>

      {totalHits === 0 ? (
        <div className="text-center py-20 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <Search className="mx-auto mb-3 opacity-30" size={36} style={{ color: 'var(--primary)' }} />
          <h2 className="text-base font-bold mb-1" style={{ color: 'var(--text-secondary)' }}>No matching results</h2>
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Try searching for "GC", "JWT", "Indexes", "STAR", or "Azure App Service".</p>
        </div>
      ) : (
        <div className="space-y-6">
          {results.theory.length > 0 && (
            <ResultSection icon={<BookOpen size={16} style={{ color: 'var(--primary)' }} />} title="Theory Guides" count={results.theory.length}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {results.theory.map((t) => (
                  <Link
                    key={t.topic}
                    to="/theory"
                    className="flex items-center justify-between gap-3 p-3.5 rounded-lg transition-all hover:opacity-85"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase" style={{ color: 'var(--primary)' }}>{t.category}</div>
                      <div className="text-sm md:text-base font-bold truncate mt-0.5" style={{ color: 'var(--text-primary)' }}>{t.topic}</div>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--text-tertiary)' }} className="shrink-0" />
                  </Link>
                ))}
              </div>
            </ResultSection>
          )}

          {results.scenarios.length > 0 && (
            <ResultSection icon={<FileText size={16} style={{ color: 'var(--primary)' }} />} title="Production Scenarios" count={results.scenarios.length}>
              <div className="space-y-3">
                {results.scenarios.map((s) => (
                  <Link
                    key={s.id}
                    to="/scenarios"
                    className="flex items-center justify-between gap-3 p-3.5 rounded-lg transition-all hover:opacity-85"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase px-2 py-0.5 rounded-md" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>{s.category}</span>
                      </div>
                      <div className="text-sm md:text-base font-bold truncate" style={{ color: 'var(--text-primary)' }}>{s.title}</div>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--text-tertiary)' }} className="shrink-0" />
                  </Link>
                ))}
              </div>
            </ResultSection>
          )}

          {results.questions.length > 0 && (
            <ResultSection icon={<HelpCircle size={16} style={{ color: 'var(--primary)' }} />} title="Interview Questions" count={results.questions.length}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.questions.map((q) => (
                  <Link
                    key={q.id}
                    to="/questions"
                    className="p-4 rounded-lg flex flex-col gap-2.5 transition-all hover:opacity-85"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase" style={{ color: 'var(--primary)' }}>{q.category}</span>
                      <span className="text-xs font-semibold uppercase" style={{ color: 'var(--text-tertiary)' }}>{q.level}</span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold line-clamp-2" style={{ color: 'var(--text-primary)' }}>{q.question}</h3>
                    <p className="text-xs md:text-sm line-clamp-1" style={{ color: 'var(--text-secondary)' }}>{q.answer}</p>
                  </Link>
                ))}
              </div>
            </ResultSection>
          )}
        </div>
      )}
    </div>
  )
}
