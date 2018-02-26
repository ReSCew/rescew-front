import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Topics from '../../topics/components/Topics';
import styles from '../styles';
import ProjectForm from '../../projects/components/ProjectForm';
import Home from './HomeScreen';
import TemplateListContainer from '../../templates/containers/TemplateListContainer';
import TemplateCardContainer from '../../templates/containers/TemplateCardContainer';
import AppBar from '../../app-bar/containers/AppBarContainer';

class Content extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const {classes} = this.props;

    return (
      <main className={classes.content}>
        <AppBar/>

        <Route exact path="/" component={Home}/>
        <Route path="/new-project" component={ProjectForm}/>

        <Route exact path="/projects/:projectId" component={({match}) =>
          <h1>Project {match.params.projectId}</h1>}/>

        <Route exact path="/projects/:projectId/templates"
               component={TemplateListContainer}/>

        <Route exact path="/projects/:projectId/templates/:templateId"
               component={TemplateCardContainer}/>

        <Route exact path="/projects/:projectId/node/:nodeId"
               component={() => <h1>/node details</h1>}/>


        <Route path="/topics" component={Topics}/>
      </main>
    );
  }
}

export default withStyles(styles)(Content);