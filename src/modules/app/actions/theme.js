import constants from '../constants';

export const switchTheme = theme => ({
  type: constants.ACTIONS.SWITCH_THEME, payload: theme
});