# 🔗 URL Shortener

A full-stack URL shortening application that converts long, difficult-to-share URLs into short, easy-to-use links.

Built as a full-stack project to practice **React, REST APIs, Node.js, Express.js, MongoDB, and frontend-backend integration**.

---

## ✨ Features

- 🔗 **Shorten long URLs** into compact links
- ⚡ **Fast URL generation**
- 🔄 **Automatic redirection** from short URLs to original URLs
- 💾 **MongoDB persistence** for storing URLs
- 🌐 **React-based frontend**
- 🖥️ **REST API backend**
- 🔌 **Frontend ↔ Backend integration**
- 🛡️ **URL validation**
- 📱 Clean and responsive user interface
- ❌ Proper error handling for invalid requests

---

## 🖼️ Preview

> Add a screenshot or GIF of your application here.

```text
┌──────────────────────────────────────────────┐
│              🔗 URL SHORTENER                │
│                                              │
│  Paste your long URL                        │
│  ┌────────────────────────────────────────┐  │
│  │ https://example.com/very/long/url     │  │
│  └────────────────────────────────────────┘  │
│                                              │
│              [ Shorten URL ]                 │
│                                              │
│  Your short URL:                             │
│  http://localhost:3000/abc123                │
└──────────────────────────────────────────────┘
```

---

## 🧠 How It Works

The application follows a simple client-server architecture.

```text
              ┌─────────────────┐
              │   React Client  │
              │    Frontend     │
              └────────┬────────┘
                       │
                       │ HTTP Request
                       ▼
              ┌─────────────────┐
              │ Node.js /       │
              │ Express Server  │
              └────────┬────────┘
                       │
                       │ Database Query
                       ▼
              ┌─────────────────┐
              │    MongoDB      │
              │    Database     │
              └─────────────────┘
```

### URL Shortening Flow

1. User enters a long URL.
2. React sends the URL to the backend.
3. Express receives the request.
4. The server generates a unique short identifier.
5. The URL mapping is stored in MongoDB.
6. The server returns the shortened URL.
7. User can open the short URL.
8. The backend finds the original URL and redirects the user.

---

## 🛠️ Tech Stack

### Frontend

- ⚛️ React
- ⚡ Vite
- 🎨 CSS
- 🌐 Fetch API

### Backend

- 🟢 Node.js
- 🚂 Express.js
- 🔗 REST API

### Database

- 🍃 MongoDB
- 🔌 Mongoose

### Development Tools

- Git
- GitHub
- VS Code
- Postman

---

## 📁 Project Structure

```text
url-shortener/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

> Your exact folder structure may differ depending on how you organized the project.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Move into the project directory:

```bash
cd YOUR_REPOSITORY
```

---

## ⚙️ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

Or, depending on your package configuration:

```bash
npm start
```

The backend should now be running on:

```text
http://localhost:3000
```

---

## 🎨 Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL similar to:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 🔌 API Overview

### Shorten URL

```http
POST /shorten
```

Creates a shortened URL from a long URL.

### Request

```json
{
  "url": "https://example.com/this-is-a-long-url"
}
```

### Response

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

---

### Redirect

```http
GET /:shortCode
```

Redirects the user to the original URL associated with the short code.

Example:

```text
http://localhost:3000/abc123
```

➡️ redirects to:

```text
https://example.com/this-is-a-long-url
```

> Update the endpoint examples above if your final backend routes use different paths.

---

## 🗄️ Database Design

Each shortened URL can be represented using a document similar to:

```json
{
  "_id": "...",
  "originalUrl": "https://example.com/long-url",
  "shortCode": "abc123",
  "createdAt": "2026-10-03T00:00:00.000Z"
}
```

Conceptually:

```text
┌─────────────────────────────────────┐
│            URL Document             │
├─────────────────────────────────────┤
│ originalUrl                         │
│ shortCode                           │
│ createdAt                            │
└─────────────────────────────────────┘
```

---

## 🔄 Request Flow

### Creating a Short URL

```text
User
 │
 │ Long URL
 ▼
React Frontend
 │
 │ POST /shorten
 ▼
Express API
 │
 │ Generate short code
 ▼
MongoDB
 │
 │ Save URL mapping
 ▼
Express API
 │
 │ Return short URL
 ▼
React Frontend
 │
 ▼
User
```

### Opening a Short URL

```text
User
 │
 │ /abc123
 ▼
Express Server
 │
 │ Find abc123
 ▼
MongoDB
 │
 │ Original URL
 ▼
Express Server
 │
 │ HTTP Redirect
 ▼
Original Website
```

---

## 🧪 Testing

The backend APIs can be tested using tools such as:

- Postman
- Thunder Client
- Browser
- Frontend application

Example test:

```text
Input:
https://www.google.com/

Output:
http://localhost:3000/abc123
```

Opening the generated URL should redirect to the original website.

---

## 🔐 Environment Variables

Never commit sensitive credentials to GitHub.

Create a `.env` file locally:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
```

Make sure `.env` is included in `.gitignore`:

```gitignore
node_modules/
.env
```

---

## 📚 What I Learned

This project helped me understand and practice:

- React component development
- React state management
- API requests using `fetch()`
- Frontend and backend communication
- REST API development
- Express routing
- Node.js server development
- MongoDB database operations
- Mongoose models
- Environment variables
- CORS
- HTTP request/response cycle
- URL redirection
- Error handling
- Full-stack project structure
- Debugging frontend/backend integration

---

## 🧩 Challenges Faced

During development, some of the main challenges included:

### CORS

Connecting the React development server with the Express backend required proper CORS configuration because they were running on different origins.

```text
Frontend
localhost:5173

Backend
localhost:3000
```

The backend had to explicitly allow requests from the frontend.

### Frontend ↔ Backend Integration

Understanding how data moves between:

```text
React → Fetch → Express → MongoDB
```

was an important part of building the application.

### Database Connection

The backend also needed a reliable MongoDB connection and proper handling of database errors.

---

## 🔮 Future Improvements

Possible features for future versions:

- 👤 User authentication
- 📊 URL analytics
- 👀 Click tracking
- 📈 Dashboard
- 🕒 Link expiration
- 🔒 Password-protected URLs
- ✏️ Custom short URLs
- 📱 Better mobile UI
- 📋 One-click copy button
- 🗑️ Delete shortened URLs
- 🌍 Custom domain support
- 🚀 Production deployment
- ⚡ Redis caching
- 🛡️ Rate limiting
- 🔍 QR code generation

---

## 🗺️ Roadmap

```text
[x] Project setup
[x] Backend server
[x] MongoDB connection
[x] URL model
[x] URL shortening API
[x] URL redirection
[x] API testing
[x] React frontend
[x] Frontend-backend integration
[x] CORS configuration
[x] Basic UI

[ ] Authentication
[ ] Analytics
[ ] Custom aliases
[ ] URL expiration
[ ] Rate limiting
[ ] Deployment
[ ] Production optimization
```

---

## 🌐 Deployment

The project can be deployed using services such as:

**Frontend**

- Vercel
- Netlify

**Backend**

- Render
- Railway
- Fly.io

**Database**

- MongoDB Atlas

A production deployment would look like:

```text
                 Internet
                    │
          ┌─────────┴─────────┐
          │                   │
          ▼                   ▼
     React App           Express API
      (Vercel)           (Backend)
                              │
                              ▼
                         MongoDB Atlas
```

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

### Steps

```bash
# Fork the repository

# Clone your fork
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# Create a branch
git checkout -b feature/new-feature

# Make your changes

# Commit
git commit -m "Add new feature"

# Push
git push origin feature/new-feature
```

Then open a Pull Request.

---

## 📄 License

This project is available for educational and personal use.

---

## 👨‍💻 Author

**Angeshwar❤️**

Built while learning and practicing **full-stack web development**.

---

### ⭐ If you found this project useful

Give the repository a ⭐ on GitHub!

**Built with ❤️, JavaScript, React, Node.js, Express & MongoDB.**
