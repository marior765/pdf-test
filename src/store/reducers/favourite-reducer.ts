import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {addFavourite} from '../actions';
import * as rss from 'react-native-rss-parser';

interface State {
  isLoading: boolean;
  favourites: rss.FeedItem[];
}

const initialState: State = {
  isLoading: false,
  favourites: [],
};

export default createReducer(initialState, {
  [addFavourite.type]: (state, action: PayloadAction<rss.FeedItem>) => {
    state.favourites.push(action.payload);
  },
});
