# PartsShop Backend

**PartsShop Backend** is the server-side application for the PartsShop e-commerce platform, providing a RESTful API to manage users, products, categories, orders, reviews, and authentication with role-based access control.

---

## 🌟 Features

- **Authentication & Authorization:**

  - JWT-based authentication
  - Role-based access control (Admin, User)

- **Product Management:**

  - CRUD operations for products
  - Image gallery support

- **Category Management:**

  - Category and subcategory support

- **Order Management:**

  - Create, update, delete orders
  - Manage order status

- **Review Management:**

  - Submit and manage product reviews
  - Admin review approval system

- **User Management:**

  - Signup, login
  - View and manage user profiles

- **Dashboard Analytics:**
  - Product, order, user statistics
  - Category-based product charts
  - Order status-based charts

---

## 📄 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt.js (Password hashing)
- dotenv (Environment variable management)

---

## 🔄 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/partsshop-backend.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create environment variables:**

Replace `.env.example` fine into '.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=your_db_url
BCRYPT_SALT_ROUNDS=8
JWT_ACCESS_SECRET=secret
JWT_ACCESS_EXPIRES_IN=7d
JWT_REFRESH_SECRET=refreshsecret
JWT_REFRESH_EXPIRES_IN=1y
GOOGLE_OAUTH_CLIENT_ID=your_client_id
GOOGLE_OAUTH_CLIENT_SECRET=your_client_secret
```

4. **Run the project:**

```bash
npm run start:dev
```
