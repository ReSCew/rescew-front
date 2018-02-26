import {connect} from '../../../helpers/ReduxHelper';
import ProjectList from '../components/ProjectList';
import {push} from 'react-router-redux';

export default connect(ProjectList,
  state => ({projects: state.projects.data}),
  {navigate: push});