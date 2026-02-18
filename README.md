# Expense Tracker – Full Stack Application

A minimal full-stack Expense Tracker built with:

- Backend: Node.js + Express + Prisma (SQLite)
- Frontend: React + Vite + TypeScript
- ORM: Prisma v7 with SQLite adapter
- Data handling: Decimal-safe money handling
- API safety: Idempotency support
- UI: React + Tailwind CSS

---

## Features

1. User can create a new expense entry with amount, category, description, and date.
2. User can view a list of expenses.
3. User can filter expenses by category.
4. User can sort expenses by date (newest first).
5. User can see a simple total of expenses for the current list (e.g., “Total: ₹X”).
6. Idempotent POST (safe against retries)  
7. Validation with Zod  
8. Loading & error states  

---

##  How To Run Locally

### 1️. Clone the repository

```bash
git clone <repo-url>
cd expense-tracker
```

### 2. Backend Setup
Detailed doc: **[`backend/backend.md`](backend/backend.md)**
```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

Backend runs at: http://localhost:4000

### 3. Frontend Setup
Detailed doc: **[`frontend/frontend.md`](frontend/frontend.md)**

Open new terminal:
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

## Design Features
### 1.  SQLite

- File-based
- No external DB setup
- Suitable for small finance tool
- Easy reproducibility

### 2. Prisma ORM

- Type-safe queries
- Decimal support for money
- Migration system
- Clean schema definition

### 3. Idempotency Support

POST endpoint supports:
```
 Idempotency-Key header
```
Prevents duplicate expense creation during:
- Network retries
- Page refresh
- Double submit

### 4. Decimal for Money

Amounts stored using:
```
Decimal type
```
Avoids floating-point precision errors.

### 5. React Query
- Handles caching
- Handles loading states
- Automatic refetching
- Retry support

## Trade-offs

1. No authentication implemented (out of scope)
2. No pagination (small dataset assumption)
3. No category normalization table 
4. Minimal UI design 

## Deployment Ready

The application deployed using:

Backend: Render [https://expense-tracker-pc2w.onrender.com/api/expenses](https://expense-tracker-pc2w.onrender.com/api/expenses)

Frontend: Vercel  [https://expense-tracker-nndzqakrq-saiharshitags-projects.vercel.app](https://expense-tracker-nndzqakrq-saiharshitags-projects.vercel.app)

Environment variables required:```
DATABASE_URL=file:./prisma/dev.db```
