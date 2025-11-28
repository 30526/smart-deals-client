import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/router.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster
      toastOptions={{
        style: {
          background: "linear-gradient(90deg, #632ee3, #9f62f2)",
          color: "#ffff",
        },
        duration: 4000,
      }}
    ></Toaster>
  </StrictMode>
);
