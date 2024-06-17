import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

// POST IMPORT
import PenalitaJump from './pages/posts/PenalitaJump.jsx';
import PatchY1S03 from './pages/posts/PatchY1S03.jsx';

const postElement = [
  {
    path: "posts/penalita-spamming",
    element: <PenalitaJump />
  },
  {
    path: "posts/patch-y1s03",
    element: <PatchY1S03 />
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
  {
    path: "/",
    element: <Outlet/>,
    errorElement: <ErrorPage />,
    children: [
      ...postElement
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
