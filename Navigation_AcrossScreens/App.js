import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}


/*
  This class instance the "Stack" object that must be put in NavigationContainer component for screen disply handling.
  In Stack.Navigator component, is defiend the screens object as well as its name and class objet gotten from screens folder.

  Each screen class will for default receive a object object called 'navigation' that should be used to define a button function.
  This which in its onPress method wil call navigation.navigate(another screen name defined in Stack.Screen from main class) to navigate to that screen.

  **the first screen defined in Stack.Navigator wil be which is displayed first.

*/