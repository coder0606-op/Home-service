HOMEHELP – ON-DEMAND HOME SERVICES PLATFORM
==========================================

A full-stack MERN application that models the core booking lifecycle of an
on-demand home services marketplace, where customers book services and
service providers fulfill them.

--------------------------------------------------
PROBLEM STATEMENT
--------------------------------------------------

Build a system that supports:
- Customer service booking
- Automatic provider assignment
- Provider workflow (accept / complete)
- Booking lifecycle management
- Failure handling (cancellation, no provider)
- Role-based access (Customer, Provider, Admin)
- Observability via booking history

--------------------------------------------------
HIGH-LEVEL ARCHITECTURE
--------------------------------------------------

Frontend (React + Tailwind)
        |
        | REST APIs (JWT Authentication)
        v
Backend (Node.js + Express)
        |
        v
MongoDB (Users, Bookings, Booking Events)

--------------------------------------------------
DESIGN DECISIONS
--------------------------------------------------

1) ROLE-BASED ARCHITECTURE
-------------------------
Users are divided into three roles:
- CUSTOMER  → Creates bookings
- PROVIDER  → Accepts and completes bookings
- ADMIN     → Operational oversight (extendable)

This mirrors real-world service marketplaces and simplifies authorization.

--------------------------------------------------

2) AUTOMATIC PROVIDER ASSIGNMENT
--------------------------------
When a booking is created:
- System finds all available providers
- A random provider is selected and assigned

Why random assignment?
- Simple to implement
- Fair distribution
- Easy to reason about
- No manual admin dependency

Admin override can be added later without changing core flow.

--------------------------------------------------

3) BOOKING LIFECYCLE (STATE MACHINE)
------------------------------------

PENDING → ASSIGNED → IN_PROGRESS → COMPLETED
            ↓
        CANCELLED

Strict state transitions prevent invalid updates and ensure
clear business rules.

--------------------------------------------------

4) PROVIDER AVAILABILITY MANAGEMENT
----------------------------------
- Providers have an isAvailable flag
- Marked unavailable when a booking is accepted
- Marked available again on completion or cancellation

This prevents double booking of providers.

--------------------------------------------------

5) EVENT-BASED OBSERVABILITY
---------------------------
Every important action creates a Booking Event:
- CREATED
- AUTO_ASSIGNED
- ACCEPTED
- COMPLETED
- CANCELLED

This enables:
- Booking history timeline
- Debugging
- Admin audit trails

--------------------------------------------------

6) FRONTEND ROUTE PROTECTION
---------------------------
- Routes protected using role-based guards
- Unauthorized users are redirected
- Prevents UI-level access leaks

--------------------------------------------------
TRADE-OFFS
--------------------------------------------------

- Random provider assignment instead of skill/location matching
- No real-time notifications (email/SMS)
- No background workers or queues
- Authentication stored in localStorage for simplicity

These trade-offs were chosen to prioritize correctness,
clarity, and interview-readiness over complexity.

--------------------------------------------------
ASSUMPTIONS
--------------------------------------------------

- Providers are interchangeable
- One active booking per provider at a time
- Users authenticate via email and password
- MongoDB is always available
- JWT expiration handled simply

--------------------------------------------------
TECH STACK
--------------------------------------------------

Backend:
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication

Frontend:
- React (Vite)
- Tailwind CSS
- React Router
- Axios

--------------------------------------------------
HOW TO RUN THE PROJECT (HUMAN WAY)
--------------------------------------------------

PREREQUISITES:
- Node.js (v18 or later)
- MongoDB (local or MongoDB Atlas)
- Git

--------------------------------------------------

STEP 1: CLONE THE REPOSITORY
----------------------------
git clone <repository-url>
cd HOMEHELP

--------------------------------------------------

STEP 2: BACKEND SETUP
---------------------
cd server
npm install

Create a .env file inside the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend:
npm run dev

Expected output:
MongoDB connected
backend is running

Backend URL:
http://localhost:5000

--------------------------------------------------

STEP 3: FRONTEND SETUP
----------------------
cd ../frontend
npm install
npm run dev

Frontend URL:
http://localhost:5173

--------------------------------------------------

STEP 4: CREATE USERS
--------------------
Register users with different roles:
- CUSTOMER
- PROVIDER
- ADMIN

This can be done using the UI or Postman.

--------------------------------------------------

STEP 5: END-TO-END FLOW
----------------------
1. Login as CUSTOMER
2. Go to Services page
3. Book a service
4. System auto-assigns a random provider
5. Login as PROVIDER
6. Accept and complete the booking
7. View booking history

--------------------------------------------------
PROJECT STATUS
--------------------------------------------------

- Backend complete
- Frontend complete
- Auto provider assignment implemented
- Role-based access enforced
- Booking lifecycle fully functional
- Observability via booking history

--------------------------------------------------
END
--------------------------------------------------
