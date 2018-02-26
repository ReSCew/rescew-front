import {connect} from '../../../helpers/ReduxHelper';
import TemplateCard from '../components/card/TemplateCard';
import {push} from 'react-router-redux';

export default connect(TemplateCard,
  state => ({templates: state.templates.data}),
  {navigate: push});