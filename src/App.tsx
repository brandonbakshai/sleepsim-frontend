import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  /*useEffect(() => {
    axios
      .get("http://localhost:3000/trackdata/SNUADCECG_II")
      .then((response) => console.log(response.data));
  });*/

  return (
    <>
      <div className="header">
        <img
          id="logo"
          src="https://www.shutterstock.com/image-vector/anesthesiology-icon-line-symbol-isolated-600nw-1274548492.jpg"
        />
        <h1>SBH DA Residency Research Proposal</h1>
        <img
          id="logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div id="content">
        <div className="module" id="about">
          <div className="header">
            <h3>Brandon Bakshai, DMD</h3>
          </div>
          <div className="content">
            <p>
              I built this to <b>demonstrate the strongest interest</b> in the
              SBH DA residency program.
            </p>
            <p>Previous programming projects</p>
            <ul>
              <li>
                Dental school simulation lab software for grading and practice
              </li>
              <li>
                Novel sharing feature for Amazon Video - 1st prize at Amazon
                Video annual hackathon
              </li>
              <li>
                Customizable care package order and delivery app - 1st prize in
                Launch Your Startup Competition at Columbia Business School
              </li>
            </ul>
          </div>
        </div>
        <div className="module" id="">
          <div className="header">
            <h3>What is SleepySim?</h3>
          </div>
          <div className="content">
            <p>
              This project aims first to{" "}
              <b>
                build a website capable of displaying recorded patient vitals{" "}
              </b>
              (e.g. EKG, capnography, drugs administered) throughout a procedure
            </p>
            <p>Once built, the project may be useful in multiple ways</p>
            <ol>
              <li>Resident training</li>
              <li>
                Further research - mortality prediction, statistical analysis
              </li>
            </ol>
          </div>
        </div>

        <div className="module" id="">
          <div className="header">Enabling Technology</div>
          <div className="content">
            <h2>VitalDB</h2>
            <p>
              VitalDB is an extensive library of 6000+ surgeries created by a
              research team at Seoul National University Hospital in 2022
            </p>
          </div>

          <p></p>
        </div>
      </div>
    </>
  );
}

export default App;
