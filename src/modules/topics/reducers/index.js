import constants from '../Constants';

const initialState = {
  // isInitialized: false,
  // isBeingFetched: false,
  // isEndReached: false,
  topics: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case constants.FETCHED:
      return {...state, topics: payload};

    case constants.DELETED:
      return {...state, topics: state.topics.filter(it => it.id !== payload)};
    default:
      return state;
  }
}