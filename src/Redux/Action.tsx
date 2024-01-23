import {CHANGE_THEME} from './ActionType';

export const chagetheme = (type: boolean) => ({
  type: CHANGE_THEME,
  payload: type
});
