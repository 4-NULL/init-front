// 튜토리얼: https://reactrouter.com/en/main/start/tutorial
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './init/home/Home';
import CurriculumListView from './init/curriculum/CurriculumListView';
import ErrorPage from './ErrorPage';
import LessonListView from './init/lesson/LessonListView';
import LessonDetailView from './init/lesson/LessonDetailView';
import Login from './init/login/Login';
import Join from './init/join/Join';
import Layout from './init/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout을 최상위로 설정
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/curriculum',
        element: <CurriculumListView />,
      },
      {
        path: '/curriculum/:seq',
        element: <LessonListView />,
      },
      {
        path: '/lesson/:seq',
        element: <LessonDetailView />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/join',
        element: <Join />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
