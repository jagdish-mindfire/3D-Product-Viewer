import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/";
import Page from './pages/dynamic/Page';

const App = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/:pageName",
        element: <Page />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
