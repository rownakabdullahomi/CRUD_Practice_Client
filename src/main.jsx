import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Add from './components/Add';
import Update from './components/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=>fetch("http://localhost:5000/user")
  },
  {
    path: "/addUser",
    element: <Add></Add>,
  },
  {
    path: "/update",
    element: <Update></Update>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
