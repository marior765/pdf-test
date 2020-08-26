import {FC} from 'react';
import * as rss from 'react-native-rss-parser';
import {State as FavouritesState} from 'src/store/reducers/favourite-reducer';
import {State as ListState} from 'src/store/reducers/list-reducer';

export interface INavigation {
  popToTop: () => {};
  pop: () => {};
  navigate: (route: string, params?: any) => {};
  goBack: () => {};
  canGoBack: () => {};
  openDrawer: () => {};
  dispatch: (param: any) => {};
}

export type Component<P> = FC<Readonly<P>>;

export type Page<P> = FC<Readonly<P & {navigation: INavigation}>>;

export type FeedItem = rss.FeedItem;

export interface RootState {
  listReducer: ListState;
  favouriteReducer: FavouritesState;
}
