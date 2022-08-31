import React from "react";
import './Login.css';

export default function (props) {
    return (
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
    )
}