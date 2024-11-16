import logo from './logo.svg';
import './App.css';
import Customer from './Customer';

function App() {
  debugger
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
   <div>
    <Customer></Customer>
    <div className="col-md-3">Sagar</div>
    <div className="col-md-6">Ankur</div>
   </div>
   
  );
}


export default App;
