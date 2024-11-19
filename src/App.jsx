import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductViewer from "./projects/3d-product-viewer/ProductViewer";
import LandingPage from "./pages/Landing";
const App = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
      path: "/3d-product-viewer",
      element: <ProductViewer />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
