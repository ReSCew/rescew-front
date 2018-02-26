import {connect} from '../../../helpers/ReduxHelper';
import AppBar from '../components/AppBar';
import {switchTheme} from '../../app/actions/theme';

export default connect(AppBar,
  state => ({theme: state.app.theme}),
  {switchTheme: switchTheme},
  true);