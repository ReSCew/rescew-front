import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  withStyles,
  IconButton, FormControl, InputLabel, Input, FormHelperText, Paper, Select,
  MenuItem, Switch, FormControlLabel
} from 'material-ui';
import {Edit, Delete} from 'material-ui-icons';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Constants from '../../constants';

class TemplateField extends Component {
  static propTypes = {
    classes: PropTypes.object,
    field: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
  };

  renderDefaultValue() {
    const {field} = this.props;
    let input, needLabel = true;

    switch (field.type) {
      case Constants.FIELD_TYPES.boolean:
        needLabel = false;
        input = (<FormControlLabel
          control={
            <Switch
              checked={field.defaultValue}
              onChange={() => ''}
            />
          }
          label="Default value"
        />);
        break;
      case Constants.FIELD_TYPES.object:
        input =
          <Input id={`defaultValue-helper`} value="Not implemented" disabled/>;
        break;
      default:
        input = <Input id={`defaultValue-helper`} value={field.defaultValue}
                       onChange={() => ''}/>;
        break;
    }

    return (
      <FormControl className={this.props.classes.topField}>
        {needLabel && <InputLabel htmlFor={`defaultValue-helper`}>Default
          value</InputLabel>}
        {input}
      </FormControl>
    );
  }

  renderType() {
    return (
      <FormControl className={this.props.classes.topField}
                   aria-describedby={`type-helper-text`}>
        <InputLabel htmlFor={`type-helper`}>Type</InputLabel>

        <Select
          value={this.props.field.type}
          onChange={() => ''}
          inputProps={{
            name: 'type',
            id: 'type-helper'
          }}>
          {
            Object.values(Constants.FIELD_TYPES).map(it =>
              <MenuItem value={it} key={it}>{it}</MenuItem>)

          }
        </Select>

      </FormControl>
    );
  }

  renderTextInput(property, label, handleChange) {
    return (
      <FormControl className={this.props.classes.topField}
                   aria-describedby={`${property}-helper-text`}>
        <InputLabel htmlFor={`${property}-helper`}>{label}</InputLabel>
        <Input id={`${property}-helper`} value={this.props.field[property]}
               onChange={handleChange}/>
      </FormControl>
    );
  }

  render() {
    const {property, label, text, value, handleChange, classes} = this.props;

    return (
      <Paper className={classes.fieldPaper}>
        {this.renderTextInput('name', 'Name')}
        {this.renderTextInput('label', 'Label')}
        {this.renderType()}
        {this.renderDefaultValue()}
      </Paper>
    );
  }
}

const styles = theme => ({
  fieldPaper: {
    padding: '5px 10px 0px 10px',
    marginBottom: '10px'
  },
  topField: {
    margin: '0 50px 10px 0'
  }
});

export default withStyles(styles)(TemplateField);