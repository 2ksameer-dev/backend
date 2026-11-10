
# MERN Backend Project

A backend application built using Node.js, Express.js, and MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- dotenv
- CORS

## Features

- User Registration
- User Login
- Password Hashing
- JWT Authentication
- Get All Users
- Get User By ID
- Create User
- Update User
- Delete User
- Protected Routes

## Project Structure

```text
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── .gitignore
├── README.md
├── main.js
└── package.json
```

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run the Project

Start development server:

```bash
npm run dev
```

Server runs at:

```text
http://localhost:5000
```

## API Routes

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

### Users

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user by ID |
| POST | /api/users | Create user |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

## Testing

API endpoints can be tested using Postman.

## Author

Mohamed Sameer

## License

This project is for educational purposes.
