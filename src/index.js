import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import './style.css'

import Song from './components/Song'
import App from './components/App'


const initialState = {
  tracks: [],
    filters: ['CHILL', 'DEEP', 'DUBSTEP','HOUSE','PROGRESSIVE','TECH','TRANCE','TROPICAL'],
  playlistLink: 'https://api.soundcloud.com/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505',
  currentSong: null,
};

function playlist(state = initialState, action) {
  // switch (action.type) {
  //   case 'ADD_TRACKS':
  //     return {...}
  //   case 'SET_TRACKS':
  //     return {...}
  // }
  if (action.type === 'ADD_TRACKS') {
    return {
      ...state,
      tracks: [...state.tracks, ...action.payload]
    };
  } else if (action.type === 'SET_TRACKS') {
    return {
      ...state,
      tracks: [...action.payload]
    };
  } else if (action.type ==='FILTER_TRACKS') {
      return {
        ...state,
        playlistLink: action.payload
  };
  } else if (action.type ==='SEARCH_TRACKS') {
        return {
          ...state,
          playlistLink: action.payload
    };
  } return state;
}

const store = createStore(
  playlist,
  applyMiddleware(thunk)
);



render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('test')

);
