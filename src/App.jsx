import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/Index.jsx";
import Page from './pages/dynamic/Page.jsx';

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
