import constants from '../Constants';

import loadTopics from '../../../tmp/DataSource';

// this is action creator
export const fetchTopics = () => async (dispatch) => {
  try {
    const data = await loadTopics();
    // this is action
    dispatch({type: constants.FETCHED, payload: data});
  } catch (e) {
    console.warn(e);
  }
};

export const deleteTopic = (id) => (
  {type: constants.DELETED, payload: id}
);