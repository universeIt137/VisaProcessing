import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import Mainlayout from './layouts/Mainlayout.jsx';
import FormPage from './pages/Form/FormPage.jsx';
import FormDetail from './pages/Form/FormDetail.jsx';
import UpdateNominee from './pages/Form/UpdateNominee.jsx';
import HomePage from './pages/homePage/HomePage.jsx';
import ManPower from './pages/manPower/ManPower.jsx';
import BMETcard from './pages/smartCard/BMETcard.jsx';
import ManPowerUpdate from './pages/manPower/ManPowerUpdate.jsx';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/bmet-card",
        element: <BMETcard></BMETcard>
      },
      {
        path: "/visa-processing",
        element: <FormPage></FormPage>,
      },
      {
        path: "/man-power",
        element: <ManPower></ManPower>
      },
      {
        path: "/form-Details/:id",
        element: <FormDetail></FormDetail>
      },
      {
        path: "/nominee-update/:id",
        element: <UpdateNominee></UpdateNominee>
      },
      {
        path : "/man-power/update/:id",
        element : <ManPowerUpdate></ManPowerUpdate>
      }
    ]

  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
