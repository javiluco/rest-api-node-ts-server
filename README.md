# Product API REST 

![Node.js](https://img.shields.io/badge/Node.js-green)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Express](https://img.shields.io/badge/Express-lightgrey)
![Sequelize](https://img.shields.io/badge/Sequelize-yellow)

## 📌 Description
This is a **RESTful API** for managing products, built with **Node.js**, **TypeScript**, **Express**, and **Sequelize**. It provides CRUD (Create, Read, Update, Delete) operations for product management.

## 🚀 Features
- **Create** new products.
- **Retrieve** all products or a single product by ID.
- **Update** existing products.
- **Delete** products.
- Uses **Sequelize ORM** for database interactions.
- Well-structured and scalable **TypeScript** code.

## 🛠 Technologies Used
- **Node.js** 
- **TypeScript** 
- **Express.js** 
- **Sequelize** 
- **MySQL/PostgreSQL** 
- **Dotenv** for environment variable management


## ⚙️ Installation & Setup
### 1️⃣ Clone the repository
```bash
git clone https://github.com/javiluco/rest-api-node-ts-server.git

```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Set up environment variables
Create a `.env` file based on `.env.template` and configure your database credentials:
```env
DATABASE_URL=
FRONTED_URL=
```

### 4️⃣  Start the server
```bash
npm run dev
```

## 📡 API Endpoints
### Base URL: `http://localhost:4000/api/products`
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/` | Retrieve all products |
| GET | `/:id` | Get a product by ID |
| POST | `/` | Create a new product |
| PUT | `/:id` | Update an existing product |
| PACTH | `/:id` | Update availability of the product |
| DELETE | `/:id` | Delete a product |


## 🏗 Future Improvements
- Add **JWT authentication** for secure access.
- Implement **Swagger API documentation**.
- Improve error handling and validation.


