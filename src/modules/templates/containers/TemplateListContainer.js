import {connect} from '../../../helpers/ReduxHelper';
import TemplateList from '../components/list/TemplateList';
import {push} from 'react-router-redux';

export default connect(TemplateList,
  state => ({templates: state.templates.data}),
  {navigate: push});