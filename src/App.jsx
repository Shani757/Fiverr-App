import React from "react";
import "./App.scss"
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";
import Pay from "./pages/pay/Pay"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Success from "./success/Success";
function App() {
  const queryClient = new QueryClient()
  const Layout = () => {
    return (
      <>
      <QueryClientProvider client={queryClient}>

        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/pay/:id",
          element: <Pay/>,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
