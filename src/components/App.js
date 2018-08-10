import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import Grid from "@material-ui/core/Grid";

import HeaderAppBar from "../components/HeaderAppBar";
import Container from "../components/Container";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2
  }
});

class App extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;

    return <Grid container className={classes.root} spacing={0} justify="center">
        <Grid item xs={10}>
          <HeaderAppBar />
          <Container />
        </Grid>
      </Grid>;
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
