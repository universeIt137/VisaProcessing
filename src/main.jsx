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
import ClearancePage from './pages/smartCard/ClearancePage.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './pages/authentication/login/Login.jsx';
import Register from './pages/authentication/register/Register.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import DownloadBmet from './pages/downloadBmet/DownloadBmet.jsx';
import BMETInfoCard from './pages/smartCard/BMETInfoCard.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <PrivateRoutes><HomePage></HomePage></PrivateRoutes>
      },
      {
        path: "/bmet-card/:id",
        element: <BMETcard></BMETcard>
      },
      {
        path: "/bmet-clearance/:id",
        element: <ClearancePage></ClearancePage>
      },
      {
        path: "/visa-processing",
        element: <PrivateRoutes><FormPage></FormPage></PrivateRoutes>,
      },
      {
        path: "/man-power",
        element: <PrivateRoutes><ManPower></ManPower></PrivateRoutes>
      },
      {
        path: "/form-Details/:id",
        element: <FormDetail></FormDetail>
      },
      {
        path: "/nominee-update/:id",
        element: <PrivateRoutes><UpdateNominee></UpdateNominee></PrivateRoutes>
      },
      {
        path: "/man-power/update/:id",
        element: <PrivateRoutes><ManPowerUpdate></ManPowerUpdate></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/download-bmet.html",
        element: <DownloadBmet></DownloadBmet>
      },
      {
        path: "/digital/:id",
        element: <BMETInfoCard></BMETInfoCard>
      }
    ]

  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient} >
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
