import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/home';
import About from '../page/about';
import Dashboard from '../component/dashboard';
import Navbar from '../component/navbar';
import LoginPage from '../page/loginPage';
import TeacherSignup from '../page/teacherSignup';
import StudentSignup from '../page/studentSignup';
import CombineSignup from '../page/combineSignup';
import StorePage from '../page/store';
import Products from '../page/Products';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <Navbar />
        <CombineSignup />
      </>
    ),
  },
  {
    path: '/teacherSignup',
    element: (
      <>
        <Navbar />
        <TeacherSignup />
      </>
    ),
  },
  {
    path: '/studentSignup',
    element: (
      <>
        <Navbar />
        <StudentSignup /> 
      </>
    ),
  },
  {
    path: '/store',
    element: (
      <>
        <Navbar />
        <StorePage /> 
      </>
    ),
  },
  {
    path: '/products',
    element: (
      <>
        <Navbar />
        <Products /> 
      </>
    ),
  },
  
]);

export default router;
