import React from 'react'
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import AddTouristsSpot from './pages/AddTouristsSpot.jsx';
import AllTouristsSpot from './pages/AllTouristsSpot';
import ViewDetails from './pages/ViewDetails';
import MyList from './pages/MyList.jsx';
import Login from './pages/Login.jsx';
import UpdateTouristsSpot from './pages/UpdateTouristsSpot.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute'
import SportsSameCountries from './pages/SportsSameCountries';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children:[
     { path: "/",
      element: <Home></Home>,
      loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot`)
    },
     { path: "/addtouristsspot",
      element: <AddTouristsSpot></AddTouristsSpot>,
    },
     { path: "/alltouristsspot",
      element: <AllTouristsSpot></AllTouristsSpot>,
      loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot`)
    },
     { path: "/viewdetails/:id",
      element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot/${params.id}`)
    },
     { path: "/sportssamecountriy/:country_name",
      element: <SportsSameCountries/>
    },
     { path: "/mylist",
      element: <PrivateRoute><MyList></MyList></PrivateRoute>,
      loader:() => fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot`)
    },
    {
      path:'/register',
      element: <Register></Register>,
    },
     { path: "/login",
      element: <Login></Login>,
    },
     { path: "/updatetouristsspot/:id",
      element: <PrivateRoute><UpdateTouristsSpot></UpdateTouristsSpot></PrivateRoute>,
      loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot/${params.id}`)
    },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
