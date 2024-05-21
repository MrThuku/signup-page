import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import ForgotPassword from './ForgotPassword.jsx';
import ResetPassword from './ResetPassword.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: < Login />,
  },
  {
    path: "/signup",
    element: < Signup />,
  },
  {
    path: "/forgot-password",
    element: < ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: < ResetPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
