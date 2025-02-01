import { createBrowserRouter } from "react-router-dom";

// Layout
import { Layout } from "./Layout";

// Pages & Features (children 순서와 동일하게)
import { GroupDetail } from "@entities/group";
import { CurriculumActionPage, CurriculumDetailPage, createAction as curriculumCreateAction, loader as curriculumDetailLoader, editAction as curriculumEditAction, } from "@pages/curriculum-detail";
import { CurriculumListPage, loader as curriculumListLoader, } from "@pages/curriculum-list";
import { ErrorPage } from "@pages/error";
import { GroupListPage } from "@pages/group-list";
import { HomePage } from "@pages/home";
import { JoinPage, joinRequest } from "@pages/join";
import { LessonActionPage, LessonDetailPage, createAction as lessonCreateAction, loader as lessonDetailLoader, editAction as lessonEditAction, } from "@pages/lesson-detail";
import { LoginPage, loginRequest } from "@pages/login";
import { createGroup, loader as groupLoader } from "@widgets/group";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: groupLoader,
        action: createGroup,
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: loginRequest,
      },
      {
        path: "/join",
        element: <JoinPage />,
        action: joinRequest,
      },
      {
        path: "/group",
        element: <GroupListPage />,
      },
      {
        path: "/group/:seq",
        element: <GroupDetail />,
      },
      {
        path: "/curriculum",
        element: <CurriculumListPage />,
        loader: curriculumListLoader,
      },
      {
        path: "/curriculum/:seq",
        element: <CurriculumDetailPage />,
        loader: curriculumDetailLoader,
      },
      {
        path: "/curriculum/create",
        element: <CurriculumActionPage />,
        action: curriculumCreateAction,
      },
      {
        path: "/curriculum/:seq/edit",
        element: <CurriculumActionPage />,
        loader: curriculumListLoader,
        action: curriculumEditAction,
      },
      {
        path: "/lesson/:seq",
        element: <LessonDetailPage />,
        loader: lessonDetailLoader,
      },
      {
        path: "/lesson/:curriculumSeq/create",
        element: <LessonActionPage />,
        action: lessonCreateAction,
      },
      {
        path: "/lesson/:seq/edit",
        element: <LessonActionPage />,
        loader: lessonDetailLoader,
        action: lessonEditAction,
      },
    ],
  },
]);

export default router;
