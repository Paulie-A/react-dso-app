import React from 'react';
import { Link } from 'react-router-dom';


function Cei() {
    return (
        <div className="main-container">
  <div className="column">
    <div className="col-sm-auto">
      <div className="col-md-auto flex justify-content-center">
        <h1>Collection Effectiveness Index</h1>

        {/* <form action="/cei" method="post"> */}
          <div className="variable-input">
            <p className="description-text">Enter your beginning receivables balance</p>
            <input type="number" name="beg_ar_bal" placeholder="Beginning AR balance" />
          </div>

          <div className="variable-input">
            <p classNAme="description-text">Enter your current credit month sales</p>
            <input type="number" name="cur_cr_sales" placeholder="Total curr month sales" />
          </div>

          <div className="variable-input">
            <p className="description-text">Enter your total ending receivables balance</p>
            <input type="number" name="end_tot_bal" placeholder="End total receivables" />
          </div>

          <div className="variable-input">
            <p className="description-text">Enter your total current month receivables balance</p>
            <input type="number" name="end_cur_bal" placeholder="End curr receivables" />
          </div>

         <div className="button">
         <button className="btn btn-success btn-sm" type="submit" name="submit">Calculate CEI</button>
         </div>
          <div className="button">
          <Link to="/">
            <button className="btn btn-warning" type="button">Home</button>
          </Link>
        </div>
        {/* </form> */}
        {/* <br> */}
      </div>
    </div>
  </div>
</div>

    );
}

export default Cei;
