import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/homePage/homePage';
import DashboardPage from './routes/dashboardPage/dashboardPage';
import ChatPage from './routes/chatPage/chatPage';
import RootLayout from './layouts/rootLayout/rootLayout';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
        {path:"/", element: <HomePage />},
        {element: <DashboardLayout />,
         children:[
          {path:"/dashboard", element: <DashboardPage />},
          {path:"/dashboard/chats/:id", element:<ChatPage />},
        ]},
    ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
);
