import {Reboot} from 'material-ui';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from '../styles';
import LeftMenu from '../../left-menu/LeftMenu';
import Content from './Content';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';


class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.string.isRequired
  };

  render() {
    const {classes, theme} = this.props;

    // MUI theme
    console.warn(theme);

    const muiTheme = createMuiTheme({
      palette: {
        type: theme
      }
    });

    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className={classes.appFrame}>
          <Reboot/>
          <LeftMenu/>
          <Content/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);