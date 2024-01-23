import {CHANGE_THEME} from './ActionType';

export const MyReducer = (state = false, action: any) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;

    default:
      return state;
  }
};
