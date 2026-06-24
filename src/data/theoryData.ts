export const theoryData = {
  "dotnet": [
    {
      "topic": "Middleware Pipeline",
      "definition": "Middleware is software that is assembled into an application pipeline to handle requests and responses. Each component chooses whether to pass the request to the next component in the pipeline, and can perform work before and after the next component is invoked.",
      "architecture": "Client Request → [Logging Middleware] → [Routing Middleware] → [Auth Middleware] → [Endpoint Execution]\n                                                                                                ↓\nClient Response ← [Logging Middleware] ← [Routing Middleware] ← [Auth Middleware] ← [Action Result]",
      "lifecycle": "Middleware instances are singletons. They are constructed on startup and exist for the lifetime of the application. Inside middleware, scoped dependencies (like DbContext) must be resolved from the HttpContext.RequestServices container rather than injected via the constructor.",
      "codeExample": "// Custom middleware implementation\npublic class RequestTimingMiddleware {\n    private readonly RequestDelegate _next;\n    private readonly ILogger<RequestTimingMiddleware> _logger;\n\n    public RequestTimingMiddleware(RequestDelegate next, ILogger<RequestTimingMiddleware> logger) {\n        _next = next;\n        _logger = logger;\n    }\n\n    public async Task InvokeAsync(HttpContext context) {\n        var stopwatch = Stopwatch.StartNew();\n        await _next(context); // Call next middleware\n        stopwatch.Stop();\n        _logger.LogInformation($\"Request {context.Request.Path} took {stopwatch.ElapsedMilliseconds}ms\");\n    }\n}",
      "interviewQuestions": [
        "What is the difference between app.Use and app.Run?",
        "Why does order matter in the middleware pipeline? Give an example of a bug caused by wrong order."
      ],
      "projectExample": "Implementing a custom correlation ID middleware that reads X-Correlation-ID from request headers, binds it to Serilog LogContext, and appends it to response headers for distributed tracing.",
      "commonMistakes": "Injecting a Scoped service directly into the middleware constructor. This causes the scoped service to behave like a singleton (captive dependency), which can lead to DbContext concurrency crashes.",
      "bestPractices": "Use builder.Services.AddProblemDetails() combined with app.UseExceptionHandler() to map exceptions to standard RFC 7807 responses."
    },
    {
      "topic": "Dependency Injection",
      "definition": "Dependency Injection is a software design pattern that implements inversion of control for resolving dependencies, facilitating loose coupling, testability, and maintenance.",
      "architecture": "ServiceCollection (Registration) → ServiceProvider (Resolution) → Instances (Transient, Scoped, Singleton)",
      "lifecycle": "Transient: Created every time requested. Scoped: Created once per request/scope. Singleton: Created once on first request and shared for application lifetime.",
      "codeExample": "// Register services in Program.cs\nbuilder.Services.AddTransient<IEmailService, SmtpEmailService>();\nbuilder.Services.AddScoped<IOrderRepository, SqlOrderRepository>();\nbuilder.Services.AddSingleton<ICacheService, RedisCacheService>();",
      "interviewQuestions": [
        "What is a captive dependency?",
        "When should you register a service as Scoped vs Transient?"
      ],
      "projectExample": "Using IDbContextFactory<T> to create short-lived DbContext instances inside a Singleton background worker processing RabbitMQ events.",
      "commonMistakes": "Registering a database context as Transient or using a Scoped service inside a background thread without creating an explicit scope.",
      "bestPractices": "Verify DI scope constraints at startup by enabling ValidateScopes on the host builder."
    }
  ],
  "react": [
    {
      "topic": "Hooks Lifecycle",
      "explanation": "Hooks allow functional components to use state, context, refs, and side effects. They must be called at the top level of a component and only from React functions. Under the hood, React tracks hook state based on the call order of array index nodes.",
      "codeExample": "// Custom hook that manages window sizing\nexport function useWindowSize() {\n    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });\n    useEffect(() => {\n        const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });\n        window.addEventListener('resize', handleResize);\n        return () => window.removeEventListener('resize', handleResize);\n    }, []);\n    return size;\n}",
      "interviewQuestions": [
        "Why can hooks only be called at the top level of a component?",
        "What is the difference between useMemo and useCallback? When do they actually help?"
      ],
      "advancedQuestions": "How does the React 18 scheduling engine prioritize transitions using startTransition vs normal state updates?",
      "bestPractices": "Always list all dependencies inside the useEffect array. Use eslint-plugin-react-hooks to enforce rules."
    }
  ],
  "sql": [
    {
      "topic": "Index B-Tree Structure",
      "theory": "Indexes speed up data retrieval. A clustered index determines the physical order of rows in a table (B-Tree leaf nodes contain data pages). A non-clustered index creates a separate structure (leaf nodes contain row locators).",
      "examples": "// Create non-clustered covering index\nCREATE NONCLUSTERED INDEX IX_Orders_CustomerId\nON Orders (CustomerId)\nINCLUDE (TotalAmount, OrderDate);",
      "visualExplanation": "Root Node (search range) → Intermediate Nodes (navigational pointers) → Leaf Nodes (actual data for clustered, pointers for non-clustered)",
      "interviewQuestions": [
        "What is a Key Lookup and why is it expensive? How does an index INCLUDE clause resolve it?",
        "How do index page splits affect write performance?"
      ],
      "realWorldScenario": "An order search query taking 8 seconds is optimized to 12ms by adding a compound covering index matching the WHERE and SELECT projections."
    }
  ],
  "azure": [
    {
      "topic": "Azure Service Bus",
      "definition": "Azure Service Bus is a fully managed enterprise message broker with message queues and publish-subscribe topics.",
      "whyUseIt": "It provides reliable asynchronous inter-service communication, load leveling, decoupling, and high scalability for distributed microservices.",
      "architectureDiagram": "Sender → Topic → [Subscription Filter A] → Queue A → Consumer A\n                  → [Subscription Filter B] → Queue B → Consumer B",
      "interviewQuestions": [
        "What is duplicate detection in Azure Service Bus and how do you configure it?",
        "How does the Dead-Letter Queue (DLQ) work, and how do you process poison messages?"
      ],
      "projectExample": "Processing orders: Checkout service publishes OrderCreated event to Service Bus Topic. Shipping and Notification services subscribe independently to perform downstream tasks.",
      "commonMistakes": "Not setting message TTL, resulting in orphaned messages filling up the queue and blocking writes.",
      "bestPractices": "Enable sessions for FIFO message ordering requirements, and utilize exponential backoff retries."
    }
  ],
  "systemDesign": [
    {
      "topic": "URL Shortener",
      "requirements": "Functional: shorten URLs, redirect to original. Non-functional: high availability, latency < 50ms, 100M shortening requests/day.",
      "capacityEstimation": "Daily writes: 100M. Reads: 1B. Storage: 100M * 500 bytes = 50GB/day. Bandwidth: 1B * 500 bytes / 86400s = 5.7MB/s.",
      "apiDesign": "POST /api/v1/shorten { longUrl } → returns { shortUrl }\nGET /v1/{shortCode} → returns 301/302 Redirect to longUrl",
      "databaseDesign": "Table url_mappings (id: BIGINT PK, short_code: VARCHAR UNIQUE, long_url: TEXT, created_at: DATETIME)",
      "cachingStrategy": "Cache hot redirects in Redis using short_code as key. TTL: 30 days. Eviction: LRU.",
      "scalingStrategy": "Read replicas for database redirects. Sharding by short_code hash. CDNs to cache redirections closer to users.",
      "security": "Rate limiting on shortening APIs, whitelist checks for malicious domains, SQL injection parameterizations.",
      "tradeOffs": "Choose eventual consistency for analytics counts. Redirect uses 302 (temporary) so browser checks the server, capturing analytics clicks.",
      "architectureDiagram": "Client → Load Balancer → API Server → Redis (Cache Hit) → Redirect\n                                       ↓\n                                  SQL Server DB (Cache Miss)",
      "interviewAnswerFramework": "1. Establish requirements, 2. Estimate capacity, 3. Design APIs, 4. Detail DB schema + caching, 5. Explain sharding/scaling bottlenecks."
    }
  ],
  "architecture": [
    {
      "topic": "Clean Architecture",
      "theory": "Clean Architecture organizes code into concentric layers where dependencies point inward. Inner layers (Domain, Application) contain business logic and know nothing of external concerns (Infrastructure, DB, API).",
      "codeExample": "// Inner Domain Entity (No dependencies)\npublic class Order {\n    public int Id { get; set; }\n    public decimal TotalAmount { get; set; }\n}\n\n// Application Interface\npublic interface IOrderRepository {\n    Task SaveAsync(Order order);\n}",
      "advantages": "Independent of database, framework, and UI. Highly testable (business logic can be fully unit tested with mocks). Loose coupling.",
      "disadvantages": "Creates a higher number of classes, mappings, and interface boilerplate. Overkill for simple CRUD apps.",
      "interviewQuestions": [
        "How does Clean Architecture enforce the Dependency Inversion Principle?",
        "Why shouldn't the Domain layer reference Entity Framework Core packages?"
      ]
    }
  ]
}
