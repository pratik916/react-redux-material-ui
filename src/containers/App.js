import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../helpers/withRoot";
import Grid from "@material-ui/core/Grid";

import HeaderAppBar from "../components/shared/HeaderAppBar";
import Container from "../components/dashboard/Container";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0
  }
});

class App extends React.Component {
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