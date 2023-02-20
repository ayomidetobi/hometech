import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from '../src/components/Login';
import Auth from '../src/components/Auth';
import Register from '../src/components/Register';
import RegColor from '../src/components/RegColor';
import RegImage from '../src/components/RegImage';
import RegPath from '../src/components/RegPath';
import LogColor from '../src/components/LogColor';
// import LogImage from '../src/components/LogImage';
import LogPath from '../src/components/LogPath';
import Complete from '../src/components/Complete';
import Home from '../src/components/Home';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import { RegProvider } from './assets/contexts/RegContext';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
{
      path: "/Login",
      element: <Login />,
},
{
  path: "/Register",
  element: <Auth />,
},
{
  path: "/Home",
  element: <Home />,
},
{
  path: "/Complete",
  element: <Complete />,
},
// {
//     path: "/LogImage",
//     element: <LogImage />,
// },
{
  path: "/LogPath",
  element: <LogPath />,
},
{
    path: "/LogColor",
    element: <LogColor />,
},
{
  path: "/RegImage",
  element: <RegImage />,
},
{
path: "/RegPath",
element: <RegPath />,
},
{
  path: "/RegColor",
  element: <RegColor />,
},
{
    path: "/Auth",
    element: <Register />,
  },
  {
      path: "/",
      element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
  <CookiesProvider>
    <RegProvider>
      <RouterProvider router={router} />
    </RegProvider>
      
  </CookiesProvider>
  
</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
