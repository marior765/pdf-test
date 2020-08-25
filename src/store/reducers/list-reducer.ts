import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {addList, setListLoading} from '../actions';
import * as rss from 'react-native-rss-parser';

interface State {
  isLoading: boolean;
  list: rss.FeedItem[];
}

const initialState: State = {
  isLoading: false,
  list: [],
};

export default createReducer(initialState, {
  [addList.type]: (state, action: PayloadAction<rss.FeedItem[]>) => {
    state.list = action.payload;
  },
  [setListLoading.type]: (state, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
  },
});
