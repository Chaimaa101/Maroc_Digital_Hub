import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from "./components/Hero"
import Layout from "./Layout"
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import HomePage from "./pages/HomePage"
import Evenements from "./pages/evenements"
import Forum from "./components/Forum"
import Myevents from "./pages/Myevents"
import Dashboard from "./Admin/Dashboard"
import UsersList from "./Admin/UsersList"
import StartupsList from "./Admin/StartupsList"
import EventsList from "./Admin/EventsList"
import AddStartup from "./components/AddStartup"
import AddEvent from "./components/AddEvent"
import SectorList from "./Admin/SectorsList"
import AddSector from "./components/AddSector"
import Startups from "./pages/Startups"
import { ProtectedRoute } from "./services/ProtectedRoute"



function App() {
 
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/events" element={<Evenements />} />
    <Route path="/myevents" element={ <ProtectedRoute allowedRoles={[ "startup", "investor", "admin"]}><Myevents /></ProtectedRoute>} />
    <Route path="/forum" element={<Forum />} />
    <Route path="/Dashboard" element={ <ProtectedRoute allowedRoles={["admin"]}><Dashboard /></ProtectedRoute>} />
    <Route path="/addevent" element={<ProtectedRoute allowedRoles={[ "startup",, "investor", "admin"]}> <AddEvent /> </ProtectedRoute>} />
    <Route path="/addstartup" element={<ProtectedRoute  allowedRoles={[ "startup", "admin"]}>  <AddStartup/> </ProtectedRoute>} />
    <Route path="/startups" element={<Startups />} />
    <Route path="/addSector" element={ <ProtectedRoute  allowedRoles={["admin"]}><AddSector /></ProtectedRoute>} />
    <Route path="/liststartup" element={<StartupsList />} />
    <Route path="/listevents" element={<ProtectedRoute allowedRoles={["admin"]}><EventsList /> </ProtectedRoute>} />
    <Route path="/listusers" element={ <ProtectedRoute allowedRoles={["admin"]}><UsersList /></ProtectedRoute>} />
    <Route path="/listsectors" element={ <ProtectedRoute allowedRoles={["admin"]}><SectorList /></ProtectedRoute>} />
   
    </Route>
   </Routes>
   </BrowserRouter> 
    </>
  )
}

export default App
