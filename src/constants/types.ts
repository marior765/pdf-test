import {FC} from 'react';
import {AnyAction} from 'redux';
import {RootStateOrAny} from 'react-redux';
import {ThunkDispatch as ThunkType} from 'redux-thunk';

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

export type ThunkDispatch<T extends AnyAction = AnyAction> = ThunkType<
  Promise<void>,
  RootStateOrAny,
  T
>;
