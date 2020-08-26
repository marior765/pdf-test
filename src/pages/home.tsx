import React, {useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {Page, FeedItem, RootState} from 'src/constants';
import {fetchList, addFavourite} from 'src/store';
import {Swipeable, Container} from 'src/components';
import {connect} from 'react-redux';
import {ListItem} from 'react-native-elements';

interface Props {
  fetchList: () => void;
  addFavourite: (item: FeedItem) => void;
  list: FeedItem[];
  isLoading: boolean;
}

export const HomePage: Page<Props> = ({
  fetchList,
  list,
  addFavourite,
  isLoading,
}) => {
  useEffect(() => {
    fetchList();
  }, []);

  const keyExtractor = useCallback(
    (item: FeedItem, index: number) => index.toString(),
    [],
  );

  const renderItem = ({item}: {item: FeedItem}) => (
    <Swipeable onSwipe={() => addFavourite(item)}>
      <ListItem title={item.title} bottomDivider chevron />
    </Swipeable>
  );

  return (
    <Container isLoading={isLoading}>
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </Container>
  );
};

const mapDispatchToProps = {
  fetchList,
  addFavourite,
};

export const Home = connect(
  ({listReducer}: RootState) => ({
    list: listReducer.list,
    isLoading: listReducer.isLoading,
  }),
  mapDispatchToProps,
)(HomePage);
