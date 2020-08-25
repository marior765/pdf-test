import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Favourites} from 'src/pages';
import {Button} from 'react-native-elements';

import {APP_ROUTES} from 'src/constants';

type RootStackParamList = {
  [key: string]: any;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation: React.FunctionComponent = (): React.ReactElement => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={APP_ROUTES.HOME}
        component={Home}
        options={(props) => ({
          headerRight: () => (
            <Button
              title="Favourites"
              onPress={() => props.navigation.navigate(APP_ROUTES.FAVOURITES)}
            />
          ),
        })}
      />
      <Stack.Screen name={APP_ROUTES.FAVOURITES} component={Favourites} />
    </Stack.Navigator>
  </NavigationContainer>
);
