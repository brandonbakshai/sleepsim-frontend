import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <img
          id="logo"
          src="https://www.shutterstock.com/image-vector/anesthesiology-icon-line-symbol-isolated-600nw-1274548492.jpg"
        />
        <div id="title">SLEEPYSIM</div>
        <div id="hamburger">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </div>
      <div id="content">
        <div className="module" id="about">
          <div className="header">Click to Generate Case</div>
        </div>
        <div className="module" id="">
          <div className="header">ECG</div>
        </div>
        <div className="module" id="">
          <div className="header">Capnography</div>
        </div>
        <div className="module" id="">
          <div className="header">Drugs</div>
        </div>
      </div>
    </>
  );
}

export default App;
