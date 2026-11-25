# IRONFORGE FITNESS CLUB 💪

A modern, responsive gym website and fitness management platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

IRONFORGE FITNESS CLUB aims to provide an engaging online experience for gym members while offering a foundation for managing memberships, trainers, fitness programs, and gym operations.

## 🚀 Features

### Public Website
- Modern and responsive homepage
- About the gym
- Fitness programs and services
- Trainer profiles
- Membership plans
- Contact page

### Backend & Management
- RESTful API using Node.js and Express.js
- MongoDB database integration
- User authentication with JWT
- Password hashing with bcrypt
- Role-based access structure for Admin, Trainer, and Member

*Note: Features are being developed progressively. Some management and authentication functionality may not yet be connected to the frontend.*

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- React Router
- Tailwind CSS / CSS
- Lucide React

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

## 🎨 Design Theme

| Color | Hex Code |
|---|---|
| Midnight Black | `#080D18` |
| Ice White | `#F1F5F9` |
| Electric Blue | `#2563EB` |
| Cyan | `#38BDF8` |
| Dark Navy | `#14243A` |
| Steel Blue | `#334155` |

## 📁 Project Structure

```text
IRONFORGE-FITNESS/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/M-Abubakar24/IRONFORGE-FITNESS.git
cd IRONFORGE-FITNESS
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm run dev
```

Backend runs at:

`http://localhost:5000`

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local Vite URL shown in your terminal, usually:

`http://localhost:5173`

## 🔐 Security

- Passwords are hashed using bcryptjs.
- JWT is used for authentication.
- Environment variables are used for sensitive configuration.
- `.env` files and `node_modules` should not be committed to GitHub.

## 🗺️ Future Improvements

- Complete registration and login integration
- Member dashboard
- Admin dashboard
- Membership subscription management
- Trainer management
- Class booking system
- Workout and diet plans
- Attendance tracking
- Payment integration

## 👨‍💻 Developer

**Muhammad Abubakar**

- GitHub: [M-Abubakar24](https://github.com/M-Abubakar24)
- Project Repository: [IRONFORGE-FITNESS](https://github.com/M-Abubakar24/IRONFORGE-FITNESS)

---

⭐ If you find this project interesting, consider giving the repository a star!

**IRONFORGE FITNESS CLUB — Build Strength. Build Discipline. Build Yourself.**
