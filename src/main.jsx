import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './routes/dashboardPage/dashboardPage';
import HomePage from './routes/homePage/homePage';
import ChatPage from './routes/chatPage/chatPage';
import RootLayout from './layouts/rootLayout/rootLayout';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout';
import SignInPage from './routes/signInPage/signInPage.jsx';
import SignUpPage from './routes/signUpPage/signUpPage.jsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
        {path:"/", element: <HomePage />},
        {path:"/sign-in/*", element: <SignInPage />},
        {path:"/sign-up/*", element: <SignUpPage />},

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
