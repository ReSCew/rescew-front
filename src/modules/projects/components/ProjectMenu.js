import {Divider, List, ListItem, ListItemIcon, ListItemText} from 'material-ui';
import {ArrowBack, Description} from 'material-ui-icons';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import NodeTree from '../../nodes/components/NodeTree';

class ProjectMenu extends Component {
  static propTypes = {
    // TODO inject project
    project: PropTypes.object,
    nodes: PropTypes.object,
    templates: PropTypes.array,
    navigate: PropTypes.func.isRequired
  };

  getProject() {
    const {projects, match: {params: {projectId}}} = this.props;
    return projects.find(it => it.id === projectId);
  }

  renderHeader() {
    const {navigate} = this.props;
    const project = this.getProject();

    return (
      <ListItem button onClick={() => navigate('/')}>
        <ListItemIcon><ArrowBack/></ListItemIcon>
        <ListItemText inset primary={project ? project.name : 'Not Found'}/>
      </ListItem>
    );
  }

  renderMenu() {
    const project = this.getProject();
    if (!project) {
      return;
    }

    return (
      <ListItem button key={project.id}
                onClick={() => this.props.navigate(`/projects/${project.id}/templates`)}>
        <ListItemIcon><Description/></ListItemIcon>
        <ListItemText inset
                      primary={`Config Templates (${this.props.templates.length})`}/>
      </ListItem>);
  }

  render() {
    const {nodes, navigate, match} = this.props;

    const project = this.getProject();
    if (!project) {
      return (
        <List>
          {this.renderHeader()}
          <Divider/>
        </List>
      );
    }

    return (
      <div>
        <List>
          {this.renderHeader()}
          <Divider/>
          {this.renderMenu()}
        </List>
        <Divider/>
        <NodeTree nodes={nodes} navigate={navigate} match={match}/>
      </div>
    );
  }
}

export default ProjectMenu;