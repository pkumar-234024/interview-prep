import type { StudyPlanDay } from '../types.ts'

export const studyPlanData: StudyPlanDay[] = [
  {
    "id": "day-1",
    "day": "Day 1",
    "title": "Advanced C#",
    "objectives": [
      "Understand .NET Memory Management and GC internals.",
      "Master asynchronous programming constructs (ValueTask, Task.Run, ConfigureAwait).",
      "Learn how to write high-performance C# (Span<T>, Memory<T>, ArrayPool<T>)."
    ],
    "topics": [
      "Garbage Collection (Gen 0, 1, 2, LOH, SOH, Write Barrier)",
      "Async State Machine & ValueTask",
      "Memory Allocation, Struct vs Class, Boxing/Unboxing",
      "Span<T>, Memory<T>, and Unsafe Code"
    ],
    "exercises": [
      "Implement a custom memory pooling pattern using ArrayPool<T>.",
      "Create a lock-free thread-safe stack using Interlocked operations."
    ],
    "codingPractice": "// Implement a high-performance parser using ReadOnlySpan<char>\npublic static int ParseNumber(ReadOnlySpan<char> input) {\n    int result = 0;\n    for (int i = 0; i < input.Length; i++) {\n        result = result * 10 + (input[i] - '0');\n    }\n    return result;\n}",
    "interviewQuestions": [
      "What is the Large Object Heap (LOH) and why is it collected differently?",
      "Why can't a Span<T> be a field of a class? How does ref struct enforce this?",
      "Explain the difference between Task and ValueTask in terms of allocation."
    ],
    "notes": "Focus heavily on allocations. For Senior roles, demonstrating that you write code that avoids Garbage Collection overhead is a massive differentiator.",
    "revisionChecklist": [
      "Explain how GC tiered compilation works.",
      "Detail the differences between Task.Run and Task.Factory.StartNew.",
      "Demonstrate when to use a record struct vs a regular struct."
    ]
  },
  {
    "id": "day-2",
    "day": "Day 2",
    "title": "ASP.NET Core",
    "objectives": [
      "Deconstruct the HTTP request pipeline and middleware mechanics.",
      "Master dependency injection lifetimes and captive dependency traps.",
      "Implement robust API versioning, rate limiting, and custom error details."
    ],
    "topics": [
      "Middleware Pipeline, HTTP context, Endpoint Routing",
      "Dependency Injection Lifetimes (Transient, Scoped, Singleton)",
      "Authentication vs Authorization (JWT, OAuth2/OIDC, Custom Policies)",
      "API Versioning, Rate Limiting, Minimal APIs, IExceptionHandler"
    ],
    "exercises": [
      "Write a custom middleware that handles exceptions and outputs ProblemDetails JSON.",
      "Configure a custom AuthorizationHandler that validates JWT claims."
    ],
    "codingPractice": "// Register a custom middleware in Program.cs\npublic class RequestLoggingMiddleware {\n    private readonly RequestDelegate _next;\n    public RequestLoggingMiddleware(RequestDelegate next) { _next = next; }\n    public async Task InvokeAsync(HttpContext context) {\n        // Log before request\n        await _next(context);\n        // Log after request\n    }\n}",
    "interviewQuestions": [
      "What is a captive dependency in ASP.NET Core DI and how do you prevent it?",
      "What is the difference between UseAuthentication and UseAuthorization? Why does order matter?",
      "How does minimal APIs achieve better performance than controller-based APIs?"
    ],
    "notes": "DI lifetimes are a standard interview filter. Make sure you can explain why DbContext is scoped, and why injecting it into a Singleton background service is dangerous.",
    "revisionChecklist": [
      "Diagram the ASP.NET Core middleware pipeline.",
      "Explain how the Data Protection API works.",
      "Define how rate limiting algorithms are configured."
    ]
  },
  {
    "id": "day-3",
    "day": "Day 3",
    "title": "Entity Framework Core",
    "objectives": [
      "Understand EF Core Change Tracker states and materialization.",
      "Optimize query performance and resolve Cartesian product explosions.",
      "Configure global query filters, interceptors, and optimistic concurrency."
    ],
    "topics": [
      "Change Tracker (Added, Modified, Deleted, Unchanged, Detached)",
      "Eager vs Lazy vs Explicit Loading (Include, ThenInclude, Lazy Proxies)",
      "Query Splitting (AsSplitQuery), Compiled Queries, Projection",
      "Global Query Filters (Soft Delete, Multi-Tenancy), Interceptors"
    ],
    "exercises": [
      "Write a query projection that loads specific columns into a DTO and uses compiled queries.",
      "Implement a soft delete filter using HasQueryFilter and DbContext interceptors."
    ],
    "codingPractice": "// Implement soft delete configuration in DbContext\nprotected override void OnModelCreating(ModelBuilder modelBuilder) {\n    modelBuilder.Entity<Order>().HasQueryFilter(o => !o.IsDeleted);\n}\n\npublic override int SaveChanges() {\n    foreach (var entry in ChangeTracker.Entries<Order>()) {\n        if (entry.State == EntityState.Deleted) {\n            entry.State = EntityState.Modified;\n            entry.Entity.IsDeleted = true;\n        }\n    }\n    return base.SaveChanges();\n}",
    "interviewQuestions": [
      "What is the N+1 query problem, and how do you resolve it in EF Core?",
      "What is the difference between AsNoTracking and AsNoTrackingWithIdentityResolution?",
      "How do you handle concurrency conflicts in EF Core using row versions?"
    ],
    "notes": "Always projection! Tell the interviewer that you project reads to DTOs via .Select() so that SQL SELECT statement only pulls columns that the UI actually needs.",
    "revisionChecklist": [
      "Write a LINQ query that uses AsSplitQuery.",
      "Set up a shadow property on an entity.",
      "Create an interceptor to inject audit fields."
    ]
  },
  {
    "id": "day-4",
    "day": "Day 4",
    "title": "SQL Server",
    "objectives": [
      "Understand index structures (Clustered vs Non-Clustered B-Trees).",
      "Master transaction isolation levels and concurrency control.",
      "Diagnose query performance using execution plans and query store."
    ],
    "topics": [
      "Clustered vs Non-Clustered Indexes, Index covering, page fragmentation",
      "Transaction Isolation Levels, ACID, locking, deadlocks",
      "Execution Plans, Table scans vs Index seeks, Key lookups",
      "Stored Procedures, Window Functions, CTEs, Temp Tables vs Table Variables"
    ],
    "exercises": [
      "Review a query execution plan, identify a Key Lookup, and write a covering index to resolve it.",
      "Write a recursive CTE that traverses a category tree hierarchy."
    ],
    "codingPractice": "-- Create a covering index to prevent Key Lookups\nCREATE NONCLUSTERED INDEX IX_Orders_CustomerId_Status\nON Orders (CustomerId, Status)\nINCLUDE (OrderDate, TotalAmount);",
    "interviewQuestions": [
      "How does a clustered index physical layout differ from a non-clustered index?",
      "Explain how the Snapshot isolation level differs from Read Committed.",
      "What causes a deadlock, and what strategies do you use to mitigate them?"
    ],
    "notes": "Be ready to discuss the trade-offs of index creation. More indexes speed up reads but slow down inserts and updates.",
    "revisionChecklist": [
      "Explain B-Tree search mechanisms.",
      "Detail the differences between row locks, page locks, and table locks.",
      "Create a window function query using ROW_NUMBER and PARTITION BY."
    ]
  },
  {
    "id": "day-5",
    "day": "Day 5",
    "title": "React",
    "objectives": [
      "Master React reconciliation, Fiber architecture, and rendering cycles.",
      "Deeply understand standard hooks and concurrent React 18 capabilities.",
      "Implement code splitting, lazy loading, error boundaries, and state management."
    ],
    "topics": [
      "Virtual DOM, Reconciliation, Fiber nodes, keys",
      "Standard Hooks (useState, useEffect, useContext, useRef, useMemo, useCallback)",
      "React 18 Concurrent Mode, useTransition, useDeferredValue",
      "State Management (Context API vs Zustand vs Redux), Performance optimizations"
    ],
    "exercises": [
      "Build a custom hook useThrottle that throttles state updates.",
      "Implement an Error Boundary component that displays a fallback UI and logs errors."
    ],
    "codingPractice": "// Implement custom useDebounce hook\nexport function useDebounce(value, delay) {\n    const [debounced, setDebounced] = useState(value);\n    useEffect(() => {\n        const handler = setTimeout(() => setDebounced(value), delay);\n        return () => clearTimeout(handler);\n    }, [value, delay]);\n    return debounced;\n}",
    "interviewQuestions": [
      "Why is the key prop important in React lists? What happens if you use math.random() or index?",
      "Explain how useTransition helps keep user input responsive during expensive re-renders.",
      "What is state hydration in Server-Side Rendering (SSR)?"
    ],
    "notes": "Reconciliation is key. Be prepared to explain how the Diffing algorithm works in O(n) complexity and how keys maintain element identities.",
    "revisionChecklist": [
      "Explain the difference between useMemo and useCallback.",
      "Set up code splitting using React.lazy and Suspense.",
      "Analyze render cycles in React."
    ]
  },
  {
    "id": "day-6",
    "day": "Day 6",
    "title": "Azure",
    "objectives": [
      "Leverage serverless capabilities and messaging systems for microservices.",
      "Secure applications using Managed Identities, Key Vault, and RBAC.",
      "Set up Application Insights for comprehensive distributed tracing."
    ],
    "topics": [
      "Azure App Service, deployment slots, custom domains",
      "Azure Key Vault, Managed Identities, secure credentials",
      "Serverless (Azure Functions Consumption/Premium plans, Durable Functions)",
      "Azure Service Bus, API Management (APIM), Application Insights tracing"
    ],
    "exercises": [
      "Write a deployment script or pipeline configuration mapping slots swap.",
      "Configure custom APIM inbound XML policies for JWT validation and rate limiting."
    ],
    "codingPractice": "// Retrieve secrets from Key Vault via SecretClient\nvar client = new SecretClient(new Uri(\"https://myvault.vault.azure.net/\"), new DefaultAzureCredential());\nKeyVaultSecret secret = await client.GetSecretAsync(\"DbConnectionString\");\nstring conn = secret.Value;",
    "interviewQuestions": [
      "How does a Managed Identity differ from a Service Principal, and why is it more secure?",
      "Compare Azure Service Bus Queues with Topics. When would you use a subscription filter?",
      "What are the cold start issues in serverless Azure Functions and how do you mitigate them?"
    ],
    "notes": "Azure Security is paramount. Emphasize that in production, you NEVER store database passwords in appsettings.json. You use Azure App Configuration or Key Vault combined with Managed Identities.",
    "revisionChecklist": [
      "Configure auto-scaling rules for App Services.",
      "Create a Durable Function orchestrator, activity, and client.",
      "Understand Application Insights telemetry correlation."
    ]
  },
  {
    "id": "day-7",
    "day": "Day 7",
    "title": "System Design",
    "objectives": [
      "Formulate structured frameworks for solving scale and capacity problems.",
      "Select appropriate databases, caching tiers, and partitioning structures.",
      "Design reliable APIs, queues, and distributed orchestration models."
    ],
    "topics": [
      "URL Shortener, Centralized Logging, Device Monitoring platforms",
      "Capacity estimation (reads/writes, storage sizes, network bandwidth)",
      "Database Sharding, Partitioning keys, replication strategies",
      "Distributed Caching (Redis), Message Queues, Rate Limiters, API Gateways"
    ],
    "exercises": [
      "Write a full capacity estimation sheet for an e-commerce checkout platform (1M orders/day).",
      "Draw block architecture diagrams for a real-time chat service using WebSockets."
    ],
    "codingPractice": "// System Design API Endpoint Mockup\n[HttpPost(\"shorten\")]\npublic async Task<IActionResult> ShortenUrl([FromBody] ShortenRequest req) {\n    string code = _base62Encoder.Encode(_idGenerator.NextId());\n    await _db.SaveMappingAsync(code, req.LongUrl);\n    await _cache.SetAsync(code, req.LongUrl, TimeSpan.FromDays(30));\n    return Created($\"/api/v1/{code}\", new { shortUrl = $\"https://url.co/{code}\" });\n}",
    "interviewQuestions": [
      "How do you design a distributed unique ID generator (like Snowflake) without database sequence locks?",
      "Explain the difference between Push vs Pull models in news feed systems.",
      "What are the trade-offs of using SQL vs NoSQL for an order management database?"
    ],
    "notes": "Structure is everything. Always start with functional and non-functional requirements, estimate scale, draw high-level architecture, design API/DB schema, and deep-dive into bottlenecks.",
    "revisionChecklist": [
      "Explain Base62 encoding and hash collisions.",
      "Detail the Saga Pattern (choreography vs orchestration).",
      "Explain how consistent hashing resolves cache node shifts."
    ]
  },
  {
    "id": "day-8",
    "day": "Day 8",
    "title": "Scenario-Based Questions",
    "objectives": [
      "Debug production crashes, high CPU spikes, and memory leak issues.",
      "Investigate distributed locks, deadlocks, and consistency anomalies.",
      "Resolve deployment failures and rollback production bugs gracefully."
    ],
    "topics": [
      "Production crash diagnostics (dumps, trace files, logs)",
      "Performance debugging (memory dumps, LOH allocation, CPU hotspots)",
      "Concurrency issues (Optimistic conflicts, race conditions, stampedes)",
      "Security incidents, data exposure, and configuration rollbacks"
    ],
    "exercises": [
      "Trace a diagnostic dump output inside a mock terminal container.",
      "Write a code path that handles cache Stampede using SemaphoreSlim locks."
    ],
    "codingPractice": "// Thread-safe cached fetch preventing cache stampede\nprivate readonly SemaphoreSlim _lock = new SemaphoreSlim(1, 1);\npublic async Task<string> GetCachedDataAsync(string key) {\n    var data = await _cache.GetStringAsync(key);\n    if (data != null) return data;\n    await _lock.WaitAsync();\n    try {\n        data = await _cache.GetStringAsync(key); // Double check\n        if (data == null) {\n            data = await FetchFromDatabaseAsync(key);\n            await _cache.SetStringAsync(key, data, TimeSpan.FromMinutes(5));\n        }\n        return data;\n    } finally { _lock.Release(); }\n}",
    "interviewQuestions": [
      "Your production API response times spike from 50ms to 5 seconds. How do you investigate?",
      "How do you diagnose a memory leak in a long-running .NET background worker?",
      "A customer reports a 503 Service Unavailable during a rolling deployment. What went wrong?"
    ],
    "notes": "Be practical and structured. Interviewers want to see that you do not panic. Explain that you first check alerts, consult logs, check health endpoints, and roll back if a deployment was immediate.",
    "revisionChecklist": [
      "Explain how dotnet-gcdump and dotnet-dump are used.",
      "Detail the steps for a post-mortem root-cause analysis.",
      "Solve 5 complex concurrency scenarios."
    ]
  },
  {
    "id": "day-9",
    "day": "Day 9",
    "title": "Mock Interviews",
    "objectives": [
      "Simulate high-pressure technical and behavioral interviews.",
      "Develop clean whiteboard coding patterns and verbal explanations.",
      "Master STAR behavioral answers and system architecture framework."
    ],
    "topics": [
      "Technical Interview Round 1 (C#/.NET fundamentals)",
      "Technical Interview Round 2 (Full stack, React, SQL, Azure)",
      "System Design Interview (Scaling, architecture, DB, trade-offs)",
      "Behavioral & Managerial Interviews (Leadership, STAR method, HR)"
    ],
    "exercises": [
      "Run through three full mock interview sessions in simulation mode.",
      "Practice explaining your STAR answers aloud using a timer."
    ],
    "codingPractice": "// Coding Practice: Implement a rate limiter sliding window token count in C#\npublic class SlidingWindowRateLimiter {\n    private readonly Queue<DateTime> _requests = new Queue<DateTime>();\n    private readonly int _limit = 100;\n    private readonly TimeSpan _window = TimeSpan.FromMinutes(1);\n    public bool AllowRequest() {\n        var now = DateTime.UtcNow;\n        lock (_requests) {\n            while (_requests.Count > 0 && now - _requests.Peek() > _window)\n                _requests.Dequeue();\n            if (_requests.Count < _limit) {\n                _requests.Enqueue(now);\n                return true;\n            }\n            return false;\n        }\n    }\n}",
    "interviewQuestions": [
      "Tell me about a time you had a major architecture dispute with a team lead. How was it resolved?",
      "How do you design a payment gateway client to ensure no double-charge on network failure?",
      "Why should we hire you as a Senior .NET / React Engineer?"
    ],
    "notes": "Practice verbalizing your thought process. When writing code, talk about time complexity (O), edge cases (null inputs, empty lists), and testing steps.",
    "revisionChecklist": [
      "Pass the Technical Round 1 simulator with a score > 4/5.",
      "Pass the System Design simulator with a score > 4/5.",
      "Review the 10 STAR behavioral answers."
    ]
  },
  {
    "id": "day-10",
    "day": "Day 10",
    "title": "Final Revision",
    "objectives": [
      "Synthesize and review all C#, ASP.NET, React, SQL, Azure, and Architecture notes.",
      "Verify cheat sheets, key acronyms, and questions to ask the interviewer.",
      "Prepare mental clarity, confidence, and strategy for the interview day."
    ],
    "topics": [
      "Core Cheat Sheet & Acronyms Glossary",
      "Fast review of all saved bookmarks and weak categories",
      "Formulating smart questions to ask the interviewer",
      "Interview Mindset: active listening, structured answers, confidence"
    ],
    "exercises": [
      "Read through the full Cheat Sheet and Acronyms reference.",
      "Review your Bookmarks list and retry 5 flagged questions."
    ],
    "codingPractice": "// Final checklist clean code snippet\npublic static void Main() {\n    Console.WriteLine(\"You are prepared, confident, and structured.\");\n    Console.WriteLine(\"Break down the problem, communicate, and succeed!\");\n}",
    "interviewQuestions": [
      "What are some major technical challenges your engineering team is facing this quarter?",
      "How does your organization handle technical debt prioritization in sprints?",
      "Can you describe the deployment process and CI/CD pipelines here?"
    ],
    "notes": "Rest! The day before the interview, avoid cramming. Go through key highlights, sleep early, and trust the preparation you have put in.",
    "revisionChecklist": [
      "Verify all study days are marked complete in local storage.",
      "Verify streak is active.",
      "Finalize questions for the interview panel."
    ]
  }
]
