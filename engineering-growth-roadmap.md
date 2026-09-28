# Engineering Growth Roadmap & Session Guide

**Owner:** Tanvir Ahmed Robbany\
**Start date:** 2026-09-28\
**Primary purpose:** Long-term practical software-engineering skill
development during available office downtime.

------------------------------------------------------------------------

## 1. Learning Philosophy

The primary goal is to become a stronger production-oriented software
engineer by **building, experimenting, modifying, testing, and
documenting code**.

### Preferred learning method

The learning cycle should normally be:

1.  **Actual code reference/example**
2.  Run the reference
3.  Explain what the code does
4.  Explain why each important part exists
5.  Explain what happens if a part is removed, changed, or implemented
    incorrectly
6.  Modify the code
7.  Break it intentionally and observe the result
8.  Fix/improve it
9.  Apply the concept to the portfolio project
10. Commit the work and record the learning

The user is comfortable writing code by hand while using references and
examples. Do **not** rely primarily on lectures, passive reading, or
asking the user to implement a concept from a blank page without a
concrete reference.

### Core rule

> Every learning session should produce something tangible.

Examples:

-   Working code
-   A test
-   A small experiment
-   A refactor
-   A system-design diagram
-   A documented observation
-   A meaningful Git commit

Use approximately **20% reference/learning and 80% hands-on work** when
practical.

------------------------------------------------------------------------

# 2. Weekly Office Schedule

Office days:

-   Sunday
-   Monday
-   Tuesday
-   Wednesday
-   Thursday

Office hours:

**10:00 AM -- 7:00 PM**

### Default personal engineering block

**4:00 PM -- 6:00 PM**

This is the default 2-hour skill-development session.

The session may extend beyond two hours when the user is in productive
deep work. The two-hour block is a minimum planning target, not a hard
stopping point.

If an actual office task appears, office work takes priority. The
personal session can be moved later that day when practical.

Friday and Saturday have **no mandatory learning session**.

------------------------------------------------------------------------

# 3. Daily 2-Hour Routine

Default structure:

  Time     Activity
  -------- ---------------------------------
  10 min   Review previous work
  60 min   Main engineering implementation
  25 min   DSA / problem solving
  20 min   Portfolio project
  5 min    Git commit + learning log

This is flexible.

If a deep implementation requires 90--120 minutes, continue the
implementation and reduce or move the other activities.

### Priority order during a deep session

1.  Understand the current engineering problem
2.  Build the working implementation
3.  Experiment and test
4.  Apply it to the portfolio project
5.  DSA if time remains
6.  Document and commit

------------------------------------------------------------------------

# 4. Weekly Sprint Structure

Each week is treated as a small engineering sprint.

## Sunday --- Learn + Build

-   Introduce the week's main engineering concept
-   Use real code references
-   Run and understand the reference
-   Implement a small example
-   Start applying it to the project
-   Solve one DSA problem if practical

## Monday --- Deepen Engineering

-   Continue the week's technical concept
-   Explore edge cases
-   Modify/break the reference
-   Improve implementation
-   Solve one DSA problem

## Tuesday --- Portfolio Day

-   Apply the week's concept to the portfolio project
-   Build an actual feature
-   Add tests where appropriate
-   Solve one DSA problem

## Wednesday --- Architecture / System Design

-   Study the architecture behind the week's concept
-   Draw a simple system/design
-   Compare alternative approaches
-   Implement or refactor where useful

## Thursday --- Integration + Review

-   Integrate the week's work
-   Add tests/documentation
-   Review what was learned
-   Record problems and discoveries
-   Define the next sprint

------------------------------------------------------------------------

# 5. Weekly Sprint Ritual

At the beginning of every Sunday session, define:

``` md
# Week XX

## Main Goal

## Engineering
- [ ] Task
- [ ] Task
- [ ] Task

## DSA
- [ ] Problem
- [ ] Problem
- [ ] Problem

## Portfolio
- [ ] Feature
- [ ] Feature

## Expected Output
- Git commits
- Working code
- Notes
```

At Thursday review:

``` md
# Week XX Review

## Completed
- ...

## What I learned
- ...

## What I struggled with
- ...

## Important discoveries
- ...

## What I need to revisit
- ...

## Next week's goal
- ...
```

------------------------------------------------------------------------

# 6. 9-Month Roadmap

## Month 1 --- Node.js + TypeScript + Express Foundations

Topics:

-   Node.js runtime
-   Event loop
-   HTTP
-   Express
-   Middleware
-   Request/response lifecycle
-   Controllers
-   Services
-   Error handling
-   Custom errors
-   Validation
-   Configuration
-   Logging
-   REST API design
-   Basic testing

Initial architecture:

``` text
src/
├── modules/
│   ├── auth/
│   ├── users/
│   └── forms/
├── middleware/
├── config/
├── database/
├── utils/
└── app.ts
```

------------------------------------------------------------------------

## Month 2 --- MongoDB + Backend Architecture

Topics:

-   MongoDB schema design
-   Indexes
-   Aggregation
-   Pagination
-   Filtering
-   Transactions
-   Query optimization
-   DTOs
-   Repository/service patterns
-   API versioning

Core entities:

-   User
-   Form
-   Question
-   Response

------------------------------------------------------------------------

## Month 3 --- Authentication + Security

Topics:

-   JWT
-   Access tokens
-   Refresh tokens
-   httpOnly cookies
-   Password hashing
-   Email verification
-   Password reset
-   RBAC
-   Rate limiting
-   Basic CSRF concepts
-   Authentication testing

Target flow:

``` text
Register
   ↓
Email verification
   ↓
Login
   ↓
httpOnly cookie
   ↓
Authenticated API
```

------------------------------------------------------------------------

## Month 4 --- Redis + Background Processing

Topics:

-   Redis GET/SET
-   TTL
-   Caching
-   Cache invalidation
-   Rate limiting
-   Distributed locks
-   RabbitMQ
-   Queues
-   Exchanges
-   Consumers
-   Acknowledgements
-   Retry handling
-   Dead-letter queues

Target flow:

``` text
User submits form
       ↓
Response Service
       ↓
RabbitMQ
       ↓
Workers
 ┌─────┼─────┐
 ↓     ↓     ↓
Email Report Analytics
```

------------------------------------------------------------------------

## Month 5 --- Microservices

Target services:

``` text
services/
├── auth-service
├── form-service
├── response-service
├── notification-service
└── report-service
```

Topics:

-   Service boundaries
-   API Gateway
-   REST communication
-   Messaging
-   Service failures
-   Retries
-   Timeouts
-   Idempotency
-   Correlation IDs
-   Centralized logging

The architecture should evolve gradually rather than starting as a
complex microservice system immediately.

------------------------------------------------------------------------

## Month 6 --- Testing

Topics:

-   Unit tests
-   Integration tests
-   End-to-end tests
-   Mocking
-   Test databases
-   API testing
-   Error-path testing
-   Authentication testing

Target E2E flow:

``` text
Register
 ↓
Login
 ↓
Create Form
 ↓
Publish
 ↓
Submit Response
 ↓
View Report
```

------------------------------------------------------------------------

## Month 7 --- Docker + CI/CD

Topics:

-   Dockerfiles
-   Docker Compose
-   Environment variables
-   Health checks
-   Container networking
-   GitHub Actions
-   Linting
-   Testing in CI
-   Build pipelines
-   Docker images
-   Deployment basics
-   Linux server basics

Target:

``` text
GitHub
   ↓
GitHub Actions
   ↓
Lint
   ↓
Test
   ↓
Build
   ↓
Docker image
```

------------------------------------------------------------------------

## Month 8 --- System Design

Practice systems such as:

-   URL shortener
-   Notification system
-   Chat system
-   File upload system
-   Food delivery system
-   Trading platform
-   Payment system

For each:

``` text
Requirements
 ↓
Architecture
 ↓
Database
 ↓
API
 ↓
Scaling
 ↓
Failure scenarios
 ↓
Trade-offs
```

Do not only draw diagrams. Explain the engineering decisions.

------------------------------------------------------------------------

## Month 9 --- Production Polish

Portfolio project should receive:

-   Production-quality README
-   Architecture diagram
-   API documentation
-   Screenshots
-   Setup instructions
-   Docker setup
-   Testing instructions
-   CI badge
-   Deployment
-   Changelog
-   Engineering decisions
-   Performance notes

Documentation structure:

``` text
docs/
├── architecture.md
├── authentication.md
├── caching.md
├── messaging.md
├── database-design.md
├── testing.md
└── decisions/
    ├── 001-mongodb.md
    ├── 002-rabbitmq.md
    └── 003-redis.md
```

------------------------------------------------------------------------

# 7. Long-Running Portfolio Project --- FormFlow

Working project name:

**FormFlow**

Concept:

A production-style survey/form SaaS inspired by systems such as Google
Forms, Typeform, and Qualtrics.

## User functionality

-   Register
-   Login
-   Email verification
-   Forgot/reset password
-   Create form
-   Edit form
-   Publish form
-   Share form
-   Respond to form
-   View responses
-   View analytics

## Admin functionality

-   Users
-   Forms
-   Responses
-   Reports
-   System statistics

## Target architecture

Initially start as a modular application.

Eventually evolve toward:

``` text
                         Next.js
                            ↓
                       API Gateway
                            ↓
        ┌───────────────────┼───────────────────┐
        ↓                   ↓                   ↓
   Auth Service       Form Service       Response Service
        │                   │                   │
        └───────────────────┼───────────────────┘
                            ↓
                    ┌───────┴───────┐
                    ↓               ↓
                  MongoDB         Redis

                            RabbitMQ
                                ↓
                  ┌─────────────┼─────────────┐
                  ↓             ↓             ↓
             Notification    Report       Background
                Worker       Worker         Worker
```

Do not implement this architecture all at once. Introduce complexity
only when the current architecture creates a reason to need it.

------------------------------------------------------------------------

# 8. Engineering Growth Repository

Repository:

`engineering-growth`

Purpose:

> Learning laboratory, experiments, DSA, technical notes, system design,
> and engineering history.

Suggested structure:

``` text
engineering-growth/
│
├── README.md
│
├── dsa/
│   ├── arrays/
│   ├── strings/
│   ├── hash-map/
│   ├── sliding-window/
│   ├── trees/
│   └── graphs/
│
├── nodejs/
├── typescript/
├── databases/
├── redis/
├── rabbitmq/
├── testing/
├── docker/
├── system-design/
│
└── notes/
```

Separate repository:

`formflow`

Purpose:

> Long-running production-style portfolio application.

------------------------------------------------------------------------

# 9. DSA Track

Do not chase problem counts. Prioritize understanding patterns.

## Month 1

-   Arrays
-   Strings
-   Hash maps
-   Sorting

## Month 2

-   Two pointers
-   Sliding window
-   Stack
-   Queue

## Month 3

-   Binary search
-   Linked lists
-   Recursion

## Month 4

-   Trees
-   BST
-   Heap

## Month 5

-   Graphs
-   BFS
-   DFS

## Month 6+

-   Dynamic programming
-   Greedy
-   Mixed problems

Target:

Approximately one meaningful problem per DSA session.

For each problem record:

``` md
# Problem

## Pattern

## Brute Force

## Optimized Approach

## Complexity

## Implementation

## Mistake I Made

## Key Lesson
```

------------------------------------------------------------------------

# 10. Code Learning Method

When learning a technical concept, provide/use an actual reference
implementation first.

Example learning sequence:

``` text
Reference implementation
        ↓
Run it
        ↓
Understand each important line
        ↓
Explain why it exists
        ↓
Remove/change one part
        ↓
Observe behavior
        ↓
Restore/fix it
        ↓
Modify the implementation
        ↓
Use it in FormFlow
```

For example, for Redis caching:

``` ts
const cached = await redis.get(key);

if (cached) {
  return JSON.parse(cached);
}

const data = await database.find(...);

await redis.set(key, JSON.stringify(data), {
  EX: 300,
});

return data;
```

Questions to investigate:

-   What does `redis.get()` do?
-   Why check `cached`?
-   Why `JSON.parse()`?
-   Why query the database only after a cache miss?
-   Why store the result in Redis?
-   Why use a TTL?
-   What happens without TTL?
-   What happens when the database changes?
-   What happens if Redis is unavailable?
-   How should cache invalidation work?

This same approach should be used for Node.js, MongoDB, RabbitMQ,
Docker, testing, system design, and other technologies.

------------------------------------------------------------------------

# 11. Git Workflow

Personal repository:

``` text
~/personal-projects/engineering-growth
```

Portfolio project:

``` text
~/personal-projects/formflow
```

Company repositories remain under the existing company workspace.

## Personal Git identity

Configure only inside personal repositories:

``` bash
git config user.name "Tanvir Ahmed Robbany"
git config user.email "PERSONAL_EMAIL"
```

Do not modify the company global Git identity unless there is a
deliberate reason.

## Commit style

Use meaningful commits:

``` text
learn: implement express error middleware
learn: add mongodb indexes
learn: implement sliding window solution
feat: add form creation API
test: add form service unit tests
docs: document redis caching strategy
refactor: separate form service from controller
```

Avoid:

``` text
update
fix
changes
final
final2
test
asdf
```

------------------------------------------------------------------------

# 12. Office Git / GitHub Separation

The office PC uses:

``` text
Company GitLab
vcs.technonext.com
```

Personal GitHub uses:

``` text
github.com
```

The two SSH identities are separate.

Conceptually:

``` text
Office work
    ↓
vcs.technonext.com
    ↓
Company SSH key
    ↓
Company GitLab


Personal work
    ↓
github.com
    ↓
Personal SSH key
    ↓
Personal GitHub
```

Never copy company source code, credentials, customer data, environment
variables, or proprietary information into personal repositories.

Check company policy regarding personal development on company devices.

------------------------------------------------------------------------

# 13. Daily Learning Log

Maintain a small log.

Example:

``` md
# 2026-09-28

## Goal

Understand Express request lifecycle and middleware.

## Reference

- ...

## Built

- ...

## What the code does

- ...

## Why it is needed

- ...

## What happened when removed/changed

- ...

## Problems

- ...

## Key lesson

- ...

## Git

- commit: ...
```

Keep this concise. The code itself is the primary learning artifact.

------------------------------------------------------------------------

# 14. Current Sprint

## Week 1 --- Node.js / Express Foundations

**Sprint starts:** 2026-09-28

Sunday's task is intentionally moved into Monday because Sunday was
missed.

### Monday --- Current session

**Goal:**

Understand the Node.js runtime, Express request lifecycle, and
middleware.

Build:

``` text
nodejs/
└── express-request-lifecycle/
```

Study through a working reference:

-   HTTP request
-   HTTP response
-   Express application
-   Middleware
-   `req`
-   `res`
-   `next()`
-   Middleware ordering
-   Route handlers
-   Error middleware

Experiment with:

1.  One middleware
2.  Multiple middleware functions
3.  `next()`
4.  A middleware that does not call `next()`
5.  Middleware ordering
6.  Route handler execution
7.  Error middleware

The goal is not to memorize Express APIs. The goal is to understand the
request pipeline by running and modifying working code.

### Tuesday

**Goal:** Error handling.

Build:

``` text
nodejs/
└── error-handling/
```

Implement and understand:

-   Custom error class
-   Centralized error middleware
-   Async errors
-   HTTP status codes
-   Structured error responses

### Wednesday

**Goal:** Validation.

Build a small user API.

Example:

``` text
POST /users
```

Input:

``` json
{
  "name": "Tanvir",
  "email": "tanvir@example.com",
  "password": "..."
}
```

Test:

-   Valid request
-   Missing field
-   Invalid email
-   Weak password
-   Unexpected field
-   Wrong data type

### Thursday

**Goal:** Integration + architecture review.

Build:

``` text
POST /users
GET /users/:id
```

Use:

``` text
Request
 ↓
Middleware
 ↓
Validation
 ↓
Controller
 ↓
Service
 ↓
Repository
```

Add basic tests.

Then review the week's concepts.

------------------------------------------------------------------------

# 15. Week 1 Success Criteria

By the end of the sprint, the repository should contain working examples
covering:

-   Express request lifecycle
-   Middleware
-   `next()`
-   Error handling
-   Validation
-   Basic service/controller separation
-   Basic tests
-   At least several DSA solutions
-   Learning notes
-   Meaningful commits

The user should be able to explain:

> What happens to an HTTP request from the moment it reaches Express
> until the response is returned?

------------------------------------------------------------------------

# 16. Session Start Protocol

At the start of every session, ask:

1.  What is today's goal?
2.  What did I finish last session?
3.  What code am I going to run?
4.  What should I observe?
5.  What should I modify?
6.  What should I break?
7.  Where will this concept eventually fit into FormFlow?

At the end:

1.  What did I build?
2.  What did I understand?
3.  What surprised me?
4.  What broke?
5.  Why did it break?
6.  What did I fix?
7.  What should be committed?
8.  What is the next session's goal?

------------------------------------------------------------------------

# 17. Context Recovery Instructions

This file is the persistent source of truth for the long-term learning
program.

If the current ChatGPT conversation becomes too long, unavailable, or is
replaced by a new conversation:

1.  Upload this Markdown file.
2.  Tell the assistant this is the ongoing engineering-growth program.
3.  Ask it to read the file before planning the next session.
4.  Also provide the current repository state if necessary.
5.  Continue from the latest completed sprint/task rather than
    restarting the roadmap.

The assistant should preserve:

-   The learning philosophy
-   The 2-hour daily routine
-   Sunday--Thursday schedule
-   Weekly sprint structure
-   9-month roadmap
-   Engineering-growth repository
-   FormFlow portfolio project
-   DSA track
-   Code-reference-first learning style
-   Git/GitHub setup
-   Current sprint and completed tasks

------------------------------------------------------------------------

# 18. Progress Tracking

Update this section at the end of each completed sprint.

## Completed Sprints

-   [ ] Week 1 --- Node.js / Express Foundations
-   [ ] Week 2 --- ...
-   [ ] Week 3 --- ...
-   [ ] Week 4 --- ...

## Current Phase

**Month 1 --- Node.js + TypeScript + Express Foundations**

## Current Sprint

**Week 1**

## Current Session

**2026-09-28 --- Express request lifecycle and middleware**

## Portfolio Status

FormFlow: Not started yet. Introduce after the initial learning workflow
is established.

------------------------------------------------------------------------

# 19. Core Principle

The purpose of this roadmap is not to collect technologies.

It is to develop the ability to:

``` text
Understand
   ↓
Implement
   ↓
Experiment
   ↓
Debug
   ↓
Test
   ↓
Design
   ↓
Explain
   ↓
Ship
```

The end goal is a stronger production engineer who can understand
unfamiliar code, use references effectively, reason about architecture,
implement features, debug failures, write tests, and explain engineering
decisions clearly.
