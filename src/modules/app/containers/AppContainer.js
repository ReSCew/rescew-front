import {connect} from '../../../helpers/ReduxHelper';
import App from '../components/App';

export default connect(App,
  state => ({theme: state.app.theme}),
  {}, true);