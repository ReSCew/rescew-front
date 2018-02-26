import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import projects from '../modules/projects/reducers/list';
import topics from '../modules/topics/reducers/index';
import nodes from '../modules/nodes/reducer';
import templates from '../modules/templates/reducer';
import app from '../modules/app/reducer';

export default combineReducers({
  topics,
  projects,
  nodes,
  templates,
  app,
  router: routerReducer
});