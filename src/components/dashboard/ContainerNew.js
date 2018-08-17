import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AccessibleForwardOutlined from "@material-ui/icons/AccessibleForwardOutlined";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 1,
    backgroundColor: "rgba(231, 231, 231, 0.39)"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: theme.palette.text.secondary
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  cardContainer: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    minHeight: theme.spacing.unit * 80
  },
  card: {
    // flex: "1 0 auto",
    height: theme.spacing.unit * 32
  },
  gridContainer: {

  },
  singleGrid: {
    flex: "1 0 auto",
  },
  icon: {
    fontSize: 72,
    margin: '45px 0 45px 0',
  }
});

class ContainerNew extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid item lg={9} md={9} xs={11} sm={10} className={classes.gridContainer} >
                <Grid className={classes.cardContainer} container justify="space-between" alignItems="center" spacing={40} alignContent="center">
                    {
                        Array(6).fill(0).map((item,index) => (
                            <Grid key={index} item lg={4} md={4} sm={6} xs={12} className={classes.singleGrid}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" variant="title">
                                            Word of the Day
                                        </Typography>
                                        <Typography align="center">
                                            <AccessibleForwardOutlined className={classes.icon} />
                                        </Typography>
                                        <Typography gutterBottom>
                                            {`
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                        `}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid> )
                        )
                    }

                </Grid>
            </Grid>
        );
    }
}

ContainerNew.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainerNew);
