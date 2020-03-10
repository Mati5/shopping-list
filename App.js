/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store/index';
import { persistor } from './src/store/index';
import { PersistGate } from 'redux-persist/integration/react'

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingListScreen from './src/screens/ShoppinngListScreen/ShoppingListScreen';
import SettingsScreen from './src/screens/SettingsScreen/SettingsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.2)" networkActivityIndicatorVisible />
        <NavigationContainer>
          <Stack.Navigator  initialRouteName="ShoppingList"
                            headerMode="screen"
                            screenOptions={{
                              headerStyle: {
                                backgroundColor: '#e33054',
                              },
                              
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                fontWeight: 'bold',
                              },
                            }}>
            <Stack.Screen name="ShoppingList" 
                          component={ShoppingListScreen} 
                          options={{ 
                            title: 'Shopping list', 
                            headerStyle: {
                              backgroundColor: '#f4511e',
                            }, 
                            headerShown: false,
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            },
                        }} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
