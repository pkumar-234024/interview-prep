export const csharpDiagrams: Record<string, string> = {
  // c--2: Value Types vs Reference Types (Stack vs Heap)
  "c--2": `<svg viewBox="0 0 620 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <!-- Definitions for arrows -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
    </marker>
  </defs>

  <!-- Stack container -->
  <rect x="10" y="35" width="260" height="185" rx="12" fill="none" stroke="#64748B" stroke-width="2" stroke-dasharray="4 4" />
  <text x="25" y="25" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">STACK (Memory Frame - Fast)</text>

  <!-- Stack items -->
  <g transform="translate(25, 55)">
    <!-- Variable 1: int x = 10 -->
    <rect x="0" y="0" width="230" height="40" rx="8" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1.5" className="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="12" y="24" fill="#0F172A" font-size="12" font-weight="700" className="dark:fill-slate-200">int x</text>
    <text x="100" y="24" fill="#64748B" font-size="11" className="dark:fill-slate-400">Value Type</text>
    <text x="180" y="24" fill="#3B82F6" font-size="12" font-weight="700">10</text>

    <!-- Variable 2: MyClass obj = pointer -->
    <rect x="0" y="52" width="230" height="45" rx="8" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1.5" className="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="12" y="79" fill="#0F172A" font-size="12" font-weight="700" className="dark:fill-slate-200">MyClass obj</text>
    <text x="95" y="79" fill="#64748B" font-size="11" className="dark:fill-slate-400">Reference Type</text>
    <text x="180" y="79" fill="#3B82F6" font-size="11" font-weight="700">0x07F4</text>
    <circle id="ptr-start" cx="215" cy="74" r="5" fill="#3B82F6" />

    <!-- Variable 3: bool active = true -->
    <rect x="0" y="109" width="230" height="40" rx="8" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1.5" className="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="12" y="133" fill="#0F172A" font-size="12" font-weight="700" className="dark:fill-slate-200">bool active</text>
    <text x="100" y="133" fill="#64748B" font-size="11" className="dark:fill-slate-400">Value Type</text>
    <text x="180" y="133" fill="#10B981" font-size="12" font-weight="700">true</text>
  </g>

  <!-- Heap container -->
  <rect x="350" y="35" width="260" height="185" rx="12" fill="none" stroke="#64748B" stroke-width="2" stroke-dasharray="4 4" />
  <text x="365" y="25" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">HEAP (Shared - Managed GC)</text>

  <!-- Heap Object instance -->
  <g transform="translate(365, 75)">
    <rect x="0" y="0" width="230" height="100" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2" className="dark:fill-slate-900/50" />
    <!-- Object Header -->
    <path d="M 0 10 A 10 10 0 0 1 10 0 L 220 0 A 10 10 0 0 1 230 10 L 230 30 L 0 30 Z" fill="#3B82F6" />
    <text x="12" y="19" fill="#FFFFFF" font-size="11" font-weight="800">MyClass Object Instance (0x07F4)</text>
    
    <!-- Object Fields -->
    <text x="12" y="52" fill="#0F172A" font-size="12" font-weight="600" className="dark:fill-slate-200">string Name = "Praveen"</text>
    <text x="12" y="70" fill="#64748B" font-size="10" className="dark:fill-slate-400">(Heap references inner UTF16 array)</text>
    <text x="12" y="88" fill="#0F172A" font-size="12" font-weight="600" className="dark:fill-slate-200">int Code = 405</text>
  </g>

  <!-- Pointer arrow connection -->
  <path d="M 240 132 C 290 132, 280 125, 360 125" fill="none" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#arrow)" />
</svg>`,

  // c--64: Garbage Collector Generations (Gen 0, 1, 2, LOH)
  "c--64": `<svg viewBox="0 0 620 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <defs>
    <marker id="promote-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981" />
    </marker>
    <marker id="large-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
    </marker>
  </defs>

  <!-- Title description -->
  <text x="10" y="20" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">CLR GC GENERATIONAL SEGMENTS</text>

  <!-- New allocations landing zone -->
  <g transform="translate(10, 45)">
    <!-- Gen 0 block -->
    <rect x="0" y="0" width="120" height="110" rx="10" fill="#ECFDF5" stroke="#10B981" stroke-width="2" className="dark:fill-emerald-950/20" />
    <text x="60" y="30" text-anchor="middle" fill="#047857" font-size="14" font-weight="855" className="dark:fill-emerald-400">Gen 0</text>
    <text x="60" y="60" text-anchor="middle" fill="#065F46" font-size="10" font-weight="600" className="dark:fill-emerald-500">Short-lived</text>
    <text x="60" y="85" text-anchor="middle" fill="#64748B" font-size="10" className="dark:fill-slate-400">New Objects</text>
    
    <!-- Promotion pointer Gen 0 -> Gen 1 -->
    <path d="M 125 55 L 145 55" fill="none" stroke="#10B981" stroke-width="2" marker-end="url(#promote-arrow)" />
    <text x="135" y="45" text-anchor="middle" fill="#10B981" font-size="9" font-weight="700">GC</text>
  </g>

  <g transform="translate(160, 45)">
    <!-- Gen 1 block -->
    <rect x="0" y="0" width="120" height="110" rx="10" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2" className="dark:fill-amber-950/20" />
    <text x="60" y="30" text-anchor="middle" fill="#B45309" font-size="14" font-weight="855" className="dark:fill-amber-400">Gen 1</text>
    <text x="60" y="60" text-anchor="middle" fill="#92400E" font-size="10" font-weight="600" className="dark:fill-amber-500">Buffer Zone</text>
    <text x="60" y="85" text-anchor="middle" fill="#64748B" font-size="10" className="dark:fill-slate-400">Survivors</text>

    <!-- Promotion pointer Gen 1 -> Gen 2 -->
    <path d="M 125 55 L 145 55" fill="none" stroke="#10B981" stroke-width="2" marker-end="url(#promote-arrow)" />
    <text x="135" y="45" text-anchor="middle" fill="#10B981" font-size="9" font-weight="700">GC</text>
  </g>

  <g transform="translate(310, 45)">
    <!-- Gen 2 block -->
    <rect x="0" y="0" width="130" height="110" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2" className="dark:fill-blue-950/20" />
    <text x="65" y="30" text-anchor="middle" fill="#1D4ED8" font-size="14" font-weight="855" className="dark:fill-blue-400">Gen 2</text>
    <text x="65" y="60" text-anchor="middle" fill="#1E40AF" font-size="10" font-weight="600" className="dark:fill-blue-500">Long-lived</text>
    <text x="65" y="85" text-anchor="middle" fill="#64748B" font-size="10" className="dark:fill-slate-400">Statics, Singletons</text>
  </g>

  <g transform="translate(470, 45)">
    <!-- Large Object Heap (LOH) block -->
    <rect x="0" y="0" width="140" height="110" rx="10" fill="#FEF2F2" stroke="#EF4444" stroke-width="2" className="dark:fill-red-950/20" />
    <text x="70" y="30" text-anchor="middle" fill="#B91C1C" font-size="14" font-weight="855" className="dark:fill-red-400">LOH</text>
    <text x="70" y="60" text-anchor="middle" fill="#991B1B" font-size="10" font-weight="600" className="dark:fill-red-500">Objects &gt;= 85KB</text>
    <text x="70" y="85" text-anchor="middle" fill="#64748B" font-size="10" className="dark:fill-slate-400">No compaction</text>
  </g>

  <!-- Large allocations pointer -->
  <path d="M 70 180 C 130 180, 240 185, 470 95" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#large-arrow)" />
  <text x="270" y="175" fill="#EF4444" font-size="10" font-weight="700">Allocations &gt;= 85KB bypass Gen 0/1</text>
</svg>`,

  // c--53: Async/Await (Execution Flow & Synchronisation Context)
  "c--53": `<svg viewBox="0 0 650 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <defs>
    <marker id="flow-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366F1" />
    </marker>
  </defs>

  <text x="10" y="22" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">ASYNC/AWAIT STATE MACHINE PIPELINE</text>

  <!-- Timeline background line -->
  <line x1="40" y1="90" x2="610" y2="90" stroke="#E2E8F0" stroke-width="4" stroke-dasharray="5 5" className="dark:stroke-slate-800" />

  <!-- Thread 1: Calling Thread -->
  <g transform="translate(30, 45)">
    <rect x="0" y="0" width="150" height="90" rx="8" fill="#EEF2F6" stroke="#6366F1" stroke-width="2" className="dark:fill-slate-900" />
    <text x="75" y="24" text-anchor="middle" fill="#4F46E5" font-size="11" font-weight="800" className="dark:fill-indigo-400">1. Call Thread (UI/Pool)</text>
    <text x="75" y="47" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="600" className="dark:fill-slate-200">Executes synchronously</text>
    <text x="75" y="68" text-anchor="middle" fill="#64748B" font-size="10" className="dark:fill-slate-400">until 'await' keyword</text>
    
    <path d="M 155 45 L 210 45" fill="none" stroke="#6366F1" stroke-width="2" marker-end="url(#flow-arrow)" />
  </g>

  <!-- Reaching Await point -->
  <g transform="translate(225, 45)">
    <rect x="0" y="0" width="180" height="90" rx="8" fill="#F5F3FF" stroke="#8B5CF6" stroke-width="2" className="dark:fill-slate-900" />
    <text x="90" y="24" text-anchor="middle" fill="#7C3AED" font-size="11" font-weight="800" className="dark:fill-violet-400">2. Await: Suspend &amp; Return</text>
    <text x="90" y="47" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="600" className="dark:fill-slate-200">Caller thread released!</text>
    <text x="90" y="68" text-anchor="middle" fill="#64748B" font-size="9" className="dark:fill-slate-400">State machine stores context</text>

    <path d="M 185 45 L 215 45" fill="none" stroke="#6366F1" stroke-width="2" marker-end="url(#flow-arrow)" />
  </g>

  <!-- Thread 2: Continuation -->
  <g transform="translate(450, 45)">
    <rect x="0" y="0" width="170" height="90" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="2" className="dark:fill-slate-900" />
    <text x="85" y="24" text-anchor="middle" fill="#047857" font-size="11" font-weight="800" className="dark:fill-emerald-400">3. I/O Done: Resume</text>
    <text x="85" y="47" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="600" className="dark:fill-slate-200">Schedules continuation</text>
    <text x="85" y="68" text-anchor="middle" fill="#64748B" font-size="9" className="dark:fill-slate-400">Runs remaining block</text>
  </g>

  <!-- Bottom workflow explanations -->
  <rect x="30" y="160" width="590" height="55" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" className="dark:fill-slate-800/40 dark:stroke-slate-700" />
  <text x="45" y="180" fill="#475569" font-size="11" font-weight="700" className="dark:fill-slate-350">Key Advantage:</text>
  <text x="145" y="180" fill="#0F172A" font-size="11" className="dark:fill-slate-200">No thread blocks while waiting for database or network calls to complete.</text>
  <text x="45" y="198" fill="#475569" font-size="11" font-weight="700" className="dark:fill-slate-350">State Machine:</text>
  <text x="145" y="198" fill="#0F172A" font-size="11" className="dark:fill-slate-200">Compiler transforms method into structured state machine class behind the scenes.</text>
</svg>`,

  // c--51: IEnumerable vs IEnumerator Iterator Pattern
  "c--51": `<svg viewBox="0 0 600 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <defs>
    <marker id="loop-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
    </marker>
  </defs>

  <text x="10" y="20" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">ITERATION PATTERN ARCHITECTURE</text>

  <!-- IEnumerable Box -->
  <g transform="translate(10, 45)">
    <rect x="0" y="0" width="170" height="110" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2" className="dark:fill-blue-950/20" />
    <text x="85" y="28" text-anchor="middle" fill="#1D4ED8" font-size="12" font-weight="800" className="dark:fill-blue-400">IEnumerable&lt;T&gt;</text>
    <text x="85" y="55" text-anchor="middle" fill="#475569" font-size="10" font-weight="600" className="dark:fill-slate-300">"Exposes capability"</text>
    <rect x="15" y="70" width="140" height="28" rx="6" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.5" className="dark:fill-slate-900" />
    <text x="85" y="87" text-anchor="middle" fill="#1E40AF" font-size="10" font-weight="700" className="dark:fill-blue-300">GetEnumerator()</text>

    <!-- Arrow to IEnumerator -->
    <path d="M 175 55 L 210 55" fill="none" stroke="#3B82F6" stroke-width="2" marker-end="url(#loop-arrow)" />
    <text x="192" y="45" text-anchor="middle" fill="#3B82F6" font-size="9" font-weight="800">Creates</text>
  </g>

  <!-- IEnumerator Box -->
  <g transform="translate(225, 45)">
    <rect x="0" y="0" width="190" height="110" rx="10" fill="#F5F3FF" stroke="#8B5CF6" stroke-width="2" className="dark:fill-violet-950/20" />
    <text x="95" y="28" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="800" className="dark:fill-violet-400">IEnumerator&lt;T&gt;</text>
    <text x="95" y="50" text-anchor="middle" fill="#64748B" font-size="9" className="dark:fill-slate-400">Tracks active cursor/iteration state</text>
    
    <!-- Methods inside IEnumerator -->
    <g transform="translate(15, 62)" font-size="9" font-weight="700">
      <rect x="0" y="0" width="75" height="20" rx="4" fill="#FFFFFF" stroke="#8B5CF6" stroke-dasharray="2 2" className="dark:fill-slate-900" />
      <text x="37" y="13" text-anchor="middle" fill="#7C3AED" className="dark:fill-violet-300">MoveNext()</text>
      
      <rect x="85" y="0" width="75" height="20" rx="4" fill="#FFFFFF" stroke="#8B5CF6" stroke-dasharray="2 2" className="dark:fill-slate-900" />
      <text x="122" y="13" text-anchor="middle" fill="#7C3AED" className="dark:fill-violet-300">Current {get;}</text>
      
      <rect x="0" y="25" width="160" height="18" rx="4" fill="#FFFFFF" stroke="#8B5CF6" stroke-width="1" className="dark:fill-slate-900" />
      <text x="80" y="37" text-anchor="middle" fill="#6B21A8" className="dark:fill-violet-400">Reset()</text>
    </g>
  </g>

  <!-- Foreach block execution -->
  <g transform="translate(430, 45)">
    <rect x="0" y="0" width="160" height="110" rx="10" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2" className="dark:fill-slate-900 dark:stroke-slate-800" />
    <text x="80" y="25" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="800" className="dark:fill-slate-200">Compiler translation</text>
    <rect x="10" y="38" width="140" height="62" rx="6" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1.5" className="dark:fill-slate-800 dark:stroke-slate-700" />
    <text x="18" y="54" fill="#475569" font-size="9" font-family="monospace" className="dark:fill-slate-400">while(enum.MoveNext())</text>
    <text x="18" y="70" fill="#475569" font-size="9" font-family="monospace" className="dark:fill-slate-400"> {</text>
    <text x="28" y="85" fill="#3B82F6" font-size="9" font-family="monospace" font-weight="700">var item = enum.Current;</text>
    <text x="18" y="94" fill="#475569" font-size="9" font-family="monospace" className="dark:fill-slate-400"> }</text>
  </g>
</svg>`,

  // c--103: Monitor vs Mutex vs Semaphore Concurrency
  "c--103": `<svg viewBox="0 0 600 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <text x="10" y="20" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">CONCURRENCY SYNCHRONIZATION PRIMITIVES</text>

  <!-- Monitor Block -->
  <g transform="translate(10, 40)">
    <rect x="0" y="0" width="180" height="180" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2" className="dark:fill-blue-950/20" />
    <text x="90" y="25" text-anchor="middle" fill="#1D4ED8" font-size="13" font-weight="800" className="dark:fill-blue-400">Monitor (lock)</text>
    <text x="90" y="45" text-anchor="middle" fill="#64748B" font-size="9" className="dark:fill-slate-400">Intra-Process (In App Memory)</text>
    
    <!-- Lock graphic -->
    <rect x="65" y="65" width="50" height="40" rx="6" fill="#3B82F6" />
    <path d="M 75 65 L 75 50 C 75 35, 105 35, 105 50 L 105 65" fill="none" stroke="#3B82F6" stroke-width="4" stroke-linecap="round" />
    <circle cx="90" cy="85" r="4" fill="#FFFFFF" />

    <text x="90" y="130" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700" className="dark:fill-slate-200">1 Thread Entry Slot</text>
    <text x="90" y="150" text-anchor="middle" fill="#64748B" font-size="9.5" className="dark:fill-slate-400">Fastest lock overhead</text>
    <text x="90" y="165" text-anchor="middle" fill="#64748B" font-size="9.5" className="dark:fill-slate-400">Tied to thread identity</text>
  </g>

  <!-- Mutex Block -->
  <g transform="translate(205, 40)">
    <rect x="0" y="0" width="180" height="180" rx="10" fill="#FEF2F2" stroke="#EF4444" stroke-width="2" className="dark:fill-red-950/20" />
    <text x="90" y="25" text-anchor="middle" fill="#B91C1C" font-size="13" font-weight="800" className="dark:fill-red-400">Mutex</text>
    <text x="90" y="45" text-anchor="middle" fill="#64748B" font-size="9" className="dark:fill-slate-400">Cross-Process (OS Kernel)</text>

    <!-- Key graphic -->
    <g transform="translate(55, 60)">
      <circle cx="20" cy="20" r="14" fill="none" stroke="#EF4444" stroke-width="4" />
      <rect x="34" y="16" width="35" height="8" rx="2" fill="#EF4444" />
      <rect x="53" y="24" width="6" height="10" fill="#EF4444" />
      <rect x="63" y="24" width="6" height="10" fill="#EF4444" />
    </g>

    <text x="90" y="130" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700" className="dark:fill-slate-200">1 Process Entry Slot</text>
    <text x="90" y="150" text-anchor="middle" fill="#64748B" font-size="9.5" className="dark:fill-slate-400">OS Context-switch cost</text>
    <text x="90" y="165" text-anchor="middle" fill="#64748B" font-size="9.5" className="dark:fill-slate-400">Named system-wide lock</text>
  </g>

  <!-- Semaphore Block -->
  <g transform="translate(400, 40)">
    <rect x="0" y="0" width="190" height="180" rx="10" fill="#F0FDF4" stroke="#22C55E" stroke-width="2" className="dark:fill-green-950/20" />
    <text x="95" y="25" text-anchor="middle" fill="#15803D" font-size="13" font-weight="800" className="dark:fill-green-400">SemaphoreSlim</text>
    <text x="95" y="45" text-anchor="middle" fill="#64748B" font-size="9" className="dark:fill-slate-400">Multi-resource throttle</text>

    <!-- Gates/Lanes graphic -->
    <g transform="translate(45, 60)">
      <!-- Lane 1 (Open) -->
      <rect x="0" y="0" width="28" height="42" rx="4" fill="#22C55E" opacity="0.8" />
      <text x="14" y="25" text-anchor="middle" fill="#FFFFFF" font-size="10" font-weight="800">T1</text>
      <!-- Lane 2 (Open) -->
      <rect x="36" y="0" width="28" height="42" rx="4" fill="#22C55E" opacity="0.8" />
      <text x="50" y="25" text-anchor="middle" fill="#FFFFFF" font-size="10" font-weight="800">T2</text>
      <!-- Lane 3 (Closed/Red) -->
      <rect x="72" y="0" width="28" height="42" rx="4" fill="#DC2626" opacity="0.4" stroke="#DC2626" stroke-width="1" />
      <text x="86" y="25" text-anchor="middle" fill="#DC2626" font-size="9" font-weight="700">Blocked</text>
    </g>

    <text x="95" y="130" text-anchor="middle" fill="#0F172A" font-size="10" font-weight="700" className="dark:fill-slate-200">N Concurrent Entries</text>
    <text x="95" y="150" text-anchor="middle" fill="#64748B" font-size="9.5" className="dark:fill-slate-400">Supports async await</text>
    <text x="95" y="165" text-anchor="middle" fill="#64748B" font-size="9.5" className="dark:fill-slate-400">Ideal for API rate limits</text>
  </g>
</svg>`,

  // c--8: What is an interface?
  "c--8": `<svg viewBox="0 0 620 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <defs>
    <marker id="inherits" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748B" />
    </marker>
  </defs>
  <text x="10" y="20" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">INTERFACE VS ABSTRACT CLASS DESIGN</text>

  <!-- Left: Interface Concept -->
  <g transform="translate(10, 40)">
    <rect x="0" y="0" width="280" height="160" rx="10" fill="none" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="2 2" />
    <rect x="15" y="15" width="250" height="30" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5" className="dark:fill-blue-950/20" />
    <text x="140" y="34" text-anchor="middle" fill="#1D4ED8" font-size="12" font-weight="800" className="dark:fill-blue-400">«Interface» IRepository</text>
    
    <!-- Contract details -->
    <text x="30" y="65" fill="#64748B" font-size="11" font-weight="700" className="dark:fill-slate-400">Pure Contract (No State):</text>
    <text x="30" y="85" fill="currentColor" font-size="11" font-family="monospace">void Add(T item);</text>
    <text x="30" y="105" fill="currentColor" font-size="11" font-family="monospace">T Get(int id);</text>
    
    <text x="30" y="130" fill="#16A34A" font-size="10.5" font-weight="600" className="dark:fill-emerald-400">✓ Supports Multiple Implementations</text>
    <text x="30" y="145" fill="#16A34A" font-size="10.5" font-weight="600" className="dark:fill-emerald-400">✓ No variables or fields allowed</text>
  </g>

  <!-- Right: Abstract Class Concept -->
  <g transform="translate(320, 40)">
    <rect x="0" y="0" width="290" height="160" rx="10" fill="none" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="2 2" />
    <rect x="15" y="15" width="260" height="30" rx="6" fill="#F5F3FF" stroke="#8B5CF6" stroke-width="1.5" className="dark:fill-violet-950/20" />
    <text x="145" y="34" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="800" className="dark:fill-violet-400">«Abstract Class» BaseService</text>
    
    <!-- State and Implementation details -->
    <text x="30" y="65" fill="#64748B" font-size="11" font-weight="700" className="dark:fill-slate-400">Partial Implementation + State:</text>
    <text x="30" y="85" fill="#DC2626" font-size="11" font-family="monospace" className="dark:fill-red-400">protected string connectionString;</text>
    <text x="30" y="105" fill="currentColor" font-size="11" font-family="monospace">abstract void Execute();</text>
    <text x="30" y="125" fill="#1E40AF" font-size="10.5" font-family="monospace" font-weight="600" className="dark:fill-blue-300">void Log() { /* Concrete logic */ }</text>
    
    <text x="30" y="148" fill="#B45309" font-size="10.5" font-weight="600" className="dark:fill-amber-400">⚠ Single Class Inheritance limit</text>
  </g>
</svg>`,

  // c--9: What is an abstract class? (Reuses interface vs abstract comparison)
  "c--9": `<svg viewBox="0 0 620 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <text x="10" y="20" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">ABSTRACT CLASS CONTRACT &amp; BEHAVIOUR</text>

  <!-- Left: Abstract Class Structure -->
  <g transform="translate(10, 40)">
    <rect x="0" y="0" width="280" height="160" rx="10" fill="none" stroke="#8B5CF6" stroke-width="1.5" stroke-dasharray="2 2" />
    <rect x="15" y="15" width="250" height="30" rx="6" fill="#F5F3FF" stroke="#8B5CF6" stroke-width="1.5" className="dark:fill-violet-950/20" />
    <text x="140" y="34" text-anchor="middle" fill="#7C3AED" font-size="12" font-weight="800" className="dark:fill-violet-400">abstract class Animal</text>
    
    <!-- Members -->
    <text x="25" y="65" fill="#64748B" font-size="10.5" font-weight="700" className="dark:fill-slate-400">Abstract member (Must be overridden):</text>
    <text x="25" y="82" fill="currentColor" font-size="11" font-family="monospace">public abstract void Speak();</text>
    
    <text x="25" y="108" fill="#64748B" font-size="10.5" font-weight="700" className="dark:fill-slate-400">Concrete member (Inherited logic):</text>
    <text x="25" y="125" fill="#1E40AF" font-size="11" font-family="monospace" className="dark:fill-blue-300">public void Sleep() { Log("zz"); }</text>
    <text x="25" y="145" fill="currentColor" font-size="10" font-family="monospace">protected int age = 0; // Has fields!</text>
  </g>

  <!-- Right: Overridden Implementations -->
  <g transform="translate(310, 40)">
    <rect x="0" y="0" width="300" height="160" rx="10" fill="none" stroke="#10B981" stroke-width="1.5" stroke-dasharray="3 3" />
    <text x="150" y="24" text-anchor="middle" fill="#10B981" font-size="11" font-weight="800">Derived Concrete Instances</text>
    
    <!-- Dog Class -->
    <g transform="translate(15, 35)">
      <rect x="5" y="10" width="120" height="50" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5" className="dark:fill-emerald-950/20" />
      <text x="65" y="26" text-anchor="middle" fill="#047857" font-size="11" font-weight="700" className="dark:fill-emerald-400">class Dog : Animal</text>
      <text x="65" y="42" text-anchor="middle" fill="currentColor" font-size="9" font-family="monospace">override Speak() {"Woof"}</text>
    </g>

    <!-- Cat Class -->
    <g transform="translate(150, 35)">
      <rect x="5" y="10" width="120" height="50" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5" className="dark:fill-emerald-950/20" />
      <text x="65" y="26" text-anchor="middle" fill="#047857" font-size="11" font-weight="700" className="dark:fill-emerald-400">class Cat : Animal</text>
      <text x="65" y="42" text-anchor="middle" fill="currentColor" font-size="9" font-family="monospace">override Speak() {"Meow"}</text>
    </g>
    
    <text x="25" y="115" fill="#16A34A" font-size="10.5" font-weight="700">Cannot be instantiated directly:</text>
    <text x="25" y="132" fill="currentColor" font-size="11" font-family="monospace">var a = new Animal(); // Compiler Error!</text>
    <text x="25" y="148" fill="currentColor" font-size="11" font-family="monospace">var d = new Dog();    // Valid</text>
  </g>
</svg>`,

  // c--15: What is the difference between string and StringBuilder?
  "c--15": `<svg viewBox="0 0 620 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <text x="10" y="20" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">STRING (IMMUTABLE) VS STRINGBUILDER (MUTABLE)</text>

  <!-- Left: String Concatenation -->
  <g transform="translate(10, 40)">
    <rect x="0" y="0" width="280" height="160" rx="10" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="3 3" />
    <text x="140" y="22" text-anchor="middle" fill="#EF4444" font-size="11.5" font-weight="800">string s = "A" + "B" + "C"</text>
    
    <!-- Objects on heap -->
    <g transform="translate(15, 35)">
      <!-- Box A -->
      <rect x="10" y="15" width="60" height="30" rx="4" fill="#FEE2E2" stroke="#EF4444" stroke-width="1" className="dark:fill-red-950/20" />
      <text x="40" y="34" text-anchor="middle" fill="currentColor" font-size="12" font-weight="700">"A"</text>
      <text x="40" y="58" text-anchor="middle" fill="#64748B" font-size="9" className="dark:fill-slate-500">Orphaned GC</text>
      
      <!-- Box AB -->
      <rect x="90" y="15" width="60" height="30" rx="4" fill="#FEE2E2" stroke="#EF4444" stroke-width="1" className="dark:fill-red-950/20" />
      <text x="120" y="34" text-anchor="middle" fill="currentColor" font-size="12" font-weight="700">"AB"</text>
      <text x="120" y="58" text-anchor="middle" fill="#64748B" font-size="9" className="dark:fill-slate-500">Orphaned GC</text>
      
      <!-- Box ABC -->
      <rect x="170" y="15" width="70" height="30" rx="4" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5" className="dark:fill-emerald-950/20" />
      <text x="205" y="34" text-anchor="middle" fill="#047857" font-size="12" font-weight="800" className="dark:fill-emerald-400">"ABC"</text>
      <text x="205" y="58" text-anchor="middle" fill="#10B981" font-size="9" font-weight="700">Active Ref</text>
    </g>
    
    <text x="15" y="125" fill="#EF4444" font-size="10.5" font-weight="700">Multiple memory re-allocations on heap!</text>
    <text x="15" y="142" fill="#64748B" font-size="9.5" className="dark:fill-slate-400">Every concatenation creates a new string instance.</text>
  </g>

  <!-- Right: StringBuilder in-place -->
  <g transform="translate(310, 40)">
    <rect x="0" y="0" width="300" height="160" rx="10" fill="none" stroke="#10B981" stroke-width="1.5" stroke-dasharray="3 3" />
    <text x="150" y="22" text-anchor="middle" fill="#10B981" font-size="11.5" font-weight="800">StringBuilder sb (In-place buffer)</text>
    
    <!-- Single array buffer graphic -->
    <g transform="translate(15, 35)">
      <rect x="10" y="15" width="250" height="40" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="2" className="dark:fill-emerald-950/20" />
      <!-- Slots -->
      <line x1="60" y1="15" x2="60" y2="55" stroke="#10B981" stroke-width="1" />
      <line x1="110" y1="15" x2="110" y2="55" stroke="#10B981" stroke-width="1" />
      <line x1="160" y1="15" x2="160" y2="55" stroke="#10B981" stroke-width="1" />
      <line x1="210" y1="15" x2="210" y2="55" stroke="#10B981" stroke-dasharray="2 2" />
      
      <text x="35" y="40" text-anchor="middle" fill="currentColor" font-size="14" font-weight="700">'A'</text>
      <text x="85" y="40" text-anchor="middle" fill="currentColor" font-size="14" font-weight="700">'B'</text>
      <text x="135" y="40" text-anchor="middle" fill="currentColor" font-size="14" font-weight="700">'C'</text>
      <text x="185" y="40" text-anchor="middle" fill="#A1A1AA" font-size="12" font-family="monospace">\0</text>
      <text x="235" y="40" text-anchor="middle" fill="#A1A1AA" font-size="12" font-family="monospace">\0</text>
      
      <text x="135" y="68" text-anchor="middle" fill="#64748B" font-size="9" className="dark:fill-slate-400">Mutable Character Array (Capacity = 16)</text>
    </g>
    
    <text x="15" y="125" fill="#10B981" font-size="10.5" font-weight="700">Single array instance, modified in-place!</text>
    <text x="15" y="142" fill="#64748B" font-size="9.5" className="dark:fill-slate-400">Minimizes GC pressure. Great for intensive loops.</text>
  </g>
</svg>`,

  // c--19: What is a delegate?
  "c--19": `<svg viewBox="0 0 620 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <defs>
    <marker id="delegate-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#8B5CF6" />
    </marker>
  </defs>
  <text x="10" y="20" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">DELEGATE PIPELINE (TYPE-SAFE METHOD POINTERS)</text>

  <!-- Left: Delegate Declaration & Assignment -->
  <g transform="translate(10, 40)">
    <rect x="0" y="0" width="230" height="160" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" className="dark:fill-slate-900 dark:stroke-slate-800" />
    <rect x="12" y="12" width="206" height="36" rx="6" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1" className="dark:fill-blue-950/20" />
    <text x="22" y="34" fill="#1E40AF" font-size="10" font-family="monospace" font-weight="700" className="dark:fill-blue-300">delegate void Notify();</text>
    
    <g transform="translate(12, 60)" font-size="10" font-family="monospace">
      <text x="5" y="20" fill="currentColor">Notify handler;</text>
      <text x="5" y="40" fill="currentColor">handler += LogToConsole;</text>
      <text x="5" y="60" fill="currentColor">handler += LogToFile;</text>
      <text x="5" y="90" fill="#8B5CF6" font-weight="700">handler.Invoke(); // Runs both</text>
    </g>
  </g>

  <!-- Middle: Delegate object container -->
  <g transform="translate(260, 65)">
    <rect x="0" y="0" width="120" height="110" rx="8" fill="#F5F3FF" stroke="#8B5CF6" stroke-width="2" className="dark:fill-violet-950/20" />
    <text x="60" y="24" text-anchor="middle" fill="#7C3AED" font-size="11" font-weight="800" className="dark:fill-violet-400">Multicast Delegate</text>
    
    <!-- Invocation List graphic -->
    <rect x="10" y="35" width="100" height="20" rx="4" fill="#FFFFFF" stroke="#8B5CF6" className="dark:fill-slate-900" />
    <text x="60" y="48" text-anchor="middle" fill="currentColor" font-size="9" font-weight="600">Pointer 1</text>
    
    <rect x="10" y="60" width="100" height="20" rx="4" fill="#FFFFFF" stroke="#8B5CF6" className="dark:fill-slate-900" />
    <text x="60" y="73" text-anchor="middle" fill="currentColor" font-size="9" font-weight="600">Pointer 2</text>
    
    <path d="M 115 45 C 135 45, 125 35, 155 35" fill="none" stroke="#8B5CF6" stroke-width="1.5" marker-end="url(#delegate-arrow)" />
    <path d="M 115 70 C 135 70, 125 110, 155 110" fill="none" stroke="#8B5CF6" stroke-width="1.5" marker-end="url(#delegate-arrow)" />
  </g>

  <!-- Right: Target Methods in memory -->
  <g transform="translate(435, 40)">
    <!-- Console Logger method -->
    <rect x="0" y="10" width="165" height="50" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5" className="dark:fill-emerald-950/20" />
    <text x="12" y="28" fill="#047857" font-size="10.5" font-weight="700" className="dark:fill-emerald-400">void LogToConsole()</text>
    <text x="12" y="44" fill="currentColor" font-size="9" font-family="monospace">Console.WriteLine("...");</text>
    
    <!-- File Logger method -->
    <rect x="0" y="85" width="165" height="50" rx="6" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5" className="dark:fill-emerald-950/20" />
    <text x="12" y="103" fill="#047857" font-size="10.5" font-weight="700" className="dark:fill-emerald-400">void LogToFile()</text>
    <text x="12" y="119" fill="currentColor" font-size="9" font-family="monospace">File.WriteAllText("...");</text>
  </g>
</svg>`,

  // c--22: What is exception handling?
  "c--22": `<svg viewBox="0 0 620 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <defs>
    <marker id="ex-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
    </marker>
    <marker id="success-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981" />
    </marker>
  </defs>
  <text x="10" y="20" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">EXCEPTION HANDLING EXECUTION FLOW</text>

  <!-- Try Block -->
  <g transform="translate(10, 40)">
    <rect x="0" y="0" width="170" height="150" rx="8" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2" className="dark:fill-blue-950/20" />
    <text x="85" y="25" text-anchor="middle" fill="#1E40AF" font-size="13" font-weight="800" className="dark:fill-blue-400">TRY BLOCK</text>
    
    <rect x="12" y="40" width="146" height="55" rx="4" fill="#FFFFFF" stroke="#3B82F6" className="dark:fill-slate-900" />
    <text x="20" y="58" fill="currentColor" font-size="9.5" font-family="monospace">var c = OpenConnection();</text>
    <text x="20" y="73" fill="currentColor" font-size="9.5" font-family="monospace">c.ExecuteQuery();</text>
    
    <!-- Flow arrows -->
    <path d="M 180 65 L 210 65" fill="none" stroke="#10B981" stroke-width="2" marker-end="url(#success-arrow)" />
    <text x="195" y="54" text-anchor="middle" fill="#10B981" font-size="9" font-weight="700">Normal</text>

    <path d="M 180 115 C 200 115, 195 125, 215 125" fill="none" stroke="#EF4444" stroke-width="2" marker-end="url(#ex-arrow)" />
    <text x="195" y="105" text-anchor="middle" fill="#EF4444" font-size="9" font-weight="700">Error</text>
  </g>

  <!-- Catch Block -->
  <g transform="translate(230, 40)">
    <rect x="0" y="0" width="180" height="150" rx="8" fill="#FEF2F2" stroke="#EF4444" stroke-width="2" className="dark:fill-red-950/20" />
    <text x="90" y="25" text-anchor="middle" fill="#B91C1C" font-size="13" font-weight="800" className="dark:fill-red-400">CATCH BLOCK</text>
    <text x="90" y="45" text-anchor="middle" fill="#991B1B" font-size="9.5" font-weight="600" className="dark:fill-red-500">(SqlException ex)</text>
    
    <rect x="12" y="60" width="156" height="50" rx="4" fill="#FFFFFF" stroke="#EF4444" className="dark:fill-slate-900" />
    <text x="20" y="78" fill="currentColor" font-size="9" font-family="monospace">Log(ex.Message);</text>
    <text x="20" y="94" fill="#EF4444" font-size="9" font-family="monospace" font-weight="700">throw; // Preserves stack</text>

    <!-- Path to finally -->
    <path d="M 190 75 L 210 75" fill="none" stroke="#94A3B8" stroke-width="1.5" marker-end="url(#success-arrow)" />
  </g>

  <!-- Finally Block -->
  <g transform="translate(430, 40)">
    <rect x="0" y="0" width="180" height="150" rx="8" fill="#FFFBEB" stroke="#F59E0B" stroke-width="2" className="dark:fill-amber-950/20" />
    <text x="90" y="25" text-anchor="middle" fill="#B45309" font-size="13" font-weight="800" className="dark:fill-amber-400">FINALLY BLOCK</text>
    
    <rect x="12" y="45" width="156" height="55" rx="4" fill="#FFFFFF" stroke="#F59E0B" className="dark:fill-slate-900" />
    <text x="20" y="65" fill="currentColor" font-size="9" font-family="monospace">if (c != null) {</text>
    <text x="28" y="82" fill="#B45309" font-size="9.5" font-family="monospace" font-weight="700">c.Close();</text>
    <text x="20" y="92" fill="currentColor" font-size="9" font-family="monospace">}</text>

    <text x="90" y="125" text-anchor="middle" fill="#B45309" font-size="9.5" font-weight="700" className="dark:fill-amber-500">ALWAYS EXECUTES</text>
    <text x="90" y="138" text-anchor="middle" fill="#64748B" font-size="8.5" className="dark:fill-slate-400">For resource cleanup</text>
  </g>
</svg>`,

  // c--29: What is the difference between IEnumerable and IQueryable?
  "c--29": `<svg viewBox="0 0 620 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, -apple-system, sans-serif">
  <defs>
    <marker id="db-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
    </marker>
    <marker id="filter-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
    </marker>
  </defs>
  <text x="10" y="20" fill="currentColor" font-size="12" font-weight="800" letter-spacing="1">IEnumerable (CLIENT-SIDE) VS IQueryable (SERVER-SIDE)</text>

  <!-- Left: IEnumerable (In-Memory filtration) -->
  <g transform="translate(10, 40)">
    <rect x="0" y="0" width="280" height="160" rx="10" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="3 3" />
    <text x="140" y="22" text-anchor="middle" fill="#EF4444" font-size="11.5" font-weight="800">IEnumerable&lt;Order&gt; (Loads First)</text>
    
    <!-- Client Server Graphic -->
    <g transform="translate(10, 35)">
      <!-- Client -->
      <rect x="5" y="10" width="70" height="50" rx="4" fill="#EFF6FF" stroke="#3B82F6" className="dark:fill-slate-900" />
      <text x="40" y="26" text-anchor="middle" fill="currentColor" font-size="9" font-weight="700">Client Memory</text>
      <text x="40" y="42" text-anchor="middle" fill="#EF4444" font-size="8.5" font-weight="800">Filters Here</text>

      <!-- Database -->
      <rect x="175" y="10" width="75" height="50" rx="4" fill="#EEF2F6" stroke="#64748B" className="dark:fill-slate-900" />
      <text x="212" y="30" text-anchor="middle" fill="currentColor" font-size="9.5" font-weight="700">Database</text>
      <text x="212" y="46" text-anchor="middle" fill="#64748B" font-size="8" className="dark:fill-slate-400">10,000 Rows</text>
      
      <!-- Arrows -->
      <path d="M 170 35 L 85 35" fill="none" stroke="#EF4444" stroke-width="2" marker-end="url(#filter-arrow)" />
      <text x="127" y="25" text-anchor="middle" fill="#EF4444" font-size="8.5" font-weight="700">10,000 rows sent</text>
    </g>

    <text x="15" y="125" fill="#EF4444" font-size="10" font-weight="700">⚠ Heavy Network &amp; Memory overhead!</text>
    <text x="15" y="142" fill="#64748B" font-size="9" className="dark:fill-slate-400">Loads entire records list before evaluating Where() clause.</text>
  </g>

  <!-- Right: IQueryable (Remote filtration) -->
  <g transform="translate(310, 40)">
    <rect x="0" y="0" width="300" height="160" rx="10" fill="none" stroke="#10B981" stroke-width="1.5" stroke-dasharray="3 3" />
    <text x="150" y="22" text-anchor="middle" fill="#10B981" font-size="11.5" font-weight="800">IQueryable&lt;Order&gt; (Translates to SQL)</text>
    
    <!-- Client Server Graphic -->
    <g transform="translate(10, 35)">
      <!-- Client -->
      <rect x="5" y="10" width="70" height="50" rx="4" fill="#EFF6FF" stroke="#3B82F6" className="dark:fill-slate-900" />
      <text x="40" y="26" text-anchor="middle" fill="currentColor" font-size="9" font-weight="700">Client Memory</text>
      <text x="40" y="44" text-anchor="middle" fill="#10B981" font-size="9" font-weight="800">Only 5 Rows</text>

      <!-- Database -->
      <rect x="185" y="10" width="85" height="50" rx="4" fill="#ECFDF5" stroke="#10B981" className="dark:fill-slate-900" />
      <text x="227" y="26" text-anchor="middle" fill="currentColor" font-size="9.5" font-weight="700">Database</text>
      <text x="227" y="42" text-anchor="middle" fill="#10B981" font-size="8.5" font-weight="800">Runs SQL (Where)</text>

      <!-- Arrows -->
      <path d="M 80 25 L 180 25" fill="none" stroke="#3B82F6" stroke-width="1.5" marker-end="url(#db-arrow)" />
      <text x="130" y="18" text-anchor="middle" fill="#3B82F6" font-size="8" font-weight="700">Sends Expression</text>
      
      <path d="M 180 45 L 85 45" fill="none" stroke="#10B981" stroke-width="2" marker-end="url(#success-arrow)" />
      <text x="132" y="58" text-anchor="middle" fill="#10B981" font-size="8.5" font-weight="700">Sends 5 rows only</text>
    </g>

    <text x="15" y="125" fill="#10B981" font-size="10" font-weight="700">✓ Highly Optimized Database querying!</text>
    <text x="15" y="142" fill="#64748B" font-size="9" className="dark:fill-slate-400">Filters database records directly. Translates LINQ into SQL.</text>
  </g>
</svg>`
};
