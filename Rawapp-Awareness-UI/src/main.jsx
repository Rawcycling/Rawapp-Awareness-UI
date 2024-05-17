import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import AwarenessPage from './pages/AwarenessPage.jsx';
import WaitlistPage from './pages/WaitlistPage.jsx';
// import Test from './pages/Test.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<AwarenessPage/>}/>
      <Route path='/waitlist' element={<WaitlistPage/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
