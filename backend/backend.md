
# Backend – Expense Tracker API

Built with:

- Node.js
- Express
- TypeScript (ESM)
- Prisma v7
- SQLite
- Zod validation

##  API Endpoints

### 🔹 Create Expense

```
POST /api/expenses
```

Headers:
```
Content-Type: application/json
Idempotency-Key: <uuid>
```

Body:
```json
// example
{
  "amount": 250,
  "category": "Food",
  "description": "Lunch",
  "date": "2026-02-18T00:00:00.000Z"
}
````

### 🔹 Get Expenses

```
GET /api/expenses
```

Query Parameters:

| Param          | Description          |
| -------------- | -------------------- |
| category       | Filter by category   |
| sort=date_desc | Sort by newest first |

Response:

```json
{
  "expenses": [...],
  "total": 695
}
```


## Database

Using SQLite:
```
prisma/dev.db
```

Migrations stored in:
```
prisma/migrations/
```

## Idempotency

To prevent duplicate expense creation:

```
Idempotency-Key header
```

If same key is reused, existing record is returned.


## Running Backend

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

---

##  Folder Structure

```
src/
 ├── config/
 ├── controllers/
 ├── services/
 ├── routes/
 ├── middleware/
 ├── validators/
 └── server.ts
```

## Notes

* Decimal used for monetary values
* Validation via Zod
* Error handling middleware included

