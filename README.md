# Portfolio Website

A full-stack portfolio website built with React (Vite) frontend and Express backend with MongoDB.

## 🚀 Deployment on Vercel

This project is configured for deployment on Vercel with both frontend and backend.

### Prerequisites
- A Vercel account
- MongoDB Atlas account (for database)
- Git repository

### Environment Variables

Add the following environment variables in your Vercel project settings:

```
MONGO_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
```

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the `vercel.json` configuration

3. **Configure Environment Variables**
   - In Vercel project settings, go to "Environment Variables"
   - Add `MONGO_URI` with your MongoDB Atlas connection string
   - Add `NODE_ENV` set to `production`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy both frontend and backend

### Local Development

1. **Install Dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

2. **Set Up Environment Variables**
   - Create a `.env` file in the `server` directory
   - Add your MongoDB connection string:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```

3. **Run Development Servers**
   ```bash
   # Terminal 1 - Run backend
   cd server
   npm run dev

   # Terminal 2 - Run frontend
   cd client
   npm run dev
   ```

## 📁 Project Structure

```
PORTFOLIO/
├── client/          # React frontend (Vite)
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Express backend
│   ├── data/        # Static data files
│   ├── models/      # MongoDB models
│   ├── index.js     # Server entry point
│   └── package.json
├── vercel.json      # Vercel configuration
└── README.md
```

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- Framer Motion
- Recharts
- React Icons

**Backend:**
- Express
- MongoDB with Mongoose
- CORS
- dotenv

## 📝 Features

- Responsive portfolio design
- Project showcase with categories
- Interactive journey timeline
- Coding statistics visualization
- Testimonials system
- Contact form with database storage
- Social media integration

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment configuration
- `vite.config.js` - Vite build configuration
- `.gitignore` - Git ignore rules
- `.env.example` - Environment variables template

## 📄 License

This project is open source and available under the MIT License.
