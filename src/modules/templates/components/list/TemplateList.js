import {List, withStyles} from 'material-ui';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import TemplateListItem from './TemplateListItem';

class TemplateList extends Component {
  static propTypes = {
    templates: PropTypes.array.isRequired,
    navigate: PropTypes.func.isRequired,
    classes: PropTypes.object,
    match: PropTypes.object.isRequired
  };

  renderItems() {
    const {templates, navigate, classes, match} = this.props;
    if (templates.length === 0) {
      return null;
    }

    return templates.map(
      it => <TemplateListItem match={match} key={it.id} template={it} navigate={navigate}/>);
  }

  render() {
    const {templates, navigate, classes} = this.props;

    return (
      <div className={classes.templatesWrapper}>
        {this.renderItems()}
      </div>
    );
  }
}

const styles = theme => ({
  templatesWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

export default withStyles(styles)(TemplateList);