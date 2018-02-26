import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button} from 'material-ui';
import {Add} from 'material-ui-icons';

class Content extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const {classes} = this.props;

    return (
      <Button size="small">
        Add template
        <Add className={classes.icon}/>
      </Button>
    );
  }
}

let styles = theme => ({
  icon: {
    marginLeft: theme.spacing.unit
  }
});
export default withStyles(styles)(Content);