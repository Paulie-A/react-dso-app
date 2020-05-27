import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Cei extends Component {
  constructor(props){
    super(props);
    this.state = { BegArBal: "", CurCrSales: "", EndTotBal: "", EndCurBal: "", cei: "" };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.calcCei = this.calcCei.bind(this);
  };

  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }
  
  calcCei(){
    let ceiValue =  Math.ceil( (this.state.BegArBal + this.state.CurCrSales - this.state.EndTotBal) / (this.state.BegArBal + this.state.CurCrSales - this.state.EndCurBal) * 100);
    this.setState({cei: ceiValue});
  }
  
  handleSubmit(event) {
    this.calcCei()
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="main-container">
  <div className="column">
    <div className="col-sm-auto">
      <div className="col-md-auto flex justify-content-center">
        <h1>Collection Effectiveness Index</h1>
          <div className="variable-input">
            <p className="description-text">Enter your beginning receivables balance</p>
            <input type="number" name="BegArBal" value={this.state.BegArBal} onChange={this.handleChange} placeholder="Beginning AR balance" />
          </div>
          <div className="variable-input">
            <p classNAme="description-text">Enter your current credit month sales</p>
            <input type="number" name="CurCrSales" value={this.state.CurCrSales} onChange={this.handleChange} placeholder="Total curr month sales" />
          </div>
          <div className="variable-input">
            <p className="description-text">Enter your total ending receivables balance</p>
            <input type="number" name="EndTotBal" value={this.state.EndTotBal} onChange={this.handleChange} placeholder="End total receivables" />
          </div>
          <div className="variable-input">
            <p className="description-text">Enter your total current month receivables balance</p>
            <input type="number" name="EndCurBal" value={this.state.EndCurBal} onChange={this.handleChange} placeholder="End curr receivables" />
          </div>
         <div className="button">
         <button className="btn btn-success btn-sm" type="submit" name="submit">Calculate CEI</button>
         </div>
          <div className="button">
          <Link to="/">
            <button className="btn btn-warning" type="button">Home</button>
          </Link>
        </div>
        <div className="result">
          <p name="cei">Your CEI result is: {this.state.cei}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</form>

    );
}
}

export default Cei;
