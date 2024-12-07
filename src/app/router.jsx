import { createBrowserRouter } from 'react-router-dom';

import { GroupDetail } from '@entities/group';
import { CurriculumDetailPage, loader as curriculumDetailLoader } from '@pages/curriculum-detail';
import { CurriculumListPage, loader as curriculumListLoader } from '@pages/curriculum-list';
import { ErrorPage } from '@pages/error';
import { HomePage, loader as groupLoader } from '@pages/home';
import { JoinPage, joinRequest } from '@pages/join';
import { LessonDetailPage, loader as lessonDetailLoader } from '@pages/lesson-detail';
import { LoginPage, loginRequest } from '@pages/login';
import { Layout } from './Layout';
import { CurriculumActionPage, curriculumRequest } from '@pages/curriculum-action';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout을 최상위로 설정
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: groupLoader
      }, 
      {
        path: '/login',
        element: <LoginPage />,
        action: loginRequest
      },
      {
        path: '/join',
        element: <JoinPage />,
        action: joinRequest
      },
      {
        path: '/group/:seq',
        element: <GroupDetail />,
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
        path: '/curriculum/:seq?/:actionType',
        element: <CurriculumActionPage />,
        loader: curriculumListLoader,
        action: curriculumRequest
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
