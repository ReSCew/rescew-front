import {connect as reduxConnect} from 'react-redux';
import {bindActionCreators} from 'redux';
// TODO not the best solution
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
import {withRouter} from 'react-router-dom';

export const connect =
  (Container, mapStateToProps, actionCreators, needRouter = false) => {
    const mapDispatchToProps =
      (dispatch) => bindActionCreators(actionCreators, dispatch);

    const container = reduxConnect(mapStateToProps, mapDispatchToProps)(Container);
    return needRouter ? withRouter(container) : container;
  };