import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import Routes
import Forms from './routes/Form_Contact.jsx'
import Home from './routes/Home.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "forms",
        element: <Forms />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
