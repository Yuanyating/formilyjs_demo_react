import "./App.css";
import Hive from "./views/Hive";
import Upload from "./views/Upload";
import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import LayoutWrapper from "./layouts";
import Table from "./views/Table";


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
      },
      {
        path: '/table',
        element: <Table />
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
