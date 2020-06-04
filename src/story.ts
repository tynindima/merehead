import { AnyAction, createStore } from 'redux';

const LOAD_USER = 'LOAD_USER';

export const loadingUser = (users: User[]) => ({ type: LOAD_USER, users });

export interface State {
  users: User[] | [];
}

const initialState: State = {
  users: [],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

const story = createStore(reducer, initialState);

export default story;
