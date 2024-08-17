import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import Root      from "./routes/root";
import Contact   from "./routes/contact";

// 튜토리얼: https://reactrouter.com/en/main/start/tutorial
// 현재 브렌치 조회: git branch -a
// 브랜치 생성: git checkout -b 브랜치명

const router = createBrowserRouter ([
  {
    path: "/",
    // element: <div>Hello world</div>,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
