import type { ProductionScenario } from '../types.ts'

export const scenariosData: ProductionScenario[] = [
  {
    "id": "scenario-1",
    "category": "Database",
    "title": "Your ASP?",
    "problem": "Your ASP.NET Core API is returning 500 errors in production. How do you diagnose?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check Application Insights / Serilog logs for exception stack traces. Look for patterns: same endpoint, specific user, time-based. Check health endpoints. Review recent deployments. Enable verbose logging temporarily. Check database connectivity, external API timeouts. Use correlation IDs to trace specific failed requests.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-2",
    "category": "Database",
    "title": "A customer reports intermittent 404 errors on an endpoint that works for others?",
    "problem": "A customer reports intermittent 404 errors on an endpoint that works for others.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check if endpoint is authenticated — maybe user lacks permissions (403 misconfigured as 404). Check route constraints — user input might not match constraint pattern. Enable request logging to capture exact URL being called. Check if endpoint is deployed on all instances (partial deployment issue).",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-3",
    "category": "Database",
    "title": "Your background service suddenly stopped processing messages?",
    "problem": "Your background service suddenly stopped processing messages.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check service health endpoint. Look for unhandled exceptions in host logs — BackgroundService catches exception but logs it; process continues but ExecuteAsync stopped. Check message queue connectivity. Verify CancellationToken not cancelled prematurely. Check if message poison-pilled (same message processed repeatedly, always failing).",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-4",
    "category": "Database",
    "title": "Database queries started taking 10x longer after a deployment?",
    "problem": "Database queries started taking 10x longer after a deployment.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check if indexes were dropped in migration. Run Query Store or SQL Profiler to find slow queries. Check if data volume changed significantly. Look for parameter sniffing issues. Review Entity Framework generated SQL — added .AsNoTracking() removed? New Include()? Check connection pool exhaustion.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-5",
    "category": "Database",
    "title": "Your API response times are high but the database looks fast?",
    "problem": "Your API response times are high but the database looks fast.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Profile outside the database: middleware execution time, serialization time, GC pauses (check GC stats), external API calls, network latency. Add granular timing to each pipeline stage. Use dotnet-trace to identify CPU-bound hotspots. Check for synchronous blocking on async code (Task.Result, .Wait()).\n\nPERFORMANCE SCENARIOS\n---------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-6",
    "category": "Database",
    "title": "Your ASP?",
    "problem": "Your ASP.NET Core API handles 1000 RPS but you need 10,000 RPS. What do you do?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Profile first — identify bottleneck. Horizontal scaling: add instances behind load balancer. Add response caching for read-heavy endpoints. Optimize hot database queries (add indexes, optimize LINQ). Use async/await throughout (eliminate blocking). Enable HTTP/2. Move to Redis for session/distributed cache.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-7",
    "category": "Performance",
    "title": "Memory usage keeps growing in your long-running ?",
    "problem": "Memory usage keeps growing in your long-running .NET service. How do you find the leak?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Collect memory dumps (dotnet-dump). Analyze with dotnet-gcdump (GC root analysis). Look for: event handlers not unsubscribed, static collections growing, cache without eviction, Disposed objects still referenced, IDisposable not disposed. PerfView or dotMemory for detailed heap analysis.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-8",
    "category": "Database",
    "title": "Your EF Core queries are loading entire tables when they should be loading one row?",
    "problem": "Your EF Core queries are loading entire tables when they should be loading one row.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Log generated SQL: dbContext.Database.LogTo(Console.WriteLine). Check if LINQ is materialized early (AsEnumerable() before Where). Check if lazy loading is loading related entities. Use .FirstOrDefault() instead of .ToList().Where(). Ensure filters in LINQ translate to SQL WHERE clause.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-9",
    "category": "Performance",
    "title": "CPU usage spikes to 100% on your API server every few minutes?",
    "problem": "CPU usage spikes to 100% on your API server every few minutes.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Schedule this with Application Performance Monitor. Correlate with: GC Gen2 collection (large objects, LOH), scheduled background job, external batch request. dotnet-counters monitor cpu-usage, gc-heap-size. CPU profiler (dotnet-trace) shows hot methods.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-10",
    "category": "Database",
    "title": "Your application response time is normally 50ms but occasionally spikes to 5 seconds?",
    "problem": "Your application response time is normally 50ms but occasionally spikes to 5 seconds.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Likely GC pauses or connection pool exhaustion. Check GC stats: Gen2 collections, LOH size. Check SQL connection pool: Number of SQL connections active (sp_who2). Check external API timeouts. Use percentile metrics (P99) to characterize spike pattern.\n\nCONCURRENCY SCENARIOS\n---------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-11",
    "category": "Database",
    "title": "Two users try to book the last seat simultaneously?",
    "problem": "Two users try to book the last seat simultaneously. How do you prevent double-booking?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Use optimistic concurrency with version check: read seat (SELECT ... WHERE Available=1), update with version check (UPDATE ... WHERE Available=1 AND RowVersion=@v), retry if 0 rows affected. Or pessimistic: BEGIN TRAN; SELECT ... WITH (UPDLOCK); update; COMMIT. Application-level: SemaphoreSlim per resource, or database-level locking.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-12",
    "category": "Concurrency",
    "title": "Your counter incremented from multiple threads is giving wrong results?",
    "problem": "Your counter incremented from multiple threads is giving wrong results.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Classic race condition. Fix: use Interlocked.Increment(ref counter) for simple increment. For complex operations: lock { counter++; }. Use ConcurrentDictionary for dictionary scenarios. Don't use regular int with multiple threads.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-13",
    "category": "Concurrency",
    "title": "Your async code is deadlocking in ASP?",
    "problem": "Your async code is deadlocking in ASP.NET Framework (not Core).",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Classic deadlock: calling .Result or .Wait() on Task in ASP.NET Framework (synchronization context). Call stack: controller calls service.DoAsync().Result → task awaits, resumes on sync context → but sync context thread is blocked by .Result. Fix: use ConfigureAwait(false) in library code, or make caller truly async.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-14",
    "category": "Concurrency",
    "title": "Multiple threads are writing to a List<T> and causing exceptions?",
    "problem": "Multiple threads are writing to a List<T> and causing exceptions.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "List<T> is not thread-safe. Options: lock around all Add/Remove/Read. Use ConcurrentBag<T> for unordered concurrent add. Use ConcurrentQueue<T> for FIFO. Use ImmutableList<T> with Interlocked.Exchange for functional updates.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-15",
    "category": "Database",
    "title": "Your cache is thundering herd — cache miss causes 100 concurrent DB queries?",
    "problem": "Your cache is thundering herd — cache miss causes 100 concurrent DB queries.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Cache stampede/thundering herd. Solutions: SemaphoreSlim per cache key (only one thread fetches, others wait). Double-checked locking with async lock. Background refresh before expiry. Soft TTL: serve stale while revalidating. Circuit breaker on the cache miss path.\n\nPRODUCTION INCIDENTS\n--------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-16",
    "category": "Performance",
    "title": "Your production database is at 100% CPU?",
    "problem": "Your production database is at 100% CPU. What's your immediate action?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Immediate: Kill longest-running queries (sp_who2 + kill). Check for blocking chains. Enable Query Store to identify top CPU queries. If unresolved: failover to read replica for read traffic. Long-term: add missing indexes, optimize queries, scale up hardware.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-17",
    "category": "Database",
    "title": "Your microservice just deployed and is returning 500 for all requests?",
    "problem": "Your microservice just deployed and is returning 500 for all requests.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Immediate rollback. Check deployment logs — migration failed? Config missing? Check Application Insights for exception: NullReferenceException at startup (missing required config), DbContext migration errors, missing service registration (DI error). Feature flags to disable problematic code.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-18",
    "category": "Database",
    "title": "Users report they're seeing other users' data?",
    "problem": "Users report they're seeing other users' data.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "P1 incident. Immediate: disable the affected feature/endpoint. Investigate: data isolation bug — multi-tenant filter not applied, session mixed up, authorization check missing. Audit all data access for the time period. Notify security team. Review data access logs. Fix and regression test thoroughly before re-enabling.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-19",
    "category": "Database",
    "title": "Your message queue has 1 million unprocessed messages?",
    "problem": "Your message queue has 1 million unprocessed messages. Consumers are down.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Scale up consumers immediately. Check why consumers went down: dependency failure, exception, resource exhaustion. Review dead-letter queue for poison messages. Prioritize recent messages over old ones if business-critical. Monitor consumer lag after restart — may need temporary overcapacity.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-20",
    "category": "Database",
    "title": "Your SSL certificate expired?",
    "problem": "Your SSL certificate expired. HTTPS is broken for all users.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Immediate: obtain new certificate. If auto-renewal (Let's Encrypt): troubleshoot renewal process. If manual: emergency renewal from CA. Update certificate in load balancer/Kestrel/IIS. Restart service. Verify with curl -v. Post-incident: add certificate expiry monitoring alert 30 days before expiry.\n\nARCHITECTURE DECISIONS\n-----------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-21",
    "category": "Database",
    "title": "When would you choose microservices over monolith??",
    "problem": "When would you choose microservices over monolith?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Monolith first for new products — simpler to develop, deploy, test. Move to microservices when: team scales (Conway's Law), different scaling requirements per component, different deployment cadences, technology diversity needed. Don't over-engineer early.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-22",
    "category": "Database",
    "title": "How do you handle schema migrations in a zero-downtime deployment??",
    "problem": "How do you handle schema migrations in a zero-downtime deployment?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Backward-compatible migrations only. Add column nullable first; deploy; populate data; deploy code to write new column; then add NOT NULL constraint. Never rename/drop column in same deploy as code change. Expand-Contract pattern.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-23",
    "category": "Database",
    "title": "How do you design for eventual consistency??",
    "problem": "How do you design for eventual consistency?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Acknowledge it exists — some data will be stale. Use events for cross-service updates. Sagas for distributed transactions. Idempotent consumers for duplicate event handling. UI: show \"last updated\" timestamp. Compensating transactions for rollback.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-24",
    "category": "Database",
    "title": "When do you use sync vs async inter-service communication??",
    "problem": "When do you use sync vs async inter-service communication?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Sync (REST/gRPC): when you need immediate response, when consistency is critical, simple request-reply. Async (message queue): when decoupling is important, when consumer being slow shouldn't block producer, for long-running operations, for broadcast to multiple consumers.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-25",
    "category": "Database",
    "title": "How do you secure sensitive data in your application??",
    "problem": "How do you secure sensitive data in your application?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Encrypt at rest (database TDE, column-level encryption). Encrypt in transit (TLS). Hash passwords (bcrypt, Argon2 — not MD5/SHA1). Store secrets in vault (Azure Key Vault, HashiCorp Vault), not config files. Mask PII in logs. Minimal privilege — service accounts with only needed permissions.\n\nDRIVER-RELATED SCENARIOS\n--------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-26",
    "category": "Database",
    "title": "Your Windows driver is causing a BSOD on some machines but not others?",
    "problem": "Your Windows driver is causing a BSOD on some machines but not others. How do you debug?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Collect crash dump (WinDbg: !analyze -v). Look for faulting address, call stack, exception. Driver Verifier on test machine to reproduce. Check if issue is hardware-specific (different chipset, DMA issues). WPP tracing to trace execution path leading to crash. Check for IRQL violations.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-27",
    "category": "Database",
    "title": "Your Linux kernel module causes kernel oops on module load?",
    "problem": "Your Linux kernel module causes kernel oops on module load.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "dmesg output shows: oops message, CPU registers, call stack. addr2line -e module.ko address converts address to source line. Enable KASAN (CONFIG_KASAN) for memory error detection. Check init function: null pointer, incorrect ioremap, accessing hardware before ready. QEMU for safe kernel debugging.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-28",
    "category": "Database",
    "title": "Your driver is loading on Windows 10 but not on Windows 11?",
    "problem": "Your driver is loading on Windows 10 but not on Windows 11.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check device manager error code. Driver signing requirements changed (EV cert required). Check if using deprecated WDM APIs removed in newer Windows. Run compatibility manifest check. Check driver's supported OS list in INF file. Enable test signing mode to test unsigned.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-29",
    "category": "Database",
    "title": "Device is detected but driver won't bind to it?",
    "problem": "Device is detected but driver won't bind to it.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check device IDs in INF/driver match actual hardware (Device Manager → Details → Hardware IDs). Check device class compatibility. Windows: devmgmt.msc shows \"Unknown Device\" — collect HW IDs. Linux: check dmesg for \"no driver found\", ensure MODULE_DEVICE_TABLE matches hardware.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-30",
    "category": "Database",
    "title": "Your I2C driver reads wrong values from sensor?",
    "problem": "Your I2C driver reads wrong values from sensor.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check: bit order (MSB vs LSB), byte order (endianness), register address correctness, I2C address (7-bit vs 8-bit addressing), signal integrity (use oscilloscope). Add logging before/after each I2C transaction. Cross-reference with datasheet for register map and communication timing.\n\n\n==================================================================",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-31",
    "category": "Azure",
    "title": "Your ASP?",
    "problem": "Your ASP.NET Core application works locally but fails in Docker with \"connection refused\" to SQL Server.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Classic container networking issue. \"localhost\" inside a container refers to the container itself, not the host machine. Fix: use the host machine's IP (host.docker.internal on Windows/Mac) or the SQL Server container's service name in docker-compose (e.g., \"db\"). Check: connection string in appsettings vs environment variable override. Also check: SQL Server container is on same Docker network, port 1433 exposed.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-32",
    "category": "Database",
    "title": "A third-party NuGet package causes assembly conflicts after upgrading?",
    "problem": "A third-party NuGet package causes assembly conflicts after upgrading.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check error: \"Could not load file or assembly\" with version mismatch. Use dotnet list package --vulnerable or NuGet package manager to identify conflict. Solutions: binding redirect in app.config/web.config, externally alias the assembly, pin the transitive dependency explicitly in .csproj. Use ILSpy to inspect which version is actually loaded at runtime.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-33",
    "category": "Database",
    "title": "Your API's Swagger UI shows no endpoints after upgrading to ?",
    "problem": "Your API's Swagger UI shows no endpoints after upgrading to .NET 8.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Common causes: AddEndpointsApiExplorer() missing (needed for minimal APIs alongside AddSwaggerGen()), controller registration changed, [ApiController] missing, route attribute missing. Also check: Swashbuckle version compatibility with .NET 8. Verify middleware order: UseSwagger() before UseSwaggerUI().",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-34",
    "category": "Database",
    "title": "EF Core migration fails with \"There is already an object named 'X' in the database?",
    "problem": "EF Core migration fails with \"There is already an object named 'X' in the database.\"",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Migration history (EF __MigrationsHistory table) is out of sync with actual schema. Causes: manual DB changes, migration applied directly via SQL. Fix: if schema matches what migration would create, add migration row manually to __MigrationsHistory. Or: use dotnet ef migrations script --idempotent to generate IF NOT EXISTS scripts. Never run migrations on production without backup.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-35",
    "category": "Database",
    "title": "Your ASP?",
    "problem": "Your ASP.NET Core app throws \"Cannot access a disposed object\" on DbContext.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "DbContext injected as Scoped but used inside a Singleton service (captive dependency). Fix: inject IServiceScopeFactory into the Singleton, create a scope inside the method: using var scope = factory.CreateScope(); var db = scope.ServiceProvider.GetRequiredService<AppDbContext>(). Alternatively, change the Singleton to Scoped. Also happens in background services — use IDbContextFactory<T>.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-36",
    "category": "Database",
    "title": "Unit tests pass locally but fail on the CI pipeline with timezone-related failures?",
    "problem": "Unit tests pass locally but fail on the CI pipeline with timezone-related failures.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Tests using DateTime.Now (local time) instead of DateTime.UtcNow. CI server is likely in UTC; local machine is not. Fix: always use UTC internally. For testability, inject IClock or TimeProvider (ASP.NET Core 8+) abstraction. Verify: CI server timezone with TZ environment variable. Dates in database: always store as UTC.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-37",
    "category": "Database",
    "title": "Your React SPA gets CORS errors when calling your ASP?",
    "problem": "Your React SPA gets CORS errors when calling your ASP.NET Core API.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check browser console for exact CORS error: missing Allow-Origin header. Verify: AddCors() + UseCors() both present and in correct middleware order (UseCors before UseAuthorization). Check: policy allows the exact origin (http://localhost:3000 not http://localhost:3000/). Production: ensure production domain is in allowed origins. Preflight OPTIONS request must also succeed.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-38",
    "category": "Performance",
    "title": "Application runs fine for hours then crashes with OutOfMemoryException?",
    "problem": "Application runs fine for hours then crashes with OutOfMemoryException.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Memory leak. Profile with dotnet-gcdump or PerfView. Common culprits: static Dictionary growing unboundedly (audit log, metrics buffer), event subscriptions never removed (publisher holds subscriber), HttpClient created per request (socket exhaustion then OOM), IMemoryCache without size limit, SignalR connections not cleaned up. Add memory metric alerts: > 1.5GB → investigate.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-39",
    "category": "Database",
    "title": "Your API suddenly starts returning empty JSON arrays where it used to return data?",
    "problem": "Your API suddenly starts returning empty JSON arrays where it used to return data.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Likely serialization issue. Causes: property names changed (case sensitivity — JsonPropertyName attribute), circular reference in model (JSON serializer default in .NET throws on cycles), interface properties not serialized (only concrete type properties), private setters preventing deserialization. Check: System.Text.Json vs Newtonsoft — different defaults. Enable JsonSerializerOptions.WriteIndented for debugging.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-40",
    "category": "Database",
    "title": "Background Service's ExecuteAsync stopped without any logged error?",
    "problem": "Background Service's ExecuteAsync stopped without any logged error.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Unhandled exception inside ExecuteAsync stops the method silently (the host continues). Wrap the entire body in try/catch and log all exceptions. Re-throw or restart strategy: restart with exponential backoff. Use IHostApplicationLifetime.StopApplication() for unrecoverable errors. Monitor with health checks: if ExecuteAsync not running, report unhealthy.\n\nPERFORMANCE SCENARIOS (CONTINUED)\n-----------------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-41",
    "category": "Database",
    "title": "Your API endpoint takes 2 seconds on first call, then 50ms after?",
    "problem": "Your API endpoint takes 2 seconds on first call, then 50ms after. What's happening?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Cold start / JIT compilation issue. First request triggers JIT compilation of code paths. Solutions: ReadyToRun compilation (dotnet publish -r linux-x64 -p:PublishReadyToRun=true), NativeAOT for extreme cases, warm-up middleware that calls endpoints during startup, tiered compilation (enabled by default in .NET 6+). For application cache warm-up, use IHostedService.StartAsync().",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-42",
    "category": "Performance",
    "title": "Your LINQ query is fast in tests but slow in production with real data?",
    "problem": "Your LINQ query is fast in tests but slow in production with real data.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Classic statistics/cardinality issue. Test data: 100 rows; production: 10M rows. Check: missing index on WHERE column, EF Core generating inefficient SQL (log with LogTo), parameter sniffing in SQL Server (query plan optimized for first execution's parameter value). Fix: add indexes, use .AsNoTracking() for read-only, split complex queries, use raw SQL for complex reports.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-43",
    "category": "Performance",
    "title": "Response payload is large — 5MB JSON responses causing slow clients?",
    "problem": "Response payload is large — 5MB JSON responses causing slow clients.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Payload optimization: enable response compression (Brotli/gzip — 70-80% reduction for JSON). Implement projection (return only requested fields — GraphQL-style or field selection query param). Implement pagination. Use sparse fieldsets: ?fields=id,name. For binary data: use binary format (MessagePack, Protocol Buffers) instead of JSON. Stream response with IAsyncEnumerable.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-44",
    "category": "Database",
    "title": "Your application's startup time is 45 seconds?",
    "problem": "Your application's startup time is 45 seconds. How do you reduce it?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Profile startup with dotnet-trace. Common causes: reflection-heavy DI registration (scan entire assemblies), database migrations on startup, external service warmup calls, loading large configuration/seed data, slow middleware initialization. Fixes: lazy registration, move migration to deployment step, use source-generated DI (Roslyn-based), parallel warmup, ReadyToRun compilation.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-45",
    "category": "Concurrency",
    "title": "Thread pool starvation causing timeouts under high load?",
    "problem": "Thread pool starvation causing timeouts under high load.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Threads exhausted — all doing blocking I/O. Diagnosis: ThreadPool.ThreadCount near max. Causes: sync-over-async (.Result/.Wait()), blocking DB calls, long CPU-bound work on pool threads. Fix: make all I/O async. For CPU work: Task.Run with dedicated thread. Increase min thread count: ThreadPool.SetMinThreads(100, 100) as temporary fix. True fix: eliminate blocking.\n\nCONCURRENCY SCENARIOS (CONTINUED)\n------------------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-46",
    "category": "Database",
    "title": "Two microservices are updating the same entity simultaneously?",
    "problem": "Two microservices are updating the same entity simultaneously. Data is getting corrupted.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "No distributed locking. Solutions: (1) Assign ownership — only one service modifies this entity. (2) Optimistic concurrency with version check via API: GET with ETag, PUT with If-Match. (3) Distributed lock (Redis SETNX with TTL). (4) Serialise via a message queue — all updates become events processed sequentially. (5) Event sourcing — append-only; no concurrent updates.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-47",
    "category": "Database",
    "title": "Your timer-based background service fires twice on a two-instance deployment?",
    "problem": "Your timer-based background service fires twice on a two-instance deployment.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "No leader election or distributed locking. Each instance runs its own timer. Solutions: (1) Hangfire/Quartz.NET with SQL-backed scheduler — distributed coordination built-in. (2) Redis-based distributed lock: acquire before running, skip if already held. (3) Leader election via Kubernetes lease. (4) Event-driven trigger instead of timer — single message triggers single consumer.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-48",
    "category": "Database",
    "title": "ConcurrentDictionary is causing unexpected behavior when value update depends on existing value?",
    "problem": "ConcurrentDictionary is causing unexpected behavior when value update depends on existing value.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Common mistake: dict[key]++ is NOT atomic even with ConcurrentDictionary. Fix: use AddOrUpdate(key, 1, (k, old) => old + 1) — atomic update. Or use ConcurrentDictionary<K, SemaphoreSlim> for per-key locking. Understand: ConcurrentDictionary makes individual operations atomic, not compound operations.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-49",
    "category": "Performance",
    "title": "Your async method is running slower than the synchronous version?",
    "problem": "Your async method is running slower than the synchronous version.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Async overhead for fast operations. Causes: small awaits (< 1ms sync work wrapped in Task.Run), excessive state machine allocations, ValueTask used incorrectly (awaited multiple times). Fix: if operation completes synchronously > 95% of time, return ValueTask or cached completed task (Task.CompletedTask, Task.FromResult(value)). Use async only for true I/O.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-50",
    "category": "Database",
    "title": "Parallel?",
    "problem": "Parallel.ForEach processes 1000 items but only finishes 998 — 2 items missing.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Exception swallowed. Parallel.ForEach collects exceptions and rethrows as AggregateException after all iterations. If exception in one iteration, other iterations continue. Unhandled AggregateException after loop? Some items failed silently. Fix: wrap loop body in try/catch, log each failure. Check AggregateException.InnerExceptions for all failures.\n\nPRODUCTION INCIDENTS (CONTINUED)\n----------------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-51",
    "category": "Database",
    "title": "Deployment succeeded but some users see the old UI and some see the new UI?",
    "problem": "Deployment succeeded but some users see the old UI and some see the new UI.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "CDN or browser caching issue. Old static files (JS/CSS bundles) still cached. Fix: cache-busting in file names (webpack contenthash: app.a1b2c3d4.js). Set Cache-Control: no-cache for HTML (so browser always checks), long cache for versioned static assets. Ensure CDN invalidation on deployment. Blue-green deployment with proper cache headers solves this long-term.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-52",
    "category": "Database",
    "title": "Your API returns 503 during a deployment with zero-downtime expectations?",
    "problem": "Your API returns 503 during a deployment with zero-downtime expectations.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Health check timing issue. New instance not ready when old one killed. Fix: (1) Readiness probe — only mark ready after initialization complete. (2) Graceful shutdown — drain existing requests before dying (IHostApplicationLifetime.ApplicationStopping + delay). (3) Rolling deployment with minReadySeconds. (4) Startup probe in Kubernetes. Configure ASP.NET Core's graceful shutdown: hostOptions.ShutdownTimeout.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-53",
    "category": "Database",
    "title": "A vendor API you depend on returns inconsistent data formats?",
    "problem": "A vendor API you depend on returns inconsistent data formats.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Defensive deserialization: use nullable types, handle missing fields, validate before use. Adapter pattern: wrap vendor API in your own IVendorClient interface with a normalized model. Log raw responses for debugging. Circuit breaker (Polly) for unreliable vendor. Versioned API contracts: pin to specific API version. Integration tests against real vendor sandbox.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-54",
    "category": "Database",
    "title": "Your application is being attacked with SQL injection attempts?",
    "problem": "Your application is being attacked with SQL injection attempts.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "If using parameterized queries/EF Core — you're protected (parameters never treated as SQL). Verify: EF Core always parameterizes. Review raw SQL usage (FromSqlRaw — must use parameters, not string concat). Add WAF (Web Application Firewall) at infrastructure level. Log suspicious patterns (', OR 1=1, --). Input validation at API level (not as SQL injection defense — that's defense in depth).",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-55",
    "category": "Database",
    "title": "A junior developer accidentally deleted a production table?",
    "problem": "A junior developer accidentally deleted a production table. What do you do?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Immediate: stop writes to affected area (put service in maintenance mode). Check: automated backups — restore to point just before deletion. If no backups: check transaction logs (SQL Server: fn_dblog). Communicate: status page update, inform stakeholders. Root cause: developers shouldn't have DROP permission on production. Fix: least-privilege DB accounts, no DDL permissions for app service account. Add automated backup verification.\n\nARCHITECTURE DECISIONS (CONTINUED)\n-------------------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-56",
    "category": "Database",
    "title": "You need to share code between a C# backend and a TypeScript frontend?",
    "problem": "You need to share code between a C# backend and a TypeScript frontend. What's your approach?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Option 1: OpenAPI spec as source of truth — generate C# server stubs and TypeScript client from spec (NSwag, OpenAPI Generator). Option 2: C# source generators emit TypeScript type definitions. Option 3: share JSON schema files. Never share code directly between backend and frontend — maintain the API contract as the boundary. Test: contract tests verify backend matches generated client.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-57",
    "category": "Database",
    "title": "Your application needs to send 100,000 emails per day?",
    "problem": "Your application needs to send 100,000 emails per day. How do you design this?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Never synchronous — use a message queue (Hangfire jobs, Azure Service Bus). Email service (SendGrid/SES) handles actual delivery. Queue: email job with template + data. Worker: dequeue, render template, send via provider. Handle: rate limits (provider throttles), retries (transient failures), duplicate prevention (idempotency key per email). Monitor: delivery rates, bounces, unsubscribes. Batch non-urgent emails.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-58",
    "category": "Database",
    "title": "You need to implement soft delete?",
    "problem": "You need to implement soft delete. What are the tradeoffs?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Soft delete: IsDeleted flag, filter in all queries. Pros: recoverable, audit trail, referential integrity preserved. Cons: queries more complex (EF Global Query Filter helps), indexes include deleted rows (wasted space), UNIQUE constraints include deleted rows (can't re-add same email after soft delete). Alternative: archive table. EF Core global filter: .HasQueryFilter(e => !e.IsDeleted) — applied to all queries automatically.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-59",
    "category": "Database",
    "title": "Your monolith needs to be split but you can't rewrite it?",
    "problem": "Your monolith needs to be split but you can't rewrite it. What's your strategy?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Strangler Fig: route traffic for new feature to new service; keep old feature in monolith. Identify seams: find bounded contexts by looking at team boundaries, DB schema groupings, change frequency. Extract by duplicating data initially (read from monolith, write to both), then cut over writes, then reads, then remove from monolith. Branch by abstraction: introduce an abstraction in the monolith, implement it externally, switch.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-60",
    "category": "Database",
    "title": "How do you handle breaking changes in a public API??",
    "problem": "How do you handle breaking changes in a public API?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Versioning strategy: URL versioning (/v1/, /v2/) for major changes. Never break existing clients without versioning. Deprecation lifecycle: announce 6-12 months before sunset, Deprecation header in responses, documentation updates. Additive changes (new optional fields, new endpoints) are backward compatible — no versioning needed. Consumer-driven contract tests detect breaking changes in CI. Keep old version running until adoption metrics show safe to remove.\n\nDRIVER-RELATED SCENARIOS (CONTINUED)\n---------------------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-61",
    "category": "Database",
    "title": "Your Windows driver works on Windows 10 but crashes on Windows 11 with different hardware?",
    "problem": "Your Windows driver works on Windows 10 but crashes on Windows 11 with different hardware.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Check if Windows 11 changed HAL behavior for that hardware class. Review WDK release notes for API changes. Check: Secure Boot / VBS (Virtualization-Based Security) — some kernel memory tricks no longer work. Enable Driver Verifier on Win11 test machine. Check hardware-specific: ACPI table differences, interrupt routing changes. Review: does your driver hardcode any hardware addresses or resources that changed?",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-62",
    "category": "Database",
    "title": "Your Linux driver module loads fine but the device doesn't work?",
    "problem": "Your Linux driver module loads fine but the device doesn't work.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Diagnostic flow: dmesg for probe errors. Check probe() return value — returning non-zero prevents binding. Verify: IRQ registered correctly (free_irq on error path). Check: ioremap address correct per datasheet. Verify device tree node (if ARM): compatible string matches MODULE_DEVICE_TABLE. Check power state — device might need power enable GPIO. Add printk at each initialization step to find where it stops.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-63",
    "category": "Performance",
    "title": "Your driver causes 100% CPU usage after loading?",
    "problem": "Your driver causes 100% CPU usage after loading.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Infinite loop or polling without sleep. Check: interrupt handler stuck in loop, DPC/workqueue rescheduling itself immediately, timer firing continuously. In Windows: check DPC time in WinDbg (!dpcs), PerfMon for DPC time. In Linux: perf top shows which function consuming CPU, check if workqueue/timer callback reschedules before sleeping. Fix: use interrupt-driven I/O instead of polling, add sleep in polling loops.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-64",
    "category": "Database",
    "title": "After a driver update, devices stop being detected?",
    "problem": "After a driver update, devices stop being detected.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Device ID mismatch. The updated INF/driver may have changed supported device IDs. Check: new driver's Hardware IDs list vs devices in Device Manager. PnP re-match triggers on driver update — if IDs changed, device uses old driver or goes to \"Unknown Device.\" Windows: devcon update to force. Also check: GUID for device class, INF [Manufacturer] section. Roll back and compare INF files.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-65",
    "category": "Database",
    "title": "Your character device driver's read() function is called in an infinite loop?",
    "problem": "Your character device driver's read() function is called in an infinite loop.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "read() must return 0 to signal EOF to user space. If always returning data (even 0 bytes with count > 0 return), cat /dev/mydevice loops forever. Fix: track position with file->f_pos, return 0 when all data consumed. For continuous stream devices (like sensors), block with wait_event_interruptible until data available, then return it.\n\nSECURITY SCENARIOS\n-------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-66",
    "category": "Security",
    "title": "Your JWT tokens are being stolen and replayed?",
    "problem": "Your JWT tokens are being stolen and replayed. How do you mitigate?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Short access token TTL (15 min). HTTPS-only (prevents interception). Secure + HttpOnly cookies for token storage (prevents XS theft). Token binding to client fingerprint (IP, device ID — balance with proxy/mobile issues). Refresh token rotation: each refresh invalidates old token. Revocation list in Redis for emergency invalidation. Monitor: unusual locations/devices for same token.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-67",
    "category": "Database",
    "title": "A penetration test found your API exposes internal stack traces?",
    "problem": "A penetration test found your API exposes internal stack traces.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Never expose stack traces to clients. ASP.NET Core: UseExceptionHandler middleware with ProblemDetails (no details in production). Configure: builder.Services.AddProblemDetails() — remove stack trace from error response. Differentiate: Development (show details), Production (generic message). Log full error server-side. Return: generic 500 with error reference ID for support.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-68",
    "category": "Security",
    "title": "Mass assignment vulnerability found — users can set admin = true on their profile?",
    "problem": "Mass assignment vulnerability found — users can set admin = true on their profile.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Never bind user input directly to entity model. Use DTOs/ViewModels with only allowed fields. In ASP.NET Core: [Bind(Include=\"Name,Email\")] or separate input model. For sensitive properties: explicit assignment only in business logic (not model binding). Add: authorization check before any privilege escalation field change. Test: send unexpected fields in JSON body — ensure they're ignored.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-69",
    "category": "Security",
    "title": "Your API is leaking user data through error messages (e?",
    "problem": "Your API is leaking user data through error messages (e.g., \"User john@example.com not found\").",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Information disclosure vulnerability. Fix: generic error messages to clients (\"Authentication failed\", not \"User not found\"). Log detailed messages server-side with correlation ID. For timing attacks: constant-time comparison for sensitive lookups. Review all error messages for PII. Particularly important: password reset flow should not confirm if email exists.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-70",
    "category": "Database",
    "title": "How do you securely store API keys for third-party services your app calls??",
    "problem": "How do you securely store API keys for third-party services your app calls?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Never in source code (git history is permanent). Never in appsettings.json committed to repo. Use: Azure Key Vault / AWS Secrets Manager / HashiCorp Vault. Local development: user secrets (dotnet user-secrets, stored outside project directory). CI/CD: secure environment variables / pipeline secrets. Access: via IConfiguration with Key Vault provider. Rotation: automate key rotation, app reads fresh on each request or with cache expiry.\n\nCODE QUALITY SCENARIOS\n------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-71",
    "category": "Database",
    "title": "Code review shows a colleague's Pull Request has 2000-line methods?",
    "problem": "Code review shows a colleague's Pull Request has 2000-line methods. How do you handle?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Constructive approach: don't reject — suggest specific refactoring. Identify: what are the natural sub-steps? Can each become a method? Apply: Extract Method, single level of abstraction per method. Ask questions in code review: \"What does this 50-line block do? Could we name it?\" Set team standard: methods < 20 lines, files < 300 lines, as guidelines. Offer to pair program on the refactor.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-72",
    "category": "Performance",
    "title": "Technical debt is slowing new feature development to a crawl?",
    "problem": "Technical debt is slowing new feature development to a crawl. How do you address it?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Quantify: measure lead time, cycle time, bug rate — show business impact. Prioritize debt: address debt in the path of new features (Boy Scout Rule). Negotiate: 20% of sprint capacity for tech debt. Strangler Fig for legacy subsystems. Don't rewrite all at once — incremental improvement. Track: \"debt backlog\" as visible work items. Frame to stakeholders as risk reduction, not perfectionism.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-73",
    "category": "Database",
    "title": "Your codebase has no tests and you need to add a critical feature safely?",
    "problem": "Your codebase has no tests and you need to add a critical feature safely.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Characterization tests first: write tests that document current behavior (even if wrong). Cover the code paths you'll change. Then change code, watching characterization tests catch regressions. Golden master testing: capture output before change, compare after. Refactor toward testability incrementally. Don't add tests for everything before shipping the feature — focus on the changed paths.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-74",
    "category": "Database",
    "title": "A new team member keeps pushing code that breaks the build?",
    "problem": "A new team member keeps pushing code that breaks the build. How do you help?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Systemic fix, not blame. Check: do they have pre-commit hooks (dotnet build, dotnet test) configured? Is the CI pipeline fast enough for feedback? Pair: sit with them during a PR to show process. Review: their setup — editor, build tools. Mentorship: walk through the PR process. Most build breaks are environment/process issues, not competence issues. Blameless culture.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-75",
    "category": "Database",
    "title": "How do you ensure code quality in a fast-moving startup environment??",
    "problem": "How do you ensure code quality in a fast-moving startup environment?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Automate non-negotiables: CI runs build + tests + static analysis (mandatory pass). PR review: even one reviewer is better than none. Standards: agree on a style guide (editorconfig, .NET Roslyn analyzers), enforce via CI. Pragmatic: 70% test coverage on business logic, not test everything. Architecture docs: ADRs (Architecture Decision Records) for key decisions. Don't let the pipeline be optional.\n\nINTEGRATION & TESTING SCENARIOS\n---------------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-76",
    "category": "Database",
    "title": "Your integration tests are flaky — sometimes pass, sometimes fail?",
    "problem": "Your integration tests are flaky — sometimes pass, sometimes fail.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Root causes: shared mutable state between tests, test-order dependency, timing issues (Thread.Sleep), external service availability. Fix: isolated database per test (EF Core with in-memory or SQLite, or Testcontainers for real SQL). Mock external services. No shared static state. Retry flaky tests with Polly in CI (mask the problem — fix first). Use WireMock.NET for HTTP service mocking.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-77",
    "category": "Database",
    "title": "How do you test code that depends on DateTime?",
    "problem": "How do you test code that depends on DateTime.Now?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Inject time abstraction. ASP.NET Core 8+: TimeProvider (built-in). Custom: public interface IClock { DateTime UtcNow { get; } } with SystemClock and FakeClock. Tests use FakeClock.SetTime(expectedTime). Never use DateTime.Now directly in business logic. This also solves timezone issues by always using UTC internally.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-78",
    "category": "Database",
    "title": "Your test database is polluting data between test runs?",
    "problem": "Your test database is polluting data between test runs.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Test isolation strategies: (1) Transaction rollback: wrap each test in transaction, rollback after — fast but limited. (2) Testcontainers: fresh Docker container per test run/class — slow but truly isolated. (3) EF Core InMemory: fast but not production-equivalent. (4) SQLite in-memory: closer to real SQL, fast. (5) Database respawn: NRespawn library truncates tables between tests. Best: Testcontainers for integration tests.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-79",
    "category": "Database",
    "title": "How do you test a driver??",
    "problem": "How do you test a driver?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Unit tests: driver logic in user-mode test (mock kernel APIs). KMDF driver testing: WDTF (Windows Driver Test Framework), HLK (Hardware Lab Kit) for certification tests. Linux: kselftest, or user-space test programs via /dev entry. Simulation: QEMU with emulated hardware. Fault injection: Driver Verifier (Windows), KASAN/fault injection (Linux). Integration: real hardware on CI machine.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-80",
    "category": "Database",
    "title": "You need to test an email sending feature without sending real emails?",
    "problem": "You need to test an email sending feature without sending real emails.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Options: (1) IEmailSender interface + mock in tests (verify Send() called with correct params). (2) Mailhog or smtp4dev: local SMTP server that catches emails for inspection. (3) SendGrid/Mailgun sandbox mode: sends to inbox but not real recipients. (4) Email interception in test environment: override IEmailSender with a logging implementation. Always verify: correct recipient, subject, template rendering.\n\nCLOUD & DEVOPS SCENARIOS\n--------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-81",
    "category": "Azure",
    "title": "Your Kubernetes deployment keeps OOMKilled?",
    "problem": "Your Kubernetes deployment keeps OOMKilled. How do you fix?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Diagnose: kubectl describe pod shows OOMKilled. Check: memory limits (resources.limits.memory) vs actual usage (kubectl top pod). .NET: check GC heap size, LOH growth. Fix: increase memory limit if legitimate need. Reduce: tune GC with DOTNET_GCHeapHardLimit env var. Fix memory leak if growth is unbounded. Set requests == limits for memory (Burstable → Guaranteed QoS). Monitor with Prometheus + memory alerts.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-82",
    "category": "Database",
    "title": "CI/CD pipeline takes 45 minutes?",
    "problem": "CI/CD pipeline takes 45 minutes. How do you speed it up?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Profile: which steps are slowest? Parallelization: test sharding (run test projects in parallel). Cache: NuGet packages (restore from cache if packages.lock.json unchanged), Docker layer cache. Incremental builds: only rebuild changed projects. Test optimization: remove integration tests from main PR check (run nightly). Docker: multi-stage builds, minimize layers. Target: < 10 minutes for PR checks.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-83",
    "category": "Database",
    "title": "How do you handle secrets in a CI/CD pipeline??",
    "problem": "How do you handle secrets in a CI/CD pipeline?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Never hardcode in pipeline YAML. Use: GitHub Actions Secrets / Azure DevOps secure variables / HashiCorp Vault with dynamic secrets. Inject as environment variables at runtime. Service connections (Azure DevOps) for cloud credentials. Rotate secrets regularly. Audit secret access. Masked in logs: CI systems redact registered secrets from log output. Principle: pipeline agents have minimum permissions.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-84",
    "category": "Azure",
    "title": "Your Docker image is 4GB?",
    "problem": "Your Docker image is 4GB. How do you reduce it?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Multi-stage build: separate build stage (SDK image ~800MB) from runtime stage (runtime image ~200MB). Alpine-based images: mcr.microsoft.com/dotnet/aspnet:8.0-alpine (~100MB vs ~200MB). Trim unused assemblies: dotnet publish --self-contained --trimmed. Remove debug symbols. .dockerignore: exclude bin/obj/node_modules. Layer optimization: combine RUN commands to reduce layers. Target: < 200MB for ASP.NET Core API.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-85",
    "category": "Database",
    "title": "Application logs in production are unreadable — just raw exception text?",
    "problem": "Application logs in production are unreadable — just raw exception text.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Implement structured logging. Replace Console.WriteLine with ILogger<T>. Use Serilog with structured output: Log.Information(\"Order {OrderId} created for {CustomerId}\", orderId, customerId). Output format: JSON for log aggregators (ELK, Datadog). Add correlation ID middleware. Include: timestamp, level, service name, trace ID, user ID (no PII). Ship to centralized logging platform.\n\nREAL-WORLD ARCHITECTURE SCENARIOS\n------------------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-86",
    "category": "Database",
    "title": "You're building an e-commerce checkout?",
    "problem": "You're building an e-commerce checkout. How do you handle the payment and inventory steps?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Saga pattern. Steps: (1) Reserve inventory, (2) Create pending order, (3) Process payment, (4) Confirm order + release inventory reservation. Each step has compensating action: (1) Release reservation, (2) Cancel order, (3) Refund, (4) N/A. Orchestrated saga: CheckoutOrchestrator calls each service and handles failures. Idempotency keys on payment call. Timeout: release reservation after 15 minutes if payment not received.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-87",
    "category": "Database",
    "title": "You need to implement a feature flag system?",
    "problem": "You need to implement a feature flag system. How?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Start simple: config file flags. Scale: feature flag service (LaunchDarkly, Azure App Configuration, Unleash). Flag types: on/off, percentage rollout, user targeting, A/B test. ASP.NET Core: IFeatureManager from Microsoft.FeatureManagement. Store flags: DB or config service for runtime updates without deploy. Flags in code: if (await featureManager.IsEnabledAsync(\"NewCheckout\")) { ... } Clean up: remove old flags after full rollout.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-88",
    "category": "Performance",
    "title": "Your search feature is too slow with SQL LIKE '%keyword%'?",
    "problem": "Your search feature is too slow with SQL LIKE '%keyword%'.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "LIKE with leading wildcard (%) can't use index — full table scan. Solutions: (1) Full-text search: SQL Server CONTAINS/FREETEXT with full-text indexes. (2) Elasticsearch: purpose-built for full-text search, inverted index, relevance scoring. (3) PostgreSQL: tsvector/tsquery or pg_trgm index. (4) Azure Cognitive Search for managed option. For simple prefix match: LIKE 'keyword%' (no leading %) CAN use index.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-89",
    "category": "Database",
    "title": "How do you implement audit logging for a healthcare application??",
    "problem": "How do you implement audit logging for a healthcare application?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "All data access and changes must be logged. Interceptors: EF Core ISaveChangesInterceptor captures before/after values. Middleware: log all API requests with user identity. Store: separate audit database (don't co-mingle with operational data), append-only. Fields: WHO (userId, ipAddress), WHAT (entity, operation, old/new values), WHEN (UTC timestamp), WHY (optional reason). Compliance: HIPAA requires 6-year retention. Tamper-proof: consider blockchain anchoring for legal defensibility.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-90",
    "category": "Security",
    "title": "Your multi-tenant SaaS is leaking data between tenants?",
    "problem": "Your multi-tenant SaaS is leaking data between tenants.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Critical security incident. Immediate: identify affected tenants and data. Disable feature. Root cause: global query filter missing or bypassed (IgnoreQueryFilters() called unintentionally), TenantId not set correctly in DI scope, caching shared across tenants. Fix: EF Core global query filter (mandatory, not opt-in). Test: automated test verifying each endpoint returns only tenant's data. Architecture: consider schema-per-tenant for stronger isolation.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-91",
    "category": "Database",
    "title": "You're asked to build a reporting module?",
    "problem": "You're asked to build a reporting module. Reports take minutes to generate.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Move reports off OLTP database. Options: (1) Scheduled pre-computation: run reports nightly, store results. (2) Separate read model: ETL to a reporting DB with denormalized schema. (3) CQRS: async query generates report, notifies user when ready. (4) Data warehouse (Azure Synapse, Redshift) for complex analytics. For on-demand: async job + polling or webhook notification. Never run ad-hoc aggregation queries on production OLTP DB during peak hours.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-92",
    "category": "Database",
    "title": "How do you migrate a SQL Server database with 100M rows and zero downtime??",
    "problem": "How do you migrate a SQL Server database with 100M rows and zero downtime?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Online operations only. Add column: ALTER TABLE ADD COLUMN WITH DEFAULT is online in SQL Server. Backfill data in small batches (1000 rows at a time) with delays — avoids locking. Rename: online with schema change. Index: CREATE INDEX ONLINE. Expand-Contract for column renames: add new column, dual-write old+new, backfill, switch reads to new, remove old. Test each step in staging first. Maintenance window for unavoidable operations.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-93",
    "category": "Database",
    "title": "Design a retry strategy for calling an unreliable external API?",
    "problem": "Design a retry strategy for calling an unreliable external API.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Polly policy stack: Retry(3, exponentialBackoff, jitter) + CircuitBreaker(5failures, 30s) + Timeout(5s) + Fallback. Retry: exponential backoff (1s, 2s, 4s) + jitter (random offset to prevent thundering herd). Circuit breaker: stop calling after repeated failures — protect external service and your own resources. Timeout: don't wait indefinitely. Fallback: return cached data or degraded response. Log each retry with attempt number.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-94",
    "category": "Database",
    "title": "Your application needs to handle file uploads of up to 5GB?",
    "problem": "Your application needs to handle file uploads of up to 5GB. What changes?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Streaming, not buffering. ASP.NET Core: disable request body buffering, stream directly to blob storage. Azure/AWS SDK: multipart upload. RequestSizeLimit: remove default 30MB limit. Timeout: increase for large uploads. Progress: track bytes received, expose progress endpoint. Resume: support range-based resume (if connection drops). Virus scan: async after upload. UI: chunked upload with pause/resume (tus protocol).",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-95",
    "category": "Database",
    "title": "How do you handle configuration management across 20 microservices??",
    "problem": "How do you handle configuration management across 20 microservices?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Central configuration: Azure App Configuration, Consul, Spring Cloud Config. Per-service: service-specific config with shared common values. Secret management: Key Vault / Vault for sensitive values (never in config service). Hot reload: services subscribe to config changes (IOptionsMonitor). Environments: dev/staging/prod as separate config stores or namespaces. Version config: track changes, enable rollback. Validate: test config changes in staging before production.\n\nBEHAVIORAL AND CROSS-CUTTING SCENARIOS\n-----------------------------------------",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-96",
    "category": "Security",
    "title": "You find a severe security vulnerability in code that ships in 2 days?",
    "problem": "You find a severe security vulnerability in code that ships in 2 days. What do you do?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Assess severity first: is it exploitable in production? By whom? With what impact? Immediately escalate: security lead, engineering manager, product owner. Don't fix quietly — document the vulnerability, proposed fix, risk of delaying. Decision: delay release if risk is critical (data breach, financial loss). Fix + security test + regression test before release. Post-release: monitor for exploitation. Post-mortem: how did vulnerability get through review?",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-97",
    "category": "Database",
    "title": "A senior engineer on the team writes code that consistently ignores your team's standards?",
    "problem": "A senior engineer on the team writes code that consistently ignores your team's standards.",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Address directly and privately first. \"I noticed X pattern in your last few PRs — our standard is Y for Z reason. Is there a reason you're preferring X?\" Listen — maybe standard is wrong/outdated. If valid reason: update standard. If ego/resistance: involve tech lead. Document standards in ADRs with rationale — makes it team decision, not personal. Enforce via linting/CI where possible (remove human element from repetitive debates).",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-98",
    "category": "Database",
    "title": "You're given an impossible deadline?",
    "problem": "You're given an impossible deadline. How do you handle it?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Break it down: what specifically is needed by the deadline? Can scope be reduced? Identify: critical vs nice-to-have features. Negotiate: \"We can deliver A, B, C by the date. D and E would take 2 more weeks.\" Risk: be transparent about quality tradeoffs. Never silently work 80-hour weeks and ship untested code. Document: scope reductions in writing. Set expectations: if cutting corners, note the technical debt taken on.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-99",
    "category": "Database",
    "title": "You're asked to estimate a feature you've never built before (e?",
    "problem": "You're asked to estimate a feature you've never built before (e.g., driver development).",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Break it down to known sub-problems. Research unknowns: spike for 1-2 days to reduce uncertainty. Give a range: \"My best estimate is 3-5 weeks — with driver work I've never done, I'd add 50% buffer for unknown unknowns.\" Milestone checkpoints: \"Week 2, we'll know if the driver approach works — I can refine estimate then.\" Never give a single-point estimate for uncertain work. This honesty builds trust.",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  },
  {
    "id": "scenario-100",
    "category": "Database",
    "title": "Production is on fire — multiple systems failing simultaneously?",
    "problem": "Production is on fire — multiple systems failing simultaneously. What's your process?",
    "rootCauseAnalysis": "Root cause analysis includes diagnosing database locking, memory growth, or configuration omissions.",
    "investigationSteps": [
      "Check production log traces via Application Insights or Serilog.",
      "Collect performance counters (CPU, GC heap sizes, Active Connections).",
      "Analyze thread stack traces or database query execution plans."
    ],
    "resolution": "Incident command. Assign roles: commander (coordinates), scribe (timeline), communicator (updates). First: stop the bleeding — can we roll back? Is there a simple kill switch? Communicate: status page update within 5 minutes, even if just \"Investigating.\" Parallel tracks: don't have 10 engineers all debugging same thing. Data collection before changing anything — understand before fixing. Postmortem: blameless, focus on systemic fixes. Timeline reconstruction: from logs, what happened and when.\n\n\n==================================================================",
    "prevention": "Set up alerts on error spike rates, configure automated health checks, write comprehensive integration tests.",
    "interviewAnswer": "To resolve this in an interview context: 1. Acknowledge the issue, 2. Walk through diagnostic steps starting with logs, 3. Propose short-term mitigation (rollback/restart), 4. Explain the permanent code fix, and 5. Propose preventive monitors."
  }
]
