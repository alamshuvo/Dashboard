
import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import MainLayout from "../Layout/MainLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
  ]);
export default router;