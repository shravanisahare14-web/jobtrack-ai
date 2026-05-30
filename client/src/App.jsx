
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

import Login from "./pages/Login"

import Register from "./pages/Register"

import Dashboard from "./pages/Dashboard"

import Applications from "./pages/Applications"

import Pipeline from "./pages/Pipeline"

import Analytics from "./pages/Analytics"

import AIAssistant from "./pages/AIAssistant"

import Calendar from "./pages/Calendar"

import Reminders from "./pages/Reminders"

import Documents from "./pages/Documents"

import AddApplication from "./pages/AddApplication"

import ApplicationDetails from "./pages/ApplicationDetails"



function App() {

  return (

    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={<Home />}
      />



      {/* LOGIN */}

      <Route
        path="/login"
        element={<Login />}
      />



      {/* REGISTER */}

      <Route
        path="/register"
        element={<Register />}
      />



      {/* DASHBOARD */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />



      {/* APPLICATIONS */}

      <Route
        path="/applications"
        element={<Applications />}
      />



      {/* PIPELINE */}

      <Route
        path="/pipeline"
        element={<Pipeline />}
      />



      {/* ANALYTICS */}

      <Route
        path="/analytics"
        element={<Analytics />}
      />



      {/* AI ASSISTANT */}

      <Route
        path="/ai-assistant"
        element={<AIAssistant />}
      />



      {/* CALENDAR */}

      <Route
        path="/calendar"
        element={<Calendar />}
      />



      {/* REMINDERS */}

      <Route
        path="/reminders"
        element={<Reminders />}
      />



      {/* DOCUMENTS */}

      <Route
        path="/documents"
        element={<Documents />}
      />



      {/* ADD APPLICATION */}

      <Route
        path="/add-application"
        element={<AddApplication />}
      />



      {/* APPLICATION DETAILS */}

      <Route
        path="/application/:company"
        element={<ApplicationDetails />}
      />

    </Routes>

  )
}

export default App
