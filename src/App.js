import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

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

export { App,Loginpage};

