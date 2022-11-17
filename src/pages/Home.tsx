// src/pages/Home.tsx
import React, {useContext} from 'react';
import StyledText from '@components/StyledText';
import StyledView from '@components/StyledView';
//import ThemeContext from '@contexts/ThemeContext';

// TODO: Fix the theme context
export default function Home() {
  //const { switchTheme } = useContext(ThemeContext);

  return (
    <StyledView
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor='primary'
    >
      <StyledText color='white'>Hello from Home</StyledText>
      {/* <StyledText color='secondary' mt={3} onPress={switchTheme}>
        Click to switch theme
      </StyledText> */}
    </StyledView>
  );
}
