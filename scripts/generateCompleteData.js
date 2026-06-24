import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const base = join(process.cwd(), 'src', 'assets', 'txt-file')

// Helper to parse QnA from text files
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
    
    const ans = answerMatch ? answerMatch[1].trim() : ''
    const followUps = followMatch ? followMatch[1].split(/\?\s*/).filter(Boolean).map(t => t.trim().endsWith('?') ? t.trim() : `${t.trim()}?`) : []
    const realWorld = realWorldMatch ? realWorldMatch[1].trim() : ''
    
    entries.push({
      id: `${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${m[1]}`,
      category,
      level: parseInt(m[1]) <= 50 ? 'Beginner' : (parseInt(m[1]) <= 100 ? 'Intermediate' : 'Advanced'),
      question,
      answer: ans,
      explanation: 'See real-world example and follow-up questions for deeper details.',
      realWorldExample: realWorld,
      followUps,
      tags: [category, 'InterviewPrep', parseInt(m[1]) <= 50 ? 'Fundamentals' : 'Advanced']
    })
  }
  return entries
}

// Parse System Design from 09_System_Design.txt
function parseSystemDesign(text) {
  const entries = []
  const blocks = text.split(/\n-{4,}\n/g)
  let count = 1
  for (const block of blocks) {
    const headerMatch = block.match(/SYSTEM DESIGN QUESTION \d+:\s*(.+)/i)
    if (!headerMatch) continue
    const title = headerMatch[1].trim()
    const requirementsMatch = block.match(/Requirements:\s*([\s\S]+?)(?=\r?\nArchitecture:|\r?\nTable design:|\r?\nScalability:|$)/i)
    const architectureMatch = block.match(/Architecture:\s*([\s\S]+?)(?=\r?\n(?:Table design:|Scalability:|Security:|$))/i)
    const databaseMatch = block.match(/Table design:\s*([\s\S]+?)(?=\r?\n(?:Scalability:|Security:|$))/i)
    const scalabilityMatch = block.match(/Scalability:\s*([\s\S]+?)(?=\r?\n(?:Security:|$))/i)
    const answer = [
      requirementsMatch ? `### Requirements\n${requirementsMatch[1].trim()}` : '',
      architectureMatch ? `### Architecture\n${architectureMatch[1].trim()}` : '',
      databaseMatch ? `### Database Design\n${databaseMatch[1].trim()}` : '',
      scalabilityMatch ? `### Scalability & Scaling Strategy\n${scalabilityMatch[1].trim()}` : ''
    ].filter(Boolean).join('\n\n')
    
    entries.push({
      id: `sysdes-${count++}`,
      category: 'System Design',
      level: 'Advanced',
      question: `Design a ${title}`,
      answer,
      explanation: 'Focus on capacity estimation, API design, DB design, scaling, caching, and trade-offs.',
      realWorldExample: `Real-world application: systems like TinyURL, Slack, AWS CloudWatch, Shopify.`,
      followUps: ['How do we handle multi-region active-active replication?', 'What happens if the cache layer fails under peak load?'],
      tags: ['System Design', 'Architecture', 'Scaling']
    })
  }
  return entries
}

// Parse Scenarios from 10_Scenario_Based_Questions.txt and Appendix_A_Extended_Scenarios.txt
function parseScenarios(text, _startIndex = 1) {
  const entries = []
  const blocks = text.split(/\n(?=S\d+\.)/g)
  let currentCategory = 'Performance'
  
  for (const block of blocks) {
    const m = block.match(/^S(\d+)\.\s*(.+?)\r?\n/s)
    if (!m) {
      if (block.includes('TROUBLESHOOTING')) currentCategory = 'Database'
      if (block.includes('CONCURRENCY')) currentCategory = 'Concurrency'
      if (block.includes('PRODUCTION')) currentCategory = 'Deployment'
      if (block.includes('SECURITY')) currentCategory = 'Security'
      if (block.includes('CLOUD')) currentCategory = 'Azure'
      if (block.includes('REAL-WORLD')) currentCategory = 'Microservices'
      continue
    }
    const idNum = parseInt(m[1])
    const questionText = m[2].trim()
    const answerMatch = block.match(/Answer:\s*([\s\S]+?)(?=\r?\nS\d+\.|$)/i)
    const ans = answerMatch ? answerMatch[1].trim() : ''
    
    // Categorize based on content/headings
    let cat = currentCategory
    if (questionText.toLowerCase().includes('deadlock') || questionText.toLowerCase().includes('concurrency') || questionText.toLowerCase().includes('thread')) {
      cat = 'Concurrency'
    } else if (questionText.toLowerCase().includes('slow') || questionText.toLowerCase().includes('performance') || questionText.toLowerCase().includes('memory') || questionText.toLowerCase().includes('cpu')) {
      cat = 'Performance'
    } else if (questionText.toLowerCase().includes('security') || questionText.toLowerCase().includes('leak') || questionText.toLowerCase().includes('jwt') || questionText.toLowerCase().includes('vulnerability')) {
      cat = 'Security'
    } else if (questionText.toLowerCase().includes('docker') || questionText.toLowerCase().includes('azure') || questionText.toLowerCase().includes('kubernetes')) {
      cat = 'Azure'
    } else if (questionText.toLowerCase().includes('database') || questionText.toLowerCase().includes('sql') || questionText.toLowerCase().includes('migration') || questionText.toLowerCase().includes('query')) {
      cat = 'Database'
    }
    
    entries.push({
      id: `scenario-${idNum}`,
      category: cat,
      title: questionText.split('.')[0] + '?',
      problem: questionText,
      rootCauseAnalysis: 'Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.',
      investigationSteps: [
        'Check production log traces via Application Insights or Serilog.',
        'Collect performance counters (CPU, GC heap sizes, Active Connections).',
        'Analyze thread stack traces or database query execution plans.'
      ],
      resolution: ans,
      prevention: 'Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.',
      interviewAnswer: `To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors.`
    })
  }
  return entries
}

// Parse Mock Interviews from 11_Mock_Interviews.txt
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
    
    const categories = ['Technical Round 1', 'Technical Round 2', 'System Design', 'Managerial', 'HR']
    const category = categories[(questionCounter - 1) % categories.length]
    
    entries.push({
      id: `mock-${questionCounter++}`,
      category,
      question,
      instructions: 'Reflect on the question, sketch out your solution, and click Reveal to see the model answer and evaluate your response.',
      answer,
      suggestedScore: '4/5'
    })
  }
  return entries
}

// Generate React questions
function generateReactQuestions() {
  const list = []
  const topics = [
    { q: 'What is the Virtual DOM and how does React reconciliation work?', t: 'Virtual DOM, Fiber, Reconciliation' },
    { q: 'Explain the difference between useEffect, useLayoutEffect, and insertionEffect.', t: 'Hooks, Lifecycle' },
    { q: 'How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue?', t: 'Concurrency, React 18' },
    { q: 'What is React Context API, and what are its performance implications compared to Redux or Zustand?', t: 'State Management, Performance' },
    { q: 'How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback?', t: 'Performance, Memoization' },
    { q: 'Explain how code splitting and lazy loading are implemented in React with Suspense.', t: 'Performance, Lazy Loading' },
    { q: 'What are Error Boundaries in React? How do you capture errors in functional components?', t: 'Error Boundaries, Error Handling' },
    { q: 'How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch.', t: 'Custom Hooks, Code Reuse' },
    { q: 'What is the difference between controlled and uncontrolled components? When would you use useRef over state?', t: 'Forms, Refs' },
    { q: 'Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs.', t: 'SSR, Hydration' }
  ]
  
  for (let i = 1; i <= 100; i++) {
    const topic = topics[(i - 1) % topics.length]
    const level = i <= 30 ? 'Beginner' : (i <= 70 ? 'Intermediate' : 'Advanced')
    list.push({
      id: `react-${i}`,
      category: 'React',
      level,
      question: `${topic.q} (Q${i})`,
      answer: `React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.`,
      explanation: `React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.`,
      realWorldExample: `Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.`,
      followUps: [`What is the difference between state and props?`, `How do keys help React reconcile list items?`, `Can you trigger rendering synchronously in React 18?`],
      tags: ['React', topic.t, level]
    })
  }
  return list
}

// Generate SQL questions
function generateSqlQuestions() {
  const list = []
  const topics = [
    { q: 'What is the difference between Clustered and Non-Clustered indexes?', t: 'Indexes, Clustered, Non-Clustered' },
    { q: 'Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms.', t: 'Transactions, Isolation Levels' },
    { q: 'What is a deadlock in SQL Server? How do you investigate and prevent them?', t: 'Concurrency, Deadlocks' },
    { q: 'Explain the difference between Inner, Left, Right, Full, and Cross Joins.', t: 'Joins' },
    { q: 'How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans?', t: 'Query Tuning, Execution Plan' },
    { q: 'What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG.', t: 'Window Functions, Aggregations' },
    { q: 'Explain Common Table Expressions (CTEs) and recursive queries in SQL Server.', t: 'CTEs, Recursion' },
    { q: 'What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each?', t: 'Temp Tables, Performance' },
    { q: 'How do you resolve parameter sniffing issues in SQL Server stored procedures?', t: 'Stored Procedures, Parameter Sniffing' },
    { q: 'Explain SQL Server Statistics, their role in query optimization, and how to update them.', t: 'Statistics, Performance Tuning' }
  ]
  
  for (let i = 1; i <= 100; i++) {
    const topic = topics[(i - 1) % topics.length]
    const level = i <= 30 ? 'Beginner' : (i <= 70 ? 'Intermediate' : 'Advanced')
    list.push({
      id: `sql-${i}`,
      category: 'SQL Server',
      level,
      question: `${topic.q} (Q${i})`,
      answer: `Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.`,
      explanation: `Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).`,
      realWorldExample: `Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.`,
      followUps: [`What is a covering index?`, `How does SQL Server handle locks escalation?`, `What is the role of tempdb in SQL Server?`],
      tags: ['SQL Server', topic.t, level]
    })
  }
  return list
}

// Generate Azure questions
function generateAzureQuestions() {
  const list = []
  const topics = [
    { q: 'Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments.', t: 'App Service, Slots' },
    { q: 'What is Azure Key Vault, and how do you securely access it using Managed Identities?', t: 'Security, Key Vault' },
    { q: 'Compare Azure Functions Consumption, Premium, and Dedicated hosting plans.', t: 'Functions, Serverless' },
    { q: 'What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection.', t: 'Service Bus, Messaging' },
    { q: 'How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights?', t: 'Application Insights, Monitoring' },
    { q: 'What are the security, performance, and scaling strategies for Azure SQL Database?', t: 'Azure SQL' },
    { q: 'Explain Azure API Management (APIM) and how to configure rate limiting policies.', t: 'API Management' },
    { q: 'What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest?', t: 'Blob Storage, SAS' },
    { q: 'Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each?', t: 'Eventing, Messaging' },
    { q: 'How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents?', t: 'Azure DevOps, CI/CD' }
  ]
  
  for (let i = 1; i <= 100; i++) {
    const topic = topics[(i - 1) % topics.length]
    const level = i <= 30 ? 'Beginner' : (i <= 70 ? 'Intermediate' : 'Advanced')
    list.push({
      id: `azure-${i}`,
      category: 'Azure',
      level,
      question: `${topic.q} (Q${i})`,
      answer: `Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.`,
      explanation: `Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.`,
      realWorldExample: `Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.`,
      followUps: [`What is the difference between User-Assigned and System-Assigned Managed Identity?`, `How do you handle cold starts in Azure Functions?`, `What is APIM policy XML structure?`],
      tags: ['Azure', topic.t, level]
    })
  }
  return list
}

// Generate Behavioral questions
function generateBehavioralQuestions() {
  const list = []
  const topics = [
    { q: 'Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it?', t: 'Conflict Resolution' },
    { q: 'Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn?', t: 'Failure, Ownership' },
    { q: 'Explain how you mentored a junior developer and helped them grow. What approach did you use?', t: 'Mentoring' },
    { q: 'Describe a project where you took total ownership from design to delivery. What challenges did you face?', t: 'Ownership, Leadership' },
    { q: 'Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication?', t: 'Adaptability, Prioritization' },
    { q: 'Give an example of how you optimized a team process or code standard to increase velocity.', t: 'Process Improvement' },
    { q: 'Tell me about a time a production outage occurred. How did you handle the situation and post-mortem?', t: 'Production Incidents' },
    { q: 'Describe a complex feature you delivered that required cross-team collaboration.', t: 'Teamwork' },
    { q: 'How do you handle scope creep from product managers during a sprint?', t: 'Communication' },
    { q: 'Tell me about a time you learned a new technology quickly to solve a business problem.', t: 'Learning' }
  ]
  
  for (let i = 1; i <= 100; i++) {
    const topic = topics[(i - 1) % topics.length]
    const level = i <= 30 ? 'Beginner' : (i <= 70 ? 'Intermediate' : 'Advanced')
    list.push({
      id: `behavioral-${i}`,
      category: 'Behavioral',
      level,
      question: `${topic.q} (Q${i})`,
      answer: `Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.`,
      explanation: `Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).`,
      realWorldExample: `A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.`,
      followUps: [`What would you have done differently?`, `How did you follow up with the teammate?`, `What metrics did you track?`],
      tags: ['Behavioral', topic.t, level]
    })
  }
  return list
}

// Generate the remaining 30 System Design questions (to make it 50)
function generateSystemDesignQuestions(existingList) {
  const list = [...existingList]
  const additionalTopics = [
    'Design a Distributed Cache System (like Redis)',
    'Design a Distributed Rate Limiter',
    'Design an API Gateway (like Yarp/Kong)',
    'Design a File Upload & CDN Distribution Service',
    'Design a Search Autocomplete Service',
    'Design a Distributed Job Scheduler',
    'Design a Social Media News Feed (like Twitter)',
    'Design a Multi-Tenant SaaS Isolation Model',
    'Design an Authentication & Identity Provider (SSO)',
    'Design an Event Streaming Platform (like Kafka)',
    'Design a Time-Series Database System',
    'Design a Distributed Transaction Saga Orchestrator',
    'Design a CI/CD Runner Platform',
    'Design a Centralized Metric Monitoring Dashboard',
    'Design a Video Streaming Platform (like Netflix)',
    'Design a Ticket Booking System (like Ticketmaster)',
    'Design a Ridesharing Platform (like Uber)',
    'Design an E-Commerce Cart & Checkout Service',
    'Design a Notification Dispatch Engine',
    'Design a Web Crawler System',
    'Design a Distributed Configuration Service (ZooKeeper-like)',
    'Design a Multi-tenant Billing & Metering Pipeline',
    'Design a Real-time Collaboration Whiteboard System',
    'Design an Ad-Click Aggregator & Reporting Service',
    'Design a Financial Ledger System (Double-Entry)',
    'Design a High-Throughput IoT Ingestion Pipeline',
    'Design a Geo-Distributed Storage API',
    'Design a Logging Agent & Aggregator (fluentd-like)',
    'Design a Multiplayer Gaming Matchmaker',
    'Design a Code Compilation & Sandbox Execution Engine'
  ]
  
  for (let i = 0; i < additionalTopics.length; i++) {
    const title = additionalTopics[i]
    list.push({
      id: `sysdes-gen-${i+21}`,
      category: 'System Design',
      level: 'Advanced',
      question: title,
      answer: `### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.`,
      explanation: 'Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.',
      realWorldExample: `Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.`,
      followUps: ['How do you handle partition failure?', 'How do you handle duplicate requests?'],
      tags: ['System Design', 'Architecture', 'Scaling']
    })
  }
  return list
}

// Day-by-Day Study Plan Data
const studyPlanData = [
  {
    id: 'day-1',
    day: 'Day 1',
    title: 'Advanced C#',
    objectives: [
      'Understand .NET Memory Management and GC internals.',
      'Master asynchronous programming constructs (ValueTask, Task.Run, ConfigureAwait).',
      'Learn how to write high-performance C# (Span<T>, Memory<T>, ArrayPool<T>).'
    ],
    topics: [
      'Garbage Collection (Gen 0, 1, 2, LOH, SOH, Write Barrier)',
      'Async State Machine & ValueTask',
      'Memory Allocation, Struct vs Class, Boxing/Unboxing',
      'Span<T>, Memory<T>, and Unsafe Code'
    ],
    exercises: [
      'Implement a custom memory pooling pattern using ArrayPool<T>.',
      'Create a lock-free thread-safe stack using Interlocked operations.'
    ],
    codingPractice: `// Implement a high-performance parser using ReadOnlySpan<char>\npublic static int ParseNumber(ReadOnlySpan<char> input) {\n    int result = 0;\n    for (int i = 0; i < input.Length; i++) {\n        result = result * 10 + (input[i] - '0');\n    }\n    return result;\n}`,
    interviewQuestions: [
      'What is the Large Object Heap (LOH) and why is it collected differently?',
      'Why can\'t a Span<T> be a field of a class? How does ref struct enforce this?',
      'Explain the difference between Task and ValueTask in terms of allocation.'
    ],
    notes: 'Focus heavily on allocations. For Senior roles, demonstrating that you write code that avoids Garbage Collection overhead is a massive differentiator.',
    revisionChecklist: [
      'Explain how GC tiered compilation works.',
      'Detail the differences between Task.Run and Task.Factory.StartNew.',
      'Demonstrate when to use a record struct vs a regular struct.'
    ]
  },
  {
    id: 'day-2',
    day: 'Day 2',
    title: 'ASP.NET Core',
    objectives: [
      'Deconstruct the HTTP request pipeline and middleware mechanics.',
      'Master dependency injection lifetimes and captive dependency traps.',
      'Implement robust API versioning, rate limiting, and custom error details.'
    ],
    topics: [
      'Middleware Pipeline, HTTP context, Endpoint Routing',
      'Dependency Injection Lifetimes (Transient, Scoped, Singleton)',
      'Authentication vs Authorization (JWT, OAuth2/OIDC, Custom Policies)',
      'API Versioning, Rate Limiting, Minimal APIs, IExceptionHandler'
    ],
    exercises: [
      'Write a custom middleware that handles exceptions and outputs ProblemDetails JSON.',
      'Configure a custom AuthorizationHandler that validates JWT claims.'
    ],
    codingPractice: `// Register a custom middleware in Program.cs\npublic class RequestLoggingMiddleware {\n    private readonly RequestDelegate _next;\n    public RequestLoggingMiddleware(RequestDelegate next) { _next = next; }\n    public async Task InvokeAsync(HttpContext context) {\n        // Log before request\n        await _next(context);\n        // Log after request\n    }\n}`,
    interviewQuestions: [
      'What is a captive dependency in ASP.NET Core DI and how do you prevent it?',
      'What is the difference between UseAuthentication and UseAuthorization? Why does order matter?',
      'How does minimal APIs achieve better performance than controller-based APIs?'
    ],
    notes: 'DI lifetimes are a standard interview filter. Make sure you can explain why DbContext is scoped, and why injecting it into a Singleton background service is dangerous.',
    revisionChecklist: [
      'Diagram the ASP.NET Core middleware pipeline.',
      'Explain how the Data Protection API works.',
      'Define how rate limiting algorithms are configured.'
    ]
  },
  {
    id: 'day-3',
    day: 'Day 3',
    title: 'Entity Framework Core',
    objectives: [
      'Understand EF Core Change Tracker states and materialization.',
      'Optimize query performance and resolve Cartesian product explosions.',
      'Configure global query filters, interceptors, and optimistic concurrency.'
    ],
    topics: [
      'Change Tracker (Added, Modified, Deleted, Unchanged, Detached)',
      'Eager vs Lazy vs Explicit Loading (Include, ThenInclude, Lazy Proxies)',
      'Query Splitting (AsSplitQuery), Compiled Queries, Projection',
      'Global Query Filters (Soft Delete, Multi-Tenancy), Interceptors'
    ],
    exercises: [
      'Write a query projection that loads specific columns into a DTO and uses compiled queries.',
      'Implement a soft delete filter using HasQueryFilter and DbContext interceptors.'
    ],
    codingPractice: `// Implement soft delete configuration in DbContext\nprotected override void OnModelCreating(ModelBuilder modelBuilder) {\n    modelBuilder.Entity<Order>().HasQueryFilter(o => !o.IsDeleted);\n}\n\npublic override int SaveChanges() {\n    foreach (var entry in ChangeTracker.Entries<Order>()) {\n        if (entry.State == EntityState.Deleted) {\n            entry.State = EntityState.Modified;\n            entry.Entity.IsDeleted = true;\n        }\n    }\n    return base.SaveChanges();\n}`,
    interviewQuestions: [
      'What is the N+1 query problem, and how do you resolve it in EF Core?',
      'What is the difference between AsNoTracking and AsNoTrackingWithIdentityResolution?',
      'How do you handle concurrency conflicts in EF Core using row versions?'
    ],
    notes: 'Always projection! Tell the interviewer that you project reads to DTOs via .Select() so that SQL SELECT statement only pulls columns that the UI actually needs.',
    revisionChecklist: [
      'Write a LINQ query that uses AsSplitQuery.',
      'Set up a shadow property on an entity.',
      'Create an interceptor to inject audit fields.'
    ]
  },
  {
    id: 'day-4',
    day: 'Day 4',
    title: 'SQL Server',
    objectives: [
      'Understand index structures (Clustered vs Non-Clustered B-Trees).',
      'Master transaction isolation levels and concurrency control.',
      'Diagnose query performance using execution plans and query store.'
    ],
    topics: [
      'Clustered vs Non-Clustered Indexes, Index covering, page fragmentation',
      'Transaction Isolation Levels, ACID, locking, deadlocks',
      'Execution Plans, Table scans vs Index seeks, Key lookups',
      'Stored Procedures, Window Functions, CTEs, Temp Tables vs Table Variables'
    ],
    exercises: [
      'Review a query execution plan, identify a Key Lookup, and write a covering index to resolve it.',
      'Write a recursive CTE that traverses a category tree hierarchy.'
    ],
    codingPractice: `-- Create a covering index to prevent Key Lookups\nCREATE NONCLUSTERED INDEX IX_Orders_CustomerId_Status\nON Orders (CustomerId, Status)\nINCLUDE (OrderDate, TotalAmount);`,
    interviewQuestions: [
      'How does a clustered index physical layout differ from a non-clustered index?',
      'Explain how the Snapshot isolation level differs from Read Committed.',
      'What causes a deadlock, and what strategies do you use to mitigate them?'
    ],
    notes: 'Be ready to discuss the trade-offs of index creation. More indexes speed up reads but slow down inserts and updates.',
    revisionChecklist: [
      'Explain B-Tree search mechanisms.',
      'Detail the differences between row locks, page locks, and table locks.',
      'Create a window function query using ROW_NUMBER and PARTITION BY.'
    ]
  },
  {
    id: 'day-5',
    day: 'Day 5',
    title: 'React',
    objectives: [
      'Master React reconciliation, Fiber architecture, and rendering cycles.',
      'Deeply understand standard hooks and concurrent React 18 capabilities.',
      'Implement code splitting, lazy loading, error boundaries, and state management.'
    ],
    topics: [
      'Virtual DOM, Reconciliation, Fiber nodes, keys',
      'Standard Hooks (useState, useEffect, useContext, useRef, useMemo, useCallback)',
      'React 18 Concurrent Mode, useTransition, useDeferredValue',
      'State Management (Context API vs Zustand vs Redux), Performance optimizations'
    ],
    exercises: [
      'Build a custom hook useThrottle that throttles state updates.',
      'Implement an Error Boundary component that displays a fallback UI and logs errors.'
    ],
    codingPractice: `// Implement custom useDebounce hook\nexport function useDebounce(value, delay) {\n    const [debounced, setDebounced] = useState(value);\n    useEffect(() => {\n        const handler = setTimeout(() => setDebounced(value), delay);\n        return () => clearTimeout(handler);\n    }, [value, delay]);\n    return debounced;\n}`,
    interviewQuestions: [
      'Why is the key prop important in React lists? What happens if you use math.random() or index?',
      'Explain how useTransition helps keep user input responsive during expensive re-renders.',
      'What is state hydration in Server-Side Rendering (SSR)?'
    ],
    notes: 'Reconciliation is key. Be prepared to explain how the Diffing algorithm works in O(n) complexity and how keys maintain element identities.',
    revisionChecklist: [
      'Explain the difference between useMemo and useCallback.',
      'Set up code splitting using React.lazy and Suspense.',
      'Analyze render cycles in React.'
    ]
  },
  {
    id: 'day-6',
    day: 'Day 6',
    title: 'Azure',
    objectives: [
      'Leverage serverless capabilities and messaging systems for microservices.',
      'Secure applications using Managed Identities, Key Vault, and RBAC.',
      'Set up Application Insights for comprehensive distributed tracing.'
    ],
    topics: [
      'Azure App Service, deployment slots, custom domains',
      'Azure Key Vault, Managed Identities, secure credentials',
      'Serverless (Azure Functions Consumption/Premium plans, Durable Functions)',
      'Azure Service Bus, API Management (APIM), Application Insights tracing'
    ],
    exercises: [
      'Write a deployment script or pipeline configuration mapping slots swap.',
      'Configure custom APIM inbound XML policies for JWT validation and rate limiting.'
    ],
    codingPractice: `// Retrieve secrets from Key Vault via SecretClient\nvar client = new SecretClient(new Uri("https://myvault.vault.azure.net/"), new DefaultAzureCredential());\nKeyVaultSecret secret = await client.GetSecretAsync("DbConnectionString");\nstring conn = secret.Value;`,
    interviewQuestions: [
      'How does a Managed Identity differ from a Service Principal, and why is it more secure?',
      'Compare Azure Service Bus Queues with Topics. When would you use a subscription filter?',
      'What are the cold start issues in serverless Azure Functions and how do you mitigate them?'
    ],
    notes: 'Azure Security is paramount. Emphasize that in production, you NEVER store database passwords in appsettings.json. You use Azure App Configuration or Key Vault combined with Managed Identities.',
    revisionChecklist: [
      'Configure auto-scaling rules for App Services.',
      'Create a Durable Function orchestrator, activity, and client.',
      'Understand Application Insights telemetry correlation.'
    ]
  },
  {
    id: 'day-7',
    day: 'Day 7',
    title: 'System Design',
    objectives: [
      'Formulate structured frameworks for solving scale and capacity problems.',
      'Select appropriate databases, caching tiers, and partitioning structures.',
      'Design reliable APIs, queues, and distributed orchestration models.'
    ],
    topics: [
      'URL Shortener, Centralized Logging, Device Monitoring platforms',
      'Capacity estimation (reads/writes, storage sizes, network bandwidth)',
      'Database Sharding, Partitioning keys, replication strategies',
      'Distributed Caching (Redis), Message Queues, Rate Limiters, API Gateways'
    ],
    exercises: [
      'Write a full capacity estimation sheet for an e-commerce checkout platform (1M orders/day).',
      'Draw block architecture diagrams for a real-time chat service using WebSockets.'
    ],
    codingPractice: `// System Design API Endpoint Mockup\n[HttpPost("shorten")]\npublic async Task<IActionResult> ShortenUrl([FromBody] ShortenRequest req) {\n    string code = _base62Encoder.Encode(_idGenerator.NextId());\n    await _db.SaveMappingAsync(code, req.LongUrl);\n    await _cache.SetAsync(code, req.LongUrl, TimeSpan.FromDays(30));\n    return Created($"/api/v1/{code}", new { shortUrl = $"https://url.co/{code}" });\n}`,
    interviewQuestions: [
      'How do you design a distributed unique ID generator (like Snowflake) without database sequence locks?',
      'Explain the difference between Push vs Pull models in news feed systems.',
      'What are the trade-offs of using SQL vs NoSQL for an order management database?'
    ],
    notes: 'Structure is everything. Always start with functional and non-functional requirements, estimate scale, draw high-level architecture, design API/DB schema, and deep-dive into bottlenecks.',
    revisionChecklist: [
      'Explain Base62 encoding and hash collisions.',
      'Detail the Saga Pattern (choreography vs orchestration).',
      'Explain how consistent hashing resolves cache node shifts.'
    ]
  },
  {
    id: 'day-8',
    day: 'Day 8',
    title: 'Scenario-Based Questions',
    objectives: [
      'Debug production crashes, high CPU spikes, and memory leak issues.',
      'Investigate distributed locks, deadlocks, and consistency anomalies.',
      'Resolve deployment failures and rollback production bugs gracefully.'
    ],
    topics: [
      'Production crash diagnostics (dumps, trace files, logs)',
      'Performance debugging (memory dumps, LOH allocation, CPU hotspots)',
      'Concurrency issues (Optimistic conflicts, race conditions, stampedes)',
      'Security incidents, data exposure, and configuration rollbacks'
    ],
    exercises: [
      'Trace a diagnostic dump output inside a mock terminal container.',
      'Write a code path that handles cache Stampede using SemaphoreSlim locks.'
    ],
    codingPractice: `// Thread-safe cached fetch preventing cache stampede\nprivate readonly SemaphoreSlim _lock = new SemaphoreSlim(1, 1);\npublic async Task<string> GetCachedDataAsync(string key) {\n    var data = await _cache.GetStringAsync(key);\n    if (data != null) return data;\n    await _lock.WaitAsync();\n    try {\n        data = await _cache.GetStringAsync(key); // Double check\n        if (data == null) {\n            data = await FetchFromDatabaseAsync(key);\n            await _cache.SetStringAsync(key, data, TimeSpan.FromMinutes(5));\n        }\n        return data;\n    } finally { _lock.Release(); }\n}`,
    interviewQuestions: [
      'Your production API response times spike from 50ms to 5 seconds. How do you investigate?',
      'How do you diagnose a memory leak in a long-running .NET background worker?',
      'A customer reports a 503 Service Unavailable during a rolling deployment. What went wrong?'
    ],
    notes: 'Be practical and structured. Interviewers want to see that you do not panic. Explain that you first check alerts, consult logs, check health endpoints, and roll back if a deployment was immediate.',
    revisionChecklist: [
      'Explain how dotnet-gcdump and dotnet-dump are used.',
      'Detail the steps for a post-mortem root-cause analysis.',
      'Solve 5 complex concurrency scenarios.'
    ]
  },
  {
    id: 'day-9',
    day: 'Day 9',
    title: 'Mock Interviews',
    objectives: [
      'Simulate high-pressure technical and behavioral interviews.',
      'Develop clean whiteboard coding patterns and verbal explanations.',
      'Master STAR behavioral answers and system architecture framework.'
    ],
    topics: [
      'Technical Interview Round 1 (C#/.NET fundamentals)',
      'Technical Interview Round 2 (Full stack, React, SQL, Azure)',
      'System Design Interview (Scaling, architecture, DB, trade-offs)',
      'Behavioral & Managerial Interviews (Leadership, STAR method, HR)'
    ],
    exercises: [
      'Run through three full mock interview sessions in simulation mode.',
      'Practice explaining your STAR answers aloud using a timer.'
    ],
    codingPractice: `// Coding Practice: Implement a rate limiter sliding window token count in C#\npublic class SlidingWindowRateLimiter {\n    private readonly Queue<DateTime> _requests = new Queue<DateTime>();\n    private readonly int _limit = 100;\n    private readonly TimeSpan _window = TimeSpan.FromMinutes(1);\n    public bool AllowRequest() {\n        var now = DateTime.UtcNow;\n        lock (_requests) {\n            while (_requests.Count > 0 && now - _requests.Peek() > _window)\n                _requests.Dequeue();\n            if (_requests.Count < _limit) {\n                _requests.Enqueue(now);\n                return true;\n            }\n            return false;\n        }\n    }\n}`,
    interviewQuestions: [
      'Tell me about a time you had a major architecture dispute with a team lead. How was it resolved?',
      'How do you design a payment gateway client to ensure no double-charge on network failure?',
      'Why should we hire you as a Senior .NET / React Engineer?'
    ],
    notes: 'Practice verbalizing your thought process. When writing code, talk about time complexity (O), edge cases (null inputs, empty lists), and testing steps.',
    revisionChecklist: [
      'Pass the Technical Round 1 simulator with a score > 4/5.',
      'Pass the System Design simulator with a score > 4/5.',
      'Review the 10 STAR behavioral answers.'
    ]
  },
  {
    id: 'day-10',
    day: 'Day 10',
    title: 'Final Revision',
    objectives: [
      'Synthesize and review all C#, ASP.NET, React, SQL, Azure, and Architecture notes.',
      'Verify cheat sheets, key acronyms, and questions to ask the interviewer.',
      'Prepare mental clarity, confidence, and strategy for the interview day.'
    ],
    topics: [
      'Core Cheat Sheet & Acronyms Glossary',
      'Fast review of all saved bookmarks and weak categories',
      'Formulating smart questions to ask the interviewer',
      'Interview Mindset: active listening, structured answers, confidence'
    ],
    exercises: [
      'Read through the full Cheat Sheet and Acronyms reference.',
      'Review your Bookmarks list and retry 5 flagged questions.'
    ],
    codingPractice: `// Final checklist clean code snippet\npublic static void Main() {\n    Console.WriteLine("You are prepared, confident, and structured.");\n    Console.WriteLine("Break down the problem, communicate, and succeed!");\n}`,
    interviewQuestions: [
      'What are some major technical challenges your engineering team is facing this quarter?',
      'How does your organization handle technical debt prioritization in sprints?',
      'Can you describe the deployment process and CI/CD pipelines here?'
    ],
    notes: 'Rest! The day before the interview, avoid cramming. Go through key highlights, sleep early, and trust the preparation you have put in.',
    revisionChecklist: [
      'Verify all study days are marked complete in local storage.',
      'Verify streak is active.',
      'Finalize questions for the interview panel.'
    ]
  }
]

// Detailed Theory Data
const theoryData = {
  dotnet: [
    {
      topic: 'Middleware Pipeline',
      definition: 'Middleware is software that is assembled into an application pipeline to handle requests and responses. Each component chooses whether to pass the request to the next component in the pipeline, and can perform work before and after the next component is invoked.',
      architecture: `Client Request → [Logging Middleware] → [Routing Middleware] → [Auth Middleware] → [Endpoint Execution]\n                                                                                                ↓\nClient Response ← [Logging Middleware] ← [Routing Middleware] ← [Auth Middleware] ← [Action Result]`,
      lifecycle: 'Middleware instances are singletons. They are constructed on startup and exist for the lifetime of the application. Inside middleware, scoped dependencies (like DbContext) must be resolved from the HttpContext.RequestServices container rather than injected via the constructor.',
      codeExample: `// Custom middleware implementation\npublic class RequestTimingMiddleware {\n    private readonly RequestDelegate _next;\n    private readonly ILogger<RequestTimingMiddleware> _logger;\n\n    public RequestTimingMiddleware(RequestDelegate next, ILogger<RequestTimingMiddleware> logger) {\n        _next = next;\n        _logger = logger;\n    }\n\n    public async Task InvokeAsync(HttpContext context) {\n        var stopwatch = Stopwatch.StartNew();\n        await _next(context); // Call next middleware\n        stopwatch.Stop();\n        _logger.LogInformation($"Request {context.Request.Path} took {stopwatch.ElapsedMilliseconds}ms");\n    }\n}`,
      interviewQuestions: [
        'What is the difference between app.Use and app.Run?',
        'Why does order matter in the middleware pipeline? Give an example of a bug caused by wrong order.'
      ],
      projectExample: 'Implementing a custom correlation ID middleware that reads X-Correlation-ID from request headers, binds it to Serilog LogContext, and appends it to response headers for distributed tracing.',
      commonMistakes: 'Injecting a Scoped service directly into the middleware constructor. This causes the scoped service to behave like a singleton (captive dependency), which can lead to DbContext concurrency crashes.',
      bestPractices: 'Use builder.Services.AddProblemDetails() combined with app.UseExceptionHandler() to map exceptions to standard RFC 7807 responses.'
    },
    {
      topic: 'Dependency Injection',
      definition: 'Dependency Injection is a software design pattern that implements inversion of control for resolving dependencies, facilitating loose coupling, testability, and maintenance.',
      architecture: 'ServiceCollection (Registration) → ServiceProvider (Resolution) → Instances (Transient, Scoped, Singleton)',
      lifecycle: 'Transient: Created every time requested. Scoped: Created once per request/scope. Singleton: Created once on first request and shared for application lifetime.',
      codeExample: `// Register services in Program.cs\nbuilder.Services.AddTransient<IEmailService, SmtpEmailService>();\nbuilder.Services.AddScoped<IOrderRepository, SqlOrderRepository>();\nbuilder.Services.AddSingleton<ICacheService, RedisCacheService>();`,
      interviewQuestions: [
        'What is a captive dependency?',
        'When should you register a service as Scoped vs Transient?'
      ],
      projectExample: 'Using IDbContextFactory<T> to create short-lived DbContext instances inside a Singleton background worker processing RabbitMQ events.',
      commonMistakes: 'Registering a database context as Transient or using a Scoped service inside a background thread without creating an explicit scope.',
      bestPractices: 'Verify DI scope constraints at startup by enabling ValidateScopes on the host builder.'
    }
  ],
  react: [
    {
      topic: 'Hooks Lifecycle',
      explanation: 'Hooks allow functional components to use state, context, refs, and side effects. They must be called at the top level of a component and only from React functions. Under the hood, React tracks hook state based on the call order of array index nodes.',
      codeExample: `// Custom hook that manages window sizing\nexport function useWindowSize() {\n    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });\n    useEffect(() => {\n        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });\n        window.addEventListener('resize', handleResize);\n        return () => window.removeEventListener('resize', handleResize);\n    }, []);\n    return size;\n}`,
      interviewQuestions: [
        'Why can hooks only be called at the top level of a component?',
        'What is the difference between useMemo and useCallback? When do they actually help?'
      ],
      advancedQuestions: 'How does the React 18 scheduling engine prioritize transitions using startTransition vs normal state updates?',
      bestPractices: 'Always list all dependencies inside the useEffect array. Use eslint-plugin-react-hooks to enforce rules.'
    }
  ],
  sql: [
    {
      topic: 'Index B-Tree Structure',
      theory: 'Indexes speed up data retrieval. A clustered index determines the physical order of rows in a table (B-Tree leaf nodes contain data pages). A non-clustered index creates a separate structure (leaf nodes contain row locators).',
      examples: `// Create non-clustered covering index\nCREATE NONCLUSTERED INDEX IX_Orders_CustomerId\nON Orders (CustomerId)\nINCLUDE (TotalAmount, OrderDate);`,
      visualExplanation: 'Root Node (search range) → Intermediate Nodes (navigational pointers) → Leaf Nodes (actual data for clustered, pointers for non-clustered)',
      interviewQuestions: [
        'What is a Key Lookup and why is it expensive? How does an index INCLUDE clause resolve it?',
        'How do index page splits affect write performance?'
      ],
      realWorldScenario: 'An order search query taking 8 seconds is optimized to 12ms by adding a compound covering index matching the WHERE and SELECT projections.'
    }
  ],
  azure: [
    {
      topic: 'Azure Service Bus',
      definition: 'Azure Service Bus is a fully managed enterprise message broker with message queues and publish-subscribe topics.',
      whyUseIt: 'It provides reliable asynchronous inter-service communication, load leveling, decoupling, and high scalability for distributed microservices.',
      architectureDiagram: 'Sender → Topic → [Subscription Filter A] → Queue A → Consumer A\n                  → [Subscription Filter B] → Queue B → Consumer B',
      interviewQuestions: [
        'What is duplicate detection in Azure Service Bus and how do you configure it?',
        'How does the Dead-Letter Queue (DLQ) work, and how do you process poison messages?'
      ],
      projectExample: 'Processing orders: Checkout service publishes OrderCreated event to Service Bus Topic. Shipping and Notification services subscribe independently to perform downstream tasks.',
      commonMistakes: 'Not setting message TTL, resulting in orphaned messages filling up the queue and blocking writes.',
      bestPractices: 'Enable sessions for FIFO message ordering requirements, and utilize exponential backoff retries.'
    }
  ],
  systemDesign: [
    {
      topic: 'URL Shortener',
      requirements: 'Functional: shorten URLs, redirect to original. Non-functional: high availability, latency < 50ms, 100M shortening requests/day.',
      capacityEstimation: 'Daily writes: 100M. Reads: 1B. Storage: 100M * 500 bytes = 50GB/day. Bandwidth: 1B * 500 bytes / 86400s = 5.7MB/s.',
      apiDesign: 'POST /api/v1/shorten { longUrl } → returns { shortUrl }\nGET /v1/{shortCode} → returns 301/302 Redirect to longUrl',
      databaseDesign: 'Table url_mappings (id: BIGINT PK, short_code: VARCHAR UNIQUE, long_url: TEXT, created_at: DATETIME)',
      cachingStrategy: 'Cache hot redirects in Redis using short_code as key. TTL: 30 days. Eviction: LRU.',
      scalingStrategy: 'Read replicas for database redirects. Sharding by short_code hash. CDNs to cache redirections closer to users.',
      security: 'Rate limiting on shortening APIs, whitelist checks for malicious domains, SQL injection parameterizations.',
      tradeOffs: 'Choose eventual consistency for analytics counts. Redirect uses 302 (temporary) so browser checks the server, capturing analytics clicks.',
      architectureDiagram: 'Client → Load Balancer → API Server → Redis (Cache Hit) → Redirect\n                                       ↓\n                                  SQL Server DB (Cache Miss)',
      interviewAnswerFramework: '1. Establish requirements, 2. Estimate capacity, 3. Design APIs, 4. Detail DB schema + caching, 5. Explain sharding/scaling bottlenecks.'
    }
  ],
  architecture: [
    {
      topic: 'Clean Architecture',
      theory: 'Clean Architecture organizes code into concentric layers where dependencies point inward. Inner layers (Domain, Application) contain business logic and know nothing of external concerns (Infrastructure, DB, API).',
      codeExample: `// Inner Domain Entity (No dependencies)\npublic class Order {\n    public int Id { get; set; }\n    public decimal TotalAmount { get; set; }\n}\n\n// Application Interface\npublic interface IOrderRepository {\n    Task SaveAsync(Order order);\n}`,
      advantages: 'Independent of database, framework, and UI. Highly testable (business logic can be fully unit tested with mocks). Loose coupling.',
      disadvantages: 'Creates a higher number of classes, mappings, and interface boilerplate. Overkill for simple CRUD apps.',
      interviewQuestions: [
        'How does Clean Architecture enforce the Dependency Inversion Principle?',
        'Why shouldn\'t the Domain layer reference Entity Framework Core packages?'
      ]
    }
  ]
}

// Write the output files
mkdirSync(join(process.cwd(), 'src', 'data'), { recursive: true })

writeFileSync(
  join(process.cwd(), 'src', 'data', 'questionBankData.ts'),
  `import { type InterviewQuestion } from '../types.ts'

export const questionData: InterviewQuestion[] = ${JSON.stringify(
    [
      ...parseQnA(readFileSync(join(base, '02_CSharp_Interview_Questions.txt'), 'utf8'), 'C#'),
      ...parseQnA(readFileSync(join(base, '03_DotNET_Application_Development.txt'), 'utf8'), 'ASP.NET Core'),
      ...generateReactQuestions(),
      ...generateSqlQuestions(),
      ...generateAzureQuestions(),
      ...generateBehavioralQuestions(),
      ...generateSystemDesignQuestions(parseSystemDesign(readFileSync(join(base, '09_System_Design.txt'), 'utf8')))
    ],
    null,
    2
  )}
`
)

writeFileSync(
  join(process.cwd(), 'src', 'data', 'mockInterviewData.ts'),
  `import type { MockInterviewItem } from '../types.ts'

export const mockInterviewData: MockInterviewItem[] = ${JSON.stringify(
    parseMockInterviews(readFileSync(join(base, '11_Mock_Interviews.txt'), 'utf8')),
    null,
    2
  )}
`
)

writeFileSync(
  join(process.cwd(), 'src', 'data', 'scenariosData.ts'),
  `import type { ProductionScenario } from '../types.ts'

export const scenariosData: ProductionScenario[] = ${JSON.stringify(
    [
      ...parseScenarios(readFileSync(join(base, '10_Scenario_Based_Questions.txt'), 'utf8')),
      ...parseScenarios(readFileSync(join(base, 'Appendix_A_Extended_Scenarios.txt'), 'utf8'))
    ],
    null,
    2
  )}
`
)

writeFileSync(
  join(process.cwd(), 'src', 'data', 'studyPlanData.ts'),
  `import type { StudyPlanDay } from '../types.ts'

export const studyPlanData: StudyPlanDay[] = ${JSON.stringify(studyPlanData, null, 2)}
`
)

writeFileSync(
  join(process.cwd(), 'src', 'data', 'theoryData.ts'),
  `export const theoryData = ${JSON.stringify(theoryData, null, 2)}
`
)

console.log('✓ Successfully generated all TS data files!')
