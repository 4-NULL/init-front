// 튜토리얼: https://reactrouter.com/en/main/start/tutorial

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root';
import CurriculumList from './init/curriculum/CurriculumList';
import ErrorPage from './ErrorPage';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact';
import EditContact, { action as editAction } from './routes/edit';
import { action as destroyAction } from './routes/destroy';
import Index from './routes/index';

const router = createBrowserRouter([
  {
    // path: '/',
    // element: <Root />,
    // loader: rootLoader,
    // action: rootAction,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     errorElement: <ErrorPage />,
    //     children: [
    //       {
    //         index: true,
    //         element: <Index />,
    //       },
    //       {
    //         path: 'contacts/:contactId',
    //         element: <Contact />,
    //         loader: contactLoader,
    //         action: contactAction,
    //       },
    //     ],
    //   },
    //   {
    //     index: true,
    //     element: <Index />,
    //   },
    //   {
    //     path: 'contacts/:contactId',
    //     element: <Contact />,
    //     loader: contactLoader,
    //     action: contactAction,
    //   },
    //   {
    //     path: 'contacts/:contactId/edit',
    //     element: <EditContact />,
    //     loader: contactLoader,
    //     action: editAction,
    //   },
    //   {
    //     path: 'contacts/:contactId/destroy',
    //     action: destroyAction,
    //     errorElement: <div>Oops! There was an error.</div>,
    //   },
    // ],
    path: '/curriculum',
    element: <CurriculumList />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
