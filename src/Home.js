import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="DSOApp">
      <div className="main-container">
        <div className="column">
          <div class="col-sm-auto">
            <div className="col-md-auto flex justify-content-center">

              <h1>Days Sales Outstanding</h1>
              <p>Calculate your days sales outstanding</p>
              <Link to="/Dso">
                <button className="btn btn-primary" type="button">Calculate DSO</button>
              </Link>
              <hr />
              <h1>Collection Effectiveness Index</h1>
              <p>Calculate the effectiveness of your collections team</p>
              <Link to="/Cei">
                <button className="btn btn-primary" type="button">Calculate CEI</button>
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;