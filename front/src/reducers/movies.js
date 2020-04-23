import { SAVE_MOVIES } from "../actions/movies";

const initialState = {
  movies: [],
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MOVIES:
      console.log("save movies");
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movies;
