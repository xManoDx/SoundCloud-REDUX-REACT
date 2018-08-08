export const setSongs = (payload) => ({
  type: 'SET_TRACKS',
  payload
});

export const fetchSongs = (url) => async (dispatch) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    dispatch(setSongs(data));
  } catch(err) {

  }
}
