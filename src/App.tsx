import './App.css'
import Hive from './views/Hive'
import Upload from './views/Upload'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LayoutWrapper from './layouts'
import Linkage from './views/Linkage'
import Table from './views/Table'
import Task from './views/Task'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/hive" />,
  },
  {
    element: <LayoutWrapper />,
    children: [
      {
        path: '/hive',
        element: <Hive />,
      },
      {
        path: '/Upload',
        element: <Upload />,
      },
      {
        path: '/linkage',
        element: <Linkage />,
      },
      {
        path: '/table',
        element: <Table />,
      },
      {
        path: '/task',
        element: <Task />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router as any} />
}

export default App
