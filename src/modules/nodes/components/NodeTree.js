import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from 'material-ui';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Constants from '../constants';

class NodeTree extends Component {
  static propTypes = {
    nodes: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  renderIcon(type) {
    if (!Object.values(Constants.TYPES).includes(type)) {
      return Constants.DEFAULT_ICON;
    }

    return Constants.TYPE_ICONS[type];
  }

  renderNode(node) {
    const {navigate, match} = this.props;

    const result = (
      <ListItem dense key={node.id} button
                onClick={() => navigate(`${match.url}/node/${node.id}`)}>
        <ListItemIcon>{this.renderIcon(node.type)}</ListItemIcon>
        <ListItemText inset primary={node.name}/>
      </ListItem>
    );

    if (!node.children || node.children.length === 0) {
      return result;
    }

    return [result,
      <List dense disablePadding key={`${node.id}-children`}
            className={this.props.classes.nested}>
        {node.children.map(it => this.renderNode(it))}
      </List>
    ];
  }

  render() {
    const {nodes} = this.props;

    console.warn(nodes);

    return (
      <List>
        {this.renderNode(nodes)}
      </List>
    );
  }
}

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(NodeTree);