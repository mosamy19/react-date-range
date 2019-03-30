import React, { Component } from "react";
import MaterialUIPickers from "./datePicker";

class Main extends Component {
  state = {
    startDate: {
      label: "Start Date",
      selectedDate: new Date(Date.now())
    },
    endDate: {
      label: "End Date",
      selectedDate: null
    }
  };

  handleStartDate = date => {
    debugger;
    const { startDate, endDate } = this.state;
    startDate.selectedDate = date;
    if (!endDate.selectedDate) {
      endDate.selectedDate = new Date(date);
      this.setState({ endDate });
    }
    this.setState({ startDate });
  };

  handleEndDate = date => {
    const { endDate } = this.state;
    endDate.selectedDate = date;
    this.setState({ endDate });
  };

  render() {
    const { startDate, endDate } = this.state;
    return (
      <>
        {/* Start Date */}
        <MaterialUIPickers
          onChange={this.handleStartDate}
          label={startDate.label}
          selectedDate={startDate.selectedDate}
          maxDate={endDate.selectedDate}
        />
        {/* End Date */}
        <MaterialUIPickers
          onChange={this.handleEndDate}
          label={endDate.label}
          selectedDate={endDate.selectedDate}
          minDate={startDate.selectedDate}
        />
      </>
    );
  }
}

export default Main;
