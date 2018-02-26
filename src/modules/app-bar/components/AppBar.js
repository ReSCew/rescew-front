import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {InvertColors} from 'material-ui-icons';
import {Route} from 'react-router-dom';

import TemplatesControls from '../../templates/components/app-bar/BarControls';

const styles = {
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    switchTheme: PropTypes.func.isRequired
  };

  render() {
    const {classes} = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit"
                      aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>

          <Route path="/projects/:id/templates" component={TemplatesControls}/>

          <IconButton color="inherit" onClick={() => this.props.switchTheme()}>
            <InvertColors/>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(MenuAppBar);