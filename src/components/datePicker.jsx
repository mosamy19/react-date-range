import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

const styles = {
  grid: {
    width: "60%"
  }
};

class MaterialUIPickers extends React.Component {
  // state = {
  //   selectedDate: new Date(Date.now())
  // };

  render() {
    const { classes, label, selectedDate, ...rest } = this.props;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            margin="normal"
            label={label}
            value={selectedDate}
            format={"dd/MM/yyyy"}
            views={["year", "month", "day"]}
            {...rest}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialUIPickers);
