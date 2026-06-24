import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Bookmark, HelpCircle, FileText, BookOpen, Layers, ArrowRight } from 'lucide-react'
import { useAppState } from '../context/AppStateContext'
import { questionData } from '../data/questionBankData'
import { scenariosData } from '../data/scenariosData'

export const BookmarksView: React.FC = () => {
  const {
    bookmarkedQuestions,
    bookmarkedScenarios,
    bookmarkedFlashcards,
    bookmarkedTopics
  } = useAppState()

  const questionsList = useMemo(() => {
    return bookmarkedQuestions.map((id) => questionData.find((q) => q.id === id)).filter(Boolean)
  }, [bookmarkedQuestions])

  const scenariosList = useMemo(() => {
    return bookmarkedScenarios.map((id) => scenariosData.find((s) => s.id === id)).filter(Boolean)
  }, [bookmarkedScenarios])

  const flashcardsList = useMemo(() => {
    return bookmarkedFlashcards.map((id) => questionData.find((q) => q.id === id)).filter(Boolean)
  }, [bookmarkedFlashcards])

  const totalBookmarks = questionsList.length + scenariosList.length + flashcardsList.length + bookmarkedTopics.length

  const SectionCard: React.FC<{ icon: React.ReactNode; title: string; count: number; children: React.ReactNode }> = ({ icon, title, count, children }) => (
    <div className="p-5 rounded-xl space-y-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
        {icon} {title} ({count})
      </h2>
      <div className="space-y-2">{children}</div>
    </div>
  )

  const BookmarkItem: React.FC<{ category: string; text: string; link: string }> = ({ category, text, link }) => (
    <Link
      to={link}
      className="flex items-center justify-between gap-3 p-3.5 rounded-lg transition-all hover:opacity-85"
      style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}
    >
      <div className="min-w-0">
        <div className="text-xs font-bold uppercase" style={{ color: 'var(--primary)' }}>{category}</div>
        <div className="text-sm md:text-base font-bold truncate mt-0.5" style={{ color: 'var(--text-primary)' }}>{text}</div>
      </div>
      <ArrowRight size={16} style={{ color: 'var(--text-tertiary)' }} className="shrink-0" />
    </Link>
  )

  return (
    <div className="pb-12 px-2 md:px-4">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>Bookmarks Vault</h1>
        <p className="text-sm md:text-base mt-1" style={{ color: 'var(--text-tertiary)' }}>
          Access all your flagged interview questions, scenarios, flashcards, and topics.
        </p>
      </div>

      {totalBookmarks === 0 ? (
        <div className="text-center py-20 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <Bookmark className="mx-auto mb-3 opacity-30" size={36} style={{ color: 'var(--primary)' }} />
          <h2 className="text-base font-bold mb-1" style={{ color: 'var(--text-secondary)' }}>Your vault is empty</h2>
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Bookmark questions or scenarios as you review to see them here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questionsList.length > 0 && (
            <SectionCard icon={<HelpCircle size={16} style={{ color: 'var(--primary)' }} />} title="Questions" count={questionsList.length}>
              {questionsList.map((q) => q && <BookmarkItem key={q.id} category={q.category} text={q.question} link="/questions" />)}
            </SectionCard>
          )}

          {scenariosList.length > 0 && (
            <SectionCard icon={<FileText size={16} style={{ color: 'var(--primary)' }} />} title="Scenarios" count={scenariosList.length}>
              {scenariosList.map((s) => s && <BookmarkItem key={s.id} category={s.category} text={s.title} link="/scenarios" />)}
            </SectionCard>
          )}

          {flashcardsList.length > 0 && (
            <SectionCard icon={<Layers size={16} style={{ color: 'var(--primary)' }} />} title="Flashcards" count={flashcardsList.length}>
              {flashcardsList.map((f) => f && <BookmarkItem key={f.id} category={f.category} text={f.question} link="/flashcards" />)}
            </SectionCard>
          )}

          {bookmarkedTopics.length > 0 && (
            <SectionCard icon={<BookOpen size={16} style={{ color: 'var(--primary)' }} />} title="Topics" count={bookmarkedTopics.length}>
              {bookmarkedTopics.map((topic) => <BookmarkItem key={topic} category="Theory Guide" text={topic} link="/theory" />)}
            </SectionCard>
          )}
        </div>
      )}
    </div>
  )
}
