import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  withStyles,
  IconButton, FormControl, InputLabel, Input, FormHelperText, Paper
} from 'material-ui';
import {Edit, Delete} from 'material-ui-icons';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TemplateProperty extends Component {
  static propTypes = {
    classes: PropTypes.object,
    property: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string,
    handleChange: PropTypes.func.isRequired
  };

  render() {
    const {property, label, text, value, handleChange} = this.props;

    return (
      <FormControl className={this.props.classes.topField}
                   aria-describedby={`${property}-helper-text`}>
        <InputLabel htmlFor={`${property}-helper`}>{label}</InputLabel>
        <Input id={`${property}-helper`} value={value} onChange={handleChange}/>
        {text &&
        <FormHelperText id={`${property}-helper-text`}>{text}</FormHelperText>}
      </FormControl>
    );
  }
}

const styles = theme => ({
  topField: {
    margin: '0 50px 10px 0'
  }
});

export default withStyles(styles)(TemplateProperty);