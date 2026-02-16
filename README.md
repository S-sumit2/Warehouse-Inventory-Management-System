# Warehouse & Inventory Management System v1.0

A role-based Warehouse and Inventory Management System built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**, following the **MVC (Model–View–Controller)** architecture and **RESTful API principles**.

This project is designed to demonstrate clean backend structure, proper access control, and real-world CRUD workflows commonly used in production systems.

---

## 🚀 Features

- Role-Based Access Control (RBAC)
  - **User**: View products only
  - **Staff**: Add new products
  - **Admin**: Add, update, and delete products
- Secure authentication using **session-based login**
- RESTful CRUD operations (Create, Read, Update, Delete)
- MVC folder structure for better scalability and maintainability
- Server-side rendering using **EJS**
- Clean UI with **Bootstrap**
- Form validation and user-friendly error handling
- Admin-protected routes using middleware
- Method override for PATCH and DELETE operations

---

## 🧠 Tech Stack

**Backend**

- Node.js
- Express.js
- MongoDB

**Frontend**

- EJS (Embedded JavaScript Templates)
- Bootstrap 5

**Architecture & Concepts**

- MVC Architecture
- RESTful APIs
- Session-based Authentication
- Middleware-based Authorization
- Role-Based Access Control (RBAC)

---

## 📂 Project Structure

# Warehouse & Inventory Management System

A role-based Warehouse and Inventory Management System built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**, following the **MVC (Model–View–Controller)** architecture and **RESTful API principles**.

This project is designed to demonstrate clean backend structure, proper access control, and real-world CRUD workflows commonly used in production systems.

---

## 🚀 Features

- Role-Based Access Control (RBAC)
  - **User**: View products only
  - **Staff**: Add new products
  - **Admin**: Add, update, and delete products
- Secure authentication using **session-based login**
- RESTful CRUD operations (Create, Read, Update, Delete)
- MVC folder structure for better scalability and maintainability
- Server-side rendering using **EJS**
- Clean UI with **Bootstrap**
- Form validation and user-friendly error handling
- Admin-protected routes using middleware
- Method override for PATCH and DELETE operations

---

## 📂 Project Structure

/core
├── controllers
├── models
├── routes
├── views
├── app.js
└── db.js

- **Models**: Database schemas (Users, Items)
- **Controllers**: Business logic and request handling
- **Routes**: API endpoints and route mapping
- **Views**: EJS templates for UI
- **Middleware**: Authentication and role Authorization

---

## 🔐 Authentication & Authorization

- Sessions are used to manage logged-in users
- Middleware ensures:
  - Only authenticated users can access protected routes
  - Only admins can perform update and delete operations
- Role checks are enforced both at route and UI level

---

## 📦 CRUD Operations

| Operation      | Role Allowed       |
| -------------- | ------------------ |
| View Products  | User, Staff, Admin |
| Add Product    | Staff, Admin       |
| Update Product | Admin              |
| Delete Product | Admin              |

All operations follow RESTful conventions using proper HTTP methods.

---

## 👨‍💻 Author - **[Sumit Sharma](www.linkedin.com/in/sumit-sharma-7a435324b)**

The next update will focus on some minor UI changes!

feel free to ask about my project, open to discuss and any error or doubts plz contact me <3
