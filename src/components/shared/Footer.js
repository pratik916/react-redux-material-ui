import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: theme.spacing.unit * 10,
    marginTop: theme.spacing.unit,
    backgroundColor: "#090d16",
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  footerText: {
    color: "white"
  }
});

class Footer extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Grid container className={classes.root} alignItems="center">
        <Typography variant="subheading" component="title" className={classes.footerText}>
          @ {(new Date()).getFullYear()} My Company
        </Typography>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
