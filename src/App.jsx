import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroSection from "./components/Hero"
import Layout from "./Layout"
import Auth from "./Auth/Auth"
import HomePage from "./pages/HomePage"
import Evenements from "./pages/evenements"
import Forum from "./components/Forum"
import AddEvent from "./components/ManageEvent"
import AddStartup from "./components/AddStartup"
import Myevents from "./pages/Myevents"
import Startups from "./pages/startups"
import Dashboard from "./Admin/Dashboard"
import UsersList from "./Admin/UsersList"
import StartupsList from "./Admin/StartupsList"
import EventsList from "./Admin/EventsList"
import Addevents from "./components/Addevents"

function App() {
 
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/login" element={<Auth />} />
    <Route path="/events" element={<Evenements />} />
    <Route path="/myevents" element={<Myevents />} />
    <Route path="/forum" element={<Forum />} />
    <Route path="/addevent" element={<AddEvent />} />
    <Route path="/addstartup" element={<AddStartup/>} />
    <Route path="/startups" element={<Startups />} />
    <Route path="/admin" element={<Dashboard />} />
    <Route path="/liststartup" element={<StartupsList />} />
    <Route path="/listevents" element={<EventsList />} />
    <Route path="/listusers" element={<UsersList />} />
    <Route path="/addEvent" element={<Addevents />} />
    
    </Route>
   </Routes>
   </BrowserRouter> 
    </>
  )
}

export default App
