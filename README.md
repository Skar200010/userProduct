# userProduct

fronted part (maraketplace)

This is the frontend of a marketplace application where users can browse products by category, add items to cart with quantity, and place orders.

in projectimgs folder i have send fronted ui images with steps

## 🧰 Tech Stack

- React (Vite)
- TypeScript
- Material UI (MUI)
- React Router DOM
- React Query
- Axios
- Context API (Cart Management)

## 📁 Project Structure

src/
├── api/            # API calls (axios)
├── components/     # Reusable components (Header, CartButton)
├── context/        # CartContext
├── hooks/          # React Query hooks
├── pages/          # Page components
├── routes/         # App routes
├── types/          # TypeScript types
└── main.tsx        # App bootstrap



## 🚀 Features

- Landing page with category chips
- Category-based product listing
- Product cards with images
- Add to Cart with quantity
- Cart validation (min 1, max stock)
- Cart badge with total quantity
- Create Order from cart
- Order details page

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies

```bash
cd frontend
npm install

start devlopement serever used 

npm run dev

after that app will run on

http://localhost:5173


API Integration

All API calls are handled using Axios and React Query.

recommended flow

Recommended Flow

1. Open landing page 

2. Select category

3. Add products to cart

4. View cart

5. Create order

6. View order details


Backend part 

This is the backend service for a marketplace application that handles products, orders, and stock management.

---

## 🧰 Tech Stack

- Node.js
- Express.js
- TypeScript
- Sequelize ORM
- PostgreSQL (Supabase)
- sequelize-typescript
- dotenv

---

## 📁 Project Structure

src/
├── controllers/    # Request handlers
├── services/       # Business logic
├── models/         # Sequelize models
├── routes/         # Express routes
├── db/             # Database config
├── app.ts          # App entry
└── server.ts       # Server bootstrap

---

## 🗄️ Database Models

### Product
- id
- name
- price
- stock
- category
- imageUrl

### Order
- id
- customerName

### OrderItem
- orderId
- productId
- quantity
- priceAtTime

---

## 🚀 Features

- Product CRUD
- Category-based product filtering
- Stock validation
- Order creation with multiple products
- Automatic stock reduction
- Order details with product info

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies

```bash
cd backend
npm install

The .env file is already configured.
It contains a Supabase PostgreSQL connection URI, which allows the backend to connect to a cloud-hosted SQL database instead of a local database.


for server start 
npm run dev 

http://localhost:8080 base url



Products

GET /products
GET /products?category=electronics
POST /products/seed

Orders

POST /orders
GET /orders/:id


Seeding Data

Seed sample products:

POST /products/seed



## Business Rules i have take 

Stock cannot go below zero

Orders validate available stock

priceAtTime is stored to preserve history

🧠 Design Decisions i have take for 

Category belongs to Product

Cart is frontend-only

Stock validation done on backend

Services layer used for clean architecture