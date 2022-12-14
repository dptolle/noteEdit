// src/navigation/index.tsx
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeStackNavigator from '@navigation/HomeStack';

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}
