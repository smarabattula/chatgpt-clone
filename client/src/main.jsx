import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './routes/dashboardPage/dashboardPage.jsx';
import HomePage from './routes/homePage/homePage.jsx';
import ChatPage from './routes/chatPage/chatPage.jsx';
import RootLayout from './layouts/rootLayout/rootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout.jsx';
import SignInPage from './routes/signInPage/signInPage.jsx';
import SignUpPage from './routes/signUpPage/signUpPage.jsx';
import AppConfigContext from './AppConfigContext.jsx';

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

     <AppConfigContext>
       <RouterProvider router={router} />
     </AppConfigContext>
);
