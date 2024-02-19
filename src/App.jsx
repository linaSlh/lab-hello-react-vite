// src/App.jsx
import logo from "./assets/ironhack-logo-xs.png";
import burgerMenu from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt="ironhack-logo" className="logo" />
          <img src={burgerMenu} alt="burger-menu" className="logo burgerMenu" />
        </nav>
        <div className="headerBody">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>
      </header>
      <section className="iconGrid">
        <div className="gridElement">
          <img src={icon1} alt="declarative" className="icon" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="gridElement">
          <img src={icon2} alt="components" className="icon" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="gridElement">
          <img src={icon3} alt="single-way" className="icon" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component</p>
        </div>
        <div className="gridElement">
          <img src={icon4} alt="jsx" className="icon" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </section>
    </div>
  );
}

export default App;

// import './App.css'

// function App() {
  

//   return (
    
//        <div className="App"></div>
    
//   )
// }

// export default App
