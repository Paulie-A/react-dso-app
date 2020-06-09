import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// function Home() {
  class Home extends Component {
    render(){
  return (
    <div className="DSOApp">
      <div className="main-container">
        <div className="column">
          <div class="col-sm-auto">
            <div className="col-md-auto flex justify-content-center">

              <h1>Days Sales Outstanding</h1>
              <p>Calculate your days sales outstanding</p>
              <Link to={process.env.PUBLIC_URL + '/dso'}>
                <button className="btn btn-primary" type="button">Calculate DSO</button>
              </Link>
              <hr />
              <h1>Collection Effectiveness Index</h1>
              <p>Calculate the effectiveness of your collections team</p>
              <Link to={process.env.PUBLIC_URL + '/cei'}>
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
}

export default Home;