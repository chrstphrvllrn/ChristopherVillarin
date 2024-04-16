import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import History from './components/History.js'
import Skills from './components/Skills.js'
import Portfolio from './components/Portfolio.js';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/history", element: <History /> },
  { path: "/skills", element: <Skills /> }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();