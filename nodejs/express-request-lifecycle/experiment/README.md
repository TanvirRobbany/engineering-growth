# Express Request Lifecycle

## Goal
Understand how Express processes HTTP requests.

## What I Built
A simple Express application with multiple middleware.

## What I Learned
- app.use()
- req
- res
- next()
- Middleware execution order

## Experiments

### Experiment 1: Removing next()
Result: stops the process in the first middleware

Explanation: because it has no other next instruction to execute.

### Experiment 2: Changing middleware order
Result: it works with the inverted order

Explanation: i swapped 2 with 1. for that it executed the middleware 2 first then middleware 1.

### Experiment 3: Modifying req
Result: in route handler i can access the appended value from middleware in the req

Explanation: i can modify the req in the middleware and access the added values in the req in route handler.

### Experiment 4: Blocking a request
Result: it blocks the request as it do not have a next instruction

Explanation: when i send the response from the middleware, the route handler is getting the response from the middleware and as it do not have a next() command.