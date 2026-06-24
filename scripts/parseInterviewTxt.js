import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const base = join(process.cwd(), 'src', 'assets', 'txt-file')
const files = {
  csharp: '02_CSharp_Interview_Questions.txt',
  aspnet: '03_DotNET_Application_Development.txt',
  systemDesign: '09_System_Design.txt',
  scenarios: '10_Scenario_Based_Questions.txt',
  mockInterviews: '11_Mock_Interviews.txt',
}

function parseQnA(text, category) {
  const entries = []
  const blocks = text.split(/\n(?=Q\d+\.)/g)
  for (const block of blocks) {
    const m = block.match(/^Q(\d+)\.\s*(.+?)\r?\n/s)
    if (!m) continue
    const question = m[2].trim()
    const answerMatch = block.match(/Answer:\s*(.+?)(?=\r?\n(?:Follow-up:|Real-world:|Q\d+\.|$))/is)
    const followMatch = block.match(/Follow-up:\s*(.+?)(?=\r?\n(?:Real-world:|Q\d+\.|$))/is)
    const realWorldMatch = block.match(/Real-world:\s*(.+?)(?=\r?\n(?:Q\d+\.|$))/is)
    entries.push({
      id: `${category}-${m[1]}`,
      category,
      level: 'Intermediate',
      question,
      answer: answerMatch ? answerMatch[1].trim() : '',
      explanation: '',
      realWorldExample: realWorldMatch ? realWorldMatch[1].trim() : '',
      followUpQuestions: followMatch ? followMatch[1].split(/\?\s*/).filter(Boolean).map((text) => text.trim().endsWith('?') ? text.trim() : `${text.trim()}?`) : [],
    })
  }
  return entries
}

function parseSystemDesign(text) {
  const entries = []
  const blocks = text.split(/\n-{4,}\n/g)
  for (const block of blocks) {
    const headerMatch = block.match(/SYSTEM DESIGN QUESTION \d+:\s*(.+)/i)
    if (!headerMatch) continue
    const title = headerMatch[1].trim()
    const requirementsMatch = block.match(/Requirements:\s*([\s\S]+?)(?=\r?\nArchitecture:|\r?\nTable design:|\r?\nScalability:|$)/i)
    const architectureMatch = block.match(/Architecture:\s*([\s\S]+?)(?=\r?\n(?:Table design:|Scalability:|Security:|$))/i)
    const databaseMatch = block.match(/Table design:\s*([\s\S]+?)(?=\r?\n(?:Scalability:|Security:|$))/i)
    const scalabilityMatch = block.match(/Scalability:\s*([\s\S]+?)(?=\r?\n(?:Security:|$))/i)
    const answer = [requirementsMatch?.[1], architectureMatch?.[1], databaseMatch?.[1], scalabilityMatch?.[1]].filter(Boolean).join('\n\n')
    entries.push({
      id: `design-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      category: 'System Design',
      level: 'Advanced',
      question: title,
      answer: answer.trim(),
      explanation: '',
      realWorldExample: '',
      followUpQuestions: [],
    })
  }
  return entries
}

function parseScenarios(text) {
  const entries = []
  const blocks = text.split(/\n(?=S\d+\.)/g)
  for (const block of blocks) {
    const m = block.match(/^S(\d+)\.\s*(.+?)\r?\n/s)
    if (!m) continue
    const question = m[2].trim()
    const answerMatch = block.match(/Answer:\s*([\s\S]+?)(?=\r?\nS\d+\.|$)/i)
    entries.push({
      id: `scenario-${m[1]}`,
      category: 'Scenario',
      level: 'Advanced',
      question,
      answer: answerMatch ? answerMatch[1].trim() : '',
      explanation: '',
      realWorldExample: '',
      followUpQuestions: [],
    })
  }
  return entries
}

function parseMockInterviews(text) {
  const entries = []
  const interviewerBlocks = text.split(/\n-{4,}\n/g)
  let questionCounter = 1
  for (const block of interviewerBlocks) {
    const lines = block.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
    if (!lines.length) continue
    const interviewerLine = lines.find((l) => l.startsWith('Interviewer:'))
    const modelLineIndex = lines.findIndex((l) => l.startsWith('Model Answer:'))
    if (!interviewerLine || modelLineIndex === -1) continue
    const question = interviewerLine.replace('Interviewer:', '').trim().replace(/^"|"$/g, '')
    const answer = lines.slice(modelLineIndex).join(' ').replace(/^Model Answer:\s*/i, '').trim()
    entries.push({
      id: `mock-${questionCounter++}`,
      section: 'Mock Interview',
      question,
      instructions: 'Reflect on the question before revealing the model answer.',
      answer,
      suggestedScore: '4/5',
    })
  }
  return entries
}

const csharpText = readFileSync(join(base, files.csharp), 'utf8')
const aspnetText = readFileSync(join(base, files.aspnet), 'utf8')
const systemDesignText = readFileSync(join(base, files.systemDesign), 'utf8')
const scenariosText = readFileSync(join(base, files.scenarios), 'utf8')
const mockInterviewText = readFileSync(join(base, files.mockInterviews), 'utf8')

const csharp = parseQnA(csharpText, 'C#')
const aspnet = parseQnA(aspnetText, 'ASP.NET Core')
const systemDesign = parseSystemDesign(systemDesignText)
const scenarios = parseScenarios(scenariosText)
const mockInterviews = parseMockInterviews(mockInterviewText)

const questionBank = [...csharp, ...aspnet, ...systemDesign, ...scenarios]

const outputData = {
  questionCount: questionBank.length,
  mockInterviewCount: mockInterviews.length,
  categories: Array.from(new Set(questionBank.map((q) => q.category))),
}

mkdirSync(join(process.cwd(), 'src', 'data'), { recursive: true })
writeFileSync(join(process.cwd(), 'src', 'data', 'generatedQuestionBankData.json'), JSON.stringify(questionBank, null, 2))
writeFileSync(join(process.cwd(), 'src', 'data', 'generatedMockInterviewData.json'), JSON.stringify(mockInterviews, null, 2))
console.log(JSON.stringify(outputData, null, 2))
