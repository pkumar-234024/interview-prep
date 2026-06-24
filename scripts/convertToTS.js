import fs from 'node:fs'

const questionData = JSON.parse(fs.readFileSync('src/data/generatedQuestionBankData.json', 'utf8'))
const mockInterviewData = JSON.parse(fs.readFileSync('src/data/generatedMockInterviewData.json', 'utf8'))

const questionTS = `import { type InterviewQuestion } from '../types.ts'

export const questionData: InterviewQuestion[] = ${JSON.stringify(questionData, null, 2)}
`

const mockTS = `import type { MockInterviewItem } from '../types.ts'

export const mockInterviewData: MockInterviewItem[] = ${JSON.stringify(mockInterviewData, null, 2)}
`

fs.writeFileSync('src/data/questionBankData.ts', questionTS)
fs.writeFileSync('src/data/mockInterviewData.ts', mockTS)

console.log('✓ Updated questionBankData.ts with', questionData.length, 'questions')
console.log('✓ Updated mockInterviewData.ts with', mockInterviewData.length, 'mock interviews')

