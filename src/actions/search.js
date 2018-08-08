import { setSongs } from './songActions';

export const searchSongs = (url) => async (dispatch) => {
  const res = await fetch(url);
  const data = await res.json();

  dispatch(setSongs(data));
};
