export const SAVE_MOVIES = "SAVE_MOVIES";

export const saveMovies = (movies) => ({
  type: SAVE_MOVIES,
  payload: movies,
});
