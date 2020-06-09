import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dso extends Component {
constructor(props){
  super(props);
  this.state = { ArBal: "", CrSales: "", days: "31", dso: "" }; 

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.calcDso = this.calcDso.bind(this);
};

handleChange(e) {
  this.setState({ [e.target.name] : e.target.value });
}

calcDso(){
  let dsoValue =  Math.round(this.state.ArBal / this.state.CrSales * this.state.days);
  this.setState({dso: dsoValue});
}

handleSubmit(event) {
  this.calcDso()
  event.preventDefault();
}

render(){
  return (
    <form onSubmit={this.handleSubmit}>
<div className="main-container">
  <div className="column">
    <div className="col-sm-auto">
      <div className="col-md-auto flex justify-content-center">
        <h1>Days Sales Outstanding</h1>
    
          <div className="variable-input">
            <p class="description-text">Enter your total receivables balance</p>
            <label>
            <input type="number" name="ArBal" value={this.state.ArBal} onChange={this.handleChange} placeholder="AR Balance"/>
            </label>
          </div>

          <div className="variable-input">
            <p className="description-text">Enter your current credit sales</p>
            <label>
            <input type="number" name="CrSales" value={this.state.CrSales} onChange={this.handleChange} placeholder="Credit Sales" />
            </label>
          </div>
          <div className="variable-select">
            <p className="description-text">Select the number of days in current month</p>
            <select type="number" name="days" value={this.state.days} onChange={this.handleChange}>
              <option value="31">31</option>
              <option value="30">30</option>
              <option value="29">29</option>
              <option value="28">28</option>
            </select>
          </div>
        <div className="button">
        <button className="btn btn-success btn-sm" type="submit" name="submit" onClick={this.calcDso}>Calculate DSO </button>
        </div>
        <div className="button">
          <Link to='/'>
            <button className="btn btn-warning" type="button">Home</button>
          </Link>
        </div>

        <div className="result">
          <p name="dso">Your DSO result is: {this.state.dso}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
      );
  }
}

export default Dso;
