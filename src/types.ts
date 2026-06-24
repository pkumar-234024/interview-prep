export type QuestionLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export type QuestionCategory =
  | 'C#'
  | 'ASP.NET Core'
  | 'Entity Framework'
  | 'SQL Server'
  | 'React'
  | 'JavaScript'
  | 'Azure'
  | 'System Design'
  | 'Architecture'
  | 'Behavioral'

export interface InterviewQuestion {
  id: string
  category: QuestionCategory
  level: QuestionLevel
  question: string
  answer: string
  explanation: string
  realWorldExample: string
  followUps: string[]
  tags: string[]
}

export interface ProductionScenario {
  id: string
  category: 'Performance' | 'Concurrency' | 'Security' | 'Azure' | 'Microservices' | 'Database' | 'Deployment'
  title: string
  problem: string
  rootCauseAnalysis: string
  investigationSteps: string[]
  resolution: string
  prevention: string
  interviewAnswer: string
}

export interface StudyPlanDay {
  id: string
  day: string
  title: string
  objectives: string[]
  topics: string[]
  exercises: string[]
  codingPractice: string
  interviewQuestions: string[]
  notes: string
  revisionChecklist: string[]
}

export interface MockInterviewItem {
  id: string
  category: 'Technical Round 1' | 'Technical Round 2' | 'System Design' | 'Managerial' | 'HR'
  question: string
  instructions: string
  answer: string
  suggestedScore: string
}
