import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {addFavourite} from '../actions';
import {FeedItem} from 'src/constants';

export interface State {
  isLoading: boolean;
  favourites: Record<number, FeedItem>;
}

const initialState: State = {
  isLoading: false,
  favourites: {},
};

export default createReducer(initialState, {
  [addFavourite.type]: (state, action: PayloadAction<FeedItem>) => {
    console.log(action.payload);
    state.favourites = {
      [action.payload.title]: action.payload,
      ...state.favourites,
    };
  },
});
