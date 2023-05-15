import React, { createContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ErrorPage404 from "./components/ErrorPage404";
import Logout from "./components/Logout";


import { initialState , reducer } from "./Reducer/useReducer";
export const userContext = new createContext();


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  
  return (
    <>
      <userContext.Provider value={{state,dispatch}}>
        <Routing/>
      </userContext.Provider>
    </>
  );
};

export default App;
