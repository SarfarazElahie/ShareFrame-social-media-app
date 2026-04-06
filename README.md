 ShareFrame 

A full-stack social media web application built with the MERN stack, where users can share photos with captions — inspired by Instagram's core feed experience.

> **Live Demo:** (https://share-frame-social-media-app-by-sarfarazelahie-fronte.vercel.app/) &nbsp;|&nbsp; **Backend API:** [shareframe-social-media-app.onrender.com](https://shareframe-social-media-app.onrender.com)

--- 

---

## Tech Stack

**Frontend**
- React.js (Vite)
- React Router DOM
- Axios
- CSS3 (Custom dark theme, Glassmorphism)

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (file handling)
- ImageKit (cloud image storage)
- CORS, dotenv

---

## Features

- 📤 Create posts with a username, image, and caption
- 🖼️ Cloud image upload via **ImageKit**
- 📰 Live feed showing all posts in real time
- 👤 Auto user creation — no login/signup required
- 🕐 Post timestamps
- 📱 Mobile-first responsive design
- 🎨 Dark bluish glassmorphic UI theme

---

## Project Structure

```
ShareFrame/
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── post.controller.js
│   │   ├── db/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   ├── post.model.js
│   │   │   └── user.model.js
│   │   ├── routes/
│   │   │   └── post.routes.js
│   │   ├── services/
│   │   │   └── storage.service.js
│   │   └── app.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CreatePost.jsx
│   │   │   └── Feed.jsx
│   │   ├── App.jsx
│   │   ├── Navbar.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## Getting Started Locally

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- ImageKit account (free tier works)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shareframe.git
cd shareframe
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend/`:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
PORT=3000
```

Start the backend server:

```bash
node server.js
```

Server runs at `http://localhost:3000`

### 3. Setup Frontend

```bash
cd ../Frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

> Make sure the API URL in `CreatePost.jsx` and `Feed.jsx` points to `http://localhost:3000` for local development.

---

## API Reference

### Base URL
```
https://shareframe-social-media-app.onrender.com
```

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/create-post` | Create a new post | `multipart/form-data`: `userName`, `image`, `caption` |
| `GET` | `/posts` | Fetch all posts | — |

### Example Response — GET `/posts`

```json
{
  "message": "Posts fetched successfully",
  "posts": [
    {
      "_id": "664abc...",
      "image": "https://ik.imagekit.io/...",
      "caption": "Hello World!",
      "userId": {
        "_id": "664xyz...",
        "userName": "sarfaraz"
      },
      "createdAt": "2026-04-04T21:28:34.000Z"
    }
  ]
}
```

---

## How It Works

1. User fills in their **username**, selects an **image**, and writes a **caption**
2. Frontend sends a `multipart/form-data` POST request to the Express backend
3. Multer captures the file in memory (`memoryStorage`)
4. ImageKit uploads the image buffer to the cloud and returns a public URL
5. If the username doesn't exist, a new `User` document is created in MongoDB
6. A `Post` document is saved with the image URL, caption, and user reference (`userId`)
7. The feed fetches all posts using `.populate('userId', 'userName')` to resolve user data

---

## Deployment

| Layer | Platform |
|-------|----------|
| Frontend | [Vercel](https://vercel.com) |
| Backend | [Render](https://render.com) |
| Database | [MongoDB Atlas](https://www.mongodb.com/atlas) |
| Image Storage | [ImageKit](https://imagekit.io) |

### Backend Environment Variables on Render

Add these in your Render service → **Environment**:

```
MONGO_URI
IMAGEKIT_PUBLIC_KEY
IMAGEKIT_PRIVATE_KEY
IMAGEKIT_URL_ENDPOINT
PORT
```

### Frontend Environment on Vercel

Update the API base URL in `CreatePost.jsx` and `Feed.jsx` to your Render deployment URL before pushing.

---

## Author

**Sarfaraz Elahie**
- GitHub: [Sarfaraz Ealhie](https://github.com/SarfarazElahie)
- LinkedIn: [linkedin.com/in/sarfaraz-elahie](https://www.linkedin.com/in/sarfaraz-elahie-94790835a/)

---

## License

This project is open source and available under the [MIT License](LICENSE).
