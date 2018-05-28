function data(state, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let search = [];
      const query = action.payload.query.toLowerCase();

      if (query) {
        const mediaFileArray = state.data.categories.map(category => category.playlist);
        // Flatten array of arrays.
        const mediaFiles = [].concat(...mediaFileArray);

        search = mediaFiles.filter((item) => {
          return item.title.toLowerCase().includes(query) ||
                item.author.toLowerCase().includes(query);
        });
      }

      return {
        ...state,
        search
      };
    }
    default:
      return state;
  }
}

export default data;
