import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Drawer} from 'material-ui';
import {withStyles} from 'material-ui/styles';
import {Route, Switch} from 'react-router-dom';
import ProjectListContainer from '../projects/containers/ProjectListContainer';
import ProjectMenuContainer from '../projects/containers/ProjectMenuContainer';

const DRAWER_WITH = 300;
const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: DRAWER_WITH
  }
});

class LeftMenu extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const {classes} = this.props;

    return (
      <Drawer variant="permanent" classes={{
        paper: classes.drawerPaper
      }}>
        <Switch>
          <Route path="/projects/:projectId" component={ProjectMenuContainer}/>
          <Route component={ProjectListContainer}/>
        </Switch>
      </Drawer>
    );
  }
}

export default withStyles(styles)(LeftMenu);