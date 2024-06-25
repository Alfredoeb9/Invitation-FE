import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoutes from "./components/PrivateRoutes";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<PrivateRoutes />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/verify-email/:id" element={<VerifyEmail />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>
  )
);

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
