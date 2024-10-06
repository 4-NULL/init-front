// 튜토리얼: https://reactrouter.com/en/main/start/tutorial
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Layout from '../init/layout/Layout';
import CurriculumDetail from '../pages/CurriculumDetail';
import HomePage from '../pages/HomePage';

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
        path: '/curriculum/:seq',
        element: <CurriculumDetail />
      }

    ],
  },
]);

export default router;
