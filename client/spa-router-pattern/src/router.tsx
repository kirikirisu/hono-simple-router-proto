import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Top } from "./features/top";
import { Dashbord } from "./features/dashbord";
import { Profile } from "./features/profile";

const router = createBrowserRouter([
  {
    path: "static/spa/",
    element: <Top />,
  },
  {
    path: "static/spa/dashbord",
    element: <Dashbord />,
  },
  {
    path: "static/spa/profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
