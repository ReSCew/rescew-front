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
import TemplateProperty from './TemplateProperty';
import TemplateField from './TmplateField';

const makeTopProperty = (name, label, text) => ({name, label, text});
const TOP_PROPERTIES = [
  makeTopProperty('name', 'Name', 'Property name in result config'),
  makeTopProperty('label', 'Label', 'Label to display here')
];

class TemplateCard extends Component {
  static propTypes = {
    template: PropTypes.object,
    navigate: PropTypes.func.isRequired,
    classes: PropTypes.object,
    match: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    // TODO temp
    const {templates, match} = props;
    this.template = templates.find(it => it.id === match.params.templateId);


    this.state = {...this.template};
  }

  handlePropertyChange = field => event => {
    this.setState({...this.state, [field]: event.target.value});
  };

  renderRootText = ({name, label, text}) => {
    return (
      <TemplateProperty property={name}
                        key={name}
                        label={label}
                        text={text}
                        value={this.state[name]}
                        handleChange={this.handlePropertyChange(name)}/>
    );
  };

  renderField(field, index) {
    return (
      <TemplateField key={field.name} field={field}/>
    );
  }

  render() {
    // tODO temp
    let {template, classes} = this.props;
    template = this.template;

    if (!template) {
      return (<Typography variant="headline">Not found</Typography>);
    }

    return (
      <form className={classes.templateForm}>
        {TOP_PROPERTIES.map(this.renderRootText)}

        <div className={classes.fieldsWrapper}>
          <Typography variant="subheading">Fields</Typography>
          {
            this.state.fields.map((field, index) => this.renderField(field, index))
          }
        </div>
      </form>
    );
  }
}

const styles = theme => ({
  topField: {
    margin: '0 50px 10px 0'
  },
  fieldsWrapper: {
    marginTop: '20px'
  },
  templateForm: {
    marginTop: '20px'
  },
  fieldWrapper: {}
});

export default withStyles(styles)(TemplateCard);