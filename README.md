# Calculator App

Simple full-stack calculator application created for educational purposes.

Project uses:

- Java + Spring Boot (backend REST API)
- React + Vite + TypeScript (frontend)
- JSON communication over HTTP
- Global exception handling
- CORS configuration

---

## Project structure

```text
calculator-app/
├ backend/
└ frontend/
```

Backend runs on port **8080**

Frontend runs on port **5173**

---

## Backend

Technology:

- Java 21+
- Spring Boot
- Maven
- REST API

Run backend:

```bash
cd backend
./mvnw spring-boot:run
```

Or on Windows:

```cmd
mvnw.cmd spring-boot:run
```

API endpoint:

```
POST /api/calc
```

Example request:

```JSON
{
  "a": 2,
  "b": 3,
  "op": "+"
}
```

Example response:

```JSON
{
  "result": 5
}
```

Example error:

```JSON
{
  "error": "Cannot divide by zero"
}
```

## Frontend

Technology:
- Node.js
- Vite
- React
- TypeScript

Run frontend:

```Bash
cd frontend
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

Frontend communicates with backend at:

```
http://localhost:8080/api/calc
```

## Features
- Basic math operations
- REST API
- DTO mapping
- Global exception handler
- CORS configuration
- Error handling in UI

## Purpose
- This project was created to practice full-stack development with:
- Spring Boot REST API
- React frontend
- HTTP / JSON communication
- Exception handling
- Project structure for real applications

## Author

Dominik Smolarek