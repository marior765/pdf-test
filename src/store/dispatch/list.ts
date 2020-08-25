import {Dispatch} from 'redux';
import {setListLoading, addList} from '../actions';
import * as rssParser from 'react-native-rss-parser';

export const fetchList = () => async (dispatch: Dispatch) => {
  dispatch(setListLoading(true));
  try {
    const response = await fetch(
      'http://www.nasa.gov/rss/dyn/breaking_news.rss',
    );
    const text = await response.text();
    const responseData = await rssParser.parse(text);
    dispatch(addList(responseData.items));
  } catch {
  } finally {
    dispatch(setListLoading(false));
  }
};
