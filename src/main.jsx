import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import People from "./pages/People.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/people",
        element: <People />,
      },
    ],
    errorElement: <Error/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store = {store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
