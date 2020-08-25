import {createAction} from '@reduxjs/toolkit';
import * as rss from 'react-native-rss-parser';

export const addFavourite = createAction<rss.FeedItem, string>('ADD_FAVOURITE');

export const setLoading = createAction<boolean, string>('SET_LOADING');
