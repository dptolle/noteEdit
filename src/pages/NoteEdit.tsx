// src/pages/NoteEdit.tsx
import React from 'react';
import StyledText from '@components/StyledText';
import StyledView from '@components/StyledView';

export default function NoteEdit() {
  return (
    <StyledView
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor='background'
    >
      <StyledText color='text'>Hello from NoteEdit</StyledText>
    </StyledView>
  );
}
