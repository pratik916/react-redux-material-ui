import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import MenuIcon from '@material-ui/icons/Menu';
import AccountBalanceOutlined from "@material-ui/icons/AccountBalanceOutlined";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  bannerContainer: {
    height: 0,
    paddingTop: "25%"
  },
  bannerContent: {
    bottom: "10%",
    position: "absolute",
    display: "block",
    width: '100%'
  },
  bannerHeader: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "rgba(250, 250, 250, 0.78)"
  },
  bannerText: {
    fontWeight: "bold",
    color: "rgba(250, 250, 250, 0.78)",
    float: 'right'
  },
  banner: {
    position: 'relative'
  }
};

class HeaderAppBar extends Component {
    render() {
        const { classes } = this.props;
        return <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton color="inherit" className={classes.menuButton}>
                  <AccountBalanceOutlined />
                </IconButton>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.flex}>
                  XYZ Management Panel
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
            <Card className={classes.card + ' ' + classes.banner}>
              <CardMedia className={classes.bannerContainer} image="/images/banner.jpg" title="Contemplative Reptile" />
              <CardContent className={classes.bannerContent}>
                <Grid container>
                  <Grid item lg={6}>
                    <Typography gutterBottom variant="display1" component="h1" className={classes.bannerHeader}>
                      XYZ Management Panel
                    </Typography>
                  </Grid>
                  <Grid item lg={6}>
                    <Typography gutterBottom variant="headline" component="h3" className={classes.bannerText}>
                      <LocationOnOutlined/> My Location
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>;
    }
}

HeaderAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderAppBar);
