import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/index.js'
import Details from '../pages/details/index.js'
import NotFound from '../pages/404/index.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "details",
    element: <Details />,
  },
])

export default router