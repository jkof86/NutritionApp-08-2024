import { Routes, Route } from "react-router";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Account from "./components/Account";
import Settings from "./components/Settings";
import Calculator from "./components/Calculator";
import Fitness from "./components/Fitness";
import Professional from "./components/Professional";
import Gaming from "./components/Gaming";
import ContactFitness from "./components/ContactFitness";
import ContactProfessional from "./components/ContactProfessional";
import ContactGaming from "./components/ContactGaming";

export default function App() {

  return (<>
  {/* {<Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} */}
   {<Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/professional/contact" element={<ContactProfessional />} />
        <Route path="/fitness" element={<Fitness />} /> 
        <Route path="/fitness/calculator" element={<Calculator />} />
        <Route path="/fitness/contact" element={<ContactFitness />} />
        <Route path="/gaming" element={<Gaming />} /> 
        <Route path="/gaming/contact" element={<ContactGaming />} />
        <Route path="/gaming/about" element={<ContactGaming />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
  </>);
}