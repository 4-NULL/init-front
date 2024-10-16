import { createBrowserRouter } from 'react-router-dom';

import { CurriculumDetailPage } from '@pages/curriculum-detail';
import { CurriculumListPage } from '@pages/curriculum-list';
import { ErrorPage } from '@pages/error';
import { HomePage } from '@pages/home';
import { JoinPage } from '@pages/join';
import { LessonDetailPage } from '@pages/lesson-detail';
import { LoginPage } from '@pages/login';
import Layout from '@shared/ui/Layout';

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
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/join',
        element: <JoinPage />
      },
      {
        path: '/curriculum',
        element: <CurriculumListPage />,
        children: [
        ]
      },
      {
        path: '/curriculum/:seq',
        element: <CurriculumDetailPage />
      },
      {
        path: '/lesson/:seq',
        element: <LessonDetailPage />
      }
    ],
  },
  
]);

export default router;
