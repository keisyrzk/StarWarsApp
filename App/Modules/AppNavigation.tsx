import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import MainView from './MainView';
import SWCharactersView from './SWCharactersView';
import SWPlanetsView from './SWPlanetsView';

const queryClient = new QueryClient();

type RootStackParamList = {
    Main: undefined
    SWCharacters: undefined;
    SWPlanets: undefined
};

export type MainProps = NativeStackScreenProps<
  RootStackParamList,
  'Main',
  'Main_id'
>;

export type SWCharactersProps = NativeStackScreenProps<
  RootStackParamList,
  'SWCharacters',
  'SWCharacters_id'
>;

export type SWPlanetsProps = NativeStackScreenProps<
  RootStackParamList,
  'SWPlanets',
  'SWPlanets_id'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">

        <Stack.Screen
          name="Main"
          component={MainView}
          options={{
            title: 'Main',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SWCharacters"
          component={SWCharactersView}
          options={{
            title: 'Characters',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SWPlanets"
          component={SWPlanetsView}
          options={{
            title: 'Planets',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
};

export default AppNavigation;