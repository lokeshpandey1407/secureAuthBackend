# Secure Auth Backend

A secure authentication backend built with Node.js, Express, MongoDB, and Mongoose. This project provides user registration, login, and token-based authentication.

## Features

- **User Registration**: Create a new user with email and password.
- **User Login**: Authenticate users with email and password.
- **Token-Based Authentication**: Generate and validate JWT tokens for secure endpoints.
- **Password Hashing**: Securely hash passwords before storing them.

## Installation

1. **Clone the repository**:
   git clone https://github.com/lokeshpandey1407/secureAuthBackend.git
   cd secureAuthBackend

2. **Install dependencies**:
   npm install

3. **Set up environment variables**: Create a `.env` file in the root directory with the following content:
   PORT=3001
   MONGO_URI=mongodb://localhost:27017/secure-auth
   JWT_SECRET=your_jwt_secret

4. **Start the server**:
   npm start
