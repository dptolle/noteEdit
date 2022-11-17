// src/navigation/HomeStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'styled-components/native';
import { Note } from '@models/note';
import StyledView from '@components/StyledView';
import Home from '@pages/Home';
import NoteEdit from '@pages/NoteEdit';

// type navigation + each route params
export type HomeStackParamList = {
  Home: undefined;
  NoteEdit: { id: number; title: string };
};

// using type avoid typo in route name by providing autocomplete
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  const { background, text } = useTheme().colors;
  // by default => go to Home
  // wrapping everything in a view with bg color avoid
  // white flickering in dark mode
  return (
   <StyledView flex={1} backgroundColor='background'>
    <HomeStack.Navigator initialRouteName="Home" >
      <HomeStack.Screen
        name='Home'
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name='NoteEdit'
        component={NoteEdit}
        options={({ route }) => ({
          headerStyle: { backgroundColor: background },
          headerTintColor: text,
          headerTitle: route.params.title,
        })}
      />
    </HomeStack.Navigator>
   </StyledView>
  );
}
