import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Header />
    {/* Components */}
    <div className="main-container">
  <div className="column">
    <div class="col-sm-auto">
       <div className="col-md-auto flex justify-content-center">

          <h1>Days Sales Outstanding</h1>
          <p>Calculate your days sales outstanding</p>
          {/* <form action="dso" method="get"> */}
            <button className="btn btn-primary" type="submit" name="submit" value="DSO">DSO Calculation</button>
          {/* </form> */}
          
          <hr />
           <h1>Collection Effectiveness Index</h1>
          <p>Calculate the effectiveness of your collections team</p>
          {/* <form action="/cei" method="get"> */}
            <button className="btn btn-primary" type="submit" name="button" value="CEI">CEI Calculation</button>
          {/* </form> */}
    <hr />
    </div>
  </div>
</div>
</div>
<Footer />
</div>
  );
}

export default App;
