
import React from "react"

import ReactDOM from "react-dom/client"

import {
  BrowserRouter,
} from "react-router-dom"

import { Toaster } from "react-hot-toast"

import App from "./App"

import "./index.css"



ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <App />



      <Toaster
        position="top-right"
        toastOptions={{

          style: {

            background: "#0B1120",

            color: "#fff",

            border:
              "1px solid rgba(255,255,255,0.08)",

            borderRadius: "18px",

            padding: "16px",

          },

        }}
      />

    </BrowserRouter>

  </React.StrictMode>

)
