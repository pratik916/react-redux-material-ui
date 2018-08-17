import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../helpers/withRoot";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import apiConfig from "../config/api";

import HeaderAppBar from "../components/shared/HeaderAppBar";
import Container from "../components/dashboard/Container";
import ContainerNew from "../components/dashboard/ContainerNew";
import Footer from "../components/shared/Footer";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 0
  },
  middleContainer: {
    flexGrow: 1,
    backgroundColor: "rgba(231, 231, 231, 0.39)"
  }
});

class App extends React.Component {
  componentDidMount() {
    axios.get(apiConfig.url).then(response => console.log(response, "Response from API"));
  }
  render() {
    const { classes } = this.props;

    return <Grid container className={classes.root} spacing={0} justify="center">
        <Grid item lg={10} md={12} xs={12} sm={12}>
          <HeaderAppBar />
          {/* <Container /> */}
          <Grid container className={classes.middleContainer} alignItems="center" justify="center">
            <ContainerNew />
            <Footer />
          </Grid>
        </Grid>
      </Grid>;
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
