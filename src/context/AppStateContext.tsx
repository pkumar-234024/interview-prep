import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { questionData } from '../data/questionBankData'
import { scenariosData } from '../data/scenariosData'

export interface MockScore {
  id: string
  category: string
  score: number
  date: string
}

interface AppStateContextType {
  // Bookmarks
  bookmarkedQuestions: string[]
  bookmarkedScenarios: string[]
  bookmarkedFlashcards: string[]
  bookmarkedTopics: string[]
  
  // Completions
  completedQuestions: string[]
  completedDays: string[]
  completedScenarios: string[]
  
  // Custom Notes
  notes: Record<string, string>
  
  // Mock Scores
  mockScores: MockScore[]
  
  // Streaks
  streak: number
  studyLogs: string[] // List of dates 'YYYY-MM-DD' when user studied
  
  // Actions
  toggleQuestionBookmarked: (id: string) => void
  toggleScenarioBookmarked: (id: string) => void
  toggleFlashcardBookmarked: (id: string) => void
  toggleTopicBookmarked: (id: string) => void
  
  toggleQuestionCompleted: (id: string) => void
  toggleDayCompleted: (id: string) => void
  toggleScenarioCompleted: (id: string) => void
  
  saveMockScore: (category: string, score: number) => void
  saveNote: (id: string, text: string) => void
  
  // Analytics
  getOverallProgress: () => number
  getCompletedCountByCategory: () => Record<string, number>
  getStreakDays: () => number
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined)

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedQuestions, setBookmarkedQuestions] = useLocalStorage<string[]>('ib-bookmarked-questions', [])
  const [bookmarkedScenarios, setBookmarkedScenarios] = useLocalStorage<string[]>('ib-bookmarked-scenarios', [])
  const [bookmarkedFlashcards, setBookmarkedFlashcards] = useLocalStorage<string[]>('ib-bookmarked-flashcards', [])
  const [bookmarkedTopics, setBookmarkedTopics] = useLocalStorage<string[]>('ib-bookmarked-topics', [])
  
  const [completedQuestions, setCompletedQuestions] = useLocalStorage<string[]>('ib-completed-questions', [])
  const [completedDays, setCompletedDays] = useLocalStorage<string[]>('ib-completed-days', [])
  const [completedScenarios, setCompletedScenarios] = useLocalStorage<string[]>('ib-completed-scenarios', [])
  
  const [notes, setNotes] = useLocalStorage<Record<string, string>>('ib-notes', {})
  const [mockScores, setMockScores] = useLocalStorage<MockScore[]>('ib-mock-scores', [])
  const [studyLogs, setStudyLogs] = useLocalStorage<string[]>('ib-study-logs', [])
  const [streak, setStreak] = useState<number>(0)

  // Toggle handlers
  const toggleQuestionBookmarked = (id: string) => {
    setBookmarkedQuestions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
    logStudyActivity()
  }

  const toggleScenarioBookmarked = (id: string) => {
    setBookmarkedScenarios((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
    logStudyActivity()
  }

  const toggleFlashcardBookmarked = (id: string) => {
    setBookmarkedFlashcards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
    logStudyActivity()
  }

  const toggleTopicBookmarked = (id: string) => {
    setBookmarkedTopics((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
    logStudyActivity()
  }

  const toggleQuestionCompleted = (id: string) => {
    setCompletedQuestions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
    logStudyActivity()
  }

  const toggleDayCompleted = (id: string) => {
    setCompletedDays((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
    logStudyActivity()
  }

  const toggleScenarioCompleted = (id: string) => {
    setCompletedScenarios((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
    logStudyActivity()
  }

  const saveMockScore = (category: string, score: number) => {
    const newAttempt: MockScore = {
      id: `attempt-${Date.now()}`,
      category,
      score,
      date: new Date().toISOString().split('T')[0]
    }
    setMockScores((prev) => [...prev, newAttempt])
    logStudyActivity()
  }

  const saveNote = (id: string, text: string) => {
    setNotes((prev) => ({
      ...prev,
      [id]: text
    }))
    logStudyActivity()
  }

  // Study log and streak counter
  const logStudyActivity = () => {
    const today = new Date().toISOString().split('T')[0]
    if (!studyLogs.includes(today)) {
      setStudyLogs((prev) => [...prev, today])
    }
  }

  // Calculate streak dynamically
  useEffect(() => {
    if (studyLogs.length === 0) {
      setStreak(0)
      return
    }

    // Sort logs in descending order
    const sortedDates = [...studyLogs].sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
    const todayStr = new Date().toISOString().split('T')[0]
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split('T')[0]

    // Check if user has studied today or yesterday. If not, streak is broken
    const mostRecent = sortedDates[0]
    if (mostRecent !== todayStr && mostRecent !== yesterdayStr) {
      setStreak(0)
      return
    }

    // Count consecutive active days
    let currentStreak = 0
    let checkDate = new Date(mostRecent)

    for (let i = 0; i < sortedDates.length; i++) {
      const dateStr = checkDate.toISOString().split('T')[0]
      if (sortedDates.includes(dateStr)) {
        currentStreak++
        checkDate.setDate(checkDate.getDate() - 1)
      } else {
        break
      }
    }
    setStreak(currentStreak)
  }, [studyLogs])

  const getOverallProgress = useCallback(() => {
    const totalQuestions = questionData.length
    const totalScenarios = scenariosData.length
    const totalDays = 10
    
    const completedCount = completedQuestions.length + completedScenarios.length + completedDays.length
    const totalCount = totalQuestions + totalScenarios + totalDays
    
    if (totalCount === 0) return 0
    return Math.round((completedCount / totalCount) * 100)
  }, [completedQuestions, completedScenarios, completedDays])

  const getCompletedCountByCategory = useCallback(() => {
    const counts: Record<string, number> = {}
    completedQuestions.forEach((qId) => {
      const q = questionData.find((x) => x.id === qId)
      if (q) {
        counts[q.category] = (counts[q.category] || 0) + 1
      }
    })
    return counts
  }, [completedQuestions])

  const getStreakDays = useCallback(() => streak, [streak])

  return (
    <AppStateContext.Provider
      value={{
        bookmarkedQuestions,
        bookmarkedScenarios,
        bookmarkedFlashcards,
        bookmarkedTopics,
        completedQuestions,
        completedDays,
        completedScenarios,
        notes,
        mockScores,
        streak,
        studyLogs,
        toggleQuestionBookmarked,
        toggleScenarioBookmarked,
        toggleFlashcardBookmarked,
        toggleTopicBookmarked,
        toggleQuestionCompleted,
        toggleDayCompleted,
        toggleScenarioCompleted,
        saveMockScore,
        saveNote,
        getOverallProgress,
        getCompletedCountByCategory,
        getStreakDays
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

// eslint-disable-next-line react/only-export-components
export const useAppState = () => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider')
  }
  return context
}
