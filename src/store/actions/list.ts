import {createAction} from '@reduxjs/toolkit';
import * as rss from 'react-native-rss-parser';

export const addList = createAction<rss.FeedItem[], string>('ADD_LIST');

export const setListLoading = createAction<boolean, string>('SET_LOADING');
