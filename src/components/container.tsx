import React, {ReactNode} from 'react';
import {ViewProps, StyleSheet, View, ActivityIndicator} from 'react-native';
import {Component} from 'src/constants';

interface ContainerProps extends ViewProps {
  children: ReactNode | ReactNode[];
  isLoading?: boolean;
}

export const Container: Component<ContainerProps> = ({children, isLoading}) => (
  <View style={styles.container}>
    {children}
    {isLoading && <ActivityIndicator style={styles.loader} />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0, 0, 0.2)',
  },
});
