import "./App.css";



import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";

import MainLayout from "./layout/MainLayout";

export default function App() {
  const router = createBrowserRouter([
    // Standalone login route (no layout)
   

    // Routes wrapped with MainLayout
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/", // Home page
          element: <Home />,
        },
       

        // Add more pages here as children to use MainLayout
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
