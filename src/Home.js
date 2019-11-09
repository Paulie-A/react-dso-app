import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="DSOApp">
      {/* <Header /> */}
      {/* Components */}
      <div className="main-container">
        <div className="column">
          <div class="col-sm-auto">
            <div className="col-md-auto flex justify-content-center">

              <h1>Days Sales Outstanding</h1>
              <p>Calculate your days sales outstanding</p>
              <Link to="/Dso">
                <button className="btn btn-primary" type="button">Calculate DSO</button>
              </Link>
              {/* <button className="btn btn-primary" type="submit" name="submit" value="DSO">DSO Calculation</button> */}
              {/* </form> */}

              <hr />
              <h1>Collection Effectiveness Index</h1>
              <p>Calculate the effectiveness of your collections team</p>
              <Link to="/Cei">
                <button className="btn btn-primary" type="button">Calculate CEI</button>
              </Link>
              {/* <button className="btn btn-primary" type="submit" name="button" value="CEI">CEI Calculation</button> */}
              {/* </form> */}
              <hr />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;