import React, { Suspense, useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/Index.jsx";
import Loader from "../../assets/loader.svg";

const loadComponent = (pageName) =>
  lazy(async () => {
    try {
      const component = await import(`../../projects/${pageName}/Index.jsx`);
      return component;
    } catch (error) {
      return {
        default: () => <NotFound />,
      };
    }
  });

const Page = () => {
  const { pageName } = useParams();
  const [Component, setComponent] = useState(() => loadComponent(pageName));

  useEffect(() => {
    setComponent(() => loadComponent(pageName));
  }, [pageName]);

  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <img src={Loader} alt="Loading..." />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
};

export default Page;
