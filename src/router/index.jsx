import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home"
import AdminPanel from "../pages/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "/admin_panel",
    element: <AdminPanel />
  }
])

export default router