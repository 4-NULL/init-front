// 튜토리얼: https://reactrouter.com/en/main/start/tutorial
import { createBrowserRouter } from 'react-router-dom';
import CurriculumDetailPage from '../pages/CurriculumDetailPage';
import CurriculumListPage from '../pages/CurriculumListPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import LessonDetailPage from '../pages/LessonDetailPage';
import LoginPage from '../pages/LoginPage';
import Layout from '../shared/ui/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout을 최상위로 설정
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/curriculum',
        element: <CurriculumListPage />
      },
      {
        path: '/curriculum/:seq',
        element: <CurriculumDetailPage />
      },
      {
        path: '/lesson/:seq',
        element: <LessonDetailPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
    ],
  },
]);

export default router;
