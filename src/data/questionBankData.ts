import { type InterviewQuestion } from '../types.ts'

export const questionData: InterviewQuestion[] = [
  {
    "id": "c--1",
    "category": "C#",
    "level": "Beginner",
    "question": "What is C#?",
    "answer": "C# is a statically typed, object-oriented, managed programming language developed by Microsoft. It runs on the .NET runtime (CLR), which provides garbage collection, type safety, and JIT compilation. It combines power of C++ with the productivity of Java.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Used to build everything from web APIs to Windows desktop apps.",
    "followUps": [
      "How does C# differ from Java?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--2",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between value types and reference types?",
    "answer": "Value types (int, struct, bool, enum) are stored on the stack (or inline within the containing type). They are copied on assignment. Reference types (class, string, arrays) are stored on the heap; variables hold a reference (pointer) to the data. Assigning a reference type copies the reference, not the data.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Boxing occurs in legacy code using ArrayList or when passing int to a method expecting object.",
    "followUps": [
      "What happens when you box a value type?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--3",
    "category": "C#",
    "level": "Beginner",
    "question": "What are the access modifiers in C#?",
    "answer": "public (accessible anywhere), private (same class only), protected (same class + derived), internal (same assembly), protected internal (same assembly OR derived), private protected (same assembly AND derived).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Keep fields private and expose via properties to control invariants.",
    "followUps": [
      "What is the default modifier for a class member?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--4",
    "category": "C#",
    "level": "Beginner",
    "question": "What is a class vs a struct?",
    "answer": "Class is a reference type; struct is a value type. Classes support inheritance; structs do not (except implementing interfaces). Structs are value-copied; classes are reference-copied. Classes live on the heap; structs on the stack.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "System.Drawing.Point is a struct because it's small and frequently copied.",
    "followUps": [
      "When would you prefer a struct?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--5",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between == and .Equals()?",
    "answer": "For value types, both compare values. For reference types, == by default compares references (object identity), while .Equals() can be overridden to compare content. String overrides both to compare content.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Two string variables with same content: == returns true because string overrides ==.",
    "followUps": [
      "How does string interning affect this?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--6",
    "category": "C#",
    "level": "Beginner",
    "question": "What is a constructor?",
    "answer": "A constructor is a special method called when an object is instantiated. It initializes the object's state. C# supports default constructors, parameterized constructors, static constructors, and copy constructors.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Static constructors are used to initialize static fields or perform one-time setup logic.",
    "followUps": [
      "What is a static constructor used for?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--7",
    "category": "C#",
    "level": "Beginner",
    "question": "What is inheritance in C#?",
    "answer": "Inheritance allows a class (derived/child) to acquire properties and methods of another class (base/parent) using the : symbol. C# supports single inheritance for classes but multiple inheritance via interfaces.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "A Vehicle base class can be inherited by Car and Truck, sharing common drive logic.",
    "followUps": [
      "What does the 'sealed' keyword do?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--8",
    "category": "C#",
    "level": "Beginner",
    "question": "What is an interface?",
    "answer": "An interface defines a contract — a set of method/property signatures without implementation (in older C#; C# 8+ allows default implementations). Classes that implement an interface must provide implementations for all members.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "IRepository<T> defines CRUD contract — SQL and InMemory repositories both implement it.",
    "followUps": [
      "Can an interface have fields?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--9",
    "category": "C#",
    "level": "Beginner",
    "question": "What is an abstract class?",
    "answer": "An abstract class cannot be instantiated directly. It may contain abstract methods (no implementation, must be overridden) and concrete methods. It provides a partial implementation shared by derived classes.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "An Animal abstract class with an abstract Speak() method — Dog and Cat override it.",
    "followUps": [
      "When would you choose an abstract class over an interface?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--10",
    "category": "C#",
    "level": "Beginner",
    "question": "What is polymorphism?",
    "answer": "Polymorphism means \"many forms.\" In C#, it appears as compile-time (method overloading) and runtime (method overriding with virtual/override keywords). A base class reference can hold a derived class object and call overridden methods.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "IPayment reference calls Process() — at runtime it executes CreditCardPayment or PayPalPayment.",
    "followUps": [
      "What is the difference between overloading and overriding?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--11",
    "category": "C#",
    "level": "Beginner",
    "question": "What are properties in C#?",
    "answer": "Properties are members that provide flexible access to private fields via get and set accessors. They allow validation logic inside set, and computed values in get. Auto-properties generate a backing field automatically.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "public decimal Price { get; private set; } — set only within the class.",
    "followUps": [
      "What is a read-only property?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--12",
    "category": "C#",
    "level": "Beginner",
    "question": "What is encapsulation?",
    "answer": "Encapsulation bundles data (fields) and methods that operate on that data within a class, and restricts direct access to internal state using access modifiers. It protects object integrity.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Making Order._total private and exposing it via a read-only TotalAmount property.",
    "followUps": [
      "How do you enforce encapsulation in C#?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--13",
    "category": "C#",
    "level": "Beginner",
    "question": "What is a namespace?",
    "answer": "A namespace organizes classes and other types into a logical hierarchy, preventing naming conflicts. Declared with the namespace keyword; accessed with using directive or fully qualified name.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "System.Collections vs System.Collections.Generic — both contain List but in different namespaces.",
    "followUps": [
      "Can two classes have the same name in the same namespace?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--14",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the using statement?",
    "answer": "Two usages: (1) using directive for importing namespaces. (2) using statement for resource management — calls Dispose() automatically on IDisposable objects when the block exits, even if an exception occurs.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "using var conn = new SqlConnection(cs) — connection is auto-closed at end of scope.",
    "followUps": [
      "What is the 'using declaration' in C# 8+?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--15",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between string and StringBuilder?",
    "answer": "string is immutable — every modification creates a new object, causing GC pressure. StringBuilder is mutable and efficient for repeated string manipulation. Use StringBuilder when concatenating in loops.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Building a CSV string from 10,000 rows — use StringBuilder to avoid O(n²) allocations.",
    "followUps": [
      "At what point does StringBuilder become more efficient?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--16",
    "category": "C#",
    "level": "Beginner",
    "question": "What are generics?",
    "answer": "Generics allow writing type-safe code that works with any data type without boxing. They provide compile-time type checking and code reuse. Example: List<T>, Dictionary<TKey, TValue>.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "public T Max<T>(T a, T b) where T : IComparable<T> — works for int, double, string.",
    "followUps": [
      "What are generic constraints?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--17",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between List<T> and Array?",
    "answer": "Array has fixed size, defined at creation. List<T> is dynamic — it grows automatically. List<T> has richer methods (Add, Remove, LINQ). Arrays are slightly faster for fixed-size access.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Pixel buffer for image processing — fixed size, performance-critical: use array.",
    "followUps": [
      "When would you choose an array over List<T>?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--18",
    "category": "C#",
    "level": "Beginner",
    "question": "What is LINQ?",
    "answer": "LINQ (Language Integrated Query) allows querying collections, databases, XML, and other sources using a unified syntax. Supports two forms: query syntax (SQL-like) and method syntax (lambda-based).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "var result = dbContext.Orders.Where(o => o.Total > 100).ToList() — executed on .ToList().",
    "followUps": [
      "What is deferred execution in LINQ?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--19",
    "category": "C#",
    "level": "Beginner",
    "question": "What is a delegate?",
    "answer": "A delegate is a type-safe function pointer. It holds a reference to a method and allows methods to be passed as parameters. Foundation for events and LINQ's Func/Action types.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Passing a sorting strategy as a delegate to a sort method.",
    "followUps": [
      "What is a multicast delegate?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--20",
    "category": "C#",
    "level": "Beginner",
    "question": "What is an event?",
    "answer": "An event is a mechanism for communication between objects based on publisher-subscriber pattern. Built on delegates. The publisher raises the event; subscribers react. The event keyword restricts external callers from raising or clearing the event.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Button.Click event — multiple UI handlers subscribed to a single user action.",
    "followUps": [
      "What is the EventHandler<TEventArgs> delegate?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--21",
    "category": "C#",
    "level": "Beginner",
    "question": "What are lambda expressions?",
    "answer": "Lambda expressions are anonymous functions written inline. Syntax: (parameters) => expression or { statements }. Used extensively with LINQ, delegates, events, and Tasks.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "orders.Where(o => o.Status == status) — status captured from outer scope (closure).",
    "followUps": [
      "What is a closure?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--22",
    "category": "C#",
    "level": "Beginner",
    "question": "What is exception handling?",
    "answer": "Exception handling uses try/catch/finally blocks. try wraps risky code. catch catches specific exceptions. finally always executes (cleanup). throw rethrows; throw ex loses stack trace.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Catching SqlException specifically to handle database connection errors differently from NullReferenceException.",
    "followUps": [
      "What is the difference between throw and throw ex?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--23",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between int? and int?",
    "answer": "int is a non-nullable value type (cannot be null). int? (Nullable<int>) wraps int to allow null. Useful for database columns or optional values. Use .HasValue and .Value or null-coalescing ?? operator.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Database columns that may be NULL — map to int? in C# model.",
    "followUps": [
      "What is the null-conditional operator?",
      ".?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--24",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the var keyword?",
    "answer": "var is an implicitly typed local variable. The compiler infers the type at compile time — it is NOT dynamic. Once assigned, the type is fixed. Use when the type is obvious from context; avoid when it reduces clarity.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "var query = dbContext.Orders.Where(...) — type is IQueryable<Order>, compiler knows it.",
    "followUps": [
      "What is the difference between var and dynamic?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--25",
    "category": "C#",
    "level": "Beginner",
    "question": "What is object initializer syntax?",
    "answer": "Object initializer syntax allows setting properties at creation without a separate constructor: new Person { Name = \"Alice\", Age = 30 }. Works with any accessible setter; runs after the constructor.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Cleaner test data setup — new Order { Id = 1, Total = 500m }.",
    "followUps": [
      "What is collection initializer syntax?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--26",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between const and readonly?",
    "answer": "const is compile-time constant, must be initialized at declaration, implicitly static. readonly is runtime constant, initialized at declaration or in constructor, can be instance or static. Use const for truly fixed values; readonly for values known only at runtime.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "private readonly ILogger _logger — injected via constructor, never reassigned.",
    "followUps": [
      "Can a readonly field be a reference type?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--27",
    "category": "C#",
    "level": "Beginner",
    "question": "What is a static class?",
    "answer": "A static class cannot be instantiated and can only contain static members. Useful for utility/helper methods. Example: Math, Console, File.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "StringExtensions static class with Truncate, ToTitleCase extension methods.",
    "followUps": [
      "What are the limitations of a static class?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--28",
    "category": "C#",
    "level": "Beginner",
    "question": "What are extension methods?",
    "answer": "Extension methods add methods to existing types without modifying them. Defined as static methods in a static class with the this keyword on the first parameter.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "string.IsNullOrWhiteSpace() is similar to an extension — adds capability to string type.",
    "followUps": [
      "Can you override a method using extension methods?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--29",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between IEnumerable and IQueryable?",
    "answer": "IEnumerable executes queries in memory — data is fetched then filtered. IQueryable translates expressions to the data source query (e.g., SQL) — filtering occurs at database level. Always use IQueryable for EF Core queries to avoid over-fetching.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": ".AsEnumerable() on EF query loads all rows before filtering — performance issue.",
    "followUps": [
      "What happens if you return IEnumerable from an EF Core query?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--30",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the ternary operator?",
    "answer": "condition ? valueIfTrue : valueIfFalse — a shorthand for simple if/else. Returns one of two values based on a boolean condition.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "string display = name ?? \"Unknown\" — default if null.",
    "followUps": [
      "What is the null-coalescing operator?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--31",
    "category": "C#",
    "level": "Beginner",
    "question": "What are named and optional parameters?",
    "answer": "Named parameters allow passing arguments by name regardless of order. Optional parameters have default values and can be omitted by callers. Both improve API readability.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "public void Log(string msg, LogLevel level = LogLevel.Info) — caller can omit level.",
    "followUps": [
      "What is the difference between optional parameters and method overloading?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--32",
    "category": "C#",
    "level": "Beginner",
    "question": "What is method overloading?",
    "answer": "Defining multiple methods with the same name but different parameter lists (number, type, or order of parameters). Return type alone is not sufficient for overloading.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Console.Write(string), Console.Write(int), Console.Write(char) — same name, different params.",
    "followUps": [
      "Can async and non-async methods have the same name?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--33",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the foreach loop?",
    "answer": "foreach iterates over any IEnumerable<T> collection. It calls GetEnumerator() internally. The loop variable is read-only within the loop body. Simpler than for when index is not needed.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "foreach (var order in orders) — throws InvalidOperationException if orders is modified.",
    "followUps": [
      "What happens if you modify a collection inside foreach?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--34",
    "category": "C#",
    "level": "Beginner",
    "question": "What is a switch expression (C# 8+)?",
    "answer": "Switch expressions are a concise form of switch for returning values. Uses => instead of case/break. Supports pattern matching, when guards, and discard _.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "var label = status switch { OrderStatus.Pending => \"Awaiting\", OrderStatus.Shipped => \"On Way\", _ => \"Unknown\" };",
    "followUps": [
      "What is pattern matching in switch?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--35",
    "category": "C#",
    "level": "Beginner",
    "question": "What is string interpolation?",
    "answer": "String interpolation uses $ prefix to embed expressions directly in strings: $\"Hello, {name}!\". Compiled to string.Format() calls. Supports format specifiers: $\"{price:C2}\".",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "$\"Invoice #{invoice.Id} for {customer.Name} totaling {invoice.Total:C}\" — readable log message.",
    "followUps": [
      "What is a verbatim string literal (@)?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--36",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between while and do-while?",
    "answer": "while checks condition before first iteration — may never execute. do-while executes at least once, checking condition after each iteration.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Retry logic — do { attempt(); } while (!success && retries-- > 0);",
    "followUps": [
      "When would you prefer do-while over while?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--37",
    "category": "C#",
    "level": "Beginner",
    "question": "What are partial classes?",
    "answer": "Partial classes split a class definition across multiple files using the partial keyword. The compiler merges them. Used by code generators (e.g., Windows Forms designer, EF migrations).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "EF Core migrations generate partial context classes you can extend with your own code.",
    "followUps": [
      "Can partial classes be in different assemblies?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--38",
    "category": "C#",
    "level": "Beginner",
    "question": "What is a tuple?",
    "answer": "Tuples are lightweight data structures that group multiple values. C# 7+ supports value tuples with named elements: (string Name, int Age) person = (\"Alice\", 30). More readable than Tuple<T1,T2>.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Returning two values from a method without creating a class: (bool Success, string Error) Validate(...)",
    "followUps": [
      "What is the difference between ValueTuple and Tuple<T>?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--39",
    "category": "C#",
    "level": "Beginner",
    "question": "What is pattern matching?",
    "answer": "Pattern matching tests a value against a pattern and extracts information. Supports: type patterns (is int n), property patterns ({ Name: \"Alice\" }), positional patterns, switch expressions, and when clauses.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "if (shape is Circle { Radius: > 5 }) — cleaner than casting and property access.",
    "followUps": [
      "What are relational patterns (C# 9)?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--40",
    "category": "C#",
    "level": "Beginner",
    "question": "What is records in C# 9?",
    "answer": "record is a reference type designed for immutable data. It provides value-based equality, a with expression for non-destructive mutation, and auto-generated ToString(). record struct is a value type.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "public record Point(int X, int Y); — DTOs, value objects, immutable data transfer.",
    "followUps": [
      "When should you use record over class?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--41",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between ToString() and Convert.ToString()?",
    "answer": "ToString() can throw NullReferenceException if called on null. Convert.ToString(null) returns empty string. Both convert to string representation. Convert.ToString() is null-safe.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Safe null-to-string conversion in logging: Convert.ToString(obj).",
    "followUps": [
      "What is string.Format() vs interpolation?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--42",
    "category": "C#",
    "level": "Beginner",
    "question": "What are enums?",
    "answer": "Enums are value types that define a set of named integer constants. They improve readability and type safety over magic numbers. Flags attribute allows bitwise combination.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "public enum DayOfWeek { Mon=1, Tue=2, Wed=4, Thu=8, Fri=16 } — [Flags] allows Mon|Wed.",
    "followUps": [
      "What is the [Flags] attribute on an enum?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--43",
    "category": "C#",
    "level": "Beginner",
    "question": "What is a null check operator (??=)?",
    "answer": "??= (null-coalescing assignment) assigns a value only if the variable is null. x ??= defaultValue is equivalent to if (x == null) x = defaultValue. Introduced in C# 8.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "_cache ??= new Dictionary<string, string>() — lazy initialization.",
    "followUps": [
      "What is the difference between?",
      "and?",
      "=?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--44",
    "category": "C#",
    "level": "Beginner",
    "question": "What are indexers?",
    "answer": "Indexers allow objects to be accessed using array-like syntax with []. Defined with this[type param] syntax. Useful for custom collection classes.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "A Matrix class: matrix[row, col] = value — natural array-like access.",
    "followUps": [
      "Can indexers be overloaded?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--45",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between is and as operators?",
    "answer": "is tests if an object is of a type, returns bool. as performs a safe cast — returns null if cast fails instead of throwing. Use is for type checking; as or direct cast for actual conversion.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "if (obj is Order order && order.Total > 100) — test and cast in one expression.",
    "followUps": [
      "How does 'is' with pattern matching differ from classic 'is'?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--46",
    "category": "C#",
    "level": "Beginner",
    "question": "What is method hiding (new keyword)?",
    "answer": "The new keyword hides a base class method instead of overriding it. The method to call depends on the declared type of the reference, not the actual type (no runtime polymorphism).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Hide a logging method in a derived class without virtual — base reference calls base version.",
    "followUps": [
      "What is the difference between override and new?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--47",
    "category": "C#",
    "level": "Beginner",
    "question": "What is object cloning (shallow vs deep)?",
    "answer": "Shallow clone copies field values — reference types still point to same objects. Deep clone creates new instances of all referenced objects. Object.MemberwiseClone() does shallow copy.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Copying an Order object — shallow copy means Items list is shared; deep copy gives independent Items.",
    "followUps": [
      "How do you implement deep copy in C#?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--48",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the IDisposable pattern?",
    "answer": "IDisposable provides a Dispose() method for deterministic cleanup of unmanaged resources (file handles, DB connections, network sockets). Implement with try/finally or using statement.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "SqlConnection, FileStream — implement IDisposable to release resources immediately.",
    "followUps": [
      "What is the Dispose pattern with a finalizer?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--49",
    "category": "C#",
    "level": "Beginner",
    "question": "What is the difference between String.Empty and \"\"?",
    "answer": "String.Empty is a static read-only field; \"\" is a string literal. Both represent empty strings. At runtime, they are the same object due to string interning. Prefer String.Empty for clarity and to avoid typos.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Validating form input — IsNullOrWhiteSpace catches spaces-only submissions.",
    "followUps": [
      "What is String.IsNullOrEmpty vs IsNullOrWhiteSpace?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--50",
    "category": "C#",
    "level": "Beginner",
    "question": "What are attributes in C#?",
    "answer": "Attributes add metadata to code elements (classes, methods, properties). Applied with [AttributeName] syntax. Read at runtime via reflection. Common: [Obsolete], [Serializable], [Required], [HttpGet].",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "[Required], [MaxLength] in ASP.NET model validation — data annotations are attributes.\n\n--------------------------------------------------------------------\nINTERMEDIATE QUESTIONS (51-100)\n--------------------------------------------------------------------",
    "followUps": [
      "How do you create a custom attribute?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "c--51",
    "category": "C#",
    "level": "Intermediate",
    "question": "Explain the IEnumerable<T> and IEnumerator<T> relationship.",
    "answer": "IEnumerable<T> exposes GetEnumerator() which returns IEnumerator<T>. IEnumerator<T> provides MoveNext(), Current, and Reset(). foreach calls GetEnumerator() and iterates via MoveNext()/Current. Implementing IEnumerable<T> makes your class foreach-able.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Custom paged collection that lazily fetches data from database in chunks.",
    "followUps": [
      "What is yield return?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--52",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between Task and Thread?",
    "answer": "Thread is a low-level OS thread — high overhead, hard to manage. Task is a higher-level abstraction from the TPL, represents async work that may or may not use a thread. Tasks support continuations, cancellation, exception propagation. Use Task unless you need explicit thread control.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Web server handling 1000 concurrent requests — Tasks reuse ThreadPool threads efficiently.",
    "followUps": [
      "What is a ThreadPool?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--53",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is async/await?",
    "answer": "async/await enables writing asynchronous code that looks synchronous. async marks a method as asynchronous. await suspends execution until the awaited Task completes without blocking the thread. Returns Task, Task<T>, or ValueTask.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "await httpClient.GetAsync(url) — releases thread to handle other requests while waiting for HTTP response.",
    "followUps": [
      "What happens to the thread during await?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--54",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between Task.Run() and Task.Factory.StartNew()?",
    "answer": "Task.Run is a simplified wrapper — uses ThreadPool, default scheduler, unwraps nested tasks. Task.Factory.StartNew has more options (scheduler, creation options, cancellation token) but requires explicit unwrapping for async lambdas.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Task.Run(() => heavyComputation()) offloads CPU work from UI/ASP.NET thread.",
    "followUps": [
      "What is Task.Run vs async void?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--55",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is ConfigureAwait(false)?",
    "answer": "By default, await captures the synchronization context and resumes on the same thread (important in UI/ASP.NET Framework). ConfigureAwait(false) skips context capture — more efficient in library code. In ASP.NET Core, there is no sync context, so it matters less.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Library code awaiting HTTP calls — use ConfigureAwait(false) to avoid deadlocks in Framework callers.",
    "followUps": [
      "When should you NOT use ConfigureAwait(false)?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--56",
    "category": "C#",
    "level": "Intermediate",
    "question": "Explain the SOLID principles.",
    "answer": "S - Single Responsibility: A class should have only one reason to change.\nO - Open/Closed: Open for extension, closed for modification.\nL - Liskov Substitution: Derived types must be substitutable for base types.\nI - Interface Segregation: Clients should not depend on interfaces they don't use.\nD - Dependency Inversion: Depend on abstractions, not concretions.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Square extending Rectangle breaks LSP because setting width also changes height.",
    "followUps": [
      "Give an example of violating LSP.?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--57",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is a closure in C#?",
    "answer": "A closure is a function that captures variables from its enclosing scope. In C#, lambda expressions can capture local variables, which are \"closed over\" — they live beyond the scope of the enclosing method because the delegate holds a reference.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Capturing loop variable i in a lambda — use int temp = i; to capture by value.",
    "followUps": [
      "What is the common closure bug in loops?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--58",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is covariance and contravariance?",
    "answer": "Covariance (out) allows using a more derived type where a base is expected: IEnumerable<Derived> is assignable to IEnumerable<Base>. Contravariance (in) allows using a base type where derived is expected: Action<Base> assignable to Action<Derived>.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "IEnumerable<Dog> assigned to IEnumerable<Animal> — covariance enables this.",
    "followUps": [
      "Which C# interfaces support covariance?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--59",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is reflection?",
    "answer": "Reflection allows runtime inspection and manipulation of types, methods, properties, and attributes. System.Reflection namespace. Use Type.GetType(), GetMethods(), GetProperties(). Powerful but slow — cache reflected members.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "AutoMapper uses reflection to map properties. Plugin architectures use reflection to load and invoke types.",
    "followUps": [
      "What are the performance implications of reflection?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--60",
    "category": "C#",
    "level": "Intermediate",
    "question": "What are generics constraints?",
    "answer": "where T : class (reference type), where T : struct (value type), where T : new() (default constructor), where T : BaseClass (inheritance), where T : IInterface (contract), where T : unmanaged (C# 8, unmanaged type).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Generic repository: public class Repository<T> where T : class, IEntity, new()",
    "followUps": [
      "Can you combine multiple constraints?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--61",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between Func<T> and Action<T>?",
    "answer": "Func<T> represents a method that returns a value (last type parameter is return type). Action<T> represents a void method. Predicate<T> is a special case of Func<T, bool>.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "LINQ Where takes Func<T, bool> for in-memory, Expression<Func<T, bool>> for EF (translates to SQL).",
    "followUps": [
      "What is Expression<Func<T>>?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--62",
    "category": "C#",
    "level": "Intermediate",
    "question": "What are immutable types?",
    "answer": "Immutable types cannot be modified after creation. C# string is immutable. Create immutable classes by: readonly fields, private setters, no mutating methods. C# 9 records with init-only properties. Benefits: thread-safety, predictability.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "public record Money(decimal Amount, string Currency) — immutable value object.",
    "followUps": [
      "What is the difference between immutable and frozen objects?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--63",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is thread safety and how do you achieve it?",
    "answer": "Thread-safe code produces correct results when accessed concurrently. Techniques: lock keyword (Monitor), Interlocked for atomic operations, ConcurrentDictionary/ConcurrentQueue, volatile for visibility, Mutex, Semaphore, ReaderWriterLockSlim.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Incrementing a counter from multiple threads — use Interlocked.Increment() or lock.",
    "followUps": [
      "What is a race condition?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--64",
    "category": "C#",
    "level": "Intermediate",
    "question": "Explain the Garbage Collector generations.",
    "answer": "GC organizes objects into three generations: Gen0 (short-lived, collected frequently), Gen1 (survived one GC), Gen2 (long-lived, collected rarely). Large Object Heap (LOH) holds objects >= 85KB — collected with Gen2.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Reusing large arrays via ArrayPool<T> to avoid LOH allocations and Gen2 collections.",
    "followUps": [
      "What is GC pressure and how do you reduce it?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--65",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between shallow copy and deep copy in the context of serialization?",
    "answer": "Serialization-based deep copy: serialize to JSON/binary and deserialize back — simple but slow. Manual deep copy: create new instances and copy fields recursively — fast but tedious. For mutable complex graphs, explicit deep copy is usually necessary.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Cloning entity for audit trail before modification — JSON round-trip is simplest.",
    "followUps": [
      "What is BinaryFormatter and why is it deprecated?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--66",
    "category": "C#",
    "level": "Intermediate",
    "question": "What are named tuples vs anonymous types?",
    "answer": "Anonymous types (new { Name = \"Alice\" }) are reference types, inferred at compile time, scope limited to method. Named tuples ((string Name, int Age)) are value types, can be returned from methods, have named members. Tuples are more flexible.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Grouping LINQ results in a method and returning — named tuple is appropriate.",
    "followUps": [
      "Can you use anonymous types across methods?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--67",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the IComparable and IComparer interfaces?",
    "answer": "IComparable<T>.CompareTo() lets a type define its natural ordering. IComparer<T> is an external comparison strategy. Use IComparable for default sort; IComparer for alternate sort strategies (e.g., sort by name or by price).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Sorting products by multiple criteria — create PriceComparer : IComparer<Product>.",
    "followUps": [
      "How does List<T>.Sort() use these?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--68",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is a memory leak in C# and when can it occur?",
    "answer": "C# GC prevents classic leaks, but logical leaks occur: event subscriptions not removed (subscriber keeps publisher alive), static dictionaries holding objects, long-lived caches, unmanaged resources not disposed, closures capturing large objects.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Event handler in UI — if subscriber doesn't unsubscribe, publisher keeps it alive forever.",
    "followUps": [
      "How do you use WeakReference to avoid memory leaks?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--69",
    "category": "C#",
    "level": "Intermediate",
    "question": "What are expression trees?",
    "answer": "Expression trees represent code as a tree of data (Expression<Func<T>>). They can be analyzed and compiled at runtime. EF Core translates them to SQL. LINQ providers use them to convert C# to query languages.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "EF Core: where => where.Age > 18 is an expression tree translated to WHERE Age > 18 in SQL.",
    "followUps": [
      "How is Expression<Func<T>> different from Func<T>?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--70",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the dynamic keyword?",
    "answer": "dynamic bypasses compile-time type checking — resolved at runtime via DLR (Dynamic Language Runtime). Useful for COM interop, JSON, and reflection-heavy code. No IntelliSense; runtime errors instead of compile-time.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Reading JSON properties in older code: dynamic json = JsonConvert.DeserializeObject(str); json.Name.",
    "followUps": [
      "What is the performance cost of dynamic?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--71",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between checked and unchecked?",
    "answer": "checked throws OverflowException on arithmetic overflow. unchecked (default) silently wraps around. Use checked when overflow indicates a bug; unchecked for performance in known-safe code.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "checked { int result = int.MaxValue + 1; } — throws, prevents silent data corruption.",
    "followUps": [
      "How do you enable checked globally?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--72",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is a weak reference?",
    "answer": "WeakReference<T> lets you hold a reference to an object without preventing GC from collecting it. The object may be collected; use TryGetTarget() to check if still alive.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Cache implementation — hold weak references to cached objects; GC can reclaim under pressure.",
    "followUps": [
      "What is the difference between WeakReference and WeakReference<T>?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--73",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is operator overloading?",
    "answer": "Operator overloading allows defining custom behavior for operators (+, -, ==, etc.) for your types. Use public static ReturnType operator+(Type a, Type b). Only makes sense when semantics are intuitive.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Vector struct with + overloaded for vector addition: v1 + v2.",
    "followUps": [
      "Which operators can NOT be overloaded?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--74",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the volatile keyword?",
    "answer": "volatile ensures that reads/writes to a field are not reordered by the compiler or CPU, and that all threads see the most recent value. Weaker than lock — no atomicity guarantee for compound operations.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "private volatile bool _running; — simple flag read by multiple threads.",
    "followUps": [
      "When is volatile insufficient?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--75",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is a lazy initialization (Lazy<T>)?",
    "answer": "Lazy<T> defers creation of an expensive object until first use. Thread-safe by default. Access via .Value. Once initialized, returns the same instance.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Lazy<HeavyService> — service created only if code path that needs it is actually reached.",
    "followUps": [
      "What are the thread-safety modes of Lazy<T>?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--76",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is Span<T> and Memory<T>?",
    "answer": "Span<T> is a stack-only type representing a contiguous region of memory (array slice, stack memory, unmanaged). No heap allocation. Memory<T> is the heap-safe version. Both avoid copies for performance-critical code.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Parsing a byte stream — use Span<byte> to slice without allocating new arrays.",
    "followUps": [
      "Why can't Span<T> be used as a class field?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--77",
    "category": "C#",
    "level": "Intermediate",
    "question": "What are nullable reference types (C# 8)?",
    "answer": "Nullable reference types add compile-time null-safety. Enabled with <Nullable>enable</Nullable>. string is non-nullable; string? is nullable. Compiler warns on potential null dereferences. Does not affect runtime.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "API parameter: string name (never null), string? description (optional). Catch null bugs at compile time.",
    "followUps": [
      "How do you handle migrating existing code to nullable reference types?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--78",
    "category": "C#",
    "level": "Intermediate",
    "question": "What are source generators?",
    "answer": "Source generators run during compilation and produce additional C# code. Roslyn-based. Used by EF Core (model snapshots), System.Text.Json (serialization), AutoMapper. No runtime reflection — zero-overhead generated code.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "System.Text.Json uses source generators to produce serialization code at compile time.",
    "followUps": [
      "How are source generators different from T4 templates?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--79",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between ICollection<T> and IList<T>?",
    "answer": "ICollection<T> adds Count, Add, Remove, Contains to IEnumerable<T>. IList<T> adds index-based access (this[int], IndexOf, Insert, RemoveAt) to ICollection<T>. Use the least-specific interface that satisfies your needs.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Return IReadOnlyList<Order> from a repository — caller cannot modify the collection.",
    "followUps": [
      "What does ReadOnlyCollection<T> give you?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--80",
    "category": "C#",
    "level": "Intermediate",
    "question": "Explain memory allocation for value types inside classes.",
    "answer": "When a value type (struct, int) is a field of a class, it is allocated inline on the heap as part of the class object. Stack allocation only occurs for local variables and method parameters. Boxing occurs when a value type is assigned to object or interface reference.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Dictionary<string, int> — int is stored inline in the value slot, no boxing.",
    "followUps": [
      "What is the GC cost of boxing?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--81",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is CancellationToken?",
    "answer": "CancellationToken enables cooperative cancellation of async operations. A CancellationTokenSource creates and controls the token. Pass the token to async methods; they check IsCancellationRequested or call ThrowIfCancellationRequested().",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "HTTP request handler — accept CancellationToken from Request.HttpContext.RequestAborted.",
    "followUps": [
      "What happens if you don't honor a cancellation token?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--82",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between Parallel.ForEach and async foreach?",
    "answer": "Parallel.ForEach uses multiple threads for CPU-bound work (data parallelism). async/await foreach (IAsyncEnumerable<T>) is for I/O-bound async streams. Don't use Parallel.ForEach with async lambdas — use Task.WhenAll instead.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Image processing — Parallel.ForEach to resize 1000 images using all CPU cores.",
    "followUps": [
      "What is Parallel.For vs Parallel.ForEach?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--83",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the Observer pattern and how does C# events implement it?",
    "answer": "Observer pattern: subject (publisher) notifies observers (subscribers) of state changes. C# events are built-in observer implementation. event keyword wraps a delegate, restricts external +=/−= only, publisher-only raise.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "INotifyPropertyChanged — raises PropertyChanged event when ViewModel properties change.",
    "followUps": [
      "What are the pitfalls of C# events?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--84",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the Repository pattern?",
    "answer": "Repository abstracts data access logic behind an interface. Clients depend on IRepository<T> not on DbContext directly. Benefits: testability (mock repositories), separation of concerns, consistent data access API.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "IOrderRepository with Add, GetById, GetAll methods — SQL/InMemory implementations interchangeable.",
    "followUps": [
      "What is the Unit of Work pattern?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--85",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is Dependency Injection (DI)?",
    "answer": "DI is passing dependencies into a class rather than creating them internally. Promotes loose coupling. ASP.NET Core has built-in IoC container. Register services as Transient (new each time), Scoped (per request), Singleton (application lifetime).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "OrderService receives IOrderRepository via constructor — decoupled, testable with mocks.",
    "followUps": [
      "What is the difference between constructor injection and property injection?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--86",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between Transient, Scoped, and Singleton lifetimes?",
    "answer": "Transient: new instance every time requested. Scoped: same instance per HTTP request (web) or scope. Singleton: one instance for the app lifetime. Caution: injecting Transient into Singleton (\"captive dependency\") causes bugs.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "DbContext is typically Scoped — one per request to track changes correctly.",
    "followUps": [
      "What is a \"captive dependency\"?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--87",
    "category": "C#",
    "level": "Intermediate",
    "question": "What are IOptions<T>, IOptionsMonitor<T>, IOptionsSnapshot<T>?",
    "answer": "IOptions<T>: singleton, reads config once. IOptionsSnapshot<T>: scoped, reloads per request. IOptionsMonitor<T>: singleton with change notification. Use IOptionsMonitor<T> for background services that need live config updates.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Feature flags via IOptionsMonitor<T> — service reacts to config file changes without restart.",
    "followUps": [
      "How do you validate options on startup?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--88",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is middleware in ASP.NET Core?",
    "answer": "Middleware is a pipeline of components that handle HTTP requests and responses. Each component calls next() to pass to the next or short-circuits. Built-in: routing, auth, logging, CORS. Custom: implements Invoke(HttpContext, RequestDelegate).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Request logging middleware — log before processing, log response after all other middleware.",
    "followUps": [
      "What is the order of middleware execution?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--89",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between IActionResult and ActionResult<T>?",
    "answer": "IActionResult is the base interface — return any result type (Ok, NotFound, BadRequest). ActionResult<T> (ASP.NET Core 2.1+) allows returning T directly or an IActionResult — better for Swagger generation and type safety.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "ActionResult<OrderDto> — either returns 200 with order or 404 — Swagger generates accurate schema.",
    "followUps": [
      "What is ProducesResponseType attribute?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--90",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is model validation in ASP.NET Core?",
    "answer": "Data annotations ([Required], [Range], [MaxLength]) on model properties. ModelState.IsValid checks validation. [ApiController] attribute automatically returns 400 for invalid models. Custom: IValidatableObject or FluentValidation.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "OrderRequest validation — complex cross-field rules (if PaymentType == CreditCard, then CardNumber required).",
    "followUps": [
      "What is FluentValidation and when would you use it over data annotations?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--91",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is CORS and how do you configure it in ASP.NET Core?",
    "answer": "CORS (Cross-Origin Resource Sharing) controls which origins can call your API. Configured via builder.Services.AddCors() with policies. Applied globally (UseRouting/UseCors order matters) or per-controller with [EnableCors].",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "React SPA on localhost:3000 calling API on localhost:5000 — CORS policy needed.",
    "followUps": [
      "What is the difference between simple and preflight CORS requests?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--92",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is JWT authentication?",
    "answer": "JWT (JSON Web Token) is a stateless token containing header.payload.signature. ASP.NET Core: install Microsoft.AspNetCore.Authentication.JwtBearer, configure AddAuthentication+AddJwtBearer, use [Authorize] attribute. Validate signature, expiry, issuer, audience.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "User logs in → receives JWT → sends JWT in Authorization header → API validates → grants access.",
    "followUps": [
      "What is the difference between authentication and authorization?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--93",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is Entity Framework Core change tracking?",
    "answer": "EF Core tracks entities in four states: Added, Modified, Deleted, Unchanged. DbContext.ChangeTracker records changes. SaveChanges() generates SQL based on state. AsNoTracking() disables tracking for read-only queries (performance).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Admin dashboard read-only queries — use AsNoTracking() for 30% performance improvement.",
    "followUps": [
      "What are the dangers of attaching entities to multiple contexts?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--94",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is a migration in EF Core?",
    "answer": "Migrations are code files that represent incremental database schema changes. Add-Migration creates a migration class with Up() and Down() methods. Update-Database applies migrations. MigrationHistory table tracks applied migrations.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Adding a new column via Add-Migration AddOrderStatus; Update-Database — EF generates ALTER TABLE.",
    "followUps": [
      "How do you handle migrations in production?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--95",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is lazy loading vs eager loading in EF Core?",
    "answer": "Lazy loading: related data loaded on first access (requires proxies, N+1 risk). Eager loading: Include() fetches related data in single query. Explicit loading: Load() fetches on demand. Prefer eager loading for known required data.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Loading orders with customers — without Include(o => o.Customer): N+1 queries. With Include: 1 query.",
    "followUps": [
      "What is the N+1 query problem?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--96",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is caching and how do you implement it in ASP.NET Core?",
    "answer": "Caching stores computed results to avoid recomputation. In-memory: IMemoryCache (single server). Distributed: IDistributedCache with Redis (multi-server). Response caching: cache entire HTTP responses. Cache-aside pattern is most common.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Product catalog — cache in Redis with 5-minute sliding expiration; on update, invalidate cache key.",
    "followUps": [
      "What is cache eviction policy?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--97",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is the difference between AddDbContext and AddDbContextFactory?",
    "answer": "AddDbContext: one DbContext per scope (HTTP request). AddDbContextFactory: creates contexts on demand — useful for background services, Blazor, or when you need multiple contexts per scope.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Background job service using IDbContextFactory to create a new context for each batch.",
    "followUps": [
      "Why is DbContext not thread-safe?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--98",
    "category": "C#",
    "level": "Intermediate",
    "question": "What are indexes in SQL Server and how do EF Core fluent APIs configure them?",
    "answer": "Clustered index (one per table, physical row order), non-clustered (separate B-tree). EF Core: modelBuilder.Entity<Order>().HasIndex(o => o.CustomerId) creates non-clustered index. Include columns for covering indexes.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Index on Orders.CustomerId for customer order lookup — prevents full table scan.",
    "followUps": [
      "What is an index covering query?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--99",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is AutoMapper and when would you use it?",
    "answer": "AutoMapper maps properties from one object to another (entity to DTO and vice versa). Reduces boilerplate mapping code. Configure with CreateMap<Source, Dest>(). Use ProjectTo<T>() for EF queries to avoid loading unnecessary columns.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "OrderEntity → OrderDto mapping — keeps API contract separate from database model.",
    "followUps": [
      "What are the drawbacks of AutoMapper?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--100",
    "category": "C#",
    "level": "Intermediate",
    "question": "What is MediatR and CQRS?",
    "answer": "MediatR is a mediator library implementing CQRS (Commands/Queries sent through IMediator.Send()). Commands change state; Queries return data. Decouples sender from handler. Supports pipeline behaviors for cross-cutting concerns (logging, validation).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "CreateOrderCommand → CreateOrderCommandHandler — handler validates, saves, raises domain event.\n\n--------------------------------------------------------------------\nADVANCED QUESTIONS (101-150)\n--------------------------------------------------------------------",
    "followUps": [
      "What is the difference between MediatR and a service layer?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--101",
    "category": "C#",
    "level": "Advanced",
    "question": "How does the CLR JIT compiler work?",
    "answer": "CLR compiles IL (Intermediate Language) to native machine code at runtime via JIT (Just-In-Time) compilation. First call to a method triggers JIT; subsequent calls use cached native code. RyuJIT is the current JIT for .NET. .NET 6+ includes tiered compilation: initially interpreted or tier-0 JIT, then optimized tier-1 JIT for hot methods.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": ".NET Native for UWP, NativeAOT in .NET 7+, ReadyToRun — reduce startup time.",
    "followUps": [
      "What is ahead-of-time (AOT) compilation in .NET?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--102",
    "category": "C#",
    "level": "Advanced",
    "question": "Explain the .NET memory model and CPU cache coherency.",
    "answer": ".NET memory model defines rules for how threads observe memory writes. volatile, Interlocked, lock, and Thread.MemoryBarrier() create memory barriers (fences) that prevent compiler/CPU reordering. Needed because CPUs have private caches; writes may not be immediately visible to other cores.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Lock-free data structures — release fence after write, acquire fence before read.",
    "followUps": [
      "What is the difference between acquire and release semantics?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--103",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between Monitor, Mutex, and Semaphore?",
    "answer": "Monitor (lock keyword): fast, in-process, single thread at a time. Mutex: OS-level, cross-process synchronization, slower. Semaphore/SemaphoreSlim: allows N concurrent threads. SemaphoreSlim supports async (WaitAsync). Use Monitor for intra-process; Mutex for cross-process.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "SemaphoreSlim(10) to limit concurrent external API calls to 10 at a time.",
    "followUps": [
      "What is Monitor.TryEnter used for?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--104",
    "category": "C#",
    "level": "Advanced",
    "question": "What is unsafe code in C#?",
    "answer": "unsafe blocks allow pointer arithmetic, direct memory access, and interfacing with unmanaged code. Enabled with AllowUnsafeBlocks compiler option. Requires pinning managed objects with fixed statement to prevent GC from moving them during pointer operations.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "High-performance image processing — directly manipulate pixel bytes via pointer for orders-of-magnitude speedup.",
    "followUps": [
      "What is the fixed statement and when do you need it?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--105",
    "category": "C#",
    "level": "Advanced",
    "question": "Explain how EF Core query translation works.",
    "answer": "EF Core uses IQueryable<T> with LINQ expression trees. QueryTranslationPreprocessor normalizes expressions. RelationalQueryTranslatingExpressionVisitor converts to relational expression. SqlExpressionFactory generates SQL AST. IQuerySqlGenerator renders final SQL string with parameters.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Complex LINQ that can't be translated — AsEnumerable() to bring into memory, then filter.",
    "followUps": [
      "What are the limitations of EF Core query translation?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--106",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the garbage collector's tri-color marking algorithm?",
    "answer": "The GC uses tri-color marking: White (not yet visited — candidates for collection), Gray (discovered but children not yet processed), Black (fully processed — referenced by roots). Starts from roots (stack, statics), marks reachable objects. White objects remaining after traversal are garbage.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Understanding card tables and write barriers helps diagnose GC pauses in high-throughput services.",
    "followUps": [
      "What is the write barrier in GC?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--107",
    "category": "C#",
    "level": "Advanced",
    "question": "What is a lock-free data structure?",
    "answer": "Lock-free structures use atomic operations (Interlocked.CompareExchange) instead of locks. No thread blocks — threads retry on contention. ConcurrentQueue<T>, ConcurrentStack<T> use lock-free algorithms internally. Harder to implement correctly; avoid unless profiling shows lock contention.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "High-frequency trading — ConcurrentQueue for order events to avoid lock overhead.",
    "followUps": [
      "What is the ABA problem?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--108",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between IAsyncEnumerable<T> and Task<IEnumerable<T>>?",
    "answer": "Task<IEnumerable<T>>: completes when all data is available — buffered in memory. IAsyncEnumerable<T>: streams items one at a time asynchronously — lower memory, faster first-item latency. Use with await foreach. EF Core 3+ supports IAsyncEnumerable.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Streaming 1M database rows — IAsyncEnumerable processes row-by-row, not loading all into RAM.",
    "followUps": [
      "How does backpressure work with IAsyncEnumerable?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--109",
    "category": "C#",
    "level": "Advanced",
    "question": "Explain the ASP.NET Core request pipeline internals.",
    "answer": "Kestrel (or IIS) receives socket data, passes to HttpContext. Middleware pipeline processes in registration order. Endpoint routing matches URL to controller/action. Model binding, action filters, action execution, result filters, exception filters. Response written back through the pipeline.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Auth middleware runs before routing; action filters run around controller actions only.",
    "followUps": [
      "What is the difference between middleware and action filters?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--110",
    "category": "C#",
    "level": "Advanced",
    "question": "What is gRPC and when would you use it over REST?",
    "answer": "gRPC uses HTTP/2 and Protocol Buffers (binary serialization). Faster than JSON REST (binary + multiplexing). Supports streaming (server, client, bidirectional). Use when: inter-service communication, performance-critical, streaming needed. Not browser-friendly without grpc-web.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Microservice-to-microservice communication — gRPC reduces payload size and latency vs REST/JSON.",
    "followUps": [
      "What is Protocol Buffers and how does it differ from JSON?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--111",
    "category": "C#",
    "level": "Advanced",
    "question": "What is SignalR and WebSockets?",
    "answer": "WebSocket: full-duplex persistent TCP connection over HTTP port. SignalR is ASP.NET Core library abstracting WebSockets, Server-Sent Events, Long Polling. Supports Hubs (RPC-like) and groups. Use for real-time features: chat, live dashboards, notifications.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Live driver status dashboard — SignalR pushes updates to all connected browsers instantly.",
    "followUps": [
      "What is the difference between Hub and persistent connection in SignalR?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--112",
    "category": "C#",
    "level": "Advanced",
    "question": "What is source-generated serialization in System.Text.Json?",
    "answer": "C# source generators create serialization code at compile time via [JsonSourceGenerationOptions] and JsonSerializerContext. Eliminates runtime reflection — faster startup, better AOT compatibility, reduced allocations. Required for NativeAOT scenarios.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "High-throughput API serializing millions of responses — source-generated JSON is 2-3x faster.",
    "followUps": [
      "What are the trade-offs of source-generated vs reflection-based serialization?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--113",
    "category": "C#",
    "level": "Advanced",
    "question": "Explain the Channel<T> data structure.",
    "answer": "System.Threading.Channels.Channel<T> is a thread-safe producer-consumer queue. CreateBounded (backpressure) or CreateUnbounded. ChannelWriter<T> for producers, ChannelReader<T> for consumers. Supports async reading/writing. More efficient than BlockingCollection<T> for async scenarios.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Log aggregation pipeline — producers write log entries, consumer batches writes to disk.",
    "followUps": [
      "When would you use Channel<T> vs ConcurrentQueue<T>?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--114",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the actor model and how can it be applied in C#?",
    "answer": "Actor model: each actor is an isolated unit with its own state, communicating only via messages. No shared state — eliminates locks. In C#: Orleans (virtual actors/grains), Akka.NET. Actors process one message at a time, no concurrency within actor.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Online game server — each player is an Orleans grain with own state, handling events sequentially.",
    "followUps": [
      "What is Microsoft Orleans?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--115",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between SemaphoreSlim and RateLimiter (ASP.NET Core 7)?",
    "answer": "SemaphoreSlim controls concurrent access count. System.Threading.RateLimiting (ASP.NET Core 7) provides: TokenBucketRateLimiter (burst), FixedWindowRateLimiter, SlidingWindowRateLimiter, ConcurrencyLimiter. RateLimiter is more expressive and designed for API rate limiting.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "API gateway — RateLimiter.AcquireAsync() before forwarding external requests.",
    "followUps": [
      "How do you implement per-user rate limiting?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--116",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the MemoryMarshal class and how is it used?",
    "answer": "MemoryMarshal (System.Runtime.InteropServices) provides zero-copy reinterpretation of memory: MemoryMarshal.Cast<byte, int> reinterprets byte span as int span without copying. GetReference() gets a managed pointer to span start. Used for high-performance binary parsing.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Network packet parsing — reinterpret byte buffer as struct layout without copying.",
    "followUps": [
      "What are the safety considerations with MemoryMarshal?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--117",
    "category": "C#",
    "level": "Advanced",
    "question": "Explain how EF Core handles concurrency conflicts.",
    "answer": "Optimistic concurrency: add [ConcurrencyCheck] or rowversion/timestamp column. EF Core generates WHERE clause including the original value. If row changed by another transaction, SaveChanges() throws DbUpdateConcurrencyException. Retry with refreshed values or report conflict.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Two users editing same order — rowversion prevents silent data overwrite; user shown \"record was modified.\"",
    "followUps": [
      "What is pessimistic concurrency?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--118",
    "category": "C#",
    "level": "Advanced",
    "question": "What are IHostedService and BackgroundService?",
    "answer": "IHostedService defines Start/Stop for background work. BackgroundService is a base class implementing IHostedService with an ExecuteAsync(CancellationToken) method. Register with AddHostedService<T>(). Runs alongside the web server. Use for polling, message consuming, scheduled tasks.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Order status sync background service — runs every minute, fetches shipping API, updates database.",
    "followUps": [
      "What is the Quartz.NET alternative?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--119",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between throw and ExceptionDispatchInfo.Capture().Throw()?",
    "answer": "throw; rethrows preserving stack trace. ExceptionDispatchInfo.Capture(ex).Throw() rethrows with original stack trace even from a different location/thread. Useful when catching an exception, storing it, and rethrowing from a different async context.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Aggregating exceptions from parallel tasks — preserve original stack trace when rethrowing.",
    "followUps": [
      "When does await lose the original exception stack trace?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--120",
    "category": "C#",
    "level": "Advanced",
    "question": "What is Roslyn and how can you write code analyzers?",
    "answer": "Roslyn is the .NET compiler platform with public APIs for syntax trees, semantic models, and symbol analysis. Write DiagnosticAnalyzers to report code issues at compile time. CodeFixProviders suggest fixes. Deployed as NuGet packages. StyleCop, Roslynator are examples.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Enforce company coding standards — analyzer warns when async methods don't have Async suffix.",
    "followUps": [
      "What is a syntax tree in Roslyn?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--121",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between ValueTask and Task?",
    "answer": "Task always allocates heap memory. ValueTask avoids allocation when result is already available (synchronously completed path). Use ValueTask for hot paths where most calls complete synchronously. Don't await ValueTask more than once; don't cache unless converting to Task.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "High-frequency cache lookup — ValueTask<T> returns cached value synchronously without allocation.",
    "followUps": [
      "What is PooledValueTask?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--122",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the purpose of [SkipLocalsInit] attribute?",
    "answer": "By default, .NET zero-initializes stack-allocated memory. [SkipLocalsInit] (requires unsafe) skips this initialization for performance in tight loops. Risky — read uninitialized memory. Use only in well-analyzed hot paths. Introduced in C# 9.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Parsing millions of network packets — avoid zero-init cost for temporary buffers.",
    "followUps": [
      "What other low-level attributes affect codegen?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--123",
    "category": "C#",
    "level": "Advanced",
    "question": "Explain how P/Invoke works.",
    "answer": "P/Invoke (Platform Invocation Services) allows calling native DLL functions from C#. [DllImport(\"kernel32.dll\")] attribute on extern method declaration. Marshaler converts .NET types to native types automatically or via custom MarshalAs attributes. Calling convention, entry point, charset configurable.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Call WinAPI CreateFile for low-level file access not exposed by .NET BCL.",
    "followUps": [
      "What is the LibraryImport attribute (C# 11)?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--124",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between Thread.Abort() and CancellationToken?",
    "answer": "Thread.Abort() (deprecated in .NET Core) throws ThreadAbortException anywhere — unsafe, leaves resources uncleaned, unpredictable. CancellationToken is cooperative — code checks voluntarily. Cannot force cancellation but respects resource cleanup and exception safety.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Long-running database query — pass CancellationToken; query checks at safe yield points.",
    "followUps": [
      "Why was Thread.Abort removed in .NET Core?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--125",
    "category": "C#",
    "level": "Advanced",
    "question": "What is tiered compilation in .NET?",
    "answer": "Tiered compilation improves startup time by initially using fast, unoptimized code (Tier-0) and later recompiling hot methods with full optimizations (Tier-1) in background. Profile-guided optimization (PGO) in .NET 6+ further improves by optimizing based on actual runtime behavior.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "ASP.NET Core startup — tiered compilation lets the process start fast, optimize hot paths later.",
    "followUps": [
      "What is Dynamic PGO in .NET 6+?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--126",
    "category": "C#",
    "level": "Advanced",
    "question": "Explain the concept of phantom reads, dirty reads, and non-repeatable reads.",
    "answer": "Dirty read: read uncommitted data. Non-repeatable read: read same row twice, get different values (another transaction modified it). Phantom read: query returns different rows because another transaction inserted/deleted rows matching criteria. SQL isolation levels address these.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Inventory system — phantom reads cause over-selling; SERIALIZABLE or SNAPSHOT prevents it.",
    "followUps": [
      "What isolation levels does SQL Server support?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--127",
    "category": "C#",
    "level": "Advanced",
    "question": "What is CQRS and how does it scale?",
    "answer": "CQRS separates command (write) and query (read) models. Command side: handles writes, strong consistency. Query side: denormalized read models, eventually consistent. Scales independently — read replicas for queries, write primary for commands. Event sourcing often paired with CQRS.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "E-commerce: writes go to SQL Server; reads from Elasticsearch read model — 10x query performance.",
    "followUps": [
      "What are the downsides of CQRS?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--128",
    "category": "C#",
    "level": "Advanced",
    "question": "What is event sourcing?",
    "answer": "Event sourcing stores all state changes as immutable events. Current state = replay of all events. Benefits: complete audit trail, time travel (replay to any point), event-driven integration. Challenges: eventual consistency, schema evolution, projection performance.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Bank account — store Deposited, Withdrawn events rather than current balance; replay for balance.",
    "followUps": [
      "What is a projection in event sourcing?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--129",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between optimistic and pessimistic locking at the application level?",
    "answer": "Optimistic: read data, process, check at save time if data was changed (rowversion). No lock held during processing — good for low-contention. Pessimistic: lock row at read time (SELECT FOR UPDATE / UPDLOCK) — hold lock until save. Good for high-contention, but reduces concurrency.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "High-concurrency ticket booking — optimistic concurrency prevents double booking without lock contention.",
    "followUps": [
      "What is SNAPSHOT isolation in SQL Server?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--130",
    "category": "C#",
    "level": "Advanced",
    "question": "What are common performance anti-patterns in C#?",
    "answer": "String concatenation in loops (use StringBuilder). Select N+1 in EF (use Include). Synchronous I/O in async context. Boxing/unboxing in hot paths. Unnecessary ToList() on IQueryable. Not using IAsyncEnumerable for large result sets. Holding locks too long. Missing indexes. Reflection in hot paths.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "API response time increased — profile with dotnet-trace, find 80% time in string formatting.",
    "followUps": [
      "How do you profile a .NET application?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--131",
    "category": "C#",
    "level": "Advanced",
    "question": "What is a memory pool (ArrayPool<T>)?",
    "answer": "ArrayPool<T>.Shared.Rent(minLength) returns a pooled array from a shared pool. Return with Return(array). Avoids repeated heap allocations for temporary buffers. Critical for high-throughput scenarios to reduce GC pressure.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Network protocol parsing — rent byte arrays for each packet, return after processing.",
    "followUps": [
      "What is MemoryPool<T>?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--132",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between abstract factory and factory method patterns?",
    "answer": "Factory Method: defines an interface for creating an object but lets subclasses decide which class to instantiate. Abstract Factory: provides interface for creating families of related objects. Abstract Factory uses composition; Factory Method uses inheritance.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Abstract Factory: UI toolkit factory for Windows/Linux (Button, ScrollBar families). Factory Method: Logger factory (FileLogger, ConsoleLogger).",
    "followUps": [
      "When would you prefer one over the other?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--133",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the Decorator pattern and how does ASP.NET Core middleware use it?",
    "answer": "Decorator wraps an object with additional behavior without modifying it, implementing the same interface. ASP.NET Core middleware is a form of decorator — each middleware wraps the next, adding request/response processing. Also used in retry policies, logging, caching wrappers.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "CachingRepository wraps Repository — adds caching without modifying Repository.",
    "followUps": [
      "How does Scrutor library simplify decorator registration in .NET DI?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--134",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the Strategy pattern?",
    "answer": "Strategy defines a family of algorithms, encapsulates each, and makes them interchangeable. Clients select strategy at runtime. Eliminates conditionals. Common in sorting, payment processing, compression.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "PaymentService with IPaymentStrategy — CreditCard, PayPal, Crypto strategies swappable.",
    "followUps": [
      "How does the Strategy pattern relate to Func<T>?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--135",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the Builder pattern?",
    "answer": "Builder separates complex object construction from its representation. A Builder class has methods for each part; Build() returns the final object. Enables step-by-step construction with validation. Common in test data, HTTP client configuration, query builders.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "IHostBuilder in ASP.NET Core — chain ConfigureServices, Configure, UseKestrel.",
    "followUps": [
      "What is a fluent builder?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--136",
    "category": "C#",
    "level": "Advanced",
    "question": "What is Circuit Breaker pattern?",
    "answer": "Prevents cascade failures by monitoring failures. States: Closed (normal, calls pass through), Open (failure threshold exceeded, calls fail fast), Half-Open (trial call to test recovery). Polly library implements Circuit Breaker for .NET.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "External payment API circuit breaker — after 5 failures, reject calls for 30 seconds without hitting API.",
    "followUps": [
      "What is the difference between Retry and Circuit Breaker?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--137",
    "category": "C#",
    "level": "Advanced",
    "question": "What is Polly and resilience in .NET?",
    "answer": "Polly is a .NET resilience library. Policies: Retry (with backoff), Circuit Breaker, Timeout, Bulkhead (concurrent call limit), Fallback, Hedging. Microsoft.Extensions.Resilience in .NET 8 wraps Polly. Combine policies with PolicyWrap.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "HTTP client calling external API — Retry(3) with exponential backoff + circuit breaker + timeout.",
    "followUps": [
      "What is exponential backoff with jitter?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--138",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between synchronous and asynchronous exceptions?",
    "answer": "Synchronous exceptions propagate through call stack normally. Async exceptions are stored in the Task. When you await the task, they are re-thrown. Unobserved task exceptions (not awaited, Task not checked) trigger TaskScheduler.UnobservedTaskException. Always await or handle all tasks.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Task.WhenAll — all exceptions collected in AggregateException; iterate InnerExceptions to handle each.",
    "followUps": [
      "What is AggregateException in TPL?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--139",
    "category": "C#",
    "level": "Advanced",
    "question": "What is a domain event and how does it differ from an integration event?",
    "answer": "Domain event: within a bounded context, raised by domain model, processed in-process (synchronously in same transaction or via in-process mediator). Integration event: crosses bounded context boundaries, typically via message bus (async, durable). Both implement event-driven patterns.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "OrderPlaced domain event → triggers inventory reservation in same transaction. Integration event → notifies shipping service via RabbitMQ.",
    "followUps": [
      "How do you implement domain events with MediatR?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--140",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the Outbox pattern?",
    "answer": "Outbox pattern ensures at-least-once delivery of integration events. Instead of publishing directly to message bus (two-phase commit problem), save event to Outbox table in same database transaction. A background process polls Outbox and publishes to bus, then marks as published.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Order service saves order + publishes OrderCreated to Outbox atomically — no lost events.",
    "followUps": [
      "How does Wolverine or MassTransit implement the Outbox pattern?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--141",
    "category": "C#",
    "level": "Advanced",
    "question": "What is a saga in microservices?",
    "answer": "Saga manages distributed transactions via a sequence of local transactions. Choreography: each service publishes events that trigger next step. Orchestration: central orchestrator tells each service what to do. Both handle rollback via compensating transactions.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Order fulfillment saga: Reserve Inventory → Charge Payment → Ship Order — each step compensatable.",
    "followUps": [
      "What is the difference between choreography and orchestration sagas?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--142",
    "category": "C#",
    "level": "Advanced",
    "question": "What is HATEOAS in REST API design?",
    "answer": "HATEOAS (Hypermedia as the Engine of Application State) — API responses include links to related actions/resources. Client discovers actions dynamically; no hardcoded URLs. True REST Level 3. Rarely implemented fully in practice.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Order response includes links: rel=cancel href=/orders/1/cancel, rel=ship href=/orders/1/ship.",
    "followUps": [
      "What are the Richardson Maturity Model levels?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--143",
    "category": "C#",
    "level": "Advanced",
    "question": "What is OpenTelemetry and how does it differ from legacy monitoring?",
    "answer": "OpenTelemetry is a vendor-neutral standard for traces, metrics, and logs. Three pillars: traces (distributed request tracking), metrics (quantitative measurements), logs (events). Exporters send to Jaeger, Prometheus, Datadog, etc. Replaces app-specific instrumentation.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Request from React → API → EF Core → SQL → external API — single trace shows full path and timing.",
    "followUps": [
      "What is a distributed trace span?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--144",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between push and pull metrics in Prometheus/OpenTelemetry?",
    "answer": "Push: application sends metrics to collector actively. Pull: Prometheus scrapes /metrics endpoint. OpenTelemetry Collector bridges both. Push is simpler for containerized apps; pull is more Prometheus-native and reduces coupling.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "API latency histogram — measure request duration distribution, compute P50/P95/P99.",
    "followUps": [
      "What is a histogram metric type?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--145",
    "category": "C#",
    "level": "Advanced",
    "question": "What are primary constructors in C# 12?",
    "answer": "Primary constructors allow constructor parameters directly on the class declaration: class OrderService(IOrderRepository repo). Parameters are in scope throughout the class. Reduces boilerplate for simple classes. Note: parameters are captured as fields implicitly when used in instance methods.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "class ProductService(IProductRepository repo, ILogger<ProductService> logger) — clean DI syntax.",
    "followUps": [
      "How do primary constructors interact with DI?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--146",
    "category": "C#",
    "level": "Advanced",
    "question": "What is collection expressions in C# 12?",
    "answer": "Collection expressions use [] syntax to create lists, arrays, spans, and other collections uniformly: int[] arr = [1, 2, 3]. Spread operator .. embeds another collection: [..existing, 4, 5]. Compiler chooses most efficient implementation.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "List<int> combined = [..listA, ..listB, 0] — clean, efficient collection creation.",
    "followUps": [
      "How does the spread operator work?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--147",
    "category": "C#",
    "level": "Advanced",
    "question": "What is Interceptors in C# 12?",
    "answer": "Interceptors are a preview feature allowing source generators to redirect method calls to a different method. Applied by specifying file path and line/column of call site. Enables zero-overhead aspect-like behavior. Used internally by EF Core for query interception.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "EF Core 8 uses interceptors to redirect LINQ calls to source-generated materializers.",
    "followUps": [
      "How do interceptors relate to source generators?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--148",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between IClonable and copy constructors for cloning?",
    "answer": "ICloneable is ambiguous (shallow or deep not specified) and returns object (unsafe). Prefer: copy constructors (new Order(existingOrder)), IDeepCloneable<T> custom interface, or with expression for records. Records provide with for non-destructive mutation out of the box.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "var updated = order with { Status = OrderStatus.Shipped } — immutable update without full copy code.",
    "followUps": [
      "How does the with expression work for records?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--149",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the managed thread abort issue and how is it solved in modern .NET?",
    "answer": "Thread.Abort() could inject ThreadAbortException at arbitrary points — corrupting state, bypassing finally blocks. .NET Core removed it (throws PlatformNotSupportedException). Solution: cooperative cancellation via CancellationToken, or structured concurrency patterns.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "CancellationTokenSource(TimeSpan.FromSeconds(5)) + cooperative checks in the sync loop.",
    "followUps": [
      "How do you timeout a synchronous operation in .NET Core?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "c--150",
    "category": "C#",
    "level": "Advanced",
    "question": "What is the difference between Process and AppDomain isolation?",
    "answer": "AppDomain (deprecated in .NET Core) provided in-process isolation in .NET Framework for plugin systems. .NET Core/5+ removed multi-AppDomain — single AppDomain per process. Use AssemblyLoadContext for plugin isolation now. Full process isolation gives true memory separation.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "Plugin architecture — load each plugin in separate AssemblyLoadContext; unload without affecting host.\n\n\n==================================================================",
    "followUps": [
      "What is AssemblyLoadContext used for?"
    ],
    "tags": [
      "C#",
      "InterviewPrep",
      "Advanced"
    ]
  },
  {
    "id": "asp-net-core-1",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is ASP.NET Core and how does it differ from ASP.NET MVC 5?",
    "answer": "ASP.NET Core is a cross-platform, high-performance, open-source framework running on .NET Core. Unlike ASP.NET MVC (Windows-only, System.Web dependency, IIS-hosted), ASP.NET Core is modular, runs on Linux/Mac, uses Kestrel (or IIS), has unified MVC/Web API, built-in DI, and is significantly faster.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-2",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between Kestrel and IIS in ASP.NET Core?",
    "answer": "Kestrel is ASP.NET Core's cross-platform HTTP server — fast, lightweight, built-in. IIS acts as a reverse proxy in front of Kestrel on Windows (in-process or out-of-process hosting). In production, put Kestrel behind nginx/IIS for SSL termination, load balancing, static file serving.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-3",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the Program.cs entry point in ASP.NET Core 6+?",
    "answer": "ASP.NET Core 6 uses top-level statements — no Main method. WebApplication.CreateBuilder(args) creates the builder. builder.Services configures DI. builder.Build() creates the WebApplication. app.Use* configures middleware. app.MapControllers()/MapGet() registers endpoints. app.Run() starts the server.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-4",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the IApplicationBuilder interface?",
    "answer": "IApplicationBuilder is used to configure the HTTP request pipeline (middleware). Available in Startup.Configure() or passed to app.Use* in modern apps. Use(middleware), Run(terminal), Map(branch), UseMiddleware<T>() are the core methods.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-5",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is routing in ASP.NET Core?",
    "answer": "Routing maps incoming URLs to endpoint handlers. Attribute routing: [Route(\"api/orders/{id}\")]. Conventional routing: app.MapControllerRoute. Endpoint routing (ASP.NET Core 3+) is the modern approach — middleware-agnostic, resolved at routing middleware. Route constraints: {id:int}, {slug:regex(...)}.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-6",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What are route constraints?",
    "answer": "Route constraints restrict what values a route parameter accepts: {id:int} (integer), {id:guid} (GUID), {name:minlength(3)}, {id:range(1,100)}, {id:alpha} (letters only). Custom: implement IRouteConstraint. Prevent wrong types from reaching action before model binding.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-7",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is model binding in ASP.NET Core?",
    "answer": "Model binding maps HTTP request data (route, query string, body, headers, form) to action method parameters. Attributes: [FromRoute], [FromQuery], [FromBody], [FromHeader], [FromForm], [FromServices]. Custom binders implement IModelBinder.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-8",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is action result and content negotiation?",
    "answer": "Content negotiation selects response format based on Accept header. AddControllers().AddXmlSerializerFormatters() adds XML support. JSON is default. Client sends Accept: application/xml — server responds with XML. FormatFilter attribute allows format in URL: /orders.xml.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-9",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between [ApiController] and ControllerBase?",
    "answer": "[ApiController] adds: automatic model validation (400 for invalid), binding source inference ([FromBody] for complex types, [FromRoute] for route params), ProblemDetails error responses. ControllerBase is for Web API (no view support). Controller (inherits ControllerBase) adds View() for MVC.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-10",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is minimal APIs in ASP.NET Core 6+?",
    "answer": "Minimal APIs define endpoints without controllers: app.MapGet(\"/orders/{id}\", (int id) => ...). Simpler than MVC for microservices. Supports filters, DI, route groups. Less ceremony for simple CRUD APIs. Comparable performance to controllers.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-11",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is middleware pipeline order importance?",
    "answer": "Order is critical. Correct order: UseExceptionHandler, UseHsts, UseHttpsRedirection, UseStaticFiles, UseRouting, UseCors, UseAuthentication, UseAuthorization, UseEndpoints. Auth after routing (route must match for auth decisions). CORS before auth. Static files before routing (bypass auth for public files).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-12",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is IHostedService vs Controller lifecycle?",
    "answer": "Controllers are transient — new instance per request. IHostedService runs continuously for app lifetime. Use IHostedService/BackgroundService for: message bus consumers, scheduled jobs, cache warming, health monitoring. Access services via IServiceScopeFactory (can't inject Scoped directly into Singleton).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-13",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the Options pattern?",
    "answer": "Options pattern binds configuration sections to strongly-typed classes. services.Configure<MailSettings>(config.GetSection(\"Mail\")). Inject IOptions<MailSettings>. IOptionsSnapshot reloads per request. IOptionsMonitor notifies of changes. Validation: services.AddOptions<MailSettings>().ValidateDataAnnotations().",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-14",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is health checks in ASP.NET Core?",
    "answer": "Built-in health check framework. services.AddHealthChecks().AddDbContextCheck<AppDbContext>().AddUrlGroup(new Uri(\"https://api.external.com\")). app.MapHealthChecks(\"/health\"). UI dashboard available. Kubernetes uses liveness and readiness probes against these endpoints.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-15",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is rate limiting in ASP.NET Core 7?",
    "answer": "System.Threading.RateLimiting + ASP.NET Core integration. builder.Services.AddRateLimiter(options => options.AddFixedWindowLimiter(\"api\", o => { o.PermitLimit = 100; o.Window = TimeSpan.FromMinutes(1); })). app.UseRateLimiter(). [EnableRateLimiting(\"api\")] on controllers.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-16",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is problem details in ASP.NET Core?",
    "answer": "RFC 7807 standard for HTTP error responses. {type, title, status, detail, instance} JSON structure. [ApiController] returns ProblemDetails for 4xx errors. builder.Services.AddProblemDetails() enables it globally for unhandled exceptions. Consistent error format for API clients.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-17",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is output caching in ASP.NET Core 7?",
    "answer": "Output caching caches complete HTTP responses. services.AddOutputCache(). app.UseOutputCache(). [OutputCache(Duration = 60)] on action or app.MapGet(...).CacheOutput(). More powerful than Response Caching middleware — supports vary by tags, custom policies, programmatic invalidation.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-18",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is request throttling vs rate limiting?",
    "answer": "Rate limiting: maximum number of requests per time window per client. Throttling: slow down requests (queue/delay) rather than reject. ASP.NET Core 7 Rate Limiter rejects at limit (429 Too Many Requests). Polly's Bulkhead throttles concurrent calls.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-19",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between UseAuthentication and UseAuthorization?",
    "answer": "UseAuthentication: determines WHO the user is — validates token/cookie, populates HttpContext.User. UseAuthorization: determines WHAT the user can do — checks policies, roles, claims. Both required; authentication must come first. [Authorize] attribute uses authorization.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-20",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What are authorization policies?",
    "answer": "Policies combine multiple requirements: services.AddAuthorization(options => options.AddPolicy(\"Senior\", policy => policy.RequireClaim(\"Age\", \"18+\").RequireRole(\"Employee\"))). Custom: IAuthorizationRequirement + AuthorizationHandler<T>. [Authorize(Policy = \"Senior\")] on controller.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-21",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is IExceptionHandler in ASP.NET Core 8?",
    "answer": "IExceptionHandler (ASP.NET Core 8) provides a cleaner exception handling mechanism. Implement IExceptionHandler, register with AddExceptionHandler<T>(). UseExceptionHandler() invokes them in order. Return false to let next handler try. Replaces complex UseExceptionHandler lambda patterns.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-22",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between REST and RPC API styles?",
    "answer": "REST: resource-oriented (nouns), HTTP verbs semantics, stateless, cacheable, uniform interface. RPC: action-oriented (verbs), method calls over HTTP. gRPC is RPC. GraphQL is neither pure REST nor RPC. REST is better for public APIs; gRPC for internal service communication.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-23",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is Swagger/OpenAPI in ASP.NET Core?",
    "answer": "Swashbuckle or NSwag generates OpenAPI spec from C# code. AddSwaggerGen() + UseSwagger() + UseSwaggerUI(). XML comments become descriptions. [ProducesResponseType] enriches schema. OpenAPI spec enables API client code generation (NSwag, OpenAPI Generator).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-24",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between [FromBody] and [FromForm]?",
    "answer": "[FromBody]: reads request body as JSON (or XML) — uses registered formatters. One [FromBody] per action. [FromForm]: reads application/x-www-form-urlencoded or multipart/form-data. For file uploads, use [FromForm] with IFormFile. Cannot use both on the same action.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-25",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is file upload in ASP.NET Core?",
    "answer": "Single file: IFormFile parameter with [FromForm]. Multiple: IFormFileCollection or List<IFormFile>. Stream large files: form.ReadStreamAsync(). Set request size limits: [RequestSizeLimit(52428800)] (50MB). Streaming large files avoids buffering in memory.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-26",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is background job processing in ASP.NET Core?",
    "answer": "Options: IHostedService/BackgroundService (in-process, simple). Hangfire (persistent, dashboard, retry, scheduling). Quartz.NET (CRON scheduling). Mass Transit (message bus + consumer). For distributed, reliable jobs, use Hangfire or a message bus.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-27",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between AddScoped and AddTransient for DbContext?",
    "answer": "AddDbContext registers as Scoped (one per HTTP request) — correct for web apps (tracks changes per request). Adding as Transient causes issues with change tracking consistency. Use IDbContextFactory<T> for background services needing multiple contexts per scope.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-28",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is API versioning in ASP.NET Core?",
    "answer": "Microsoft.AspNetCore.Mvc.Versioning. Version via URL (/api/v1/orders), query string (?version=1.0), or header (X-API-Version). ApiVersionAttribute on controllers. Sunset deprecated versions. MapToApiVersion for per-action versioning.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-29",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between redirect and forward in ASP.NET Core?",
    "answer": "Redirect (301/302): client makes new request to new URL — URL changes in browser. RedirectToAction(), Redirect(). Forward (internal): server forwards to different handler internally — URL stays same. UseRewriter() for URL rewriting.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-30",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "How do you implement pagination in ASP.NET Core?",
    "answer": "Standard query params: ?page=1&pageSize=20. Create PagedResult<T>: { Items, TotalCount, Page, PageSize, TotalPages }. EF Core: query.Skip((page-1)*pageSize).Take(pageSize). Return Link header or metadata for navigation. Cursor-based pagination for large datasets.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-31",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is SignalR Hub?",
    "answer": "Hub is the central SignalR class. Clients connect to Hub URL. Hub methods callable by clients: Clients.All.SendAsync(\"ReceiveMessage\", message). Clients can call hub methods from JS. Groups allow targeting subsets. Hub is transient; state via IHubContext.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-32",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is IHttpClientFactory?",
    "answer": "IHttpClientFactory manages HttpClient lifetimes and DNS refresh. Named clients: services.AddHttpClient(\"payment\", c => c.BaseAddress = ...). Typed clients: services.AddHttpClient<PaymentClient>(). Polly integration: .AddPolicyHandler(retryPolicy). Avoids socket exhaustion from manual HttpClient.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-33",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is response compression in ASP.NET Core?",
    "answer": "services.AddResponseCompression() + app.UseResponseCompression(). Supports gzip, Brotli. Add CompressionLevel options. Exclude small responses (overhead > benefit). Check Accept-Encoding request header. Significant bandwidth reduction for JSON APIs.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-34",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between cookie and JWT authentication?",
    "answer": "Cookie: server maintains session; cookie sent automatically; CSRF protection needed; stateful. JWT: stateless; client stores token; sent in Authorization header; no CSRF; larger request overhead; scales horizontally easily. JWT preferred for APIs/SPAs.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-35",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is refresh token?",
    "answer": "Refresh token is a long-lived token used to obtain new access tokens when they expire (short TTL: 15min). Stored securely (httpOnly cookie or secure storage). Refresh endpoint: exchange valid refresh token for new access + refresh token. Rotate refresh tokens; maintain revocation list.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-36",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is ASP.NET Core Data Protection API?",
    "answer": "Data Protection provides cryptographic APIs for protecting data (cookies, tokens, anti-forgery). IDataProtector.Protect()/Unprotect(). Keys managed automatically with rotation. Configure key storage (file system, Azure Key Vault). Used by Cookie authentication, TempData, ViewState replacement.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-37",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is anti-forgery (CSRF protection) in ASP.NET Core?",
    "answer": "Anti-forgery generates a token embedded in forms and validated on POST. HTML helper @Html.AntiForgeryToken(). [ValidateAntiForgeryToken] on POST actions. For SPAs, use X-XSRF-TOKEN header. APIs using JWT don't need CSRF protection (cookie not used).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-38",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between TempData and ViewBag?",
    "answer": "ViewBag/ViewData: pass data from controller to view for current request only — gone on redirect. TempData: survives one redirect — stored in session or cookie. Use TempData for post-redirect-get pattern (success messages after form submit).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-39",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is Razor Pages?",
    "answer": "Razor Pages is a page-based model — each page has .cshtml + .cshtml.cs (PageModel) pair. OnGet/OnPost handlers. Simpler than MVC for CRUD-heavy pages. No controller/action separation — page is self-contained. Supports model binding, validation, DI.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-40",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is Tag Helpers in ASP.NET Core?",
    "answer": "Tag Helpers enhance HTML elements with server-side logic: <asp-for=\"Name\">, <asp-controller=\"Orders\">, <asp-action=\"Create\">. More readable than HtmlHelper @Html.TextBoxFor(). Custom tag helpers implement TagHelper class. Replaces most HTML helper usage.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-41",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between Session and Distributed Session?",
    "answer": "Default in-memory session: single server only, lost on restart. Distributed session: IDistributedCache backed (Redis, SQL Server) — multi-server, persistent. builder.Services.AddStackExchangeRedisCache(). Required for multi-instance deployments.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-42",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is content security policy (CSP) in ASP.NET Core?",
    "answer": "CSP is an HTTP header restricting sources of scripts, styles, images. Mitigates XSS. Configure with middleware or NWebSec: app.UseCsp(opts => opts.DefaultSources(s => s.Self()).ScriptSources(s => s.Self())). Nonce-based CSP for inline scripts.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-43",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the Forwarded Headers middleware?",
    "answer": "When behind a reverse proxy (nginx, IIS, Azure Front Door), the original client IP and scheme are in X-Forwarded-For and X-Forwarded-Proto headers. app.UseForwardedHeaders() reads them. Without it, Request.Scheme is http even for HTTPS, HttpContext.Connection.RemoteIpAddress is proxy IP.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-44",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "How do you implement API key authentication?",
    "answer": "Custom middleware or AuthenticationHandler. Check Authorization header or X-Api-Key query/header. Validate against stored keys (database or config). Hash keys (don't store plain text). Scope keys to services. Implement IAuthenticationHandler for proper integration with [Authorize].",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-45",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is WebApplication.CreateSlimBuilder in ASP.NET Core 8?",
    "answer": "CreateSlimBuilder reduces memory and startup time for minimal APIs — fewer default services registered. Intended for containerized microservices. Excludes console logging, default health checks, and other rarely-needed defaults. Combine with source-generated JSON for minimal footprint.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-46",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is named options in ASP.NET Core?",
    "answer": "Named options allow multiple configuration instances of the same class: services.Configure<ConnectionOptions>(\"primary\", ...).Configure<ConnectionOptions>(\"secondary\", ...). Inject IOptionsFactory<ConnectionOptions>. Create(name) retrieves specific instance. Useful for multiple database connections.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-47",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is startup filters?",
    "answer": "IStartupFilter allows middleware to be added in the startup pipeline without modifying Configure(). Useful for library middleware that must run early. Implement IStartupFilter.Configure(Action<IApplicationBuilder> next) — add middleware before/after calling next(app).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-48",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is app.Environment in ASP.NET Core?",
    "answer": "IWebHostEnvironment (or IHostEnvironment) provides EnvironmentName, ContentRootPath, WebRootPath. Use app.Environment.IsDevelopment(), IsProduction(), IsStaging(). Set via ASPNETCORE_ENVIRONMENT env variable. Different config, error handling, logging per environment.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-49",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is Endpoint metadata in ASP.NET Core?",
    "answer": "Endpoints carry metadata: route pattern, controller/action info, [Authorize] attributes, [OutputCache], custom attributes. Access via HttpContext.GetEndpoint(). Middleware can read endpoint metadata to make decisions without knowing controller internals.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-50",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is dynamic controller routing?",
    "answer": "IActionDescriptorProvider and IApplicationModelConvention allow programmatic route and controller configuration. Add routes dynamically, change conventions application-wide. Area routing is a built-in grouping convention. Custom: implement IApplicationModelConvention to apply attribute globally.\n\n--------------------------------------------------------------------\nREST API QUESTIONS (30)\n--------------------------------------------------------------------",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-1",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What are HTTP methods and their semantics?",
    "answer": "GET (read, safe, idempotent), POST (create, not idempotent), PUT (full replace, idempotent), PATCH (partial update), DELETE (remove, idempotent). HEAD (like GET, no body). OPTIONS (CORS preflight, get allowed methods).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-2",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What are idempotent HTTP methods?",
    "answer": "An operation is idempotent if calling it multiple times has the same effect as calling once. GET, PUT, DELETE, HEAD are idempotent. POST is NOT — calling POST twice creates two resources. PATCH is not guaranteed idempotent (depends on implementation).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-3",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What are HTTP status codes?",
    "answer": "1xx Informational. 2xx Success: 200 OK, 201 Created, 202 Accepted, 204 No Content. 3xx Redirect: 301 Moved Permanently, 302 Found, 304 Not Modified. 4xx Client Error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests. 5xx Server Error: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-4",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is REST and its constraints?",
    "answer": "REST (Representational State Transfer) constraints: Client-Server, Stateless (no session state on server), Cacheable, Uniform Interface, Layered System, Code on Demand (optional). Stateless means each request carries all needed info; enables horizontal scaling.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-5",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the Richardson Maturity Model?",
    "answer": "Level 0: HTTP as tunnel (SOAP). Level 1: Resources (URIs). Level 2: HTTP verbs + status codes. Level 3: Hypermedia controls (HATEOAS). Most REST APIs are Level 2 in practice.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-6",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is API versioning best practice?",
    "answer": "Version in URL (/v1/orders) — most visible, simplest. Query string (?api-version=1.0) — less clean. Header (X-Api-Version) — cleaner URLs but less visible. Never version individual fields — version the resource representation. Deprecation notice before removal.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-7",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is OAuth 2.0?",
    "answer": "OAuth 2.0 is an authorization framework. Flows: Authorization Code (web apps), PKCE (SPAs, mobile), Client Credentials (server-to-server), Device Flow. Access tokens grant resource access. Scopes limit what access token can do. Use PKCE always for public clients.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-8",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is OpenID Connect?",
    "answer": "OpenID Connect (OIDC) is an identity layer on top of OAuth 2.0. Returns ID token (JWT with user info) in addition to access token. UserInfo endpoint for additional claims. Used for SSO. Claims: sub (user ID), email, name, roles.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-9",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between authorization and authentication in REST?",
    "answer": "Authentication: verify identity (who are you?). HTTP: Basic, Bearer token, API key, mTLS. Authorization: what are you allowed to do? OAuth scopes, RBAC roles, ABAC policies. API must do both: authenticate first, then authorize.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-10",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is HATEOAS?",
    "answer": "HATEOAS (Hypermedia As The Engine Of Application State): API responses include links to available actions. Client navigates API without hardcoded URLs. _links object in responses (HAL format). Rarely fully implemented; valuable for discoverability.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-11",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between PUT and PATCH?",
    "answer": "PUT replaces the entire resource — client sends full representation. PATCH partially updates — client sends only changed fields. PATCH risks concurrent update issues; use conditional requests (If-Match ETag) with PATCH. JSON Patch (RFC 6902) defines patch operations formally.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-12",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is ETags and conditional requests?",
    "answer": "ETag is a hash/version of resource. Server returns ETag: \"v1abc\". Client sends If-None-Match: \"v1abc\" — server returns 304 Not Modified if unchanged (caching). If-Match: \"v1abc\" on PUT/PATCH — fails with 412 if resource changed (optimistic concurrency).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-13",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is API rate limiting?",
    "answer": "Limit requests per client per time window (100 req/min). Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After (429 response). Algorithms: Fixed Window, Sliding Window, Token Bucket, Leaky Bucket. Identify clients by API key, IP, user ID.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-14",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is API pagination?",
    "answer": "Offset pagination: ?skip=0&take=20 — simple, inefficient for large offsets. Cursor-based: ?after=cursor — efficient, no inconsistencies during inserts. Page-based: ?page=1&perPage=20 — user-friendly. Always return total count and next/prev cursors/links.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-15",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is API idempotency keys?",
    "answer": "Client generates unique idempotency key (UUID) per request, sends in Idempotency-Key header. Server stores key + result. Duplicate request with same key returns cached result without re-executing. Critical for financial/payment APIs to prevent double charges.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-16",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between synchronous and asynchronous API patterns?",
    "answer": "Synchronous: client waits for response. Asynchronous: server returns 202 Accepted with job ID. Client polls status endpoint or receives webhook notification. Use async for long-running operations (report generation, bulk import, video processing).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-17",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is webhook?",
    "answer": "Webhook is an HTTP callback — server sends HTTP POST to client-registered URL when an event occurs. Subscribe: client registers URL. Publish: server sends event payload. Client must validate signature (HMAC). Retry on failure. Secret-signed POST is most secure approach.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-18",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is GraphQL vs REST?",
    "answer": "REST: multiple endpoints per resource. GraphQL: single endpoint, client specifies exact fields needed (no over/under fetching). GraphQL has queries (read), mutations (write), subscriptions (real-time). More flexible for clients, more complex server implementation.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-19",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is API gateway?",
    "answer": "API gateway is a single entry point for all API calls. Functions: routing, auth, rate limiting, load balancing, SSL termination, request/response transformation, logging. Examples: Azure API Management, AWS API Gateway, Kong, Nginx. Reduces client-side complexity.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-20",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is a microservice API design principle?",
    "answer": "API per service. Backward compatible changes only (no breaking changes). Use semantic versioning. Consumer-driven contract testing (Pact). Each service owns its API — no shared schema. Async communication for cross-service events.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-21",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is content type negotiation in APIs?",
    "answer": "Client sends Accept: application/json header. Server responds with Content-Type: application/json. Server can serve JSON and XML based on Accept header. application/vnd.company.v2+json — vendor media type for API versioning.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-22",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is API documentation best practice?",
    "answer": "OpenAPI 3.0 spec as source of truth. Generate from code (Swashbuckle) or code from spec (contract-first). Include: endpoint description, request/response schemas, error responses, example payloads, authentication requirements. Versioned docs. Postman collections.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-23",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between REST and SOAP?",
    "answer": "SOAP: XML-based, strict WSDL contract, built-in WS-Security/WS-Transaction, stateful possible, slower. REST: lightweight, JSON/XML, no strict contract (OpenAPI optional), stateless, cacheable, faster. SOAP still used in enterprise/financial integration; REST dominates new development.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-24",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is OData?",
    "answer": "OData (Open Data Protocol) extends REST with standardized query options: $filter, $select, $expand, $orderby, $top, $skip, $count. Clients can query without custom endpoints. Built-in with ASP.NET Core OData package. Powerful for data-heavy APIs but can expose too much.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-25",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is an API contract test?",
    "answer": "Contract test verifies that provider API meets consumer expectations. Pact framework: consumer defines expectations, provider validates against them. Prevents integration failures. Consumer-driven contract testing is the gold standard for microservice APIs.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-26",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is HTTP/2 and how does it improve APIs?",
    "answer": "HTTP/2 multiplexes multiple requests over single TCP connection (no head-of-line blocking). Server push sends resources proactively. Header compression (HPACK). Binary protocol. gRPC requires HTTP/2. REST benefits: reduced connection overhead, parallel requests.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-27",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between 401 and 403?",
    "answer": "401 Unauthorized: not authenticated — provide credentials. WWW-Authenticate header indicates auth scheme. 403 Forbidden: authenticated but not authorized — no access regardless of credentials. 401 = wrong key; 403 = right key, wrong room.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-28",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is API security best practices?",
    "answer": "Use HTTPS always. Validate input (prevent injection). Rate limiting. CORS policy. Never expose internal errors. Use API keys or OAuth. Log all API calls. OWASP API Security Top 10: broken object level auth, broken auth, data exposure, lack of resources/rate limiting.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-29",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is request/response logging middleware?",
    "answer": "Log: method, URL, request headers/body (redact sensitive), response status, duration. Use correlation ID (X-Correlation-Id header) to trace across services. Structured logging (Serilog, ELK). Log to stdout in containers for platform to collect.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-30",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is API gateway vs BFF (Backend for Frontend)?",
    "answer": "API gateway is generic — all clients use same gateway. BFF is client-specific backend — mobile app, web app, partner each have own BFF aggregating and adapting multiple microservice calls. BFF reduces chatty client-server communication.\n\n--------------------------------------------------------------------\nENTITY FRAMEWORK CORE QUESTIONS (30)\n--------------------------------------------------------------------",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-1",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is ORM and how does EF Core work?",
    "answer": "ORM (Object-Relational Mapper) maps C# objects to database tables. EF Core: DbContext manages entity objects. DbSet<T> represents a table. LINQ queries translated to SQL. Change tracking detects modifications. SaveChanges() persists changes to DB.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-2",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is DbContext and its lifecycle?",
    "answer": "DbContext is the primary class in EF Core. Manages: database connection, entity tracking, query execution, transaction management. Should be scoped (one per request in web apps). Not thread-safe. Register with AddDbContext() for DI.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-3",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What are the different ways to configure entities in EF Core?",
    "answer": "Data annotations: [Key], [Required], [MaxLength], [Table], [Column]. Fluent API (in OnModelCreating): more powerful, no pollution in entities. IEntityTypeConfiguration<T>: separate configuration class per entity — recommended for larger models.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-4",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is table splitting in EF Core?",
    "answer": "Table splitting maps multiple entity types to the same table — shared primary key. Useful for splitting a wide table into frequently-used and rarely-used columns. Both entities tracked independently, saved to same row.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-5",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is owned entity types?",
    "answer": "Owned entities are always used with owner — no separate DbSet, no identity. Configured with OwnsOne/OwnsMany. Mapped to same table (default) or separate table. Perfect for value objects in DDD: Order.ShippingAddress is an Address value object.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-6",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is a shadow property?",
    "answer": "Shadow properties exist in EF Core model but not in entity class. Defined in OnModelCreating with Property<T>(name). Useful for: audit fields (CreatedAt, UpdatedAt) without polluting entities, foreign keys not in entity class.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-7",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is query splitting in EF Core?",
    "answer": "Single query with multiple collections: EF generates a JOIN that can produce a data explosion (cartesian product). AsSplitQuery() generates separate queries per collection — avoids data explosion but multiple round trips. Configure globally with UseQuerySplittingBehavior.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-8",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is raw SQL in EF Core?",
    "answer": "FromSqlRaw() / FromSqlInterpolated() executes SQL and materializes into entities. ExecuteSqlRaw() / ExecuteSqlInterpolated() for non-query SQL. FromSqlInterpolated parameterizes automatically — prevents SQL injection. Combine with LINQ after FromSql.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-9",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between FirstOrDefault and SingleOrDefault?",
    "answer": "FirstOrDefault: returns first matching row, no error if multiple. SingleOrDefault: throws if more than one match — use when exactly one is expected. First/Single throw if no match; FirstOrDefault/SingleOrDefault return null/default.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-10",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is Include vs ThenInclude?",
    "answer": "Include loads first-level related entity: query.Include(o => o.Customer). ThenInclude loads further nested entities: .Include(o => o.Items).ThenInclude(i => i.Product). Each adds a JOIN (or separate query if AsSplitQuery).",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-11",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is global query filter?",
    "answer": "modelBuilder.Entity<Order>().HasQueryFilter(o => !o.IsDeleted) — filter applied to all queries for that entity. Used for soft delete, multi-tenancy (TenantId filter). Override with IgnoreQueryFilters(). Great for transparent filtering.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-12",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is database seeding in EF Core?",
    "answer": "modelBuilder.Entity<Product>().HasData(new Product { Id = 1, Name = \"Widget\" }) — inserts on migration. For larger datasets: custom migration or a seeding service in startup. HasData requires primary key set.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-13",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What are value converters in EF Core?",
    "answer": "Map CLR types to database types: store enum as string, encrypt a property, serialize list as JSON. modelBuilder.Entity<Order>().Property(o => o.Status).HasConversion<string>(). Custom: implement ValueConverter<TModel, TProvider>.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-14",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is EF Core interceptors?",
    "answer": "Interceptors hook into DbCommand, DbConnection, DbTransaction, SaveChanges. ISaveChangesInterceptor for audit logging. IDbCommandInterceptor for query logging/modification. Register with AddInterceptors(). Less intrusive than overriding SaveChanges.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-15",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is compiled queries in EF Core?",
    "answer": "EF.CompileQuery() compiles a LINQ query once and reuses the compiled form. Skips query translation overhead on subsequent calls. Significant performance improvement for frequently executed parameterized queries.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-16",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the N+1 problem and how to fix it?",
    "answer": "N+1: loading parent entities (1 query), then accessing related data for each parent (N queries). Fix: eager loading with Include(). Or: explicit joins in SQL, projection with Select(), AsSplitQuery() for collections.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-17",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is database first vs code first?",
    "answer": "Code first: define C# classes → generate migrations → create DB. Full control over schema. Database first: scaffold from existing DB (Scaffold-DbContext). Generates entities and DbContext from DB. Better for legacy databases.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-18",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the Unit of Work pattern with EF Core?",
    "answer": "DbContext already implements Unit of Work — tracks all changes, SaveChanges() commits all in one transaction. Explicit UoW pattern wraps DbContext in a custom UnitOfWork class with Commit()/Rollback(). Useful for explicit transaction control.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-19",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is execution strategy in EF Core?",
    "answer": "Execution strategy handles transient failures (connection drops, timeouts). optionsBuilder.UseSqlServer(conn, opts => opts.EnableRetryOnFailure()). Automatic retry with exponential backoff. Critical for cloud databases (Azure SQL). Custom: inherit ExecutionStrategy.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-20",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is bulk operations in EF Core?",
    "answer": "EF Core's SaveChanges processes entities one by one — slow for large batches. EF Core 7 introduced ExecuteUpdate/ExecuteDelete (direct SQL). For large inserts: EF Core Extensions (Bulk Extensions), SqlBulkCopy, or Dapper. Always benchmark.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-21",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is EF Core temporal tables?",
    "answer": "SQL Server temporal tables: IsSqlServerTemporalTable() in EF Core 6+. System-versioned — DB tracks all historical row versions with ValidFrom/ValidTo. Query history: TemporalAsOf(dateTime), TemporalAll(), TemporalFromTo(). Great for audit trails.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-22",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is table-per-hierarchy (TPH) vs table-per-type (TPT)?",
    "answer": "TPH: all hierarchy types in one table with discriminator column — efficient queries, nullable columns for subtype fields. TPT: each type has own table — clean schema, JOIN overhead. TPT supported in EF Core 5+. TPC (table-per-concrete-class) in EF Core 7+.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-23",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is projection in EF Core?",
    "answer": "Select() projects to a DTO rather than loading entire entity: query.Select(o => new OrderDto { Id = o.Id, CustomerName = o.Customer.Name }). Reduces data transfer. EF Core translates to SQL SELECT only needed columns. Always prefer projection for read operations.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-24",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is EF Core 8 JSON columns?",
    "answer": "EF Core 8 supports mapping owned entities/collections to JSON columns natively. OwnsOne(x => x.Address).ToJson(). Full LINQ query translation into JSON path queries. No serialization boilerplate. Database stores as JSON; EF maps automatically.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-25",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is optimistic vs pessimistic concurrency in EF Core?",
    "answer": "Optimistic: [ConcurrencyCheck] or IsRowVersion() + HasRowVersion(). EF adds WHERE rowversion = @original in UPDATE. Throws DbUpdateConcurrencyException if changed. Pessimistic: use explicit transactions with UPDLOCK hints or SET TRANSACTION ISOLATION LEVEL SERIALIZABLE.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-26",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between migrations and database initialization?",
    "answer": "Migrations: incremental, versioned schema changes — production-safe. Database.Migrate() in startup applies pending migrations. EnsureCreated(): creates schema without migrations — dev/test only, no migration history. Never mix both.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-27",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is a self-referencing entity?",
    "answer": "Entity referencing itself: Category with ParentId (FK to Category.Id). EF Core supports: HasOne(c => c.Parent).WithMany(c => c.Children).HasForeignKey(c => c.ParentId). Hierarchy queries may need recursive CTE in SQL.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-28",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is AsNoTrackingWithIdentityResolution?",
    "answer": "AsNoTracking() is fastest but may create duplicate entity instances for the same row. AsNoTrackingWithIdentityResolution() avoids duplicates (identity map) while still not tracking for change detection. Use when loading same entity from multiple navigation paths.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-29",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is EF Core's FromExpression for table-valued functions?",
    "answer": "Map SQL TVFs (table-valued functions) to LINQ-queryable methods. Define DbFunction attribute or HasDbFunction in modelBuilder. Call in LINQ: context.GetTopProducts(10).Where(p => p.Price > 100). Enables complex DB-side logic in LINQ.",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "asp-net-core-30",
    "category": "ASP.NET Core",
    "level": "Beginner",
    "question": "What is the difference between SaveChanges and ExecuteUpdate?",
    "answer": "SaveChanges: change-tracked ORM approach — load entity, modify, save. Round trips: 1 SELECT + 1 UPDATE. ExecuteUpdate (EF Core 7): direct bulk UPDATE without loading entities — faster for mass updates. context.Orders.Where(o => o.Status == Pending).ExecuteUpdate(s => s.SetProperty(o => o.Status, Processing)).\n\n\n==================================================================",
    "explanation": "See real-world example and follow-up questions for deeper details.",
    "realWorldExample": "",
    "followUps": [],
    "tags": [
      "ASP.NET Core",
      "InterviewPrep",
      "Fundamentals"
    ]
  },
  {
    "id": "react-1",
    "category": "React",
    "level": "Beginner",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q1)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Beginner"
    ]
  },
  {
    "id": "react-2",
    "category": "React",
    "level": "Beginner",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q2)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Beginner"
    ]
  },
  {
    "id": "react-3",
    "category": "React",
    "level": "Beginner",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q3)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Beginner"
    ]
  },
  {
    "id": "react-4",
    "category": "React",
    "level": "Beginner",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q4)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Beginner"
    ]
  },
  {
    "id": "react-5",
    "category": "React",
    "level": "Beginner",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q5)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Beginner"
    ]
  },
  {
    "id": "react-6",
    "category": "React",
    "level": "Beginner",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q6)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Beginner"
    ]
  },
  {
    "id": "react-7",
    "category": "React",
    "level": "Beginner",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q7)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Beginner"
    ]
  },
  {
    "id": "react-8",
    "category": "React",
    "level": "Beginner",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q8)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Beginner"
    ]
  },
  {
    "id": "react-9",
    "category": "React",
    "level": "Beginner",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q9)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Beginner"
    ]
  },
  {
    "id": "react-10",
    "category": "React",
    "level": "Beginner",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q10)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Beginner"
    ]
  },
  {
    "id": "react-11",
    "category": "React",
    "level": "Beginner",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q11)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Beginner"
    ]
  },
  {
    "id": "react-12",
    "category": "React",
    "level": "Beginner",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q12)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Beginner"
    ]
  },
  {
    "id": "react-13",
    "category": "React",
    "level": "Beginner",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q13)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Beginner"
    ]
  },
  {
    "id": "react-14",
    "category": "React",
    "level": "Beginner",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q14)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Beginner"
    ]
  },
  {
    "id": "react-15",
    "category": "React",
    "level": "Beginner",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q15)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Beginner"
    ]
  },
  {
    "id": "react-16",
    "category": "React",
    "level": "Beginner",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q16)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Beginner"
    ]
  },
  {
    "id": "react-17",
    "category": "React",
    "level": "Beginner",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q17)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Beginner"
    ]
  },
  {
    "id": "react-18",
    "category": "React",
    "level": "Beginner",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q18)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Beginner"
    ]
  },
  {
    "id": "react-19",
    "category": "React",
    "level": "Beginner",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q19)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Beginner"
    ]
  },
  {
    "id": "react-20",
    "category": "React",
    "level": "Beginner",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q20)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Beginner"
    ]
  },
  {
    "id": "react-21",
    "category": "React",
    "level": "Beginner",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q21)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Beginner"
    ]
  },
  {
    "id": "react-22",
    "category": "React",
    "level": "Beginner",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q22)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Beginner"
    ]
  },
  {
    "id": "react-23",
    "category": "React",
    "level": "Beginner",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q23)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Beginner"
    ]
  },
  {
    "id": "react-24",
    "category": "React",
    "level": "Beginner",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q24)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Beginner"
    ]
  },
  {
    "id": "react-25",
    "category": "React",
    "level": "Beginner",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q25)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Beginner"
    ]
  },
  {
    "id": "react-26",
    "category": "React",
    "level": "Beginner",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q26)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Beginner"
    ]
  },
  {
    "id": "react-27",
    "category": "React",
    "level": "Beginner",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q27)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Beginner"
    ]
  },
  {
    "id": "react-28",
    "category": "React",
    "level": "Beginner",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q28)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Beginner"
    ]
  },
  {
    "id": "react-29",
    "category": "React",
    "level": "Beginner",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q29)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Beginner"
    ]
  },
  {
    "id": "react-30",
    "category": "React",
    "level": "Beginner",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q30)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Beginner"
    ]
  },
  {
    "id": "react-31",
    "category": "React",
    "level": "Intermediate",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q31)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Intermediate"
    ]
  },
  {
    "id": "react-32",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q32)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Intermediate"
    ]
  },
  {
    "id": "react-33",
    "category": "React",
    "level": "Intermediate",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q33)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Intermediate"
    ]
  },
  {
    "id": "react-34",
    "category": "React",
    "level": "Intermediate",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q34)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Intermediate"
    ]
  },
  {
    "id": "react-35",
    "category": "React",
    "level": "Intermediate",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q35)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Intermediate"
    ]
  },
  {
    "id": "react-36",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q36)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Intermediate"
    ]
  },
  {
    "id": "react-37",
    "category": "React",
    "level": "Intermediate",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q37)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Intermediate"
    ]
  },
  {
    "id": "react-38",
    "category": "React",
    "level": "Intermediate",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q38)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Intermediate"
    ]
  },
  {
    "id": "react-39",
    "category": "React",
    "level": "Intermediate",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q39)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Intermediate"
    ]
  },
  {
    "id": "react-40",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q40)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Intermediate"
    ]
  },
  {
    "id": "react-41",
    "category": "React",
    "level": "Intermediate",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q41)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Intermediate"
    ]
  },
  {
    "id": "react-42",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q42)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Intermediate"
    ]
  },
  {
    "id": "react-43",
    "category": "React",
    "level": "Intermediate",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q43)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Intermediate"
    ]
  },
  {
    "id": "react-44",
    "category": "React",
    "level": "Intermediate",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q44)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Intermediate"
    ]
  },
  {
    "id": "react-45",
    "category": "React",
    "level": "Intermediate",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q45)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Intermediate"
    ]
  },
  {
    "id": "react-46",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q46)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Intermediate"
    ]
  },
  {
    "id": "react-47",
    "category": "React",
    "level": "Intermediate",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q47)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Intermediate"
    ]
  },
  {
    "id": "react-48",
    "category": "React",
    "level": "Intermediate",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q48)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Intermediate"
    ]
  },
  {
    "id": "react-49",
    "category": "React",
    "level": "Intermediate",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q49)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Intermediate"
    ]
  },
  {
    "id": "react-50",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q50)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Intermediate"
    ]
  },
  {
    "id": "react-51",
    "category": "React",
    "level": "Intermediate",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q51)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Intermediate"
    ]
  },
  {
    "id": "react-52",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q52)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Intermediate"
    ]
  },
  {
    "id": "react-53",
    "category": "React",
    "level": "Intermediate",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q53)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Intermediate"
    ]
  },
  {
    "id": "react-54",
    "category": "React",
    "level": "Intermediate",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q54)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Intermediate"
    ]
  },
  {
    "id": "react-55",
    "category": "React",
    "level": "Intermediate",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q55)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Intermediate"
    ]
  },
  {
    "id": "react-56",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q56)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Intermediate"
    ]
  },
  {
    "id": "react-57",
    "category": "React",
    "level": "Intermediate",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q57)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Intermediate"
    ]
  },
  {
    "id": "react-58",
    "category": "React",
    "level": "Intermediate",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q58)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Intermediate"
    ]
  },
  {
    "id": "react-59",
    "category": "React",
    "level": "Intermediate",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q59)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Intermediate"
    ]
  },
  {
    "id": "react-60",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q60)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Intermediate"
    ]
  },
  {
    "id": "react-61",
    "category": "React",
    "level": "Intermediate",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q61)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Intermediate"
    ]
  },
  {
    "id": "react-62",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q62)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Intermediate"
    ]
  },
  {
    "id": "react-63",
    "category": "React",
    "level": "Intermediate",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q63)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Intermediate"
    ]
  },
  {
    "id": "react-64",
    "category": "React",
    "level": "Intermediate",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q64)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Intermediate"
    ]
  },
  {
    "id": "react-65",
    "category": "React",
    "level": "Intermediate",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q65)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Intermediate"
    ]
  },
  {
    "id": "react-66",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q66)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Intermediate"
    ]
  },
  {
    "id": "react-67",
    "category": "React",
    "level": "Intermediate",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q67)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Intermediate"
    ]
  },
  {
    "id": "react-68",
    "category": "React",
    "level": "Intermediate",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q68)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Intermediate"
    ]
  },
  {
    "id": "react-69",
    "category": "React",
    "level": "Intermediate",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q69)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Intermediate"
    ]
  },
  {
    "id": "react-70",
    "category": "React",
    "level": "Intermediate",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q70)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Intermediate"
    ]
  },
  {
    "id": "react-71",
    "category": "React",
    "level": "Advanced",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q71)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Advanced"
    ]
  },
  {
    "id": "react-72",
    "category": "React",
    "level": "Advanced",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q72)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Advanced"
    ]
  },
  {
    "id": "react-73",
    "category": "React",
    "level": "Advanced",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q73)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Advanced"
    ]
  },
  {
    "id": "react-74",
    "category": "React",
    "level": "Advanced",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q74)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Advanced"
    ]
  },
  {
    "id": "react-75",
    "category": "React",
    "level": "Advanced",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q75)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Advanced"
    ]
  },
  {
    "id": "react-76",
    "category": "React",
    "level": "Advanced",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q76)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Advanced"
    ]
  },
  {
    "id": "react-77",
    "category": "React",
    "level": "Advanced",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q77)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Advanced"
    ]
  },
  {
    "id": "react-78",
    "category": "React",
    "level": "Advanced",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q78)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Advanced"
    ]
  },
  {
    "id": "react-79",
    "category": "React",
    "level": "Advanced",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q79)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Advanced"
    ]
  },
  {
    "id": "react-80",
    "category": "React",
    "level": "Advanced",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q80)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Advanced"
    ]
  },
  {
    "id": "react-81",
    "category": "React",
    "level": "Advanced",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q81)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Advanced"
    ]
  },
  {
    "id": "react-82",
    "category": "React",
    "level": "Advanced",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q82)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Advanced"
    ]
  },
  {
    "id": "react-83",
    "category": "React",
    "level": "Advanced",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q83)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Advanced"
    ]
  },
  {
    "id": "react-84",
    "category": "React",
    "level": "Advanced",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q84)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Advanced"
    ]
  },
  {
    "id": "react-85",
    "category": "React",
    "level": "Advanced",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q85)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Advanced"
    ]
  },
  {
    "id": "react-86",
    "category": "React",
    "level": "Advanced",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q86)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Advanced"
    ]
  },
  {
    "id": "react-87",
    "category": "React",
    "level": "Advanced",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q87)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Advanced"
    ]
  },
  {
    "id": "react-88",
    "category": "React",
    "level": "Advanced",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q88)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Advanced"
    ]
  },
  {
    "id": "react-89",
    "category": "React",
    "level": "Advanced",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q89)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Advanced"
    ]
  },
  {
    "id": "react-90",
    "category": "React",
    "level": "Advanced",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q90)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Advanced"
    ]
  },
  {
    "id": "react-91",
    "category": "React",
    "level": "Advanced",
    "question": "What is the Virtual DOM and how does React reconciliation work? (Q91)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Virtual DOM, Fiber, Reconciliation",
      "Advanced"
    ]
  },
  {
    "id": "react-92",
    "category": "React",
    "level": "Advanced",
    "question": "Explain the difference between useEffect, useLayoutEffect, and insertionEffect. (Q92)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Hooks, Lifecycle",
      "Advanced"
    ]
  },
  {
    "id": "react-93",
    "category": "React",
    "level": "Advanced",
    "question": "How does React 18 Concurrent Mode work, and what are useTransition and useDeferredValue? (Q93)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Concurrency, React 18",
      "Advanced"
    ]
  },
  {
    "id": "react-94",
    "category": "React",
    "level": "Advanced",
    "question": "What is React Context API, and what are its performance implications compared to Redux or Zustand? (Q94)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "State Management, Performance",
      "Advanced"
    ]
  },
  {
    "id": "react-95",
    "category": "React",
    "level": "Advanced",
    "question": "How do you optimize React render performance? When should you use React.memo, useMemo, and useCallback? (Q95)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Memoization",
      "Advanced"
    ]
  },
  {
    "id": "react-96",
    "category": "React",
    "level": "Advanced",
    "question": "Explain how code splitting and lazy loading are implemented in React with Suspense. (Q96)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Performance, Lazy Loading",
      "Advanced"
    ]
  },
  {
    "id": "react-97",
    "category": "React",
    "level": "Advanced",
    "question": "What are Error Boundaries in React? How do you capture errors in functional components? (Q97)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Error Boundaries, Error Handling",
      "Advanced"
    ]
  },
  {
    "id": "react-98",
    "category": "React",
    "level": "Advanced",
    "question": "How does custom hook creation allow sharing stateful logic? Write a custom hook useFetch. (Q98)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Custom Hooks, Code Reuse",
      "Advanced"
    ]
  },
  {
    "id": "react-99",
    "category": "React",
    "level": "Advanced",
    "question": "What is the difference between controlled and uncontrolled components? When would you use useRef over state? (Q99)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "Forms, Refs",
      "Advanced"
    ]
  },
  {
    "id": "react-100",
    "category": "React",
    "level": "Advanced",
    "question": "Explain the concept of Hydration in SSR frameworks (like Next.js) and why hydration mismatch occurs. (Q100)",
    "answer": "React uses a light-weight representation of the DOM in memory called the Virtual DOM. On state change, it creates a new Virtual DOM tree, compares it with the previous one (reconciliation), and updates only the modified nodes in the real DOM. React 18 introduces Concurrent rendering via the Fiber engine, allowing rendering tasks to be paused and resumed.",
    "explanation": "React.memo prevents renders if props haven't changed. useMemo caches expensive computation values. useCallback caches callback function instances between re-renders to prevent unnecessary updates to child components that depend on them.",
    "realWorldExample": "Optimizing a long dashboard grid by memoizing row components and wrapping event handlers in useCallback, reducing average render times from 150ms to 4ms.",
    "followUps": [
      "What is the difference between state and props?",
      "How do keys help React reconcile list items?",
      "Can you trigger rendering synchronously in React 18?"
    ],
    "tags": [
      "React",
      "SSR, Hydration",
      "Advanced"
    ]
  },
  {
    "id": "sql-1",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q1)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Beginner"
    ]
  },
  {
    "id": "sql-2",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q2)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Beginner"
    ]
  },
  {
    "id": "sql-3",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q3)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Beginner"
    ]
  },
  {
    "id": "sql-4",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q4)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Beginner"
    ]
  },
  {
    "id": "sql-5",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q5)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Beginner"
    ]
  },
  {
    "id": "sql-6",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q6)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Beginner"
    ]
  },
  {
    "id": "sql-7",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q7)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Beginner"
    ]
  },
  {
    "id": "sql-8",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q8)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Beginner"
    ]
  },
  {
    "id": "sql-9",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q9)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Beginner"
    ]
  },
  {
    "id": "sql-10",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q10)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Beginner"
    ]
  },
  {
    "id": "sql-11",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q11)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Beginner"
    ]
  },
  {
    "id": "sql-12",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q12)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Beginner"
    ]
  },
  {
    "id": "sql-13",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q13)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Beginner"
    ]
  },
  {
    "id": "sql-14",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q14)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Beginner"
    ]
  },
  {
    "id": "sql-15",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q15)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Beginner"
    ]
  },
  {
    "id": "sql-16",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q16)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Beginner"
    ]
  },
  {
    "id": "sql-17",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q17)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Beginner"
    ]
  },
  {
    "id": "sql-18",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q18)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Beginner"
    ]
  },
  {
    "id": "sql-19",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q19)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Beginner"
    ]
  },
  {
    "id": "sql-20",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q20)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Beginner"
    ]
  },
  {
    "id": "sql-21",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q21)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Beginner"
    ]
  },
  {
    "id": "sql-22",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q22)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Beginner"
    ]
  },
  {
    "id": "sql-23",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q23)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Beginner"
    ]
  },
  {
    "id": "sql-24",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q24)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Beginner"
    ]
  },
  {
    "id": "sql-25",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q25)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Beginner"
    ]
  },
  {
    "id": "sql-26",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q26)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Beginner"
    ]
  },
  {
    "id": "sql-27",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q27)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Beginner"
    ]
  },
  {
    "id": "sql-28",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q28)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Beginner"
    ]
  },
  {
    "id": "sql-29",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q29)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Beginner"
    ]
  },
  {
    "id": "sql-30",
    "category": "SQL Server",
    "level": "Beginner",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q30)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Beginner"
    ]
  },
  {
    "id": "sql-31",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q31)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Intermediate"
    ]
  },
  {
    "id": "sql-32",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q32)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Intermediate"
    ]
  },
  {
    "id": "sql-33",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q33)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Intermediate"
    ]
  },
  {
    "id": "sql-34",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q34)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Intermediate"
    ]
  },
  {
    "id": "sql-35",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q35)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Intermediate"
    ]
  },
  {
    "id": "sql-36",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q36)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Intermediate"
    ]
  },
  {
    "id": "sql-37",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q37)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Intermediate"
    ]
  },
  {
    "id": "sql-38",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q38)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Intermediate"
    ]
  },
  {
    "id": "sql-39",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q39)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Intermediate"
    ]
  },
  {
    "id": "sql-40",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q40)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Intermediate"
    ]
  },
  {
    "id": "sql-41",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q41)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Intermediate"
    ]
  },
  {
    "id": "sql-42",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q42)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Intermediate"
    ]
  },
  {
    "id": "sql-43",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q43)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Intermediate"
    ]
  },
  {
    "id": "sql-44",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q44)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Intermediate"
    ]
  },
  {
    "id": "sql-45",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q45)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Intermediate"
    ]
  },
  {
    "id": "sql-46",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q46)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Intermediate"
    ]
  },
  {
    "id": "sql-47",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q47)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Intermediate"
    ]
  },
  {
    "id": "sql-48",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q48)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Intermediate"
    ]
  },
  {
    "id": "sql-49",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q49)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Intermediate"
    ]
  },
  {
    "id": "sql-50",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q50)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Intermediate"
    ]
  },
  {
    "id": "sql-51",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q51)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Intermediate"
    ]
  },
  {
    "id": "sql-52",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q52)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Intermediate"
    ]
  },
  {
    "id": "sql-53",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q53)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Intermediate"
    ]
  },
  {
    "id": "sql-54",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q54)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Intermediate"
    ]
  },
  {
    "id": "sql-55",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q55)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Intermediate"
    ]
  },
  {
    "id": "sql-56",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q56)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Intermediate"
    ]
  },
  {
    "id": "sql-57",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q57)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Intermediate"
    ]
  },
  {
    "id": "sql-58",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q58)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Intermediate"
    ]
  },
  {
    "id": "sql-59",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q59)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Intermediate"
    ]
  },
  {
    "id": "sql-60",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q60)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Intermediate"
    ]
  },
  {
    "id": "sql-61",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q61)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Intermediate"
    ]
  },
  {
    "id": "sql-62",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q62)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Intermediate"
    ]
  },
  {
    "id": "sql-63",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q63)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Intermediate"
    ]
  },
  {
    "id": "sql-64",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q64)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Intermediate"
    ]
  },
  {
    "id": "sql-65",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q65)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Intermediate"
    ]
  },
  {
    "id": "sql-66",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q66)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Intermediate"
    ]
  },
  {
    "id": "sql-67",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q67)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Intermediate"
    ]
  },
  {
    "id": "sql-68",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q68)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Intermediate"
    ]
  },
  {
    "id": "sql-69",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q69)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Intermediate"
    ]
  },
  {
    "id": "sql-70",
    "category": "SQL Server",
    "level": "Intermediate",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q70)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Intermediate"
    ]
  },
  {
    "id": "sql-71",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q71)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Advanced"
    ]
  },
  {
    "id": "sql-72",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q72)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Advanced"
    ]
  },
  {
    "id": "sql-73",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q73)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Advanced"
    ]
  },
  {
    "id": "sql-74",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q74)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Advanced"
    ]
  },
  {
    "id": "sql-75",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q75)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Advanced"
    ]
  },
  {
    "id": "sql-76",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q76)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Advanced"
    ]
  },
  {
    "id": "sql-77",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q77)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Advanced"
    ]
  },
  {
    "id": "sql-78",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q78)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Advanced"
    ]
  },
  {
    "id": "sql-79",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q79)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Advanced"
    ]
  },
  {
    "id": "sql-80",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q80)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Advanced"
    ]
  },
  {
    "id": "sql-81",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q81)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Advanced"
    ]
  },
  {
    "id": "sql-82",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q82)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Advanced"
    ]
  },
  {
    "id": "sql-83",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q83)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Advanced"
    ]
  },
  {
    "id": "sql-84",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q84)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Advanced"
    ]
  },
  {
    "id": "sql-85",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q85)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Advanced"
    ]
  },
  {
    "id": "sql-86",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q86)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Advanced"
    ]
  },
  {
    "id": "sql-87",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q87)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Advanced"
    ]
  },
  {
    "id": "sql-88",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q88)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Advanced"
    ]
  },
  {
    "id": "sql-89",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q89)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Advanced"
    ]
  },
  {
    "id": "sql-90",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q90)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Advanced"
    ]
  },
  {
    "id": "sql-91",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What is the difference between Clustered and Non-Clustered indexes? (Q91)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Indexes, Clustered, Non-Clustered",
      "Advanced"
    ]
  },
  {
    "id": "sql-92",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain SQL Server Isolation Levels and how they prevent dirty reads, non-repeatable reads, and phantoms. (Q92)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Transactions, Isolation Levels",
      "Advanced"
    ]
  },
  {
    "id": "sql-93",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What is a deadlock in SQL Server? How do you investigate and prevent them? (Q93)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Concurrency, Deadlocks",
      "Advanced"
    ]
  },
  {
    "id": "sql-94",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain the difference between Inner, Left, Right, Full, and Cross Joins. (Q94)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Joins",
      "Advanced"
    ]
  },
  {
    "id": "sql-95",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "How do you analyze a SQL Server Execution Plan? What are Key Lookups and Table Scans? (Q95)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Query Tuning, Execution Plan",
      "Advanced"
    ]
  },
  {
    "id": "sql-96",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What are Window Functions? Explain ROW_NUMBER, DENSE_RANK, LEAD, and LAG. (Q96)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Window Functions, Aggregations",
      "Advanced"
    ]
  },
  {
    "id": "sql-97",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain Common Table Expressions (CTEs) and recursive queries in SQL Server. (Q97)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "CTEs, Recursion",
      "Advanced"
    ]
  },
  {
    "id": "sql-98",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "What are Temp Tables (#temp) vs Table Variables (@table) in SQL Server? When should you use each? (Q98)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Temp Tables, Performance",
      "Advanced"
    ]
  },
  {
    "id": "sql-99",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "How do you resolve parameter sniffing issues in SQL Server stored procedures? (Q99)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Stored Procedures, Parameter Sniffing",
      "Advanced"
    ]
  },
  {
    "id": "sql-100",
    "category": "SQL Server",
    "level": "Advanced",
    "question": "Explain SQL Server Statistics, their role in query optimization, and how to update them. (Q100)",
    "answer": "Clustered indexes physically sort and store the data rows in the table based on their key values. There can only be one clustered index per table. Non-clustered indexes contain a separate structure of key values and pointers (RID or clustered key) back to the actual data rows. Proper index design is the first step in performance tuning.",
    "explanation": "Isolation levels include: Read Uncommitted (dirty reads allowed), Read Committed (default, prevents dirty reads), Repeatable Read (prevents non-repeatable reads), Serializable (prevents phantoms, locks entire range), and Snapshot (row versioning, prevents blocks).",
    "realWorldExample": "Converting a critical report query from using subqueries to CTEs with window functions, then adding a covering index with INCLUDE columns, dropping execution time from 45 seconds to 250 milliseconds.",
    "followUps": [
      "What is a covering index?",
      "How does SQL Server handle locks escalation?",
      "What is the role of tempdb in SQL Server?"
    ],
    "tags": [
      "SQL Server",
      "Statistics, Performance Tuning",
      "Advanced"
    ]
  },
  {
    "id": "azure-1",
    "category": "Azure",
    "level": "Beginner",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q1)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Beginner"
    ]
  },
  {
    "id": "azure-2",
    "category": "Azure",
    "level": "Beginner",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q2)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Beginner"
    ]
  },
  {
    "id": "azure-3",
    "category": "Azure",
    "level": "Beginner",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q3)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Beginner"
    ]
  },
  {
    "id": "azure-4",
    "category": "Azure",
    "level": "Beginner",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q4)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Beginner"
    ]
  },
  {
    "id": "azure-5",
    "category": "Azure",
    "level": "Beginner",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q5)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Beginner"
    ]
  },
  {
    "id": "azure-6",
    "category": "Azure",
    "level": "Beginner",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q6)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Beginner"
    ]
  },
  {
    "id": "azure-7",
    "category": "Azure",
    "level": "Beginner",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q7)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Beginner"
    ]
  },
  {
    "id": "azure-8",
    "category": "Azure",
    "level": "Beginner",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q8)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Beginner"
    ]
  },
  {
    "id": "azure-9",
    "category": "Azure",
    "level": "Beginner",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q9)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Beginner"
    ]
  },
  {
    "id": "azure-10",
    "category": "Azure",
    "level": "Beginner",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q10)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Beginner"
    ]
  },
  {
    "id": "azure-11",
    "category": "Azure",
    "level": "Beginner",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q11)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Beginner"
    ]
  },
  {
    "id": "azure-12",
    "category": "Azure",
    "level": "Beginner",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q12)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Beginner"
    ]
  },
  {
    "id": "azure-13",
    "category": "Azure",
    "level": "Beginner",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q13)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Beginner"
    ]
  },
  {
    "id": "azure-14",
    "category": "Azure",
    "level": "Beginner",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q14)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Beginner"
    ]
  },
  {
    "id": "azure-15",
    "category": "Azure",
    "level": "Beginner",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q15)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Beginner"
    ]
  },
  {
    "id": "azure-16",
    "category": "Azure",
    "level": "Beginner",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q16)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Beginner"
    ]
  },
  {
    "id": "azure-17",
    "category": "Azure",
    "level": "Beginner",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q17)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Beginner"
    ]
  },
  {
    "id": "azure-18",
    "category": "Azure",
    "level": "Beginner",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q18)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Beginner"
    ]
  },
  {
    "id": "azure-19",
    "category": "Azure",
    "level": "Beginner",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q19)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Beginner"
    ]
  },
  {
    "id": "azure-20",
    "category": "Azure",
    "level": "Beginner",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q20)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Beginner"
    ]
  },
  {
    "id": "azure-21",
    "category": "Azure",
    "level": "Beginner",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q21)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Beginner"
    ]
  },
  {
    "id": "azure-22",
    "category": "Azure",
    "level": "Beginner",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q22)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Beginner"
    ]
  },
  {
    "id": "azure-23",
    "category": "Azure",
    "level": "Beginner",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q23)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Beginner"
    ]
  },
  {
    "id": "azure-24",
    "category": "Azure",
    "level": "Beginner",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q24)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Beginner"
    ]
  },
  {
    "id": "azure-25",
    "category": "Azure",
    "level": "Beginner",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q25)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Beginner"
    ]
  },
  {
    "id": "azure-26",
    "category": "Azure",
    "level": "Beginner",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q26)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Beginner"
    ]
  },
  {
    "id": "azure-27",
    "category": "Azure",
    "level": "Beginner",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q27)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Beginner"
    ]
  },
  {
    "id": "azure-28",
    "category": "Azure",
    "level": "Beginner",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q28)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Beginner"
    ]
  },
  {
    "id": "azure-29",
    "category": "Azure",
    "level": "Beginner",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q29)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Beginner"
    ]
  },
  {
    "id": "azure-30",
    "category": "Azure",
    "level": "Beginner",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q30)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Beginner"
    ]
  },
  {
    "id": "azure-31",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q31)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Intermediate"
    ]
  },
  {
    "id": "azure-32",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q32)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Intermediate"
    ]
  },
  {
    "id": "azure-33",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q33)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Intermediate"
    ]
  },
  {
    "id": "azure-34",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q34)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Intermediate"
    ]
  },
  {
    "id": "azure-35",
    "category": "Azure",
    "level": "Intermediate",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q35)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Intermediate"
    ]
  },
  {
    "id": "azure-36",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q36)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Intermediate"
    ]
  },
  {
    "id": "azure-37",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q37)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Intermediate"
    ]
  },
  {
    "id": "azure-38",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q38)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Intermediate"
    ]
  },
  {
    "id": "azure-39",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q39)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Intermediate"
    ]
  },
  {
    "id": "azure-40",
    "category": "Azure",
    "level": "Intermediate",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q40)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Intermediate"
    ]
  },
  {
    "id": "azure-41",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q41)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Intermediate"
    ]
  },
  {
    "id": "azure-42",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q42)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Intermediate"
    ]
  },
  {
    "id": "azure-43",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q43)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Intermediate"
    ]
  },
  {
    "id": "azure-44",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q44)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Intermediate"
    ]
  },
  {
    "id": "azure-45",
    "category": "Azure",
    "level": "Intermediate",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q45)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Intermediate"
    ]
  },
  {
    "id": "azure-46",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q46)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Intermediate"
    ]
  },
  {
    "id": "azure-47",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q47)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Intermediate"
    ]
  },
  {
    "id": "azure-48",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q48)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Intermediate"
    ]
  },
  {
    "id": "azure-49",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q49)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Intermediate"
    ]
  },
  {
    "id": "azure-50",
    "category": "Azure",
    "level": "Intermediate",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q50)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Intermediate"
    ]
  },
  {
    "id": "azure-51",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q51)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Intermediate"
    ]
  },
  {
    "id": "azure-52",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q52)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Intermediate"
    ]
  },
  {
    "id": "azure-53",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q53)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Intermediate"
    ]
  },
  {
    "id": "azure-54",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q54)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Intermediate"
    ]
  },
  {
    "id": "azure-55",
    "category": "Azure",
    "level": "Intermediate",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q55)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Intermediate"
    ]
  },
  {
    "id": "azure-56",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q56)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Intermediate"
    ]
  },
  {
    "id": "azure-57",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q57)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Intermediate"
    ]
  },
  {
    "id": "azure-58",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q58)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Intermediate"
    ]
  },
  {
    "id": "azure-59",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q59)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Intermediate"
    ]
  },
  {
    "id": "azure-60",
    "category": "Azure",
    "level": "Intermediate",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q60)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Intermediate"
    ]
  },
  {
    "id": "azure-61",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q61)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Intermediate"
    ]
  },
  {
    "id": "azure-62",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q62)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Intermediate"
    ]
  },
  {
    "id": "azure-63",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q63)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Intermediate"
    ]
  },
  {
    "id": "azure-64",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q64)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Intermediate"
    ]
  },
  {
    "id": "azure-65",
    "category": "Azure",
    "level": "Intermediate",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q65)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Intermediate"
    ]
  },
  {
    "id": "azure-66",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q66)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Intermediate"
    ]
  },
  {
    "id": "azure-67",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q67)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Intermediate"
    ]
  },
  {
    "id": "azure-68",
    "category": "Azure",
    "level": "Intermediate",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q68)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Intermediate"
    ]
  },
  {
    "id": "azure-69",
    "category": "Azure",
    "level": "Intermediate",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q69)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Intermediate"
    ]
  },
  {
    "id": "azure-70",
    "category": "Azure",
    "level": "Intermediate",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q70)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Intermediate"
    ]
  },
  {
    "id": "azure-71",
    "category": "Azure",
    "level": "Advanced",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q71)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Advanced"
    ]
  },
  {
    "id": "azure-72",
    "category": "Azure",
    "level": "Advanced",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q72)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Advanced"
    ]
  },
  {
    "id": "azure-73",
    "category": "Azure",
    "level": "Advanced",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q73)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Advanced"
    ]
  },
  {
    "id": "azure-74",
    "category": "Azure",
    "level": "Advanced",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q74)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Advanced"
    ]
  },
  {
    "id": "azure-75",
    "category": "Azure",
    "level": "Advanced",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q75)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Advanced"
    ]
  },
  {
    "id": "azure-76",
    "category": "Azure",
    "level": "Advanced",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q76)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Advanced"
    ]
  },
  {
    "id": "azure-77",
    "category": "Azure",
    "level": "Advanced",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q77)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Advanced"
    ]
  },
  {
    "id": "azure-78",
    "category": "Azure",
    "level": "Advanced",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q78)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Advanced"
    ]
  },
  {
    "id": "azure-79",
    "category": "Azure",
    "level": "Advanced",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q79)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Advanced"
    ]
  },
  {
    "id": "azure-80",
    "category": "Azure",
    "level": "Advanced",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q80)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Advanced"
    ]
  },
  {
    "id": "azure-81",
    "category": "Azure",
    "level": "Advanced",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q81)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Advanced"
    ]
  },
  {
    "id": "azure-82",
    "category": "Azure",
    "level": "Advanced",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q82)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Advanced"
    ]
  },
  {
    "id": "azure-83",
    "category": "Azure",
    "level": "Advanced",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q83)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Advanced"
    ]
  },
  {
    "id": "azure-84",
    "category": "Azure",
    "level": "Advanced",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q84)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Advanced"
    ]
  },
  {
    "id": "azure-85",
    "category": "Azure",
    "level": "Advanced",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q85)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Advanced"
    ]
  },
  {
    "id": "azure-86",
    "category": "Azure",
    "level": "Advanced",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q86)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Advanced"
    ]
  },
  {
    "id": "azure-87",
    "category": "Azure",
    "level": "Advanced",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q87)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Advanced"
    ]
  },
  {
    "id": "azure-88",
    "category": "Azure",
    "level": "Advanced",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q88)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Advanced"
    ]
  },
  {
    "id": "azure-89",
    "category": "Azure",
    "level": "Advanced",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q89)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Advanced"
    ]
  },
  {
    "id": "azure-90",
    "category": "Azure",
    "level": "Advanced",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q90)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Advanced"
    ]
  },
  {
    "id": "azure-91",
    "category": "Azure",
    "level": "Advanced",
    "question": "Explain Azure App Service deployment slots and how they facilitate zero-downtime deployments. (Q91)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "App Service, Slots",
      "Advanced"
    ]
  },
  {
    "id": "azure-92",
    "category": "Azure",
    "level": "Advanced",
    "question": "What is Azure Key Vault, and how do you securely access it using Managed Identities? (Q92)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Security, Key Vault",
      "Advanced"
    ]
  },
  {
    "id": "azure-93",
    "category": "Azure",
    "level": "Advanced",
    "question": "Compare Azure Functions Consumption, Premium, and Dedicated hosting plans. (Q93)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Functions, Serverless",
      "Advanced"
    ]
  },
  {
    "id": "azure-94",
    "category": "Azure",
    "level": "Advanced",
    "question": "What is Azure Service Bus? Explain queues vs topics, subscriptions, and duplicate detection. (Q94)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Service Bus, Messaging",
      "Advanced"
    ]
  },
  {
    "id": "azure-95",
    "category": "Azure",
    "level": "Advanced",
    "question": "How do you monitor and diagnose ASP.NET Core apps in Azure using Application Insights? (Q95)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Application Insights, Monitoring",
      "Advanced"
    ]
  },
  {
    "id": "azure-96",
    "category": "Azure",
    "level": "Advanced",
    "question": "What are the security, performance, and scaling strategies for Azure SQL Database? (Q96)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure SQL",
      "Advanced"
    ]
  },
  {
    "id": "azure-97",
    "category": "Azure",
    "level": "Advanced",
    "question": "Explain Azure API Management (APIM) and how to configure rate limiting policies. (Q97)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "API Management",
      "Advanced"
    ]
  },
  {
    "id": "azure-98",
    "category": "Azure",
    "level": "Advanced",
    "question": "What are SAS tokens in Azure Blob Storage, and how do you secure files in transit and at rest? (Q98)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Blob Storage, SAS",
      "Advanced"
    ]
  },
  {
    "id": "azure-99",
    "category": "Azure",
    "level": "Advanced",
    "question": "Compare Azure Event Grid, Event Hubs, and Service Bus. When should you use each? (Q99)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Eventing, Messaging",
      "Advanced"
    ]
  },
  {
    "id": "azure-100",
    "category": "Azure",
    "level": "Advanced",
    "question": "How do you set up secure Azure CI/CD pipelines using Azure DevOps and self-hosted agents? (Q100)",
    "answer": "Azure App Service provides deployment slots which are live apps with their own hostnames. You deploy code to a staging slot, warm it up, and perform a swap to production with zero downtime. Using Managed Identities allows your app to access Key Vault, Azure SQL, and Blob Storage without storing credentials in app config files.",
    "explanation": "Service Bus handles advanced messaging features like transactional queues, duplicate detection, dead-lettering, and publish/subscribe topics. Application Insights collects logs, requests, dependencies, and exceptions dynamically.",
    "realWorldExample": "Migrating an on-premises scheduled task to serverless Azure Functions triggered by Service Bus queues, utilizing Key Vault for secret management and Application Insights for correlation ID trace logs.",
    "followUps": [
      "What is the difference between User-Assigned and System-Assigned Managed Identity?",
      "How do you handle cold starts in Azure Functions?",
      "What is APIM policy XML structure?"
    ],
    "tags": [
      "Azure",
      "Azure DevOps, CI/CD",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-1",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q1)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-2",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q2)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-3",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q3)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-4",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q4)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-5",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q5)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-6",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q6)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-7",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q7)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-8",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q8)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-9",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "How do you handle scope creep from product managers during a sprint? (Q9)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-10",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q10)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-11",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q11)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-12",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q12)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-13",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q13)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-14",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q14)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-15",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q15)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-16",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q16)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-17",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q17)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-18",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q18)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-19",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "How do you handle scope creep from product managers during a sprint? (Q19)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-20",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q20)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-21",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q21)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-22",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q22)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-23",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q23)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-24",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q24)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-25",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q25)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-26",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q26)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-27",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q27)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-28",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q28)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-29",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "How do you handle scope creep from product managers during a sprint? (Q29)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-30",
    "category": "Behavioral",
    "level": "Beginner",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q30)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Beginner"
    ]
  },
  {
    "id": "behavioral-31",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q31)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-32",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q32)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-33",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q33)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-34",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q34)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-35",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q35)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-36",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q36)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-37",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q37)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-38",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q38)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-39",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "How do you handle scope creep from product managers during a sprint? (Q39)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-40",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q40)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-41",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q41)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-42",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q42)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-43",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q43)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-44",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q44)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-45",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q45)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-46",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q46)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-47",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q47)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-48",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q48)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-49",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "How do you handle scope creep from product managers during a sprint? (Q49)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-50",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q50)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-51",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q51)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-52",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q52)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-53",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q53)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-54",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q54)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-55",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q55)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-56",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q56)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-57",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q57)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-58",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q58)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-59",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "How do you handle scope creep from product managers during a sprint? (Q59)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-60",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q60)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-61",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q61)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-62",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q62)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-63",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q63)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-64",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q64)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-65",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q65)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-66",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q66)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-67",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q67)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-68",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q68)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-69",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "How do you handle scope creep from product managers during a sprint? (Q69)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-70",
    "category": "Behavioral",
    "level": "Intermediate",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q70)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Intermediate"
    ]
  },
  {
    "id": "behavioral-71",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q71)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-72",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q72)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-73",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q73)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-74",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q74)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-75",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q75)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-76",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q76)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-77",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q77)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-78",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q78)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-79",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "How do you handle scope creep from product managers during a sprint? (Q79)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-80",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q80)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-81",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q81)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-82",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q82)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-83",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q83)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-84",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q84)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-85",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q85)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-86",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q86)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-87",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q87)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-88",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q88)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-89",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "How do you handle scope creep from product managers during a sprint? (Q89)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-90",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q90)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-91",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Describe a time when you had a technical disagreement with a peer or architect. How did you resolve it? (Q91)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Conflict Resolution",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-92",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time you made a significant architectural mistake. What was it, how did you fix it, and what did you learn? (Q92)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Failure, Ownership",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-93",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Explain how you mentored a junior developer and helped them grow. What approach did you use? (Q93)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Mentoring",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-94",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Describe a project where you took total ownership from design to delivery. What challenges did you face? (Q94)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Ownership, Leadership",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-95",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time you had to deliver under an impossible deadline. How did you manage scope and communication? (Q95)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Adaptability, Prioritization",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-96",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Give an example of how you optimized a team process or code standard to increase velocity. (Q96)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Process Improvement",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-97",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time a production outage occurred. How did you handle the situation and post-mortem? (Q97)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Production Incidents",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-98",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Describe a complex feature you delivered that required cross-team collaboration. (Q98)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Teamwork",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-99",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "How do you handle scope creep from product managers during a sprint? (Q99)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Communication",
      "Advanced"
    ]
  },
  {
    "id": "behavioral-100",
    "category": "Behavioral",
    "level": "Advanced",
    "question": "Tell me about a time you learned a new technology quickly to solve a business problem. (Q100)",
    "answer": "Situation: We were migrating our microservices data sync. Task: I was lead backend dev. Action: A colleague wanted sync HTTP; I proposed async events. We built prototypes, measured latency/throughput, and presented metrics. Result: The team adopted the event-driven strategy, cutting coupling and API latency by 40%.",
    "explanation": "Always structure answers using the STAR method: Situation (set context), Task (describe your responsibility), Action (what you specifically did and why), and Result (quantified outcome, lessons learned).",
    "realWorldExample": "A conflict over using raw SQL (Dapper) vs Entity Framework Core. Resolving it by setting up a benchmark suite to show that EF Core compiled queries matched Dapper performance for 90% of use cases, saving developer time.",
    "followUps": [
      "What would you have done differently?",
      "How did you follow up with the teammate?",
      "What metrics did you track?"
    ],
    "tags": [
      "Behavioral",
      "Learning",
      "Advanced"
    ]
  },
  {
    "id": "sysdes-1",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a URL SHORTENER",
    "answer": "",
    "explanation": "Focus on capacity estimation, API design, DB design, scaling, caching, and trade-offs.",
    "realWorldExample": "Real-world application: systems like TinyURL, Slack, AWS CloudWatch, Shopify.",
    "followUps": [
      "How do we handle multi-region active-active replication?",
      "What happens if the cache layer fails under peak load?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-2",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a CENTRALIZED LOGGING SYSTEM",
    "answer": "",
    "explanation": "Focus on capacity estimation, API design, DB design, scaling, caching, and trade-offs.",
    "realWorldExample": "Real-world application: systems like TinyURL, Slack, AWS CloudWatch, Shopify.",
    "followUps": [
      "How do we handle multi-region active-active replication?",
      "What happens if the cache layer fails under peak load?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-3",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a INVENTORY MANAGEMENT SYSTEM",
    "answer": "",
    "explanation": "Focus on capacity estimation, API design, DB design, scaling, caching, and trade-offs.",
    "realWorldExample": "Real-world application: systems like TinyURL, Slack, AWS CloudWatch, Shopify.",
    "followUps": [
      "How do we handle multi-region active-active replication?",
      "What happens if the cache layer fails under peak load?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-4",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a DEVICE MONITORING PLATFORM",
    "answer": "",
    "explanation": "Focus on capacity estimation, API design, DB design, scaling, caching, and trade-offs.",
    "realWorldExample": "Real-world application: systems like TinyURL, Slack, AWS CloudWatch, Shopify.",
    "followUps": [
      "How do we handle multi-region active-active replication?",
      "What happens if the cache layer fails under peak load?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-5",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a DRIVER UPDATE MANAGEMENT SYSTEM",
    "answer": "",
    "explanation": "Focus on capacity estimation, API design, DB design, scaling, caching, and trade-offs.",
    "realWorldExample": "Real-world application: systems like TinyURL, Slack, AWS CloudWatch, Shopify.",
    "followUps": [
      "How do we handle multi-region active-active replication?",
      "What happens if the cache layer fails under peak load?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-21",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Distributed Cache System (like Redis)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-22",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Distributed Rate Limiter",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-23",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design an API Gateway (like Yarp/Kong)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-24",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a File Upload & CDN Distribution Service",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-25",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Search Autocomplete Service",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-26",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Distributed Job Scheduler",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-27",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Social Media News Feed (like Twitter)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-28",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Multi-Tenant SaaS Isolation Model",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-29",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design an Authentication & Identity Provider (SSO)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-30",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design an Event Streaming Platform (like Kafka)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-31",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Time-Series Database System",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-32",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Distributed Transaction Saga Orchestrator",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-33",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a CI/CD Runner Platform",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-34",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Centralized Metric Monitoring Dashboard",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-35",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Video Streaming Platform (like Netflix)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-36",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Ticket Booking System (like Ticketmaster)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-37",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Ridesharing Platform (like Uber)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-38",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design an E-Commerce Cart & Checkout Service",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-39",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Notification Dispatch Engine",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-40",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Web Crawler System",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-41",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Distributed Configuration Service (ZooKeeper-like)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-42",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Multi-tenant Billing & Metering Pipeline",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-43",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Real-time Collaboration Whiteboard System",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-44",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design an Ad-Click Aggregator & Reporting Service",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-45",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Financial Ledger System (Double-Entry)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-46",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a High-Throughput IoT Ingestion Pipeline",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-47",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Geo-Distributed Storage API",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-48",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Logging Agent & Aggregator (fluentd-like)",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-49",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Multiplayer Gaming Matchmaker",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "sysdes-gen-50",
    "category": "System Design",
    "level": "Advanced",
    "question": "Design a Code Compilation & Sandbox Execution Engine",
    "answer": "### Requirements\nHigh availability, horizontal scaling, fault tolerance, and minimal latency.\n\n### API Design\nStandard HTTP/gRPC methods for clients to push/pull telemetry or read state.\n\n### Scaling Strategy\nCaching at edge layers, load balancers, sharding database nodes by hash keys, and using event queues (Kafka/RabbitMQ) to decouple write pathways.\n\n### Trade-offs\nChoosing eventual consistency over strong consistency to maintain write performance.",
    "explanation": "Use high-level block architecture diagrams, define partition keys, estimate bandwidth/storage, and detail replication strategies.",
    "realWorldExample": "Real-world implementation of systems like Redis, Netflix CDN, Stripe ledger, Uber dispatcher.",
    "followUps": [
      "How do you handle partition failure?",
      "How do you handle duplicate requests?"
    ],
    "tags": [
      "System Design",
      "Architecture",
      "Scaling"
    ]
  }
]
