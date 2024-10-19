import { createBrowserRouter } from 'react-router-dom';

import { CurriculumDetailPage, loader as curriculumDetailLoader } from '@pages/curriculum-detail';
import { CurriculumListPage, loader as curriculumListLoader } from '@pages/curriculum-list';
import { ErrorPage } from '@pages/error';
import { HomePage } from '@pages/home';
import { JoinPage } from '@pages/join';
import { LessonDetailPage, loader as lessonDetailLoader } from '@pages/lesson-detail';
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
        loader: curriculumListLoader
      },
      {
        path: '/curriculum/:seq',
        element: <CurriculumDetailPage />,
        loader: curriculumDetailLoader
      },
      {
        path: '/lesson/:seq',
        element: <LessonDetailPage />,
        loader: lessonDetailLoader
      }
    ],
  },
  
]);

export default router;
