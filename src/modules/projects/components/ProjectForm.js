import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ProjectList extends Component {
  static propTypes = {
    project: PropTypes.object
  };

  render() {
    // const {project} = this.props;

    return (
      <div>
        <h1>New Project</h1>
      </div>
    );
  }
}