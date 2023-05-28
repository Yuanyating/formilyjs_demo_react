import "./App.css";
import Hive from "./views/Hive";
import Upload from "./views/Upload";
import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import LayoutWrapper from "./layouts";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/hive" />
  },
  {
    element: <LayoutWrapper />,
    children: [
      {
        path: '/hive',
        element: <Hive />
      },
      {
        path: '/Upload',
        element: <Upload />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
