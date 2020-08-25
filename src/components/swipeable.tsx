import React, {useRef, MutableRefObject} from 'react';
import {Animated, StyleSheet} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import {Component} from 'src/constants';

import SwipeableComponent from 'react-native-gesture-handler/Swipeable';

interface Props {
  children: React.ReactNode;
  onSwipe: () => void;
}

export const Swipeable: Component<Props> = ({children, onSwipe}) => {
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          Added to Favourite
        </Animated.Text>
      </RectButton>
    );
  };

  const _swipeableRow: MutableRefObject<SwipeableComponent | null> = useRef(
    null,
  );

  const close = () => {
    _swipeableRow.current?.close();
  };

  return (
    <SwipeableComponent
      ref={_swipeableRow}
      friction={2}
      leftThreshold={60}
      onSwipeableLeftOpen={onSwipe}
      renderLeftActions={renderLeftActions}>
      {children}
    </SwipeableComponent>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
