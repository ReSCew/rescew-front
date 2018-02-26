import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui';
import {AddCircle, Delete, SettingsApplications} from 'material-ui-icons';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    navigate: PropTypes.func.isRequired
  };

  renderHeader() {
    return (
      <ListItem button key="no-projects"
                onClick={() => this.props.navigate('/new-project')}>
        <ListItemText inset primary="Projects"/>
        <ListItemIcon>
          <AddCircle/>
        </ListItemIcon>
      </ListItem>
    );
  }

  renderProjectItems(projects) {
    if (projects.length === 0) {
      return (
        <ListItem>
          <ListItemText inset primary="You have no projects yet"/>
        </ListItem>
      );
    }

    return projects.map(it => this.renderProjectItem(it));
  }


  renderProjectItem(project) {
    return (
      <ListItem button key={project.id}
                onClick={() => this.props.navigate(`/projects/${project.id}`)}>

        <ListItemIcon>
          <SettingsApplications/>
        </ListItemIcon>
        <ListItemText inset primary={project.name}/>

        <ListItemSecondaryAction>
          <IconButton aria-label="Delete">
            <Delete/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  render() {
    const {projects} = this.props;

    return (
      <List>
        {this.renderHeader()}
        <Divider/>
        {this.renderProjectItems(projects)}
      </List>
    );
  }
}