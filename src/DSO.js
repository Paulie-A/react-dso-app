import React from 'react';
import Header from  './Header';
import Footer from './Footer';

function DSO() {
    return (
        <Header />
<div className="main-container">
  <div className="column">
    <div className="col-sm-auto">
      <div className="col-md-auto flex justify-content-center">
        <h1>Days Sales Outstanding</h1>

        {/* <form action="/dso" method="post"> */}
          <div className="variable-input">
            <p class="description-text">Enter your total receivables balance</p>
            <input type="number" name="Ar_bal" placeholder="AR Balance" />
          </div>
     
          <div className="variable-input">
            <p className="description-text">Enter your current credit sales</p>
            <input type="number" name="credit_sales" placeholder="Credit Sales" />
          </div>
     
          <div className="variable-select">
            <p className="description-text">Select the number of days in current month</p>
            <select type="number" name="days">
              <option value="31">31</option>
              <option value="30">30</option>
              <option value="29">29</option>
              <option value="28">28</option>
            </select>
          </div>
        
          <button className="btn btn-success btn-sm" type="submit" name="submit">Calculate DSO </button>
         {/* <form/> */}
  
      </div>
    </div>
  </div>
  <Footer />
</div>
    );

}

export default DSO;