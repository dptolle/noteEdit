import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
} from 'styled-system';
import ThemeProvider from '@contexts/ThemeContext';
import Navigation from '@navigation/index';

type StyledViewProps = ColorProps & FlexProps & FlexboxProps;
const StyledView = styled.View<StyledViewProps>(compose(color, flex, flexbox));

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <StyledView
          flex={1}
          justifyContent='center'
          alignItems='center'
          backgroundColor='primary'
        >
          <Text style={styles.title}>Hello from App</Text>
        </StyledView>
        <Navigation />
        <StatusBar style='auto' />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
  },
});


export default registerRootComponent(App);