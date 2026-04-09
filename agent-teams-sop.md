# 🧠 Claude Code Agent Teams SOP (Standard Operating Procedure)

## 📌 Purpose
This document serves as a **reference guide for building, managing, and optimizing AI agent teams** in Claude Code.  
It is designed to ensure:
- High-quality outputs
- Minimal conflicts between agents
- Efficient use of tokens and execution time
- Repeatable and scalable workflows

---

# 🚀 1. What Are Agent Teams?

Agent Teams are **multiple AI agents working collaboratively under a main orchestrator**.

### Key Characteristics:
- Shared task list
- Ability to communicate directly
- Parallel execution
- Iterative feedback loops (especially with QA)

### Difference from Sub-Agents:
| Feature        | Agent Teams                  | Sub-Agents              |
|----------------|----------------------------|--------------------------|
| Communication  | ✅ Direct between agents     | ❌ Only via main agent   |
| Execution      | ✅ Parallel                  | ❌ Sequential            |
| Use Case       | Complex workflows           | Simple tasks             |

---

# 🧩 2. Core Architecture

## 👑 Main Agent (Orchestrator)
- Creates team
- Assigns tasks
- Manages dependencies
- Approves plans
- Finalizes outputs

## 👥 Teammates (Agents)
Typical roles:
- Frontend Developer
- Backend Developer
- QA Engineer

Each agent:
- Has a defined role
- Owns specific files
- Communicates with teammates
- Produces structured outputs

---

# ⚙️ 3. Setup Instructions

## Step 1: Enable Agent Teams
Add to project settings:

```json
{
  "agentTeams.enabled": true
}
```

Location:
.acloud/settings.local.json

---

## Step 2: Create Internal Documentation (Recommended)

Prompt:
Create a master reference guide for agent teams in /docs.
This will be used to improve future agent performance.

---

# 🧠 4. Prompting Pattern (Golden Template)

Goal:
[Clearly define outcome]

Create a team of X agents using [model].

Agent 1: [Role]
- Responsibilities
- Outputs
- Communication rules

Agent 2: [Role]

Agent 3: [Role]

Execution Rules:
- Define dependencies
- Define communication flow

Final Deliverables:
- Output 1
- Output 2
- Output 3

---

# 🔥 5. The 3 Core Rules (CRITICAL)

## 1. Own Territory
One file, one owner. No overlap.

## 2. Direct Messaging
Agents communicate via structured outputs.

## 3. Parallel Execution (With Dependencies)
Work in parallel but respect dependencies.

---

# 🧱 6. File Ownership Model

| Agent      | Directory     |
|------------|--------------|
| Backend    | /src/api      |
| Frontend   | /src/ui       |
| QA         | /tests        |
| Docs       | /docs         |

---

# 🔄 7. Communication Flow

1. Backend → outputs API contract
2. Frontend → consumes API contract
3. Frontend → sends build to QA
4. QA → tests and reports issues
5. Loop until pass

---

# 🔁 8. Feedback Loop System (QA Driven)

Repeat until all tests pass.

---

# ⚠️ 10. Common Pitfalls & Fixes

- Overwrites → Assign ownership
- Bad outputs → Define clearly
- Idle agents → Assign tasks
- Too expensive → Use fewer agents
- Permission spam → Preapprove tools

---

# 🧠 11. When to Use Agent Teams

## Use When:
- Complex systems
- Multiple domains
- Parallel work

## Avoid When:
- Simple tasks
- Linear workflows

---

# 📦 14. Standard Deliverables

/app → running project  
/tests/report.md → QA results  
/docs/build-summary.md → summary  

---

# 🚀 16. Reusable Execution Add-On

Core Execution Rules:

1. Ownership:
- Each role owns files
- No cross-editing

2. Communication:
- Explicit outputs only

3. Execution:
- Respect dependencies

Failure Conditions:
- Overwrites
- Guessing
- Skipping steps
