import React, {useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {Page} from 'src/constants';
import {fetchList, addFavourite} from 'src/store';
import {Swipeable} from 'src/components';
import {connect} from 'react-redux';
import {ListItem} from 'react-native-elements';
import * as rss from 'react-native-rss-parser';

interface Props {
  fetchList: () => void;
  addFavourite: (item: rss.FeedItem) => void;
  list: any[];
}

export const HomePage: Page<Props> = ({fetchList, list, addFavourite}) => {
  useEffect(() => {
    fetchList();
  }, []);

  const keyExtractor = useCallback(
    (item: rss.FeedItem, index: number) => index.toString(),
    [],
  );

  const renderItem = ({item}: {item: rss.FeedItem}) => (
    <Swipeable onSwipe={() => addFavourite(item)}>
      <ListItem title={item.title} bottomDivider chevron />
    </Swipeable>
  );

  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
  );
};

const mapDispatchToProps = {
  fetchList,
  addFavourite,
};

export const Home = connect(
  (store) => ({
    list: store.listReducer.list,
  }),
  mapDispatchToProps,
)(HomePage);
