
# Frontend – Expense Tracker

Built with:

- React 19
- Vite
- TypeScript
- TanStack React Query
- Axios
- Tailwind CSS

## Features

1. Add new expense  
2. View expense list  
3. Filter by category  
4. Sort by newest date  
5. Display total  
6. Loading & error states  


## API Integration

Base URL:

```
VITE_API_URL=[http://localhost:4000/api](http://localhost:4000/api)
```

Configured inside: ```frontend/.env```

## Running Frontend

```bash
npm install
npm run dev
````

Runs at: http://localhost:5173

##  Architecture

```
src/
 ├── api/
 ├── components/
 ├── hooks/
 ├── types/
 └── App.tsx
```

## State Management

Using:

* React Query for fetching
* useMutation for POST
* Cache invalidation after create

## Network Reliability

* React Query retry enabled
* Loading indicators
* Error handling

## Notes

* Form converts date to ISO string before sending
* Total displayed from backend response
