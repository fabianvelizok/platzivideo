import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_MEDIA,
} from '../action-types';

export function openModal(mediaId) {
  return {
    type: OPEN_MODAL,
    payload: { mediaId },
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
    payload: {}
  };
}

export function searchMedia(query) {
  return (dispatch) => {
    // Fake async function.
    setTimeout(() => {
      dispatch({
        type: SEARCH_MEDIA,
        payload: {
          query
        }
      });
    }, 2000);
  }
}
