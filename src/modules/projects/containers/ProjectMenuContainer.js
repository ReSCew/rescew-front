import {connect} from '../../../helpers/ReduxHelper';
import ProjectMenu from '../components/ProjectMenu';
import {push} from 'react-router-redux';

export default connect(ProjectMenu,
    state => ({
      projects: state.projects.data,
      nodes: state.nodes.data,
      templates: state.templates.data,
    }),
    {navigate: push});