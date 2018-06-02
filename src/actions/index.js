import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_MEDIA,
  SHOW_SPINNER,
  HIDE_SPINNER,
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
  };
}

export function searchMedia(query) {
  return (dispatch) => {
    dispatch(showSpinner());
    // Fake async function.
    setTimeout(() => {
      dispatch({
        type: SEARCH_MEDIA,
        payload: {
          query
        }
      });

      dispatch(hideSpinner());
    }, 2000);
  }
}

export function showSpinner() {
  return {
    type: SHOW_SPINNER,
  };
}

export function hideSpinner() {
  return {
    type: HIDE_SPINNER,
  };
}
