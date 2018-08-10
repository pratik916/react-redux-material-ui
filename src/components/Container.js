import React, { Component } from 'react';

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AccessibleForwardOutlined from "@material-ui/icons/AccessibleForwardOutlined";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // width: 500,
        // height: 450,
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 50,
    },
    subheader: {
        width: '100%',
    },
    icon: {
        margin: '45px 0 45px 0',
        fontSize: 72,
    }
});

class Container extends Component {
    render() {
        const { classes } = this.props;
        return <GridList cellHeight={290} className={classes.gridList} cols={3} spacing={60}>
            <GridListTile>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" variant="headline">
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
            </GridListTile>

            <GridListTile>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" variant="headline">
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
            </GridListTile>

            <GridListTile>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" variant="headline">
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
            </GridListTile>

            <GridListTile>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" variant="headline">
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
            </GridListTile>

            <GridListTile>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" variant="headline">
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
            </GridListTile>

            <GridListTile>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" variant="headline">
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
            </GridListTile>
          </GridList>;
    }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Container);
