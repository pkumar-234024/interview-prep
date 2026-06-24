import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  HelpCircle,
  CheckCircle,
  Bookmark,
  Flame,
  ArrowRight,
  TrendingUp,
  Clock,
  Calendar,
  ChevronRight,
  Target,
  Zap,
  BookOpen
} from 'lucide-react'
import { CustomRadarChart } from '../components/CustomRadarChart'
import { CustomBarChart } from '../components/CustomBarChart'
import { useAppState } from '../context/AppStateContext'
import { questionData } from '../data/questionBankData'
import { studyPlanData } from '../data/studyPlanData'
import { SafeChartWrapper } from '../components/SafeChartWrapper'

export const Dashboard: React.FC = () => {
  const {
    completedQuestions,
    completedDays,
    completedScenarios,
    streak,
    mockScores,
    bookmarkedQuestions,
    getOverallProgress,
    getCompletedCountByCategory
  } = useAppState()

  const totalQuestions = questionData.length
  const completedQCount = completedQuestions.length
  const completedSCount = completedScenarios.length
  const overallProgress = getOverallProgress()

  // Current study day
  const currentDayIndex = completedDays.length
  const currentDay = studyPlanData[Math.min(currentDayIndex, studyPlanData.length - 1)]

  // Category data for progress bars
  const categoryProgress = useMemo(() => {
    const categories = [
      { name: 'C#', color: '#7C3AED' },
      { name: 'ASP.NET Core', color: '#2563EB' },
      { name: 'Entity Framework', color: '#0891B2' },
      { name: 'SQL Server', color: '#059669' },
      { name: 'React', color: '#0EA5E9' },
      { name: 'Azure', color: '#2563EB' },
      { name: 'System Design', color: '#D97706' },
      { name: 'Behavioral', color: '#DC2626' }
    ]
    const counts = getCompletedCountByCategory()
    return categories.map((cat) => {
      const total = questionData.filter((x) => x.category === cat.name).length || 1
      const completed = counts[cat.name] || 0
      const pct = Math.round((completed / total) * 100)
      return { ...cat, completed, total, pct }
    })
  }, [getCompletedCountByCategory])

  // Radar chart data
  const radarData = useMemo(() => {
    const categories = ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'React', 'Azure', 'System Design', 'Behavioral']
    const counts = getCompletedCountByCategory()
    return categories.map((cat) => {
      const total = questionData.filter((x) => x.category === cat).length || 1
      const completed = counts[cat] || 0
      return { subject: cat, completed, total, percentage: Math.round((completed / total) * 100), fullMark: 100 }
    })
  }, [getCompletedCountByCategory])

  // Mock scores bar chart
  const mockBarData = useMemo(() => {
    if (mockScores.length === 0) {
      return [
        { name: 'Mon', Score: 0 },
        { name: 'Tue', Score: 0 },
        { name: 'Wed', Score: 0 },
        { name: 'Thu', Score: 0 },
        { name: 'Fri', Score: 0 }
      ]
    }
    return mockScores.slice(-5).map((score, index) => ({
      name: `Attempt ${index + 1}`,
      Score: score.score * 20
    }))
  }, [mockScores])

  // Quick revision — random subset of questions
  const revisionQuestions = useMemo(() => {
    const shuffled = [...questionData].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 6)
  }, [])

  // Recent bookmarks
  const recentBookmarks = useMemo(() => {
    return bookmarkedQuestions.slice(-4).map((qId) => questionData.find((x) => x.id === qId)).filter(Boolean) as typeof questionData
  }, [bookmarkedQuestions])

  // Upcoming study days (next 3 after current)
  const upcomingDays = useMemo(() => {
    return studyPlanData.slice(currentDayIndex, currentDayIndex + 4)
  }, [currentDayIndex])

  return (
    <div className="space-y-6 pb-12 stagger-children">

      {/* ═══════ SECTION 1: Hero Bar ═══════ */}
      <div
        className="rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
      >
        <div className="space-y-3 text-center md:text-left flex-1">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Welcome back, Praveen
            </h1>
            {streak > 0 && (
              <span className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: 'var(--warning-light)', color: 'var(--warning)' }}>
                <Flame size={14} className="fill-current" /> {streak} days
              </span>
            )}
          </div>
          <p className="text-sm md:text-base max-w-lg" style={{ color: 'var(--text-secondary)' }}>
            You're on <span className="font-semibold" style={{ color: 'var(--primary)' }}>{currentDay?.day} — {currentDay?.title}</span>.
            {' '}{completedQCount} of {totalQuestions} questions completed.
          </p>
          <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-2.5">
            <Link
              to="/study-plan"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: 'var(--primary)', color: 'var(--text-on-primary)' }}
            >
              Continue Studying
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/questions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            >
              Browse Questions
            </Link>
          </div>
        </div>

        {/* Progress Ring */}
        <div className="flex items-center gap-5 p-5 rounded-xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
          <div className="relative w-20 h-20">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" strokeWidth="8" fill="transparent" style={{ stroke: 'var(--border)' }} />
              <circle
                cx="50" cy="50" r="40" strokeWidth="8" fill="transparent"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * overallProgress) / 100}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
                style={{ stroke: 'var(--primary)' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-base font-extrabold" style={{ color: 'var(--text-primary)' }}>{overallProgress}%</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>Total Completion</div>
            <div className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
              {completedQCount + completedSCount + completedDays.length} Tasks
            </div>
            <div className="text-xs font-semibold flex items-center gap-1 mt-0.5" style={{ color: 'var(--success)' }}>
              <TrendingUp size={12} /> On track
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ SECTION 2: Stats Grid ═══════ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Questions', value: totalQuestions, icon: HelpCircle, color: 'var(--primary)', bg: 'var(--primary-light)', sub: 'Curated technical bank' },
          { label: 'Completed Questions', value: completedQCount, icon: CheckCircle, color: 'var(--success)', bg: 'var(--success-light)', sub: `${totalQuestions - completedQCount} remaining` },
          { label: 'Bookmarks', value: bookmarkedQuestions.length, icon: Bookmark, color: 'var(--warning)', bg: 'var(--warning-light)', sub: 'Saved for review' },
          { label: 'Study Streak', value: `${streak} Days`, icon: Flame, color: 'var(--danger)', bg: 'var(--danger-light)', sub: 'Daily learning streak' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-5 rounded-xl flex items-center justify-between transition-all"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{stat.label}</div>
              <div className="text-2xl font-extrabold" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
              <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{stat.sub}</div>
            </div>
            <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: stat.bg, color: stat.color }}>
              <stat.icon size={22} />
            </div>
          </div>
        ))}
      </div>

      {/* ═══════ SECTION 3: Category Progress + Charts ═══════ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Progress Bars */}
        <div className="lg:col-span-1 p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Category Progress</h2>
          <p className="text-xs mb-4" style={{ color: 'var(--text-tertiary)' }}>Completion by subject area</p>
          <div className="space-y-4">
            {categoryProgress.map((cat) => (
              <div key={cat.name}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span style={{ color: 'var(--text-secondary)' }}>{cat.name}</span>
                  <span style={{ color: 'var(--text-tertiary)' }}>{cat.completed}/{cat.total}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${cat.pct}%`, background: cat.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Radar Chart */}
        <div className="lg:col-span-1 p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Readiness Radar</h2>
          <p className="text-xs mb-3" style={{ color: 'var(--text-tertiary)' }}>Strength across modules</p>
          <div className="h-56 w-full">
            <SafeChartWrapper height={224}>
              {(width, height) => <CustomRadarChart width={width} height={height} data={radarData} />}
            </SafeChartWrapper>
          </div>
        </div>

        {/* Mock Assessment Performance */}
        <div className="lg:col-span-1 p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Mock Performance</h2>
          <p className="text-xs mb-3" style={{ color: 'var(--text-tertiary)' }}>Last 5 interview scores</p>
          <div className="h-56 w-full">
            <SafeChartWrapper height={224}>
              {(width, height) => <CustomBarChart width={width} height={height} data={mockBarData} />}
            </SafeChartWrapper>
          </div>
        </div>
      </div>

      {/* ═══════ SECTION 4 + 5: Tasks & Activity ═══════ */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Today's Tasks */}
        <div className="lg:col-span-3 p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Today's Tasks</h2>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Suggested based on your study plan</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
              <Target size={14} />
              Daily Goals
            </div>
          </div>
          <div className="space-y-3">
            {[
              { text: `Read ${currentDay?.day}: ${currentDay?.title}`, desc: 'Review objectives and complete exercises', link: '/study-plan', icon: Calendar },
              { text: 'Complete 5 Practice Questions', desc: 'Focus on your weakest category', link: '/questions', icon: HelpCircle },
              { text: 'Review 10 Flashcards', desc: 'Quick revision for knowledge retention', link: '/flashcards', icon: Zap },
              { text: 'Run a 15-Min Mock Interview', desc: 'Practice self-scoring technique', link: '/mock-interviews', icon: Clock },
            ].map((task, i) => (
              <Link
                key={i}
                to={task.link}
                className="flex items-center gap-4 p-4 rounded-lg transition-all hover:opacity-85 hover:translate-x-0.5"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ border: '2px solid var(--primary)', color: 'var(--primary)' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--primary)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{task.text}</div>
                  <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{task.desc}</div>
                </div>
                <ChevronRight size={16} style={{ color: 'var(--text-tertiary)' }} />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 className="text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Recent Activity</h2>
          <p className="text-xs mb-4" style={{ color: 'var(--text-tertiary)' }}>Your latest preparation actions</p>
          <div className="space-y-4">
            {completedQCount > 0 && (
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--success-light)', color: 'var(--success)' }}>
                  <CheckCircle size={14} />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Completed {completedQCount} questions</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>Question bank progress</div>
                </div>
              </div>
            )}
            {completedDays.length > 0 && (
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                  <Calendar size={14} />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{completedDays.length} study days completed</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>Study plan progress</div>
                </div>
              </div>
            )}
            {mockScores.length > 0 && (
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--warning-light)', color: 'var(--warning)' }}>
                  <TrendingUp size={14} />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{mockScores.length} mock interviews taken</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>Last score: {mockScores[mockScores.length - 1]?.score ?? 0}/5</div>
                </div>
              </div>
            )}
            {bookmarkedQuestions.length > 0 && (
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--danger-light)', color: 'var(--danger)' }}>
                  <Bookmark size={14} />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{bookmarkedQuestions.length} items bookmarked</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>Saved for revision</div>
                </div>
              </div>
            )}
            {completedSCount > 0 && (
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                  <Zap size={14} />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{completedSCount} scenarios explored</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)' }}>Production troubleshooting</div>
                </div>
              </div>
            )}
            {completedQCount === 0 && completedDays.length === 0 && mockScores.length === 0 && bookmarkedQuestions.length === 0 && (
              <div className="text-center py-6 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                No activity yet. Start your study plan to begin!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════ SECTION 6 + 7: Quick Revision & Upcoming Topics ═══════ */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Quick Revision Panel */}
        <div className="lg:col-span-3 p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Quick Revision</h2>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Random questions for rapid recall</p>
            </div>
            <Link
              to="/questions"
              className="text-xs md:text-sm font-bold flex items-center gap-0.5 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--primary)' }}
            >
              See all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {revisionQuestions.map((q) => (
              <Link
                key={q.id}
                to="/questions"
                className="p-4 rounded-lg transition-all hover:opacity-85 hover:translate-x-0.5"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>{q.category}</span>
                  <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: 'var(--bg-card)', color: 'var(--text-tertiary)', border: '1px solid var(--border)' }}>{q.level}</span>
                </div>
                <div className="text-sm font-bold line-clamp-2" style={{ color: 'var(--text-primary)' }}>{q.question}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming Topics / Study Roadmap */}
        <div className="lg:col-span-2 p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Upcoming Topics</h2>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Your study roadmap ahead</p>
            </div>
            <Link
              to="/study-plan"
              className="text-xs md:text-sm font-bold flex items-center gap-0.5 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--primary)' }}
            >
              Full plan <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-3.5">
            {upcomingDays.map((day, idx) => {
              const isCompleted = completedDays.includes(day.id)
              const isCurrent = idx === 0
              return (
                <Link
                  key={day.id}
                  to="/study-plan"
                  className="flex items-center gap-3.5 p-3.5 rounded-lg transition-all hover:opacity-85"
                  style={{
                    background: isCurrent ? 'var(--primary-light)' : 'var(--bg-elevated)',
                    border: `1px solid ${isCurrent ? 'var(--primary-muted)' : 'var(--border-light)'}`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{
                      background: isCompleted ? 'var(--success-light)' : isCurrent ? 'var(--primary)' : 'var(--bg-card)',
                      color: isCompleted ? 'var(--success)' : isCurrent ? 'white' : 'var(--text-tertiary)',
                      border: `1px solid ${isCompleted ? 'var(--success)' : isCurrent ? 'var(--primary)' : 'var(--border)'}`,
                    }}
                  >
                    {isCompleted ? <CheckCircle size={16} /> : <BookOpen size={16} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold" style={{ color: isCurrent ? 'var(--primary)' : 'var(--text-primary)' }}>
                      {day.day} — {day.title}
                    </div>
                    <div className="text-xs truncate mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
                      {day.objectives[0]}
                    </div>
                  </div>
                  {isCurrent && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: 'var(--primary)', color: 'white' }}>
                      CURRENT
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* ═══════ Bookmarks Footer ═══════ */}
      {recentBookmarks.length > 0 && (
        <div className="p-6 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>Bookmarked Questions</h2>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Your flagged items for review</p>
            </div>
            <Link
              to="/bookmarks"
              className="text-xs md:text-sm font-bold flex items-center gap-0.5 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--primary)' }}
            >
              All bookmarks <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {recentBookmarks.map((q) => (
              <Link
                key={q.id}
                to="/questions"
                className="p-4 rounded-lg transition-all hover:opacity-85 hover:translate-x-0.5"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-light)' }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>{q.category}</span>
                  <Bookmark size={14} className="fill-current" style={{ color: 'var(--warning)' }} />
                </div>
                <div className="text-sm font-bold line-clamp-2" style={{ color: 'var(--text-primary)' }}>{q.question}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
