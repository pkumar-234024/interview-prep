import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AppStateProvider } from './context/AppStateContext'
import { DashboardLayout } from './layout/DashboardLayout'

// Page Views
import { Dashboard } from './dashboard/Dashboard'
import { StudyPlan } from './studyplan/StudyPlan'
import { QuestionBank } from './questions/QuestionBank'
import { FlashcardSystem } from './flashcards/FlashcardSystem'
import { MockInterview } from './mockinterview/MockInterview'
import { ScenarioExplorer } from './pages/ScenarioExplorer'
import { TheoryPortal } from './pages/TheoryPortal'
import { BookmarksView } from './bookmarks/BookmarksView'
import { GlobalSearch } from './search/GlobalSearch'

import './App.css'

function App() {
  return (
    <ThemeProvider>
      <AppStateProvider>
        <BrowserRouter>
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/study-plan" element={<StudyPlan />} />
              <Route path="/questions" element={<QuestionBank />} />
              <Route path="/flashcards" element={<FlashcardSystem />} />
              <Route path="/mock-interviews" element={<MockInterview />} />
              <Route path="/scenarios" element={<ScenarioExplorer />} />
              <Route path="/theory" element={<TheoryPortal />} />
              <Route path="/bookmarks" element={<BookmarksView />} />
              <Route path="/search" element={<GlobalSearch />} />
              {/* Fallback route */}
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </DashboardLayout>
        </BrowserRouter>
      </AppStateProvider>
    </ThemeProvider>
  )
}

export default App
