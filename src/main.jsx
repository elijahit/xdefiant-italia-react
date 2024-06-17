import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PenalitaJump from './pages/posts/PenalitaJump.jsx';

const posts = [
  {
    path: "/posts/penalita-spamming",
    element: <PenalitaJump/>
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />
  },
  ...posts
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
