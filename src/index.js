import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/assets/styles/global.css';
import '../src/assets/styles/calendar.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import Academics from './pages/Academics';
import About from './pages/About';
import Home from './pages/Home';
import Admission from './pages/Admission';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { StudentsContextProvider } from './context/UserContext';
import Dashboard from './pages/backoffice/Dashboard';
import Overview from './pages/backoffice/Overview';
import Syllabus from './pages/backoffice/Syllabus';
import Classroom from './pages/backoffice/Classroom';
import Schedule from './pages/backoffice/Schedule';
import Chats from './pages/backoffice/Chats';
import Messages from './pages/backoffice/Messages';
import Announcement from './pages/backoffice/Announcement';
import Settings from './pages/backoffice/Settings';
import Result from './pages/backoffice/Result';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/academics',
        element: <Academics/>
      },
      {
        path:'/admission',
        element: <Admission/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Register/>
      },
      {
        path:'/',
        element: <Home/>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/dashboard',
        element: <Overview/>
      },
      {
        path:'/dashboard/syllabus',
        element: <Syllabus/>
      },
      {
        path:'/dashboard/classroom',
        element: <Classroom/>
      },
      {
        path:'/dashboard/schedule',
        element: <Schedule/>
      },
      {
        path:'/dashboard/results',
        element: <Result/>
      },
      {
        path:'/dashboard/messages',
        element: <Messages/>
      },
      {
        path:'/dashboard/announcements',
        element: <Announcement/>
      },
      {
        path:'/dashboard/settings',
        element: <Settings/>
      },

    ]
  }        

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentsContextProvider>
      <RouterProvider router={router}/>
    </StudentsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
