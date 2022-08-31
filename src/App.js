import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from './Login';
import Register from './Register';



function Loginpage(){
    return(
      <div className="containerloginpage">
        <h1>
          <b> Selamat Datang, </b> <br/> Portal PT. Jasmine Indah Servistama
        </h1>
        <div className="Formlogin">
          <h1> Silahkan Login</h1>
          <input type="text" name="username" placeholder="User Name"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <input type="submit" value="Submit"></input>
        </div>
      </div>
    );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App

