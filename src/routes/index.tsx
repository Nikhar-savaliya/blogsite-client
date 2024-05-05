import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Layout from "@/Layout";
import RegisterForm from "@/pages/auth/register";
import LoginForm from "@/pages/auth/login";
import SearchPage from "@/pages/search";
import ProfilePage from "@/pages/profile";
import NotFound from "@/pages/404NotFound";
import EditorPage from "@/pages/editor";
import BlogPage from "@/pages/blog";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "search/:title",
        element: <SearchPage />,
      },
      {
        path: "user/:id",
        element: <ProfilePage />,
      },
      {
        path: "blog/:blogId",
        element: <BlogPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/editor",
    children: [
      { index: true, element: <EditorPage /> },
      { path: ":id", element: <EditorPage /> },
    ],
  },
]);

export default browserRouter;
