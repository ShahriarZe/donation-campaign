import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/donations",
        element:<Donation></Donation>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/details/:id",
        element:<ViewDetails></ViewDetails>,
        loader:()=>fetch('../data.json')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
