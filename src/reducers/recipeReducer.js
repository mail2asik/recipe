import { DASHBOARD_MESSAGE } from '../constants/actionTypes';

const initialState = {
  dashboard_message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_MESSAGE:
        return {
            dashboard_message: action.dashboard_message
        };
    default:
      return state;
  }
};
