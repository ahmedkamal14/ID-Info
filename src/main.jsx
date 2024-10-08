import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/ID-Info/",
    element: <App />,
    children: [
      {
        path: "/ID-Info/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
