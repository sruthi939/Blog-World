# Blog-World

Blog-World is a modern website for reading and writing blogs. The site has three main parts: one for normal readers, one for authors, and one for editors.

---

## 🚀 Features

### 1. Readers (Normal Users)
- **Explore**: Find new and popular blogs.
- **Read & Engage**: Read blogs, leave comments, and see how long it takes to read a post.
- **Profile**: Save your favorite blogs to read later.

### 2. Authors (Writers)
- **Dark Dashboard**: A special dark-themed screen made just for writing.
- **Write & Edit**: Create new blogs, format text, upload pictures, and save drafts if you're not finished.
- **Track Views**: See how many people read or liked your blogs.

### 3. Editors (Moderators)
- **Review Blogs**: Check blogs that authors want to publish.
- **Approve or Reject**: Make sure the blog is good before it goes live on the site.
- **Manage Site**: Control categories and delete spam comments.

---

## 📁 Folder Layout

Here is how the code is organized:

```text
Blog-World/
├── client/                     # The website you see (React)
│   └── src/
│       ├── components/         # Small parts like buttons and navbars
│       ├── pages/
│       │   ├── Authors/        # Pages for writers
│       │   ├── editors/        # Pages for moderators
│       │   └── users/          # Pages for normal readers
│       └── App.jsx             # Connects all the pages
└── server/                     # The hidden backend logic (Node.js)
    ├── controllers/            # Logic for handling data
    ├── models/                 # Database rules (MongoDB)
    └── routes/                 # API links
```

---

## 🛠️ How to Start the App

1. **Download the code**
   ```bash
   git clone https://github.com/sruthi939/Blog-World.git
   ```

2. **Add Environment Settings**
   Create a `.env` file in the `server` folder with:
   ```env
   PORT=5000
   MONGODB_URL="Your MongoDB Connection Link"
   JWT_SECRET="Your Secret Password"
   CLIENT_URL="http://localhost:5173"
   ```

3. **Install Packages**
   Open two terminal windows.
   In the first one, install the server tools:
   ```bash
   cd server
   npm install
   ```
   In the second one, install the client tools:
   ```bash
   cd client
   npm install
   ```

4. **Run the App**
   Start both parts of the app:
   ```bash
   # Terminal 1: Start Backend (inside server folder)
   npm start

   # Terminal 2: Start Frontend (inside client folder)
   npm run dev
   ```

---

## 👨‍💻 Created By
**Sruthi Alex**  
*Web Developer*  

[Connect on LinkedIn](https://www.linkedin.com/in/sruthi-alex-b7784b37a/)
