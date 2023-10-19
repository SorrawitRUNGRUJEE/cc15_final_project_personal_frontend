// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/auth_context.jsx";
import AdminContextProvider from "./context/admin_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
  
      <App />
  
  </AuthContextProvider>
  // </React.StrictMode>,
);
