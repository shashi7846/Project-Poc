import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    loanAmount: "500",
    loanDuration: "6",
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.loanAmount !== this.state.loanAmount ||
      prevState.loanDuration !== this.state.loanDuration
    ) {
      axios
        .get(
          `https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.loanAmount}&numMonths=${this.state.loanDuration}`
        )
        .then((resp) => {
          this.props.onChange(resp.data);
          // this.setState({ loanAmount: this.state.loanAmount, loanDuration: this.state.loanDuration });
        });
    }
  };

  render() {
    return (
      <div className="leftSide">
        <div className="amount">
          <form onChange={this.handleChange}>
            <label className="labelSlider" htmlFor="formControlRange">
              Loan Amount{" "}
            </label>
            <br />
            <span className="values"> ${this.state.loanAmount}</span>
            <input
              type="range"
              className="amountInput form-control-range"
              onChange={(event) => {
                this.setState({ loanAmount: event.target.value });
              }}
              value={this.state.loanAmount}
              min="500"
              max="5000"
            />
          </form>
        </div>

        <div className="duration">
          <form onChange={this.handleChange}>
            <label className="labelSlider" htmlFor="formControlRange">
              Loan Duration{" "}
            </label>
            <br />
            <span className="values">{this.state.loanDuration} Months</span>
            <input
              type="range"
              className="amountInput form-control-range"
              onChange={(event) => {
                this.setState({ loanDuration: event.target.value });
              }}
              value={this.state.loanDuration}
              min="6"
              max="24"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
