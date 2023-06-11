import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LayoutWrapper from "./layouts";
import { lazy, Suspense } from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { Spin } from "antd";

export interface RouteObject {
  path?: string;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
}

const metaRouters: Record<string, RouteObject[]> = import.meta.glob(
  "./views/*.tsx",
  {
    eager: true,
    import: "default",
  }
);

const routers = Object.keys(metaRouters).reduce((acc, cur) => {
  const pathArray = cur.match(/.\/views(\S*).tsx/);
  if (!pathArray) return;
  const Module = lazy(() => import(/* @vite-ignore */ cur));
  return [
    ...acc,
    {
      path: pathArray[1].toLocaleLowerCase(),
      element: (
        <ErrorBoundary>
          <Suspense fallback={<Spin size="large" />}>
            <Module />
          </Suspense>
        </ErrorBoundary>
      ),
    },
  ];
}, [] as RouteObject[]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/hive" />,
  },
  {
    element: <LayoutWrapper />,
    children: [...routers],
  },
]);

function App() {
  return <RouterProvider router={router as any} />;
}

export default App;
