import constants from './constants';

const initialState = {
  theme: constants.DEFAULT_THEME
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case constants.ACTIONS.SWITCH_THEME:
      return {
        ...state,
        theme: state.theme === constants.THEMES.dark ?
          constants.THEMES.light : constants.THEMES.dark
      };
    default:
      return state;
  }
}