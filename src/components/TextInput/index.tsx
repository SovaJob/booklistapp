/* REACT */
import React from 'react';
import {
  StyleProp,
  ViewStyle
} from 'react-native';

/* COMPONENTS */
import styled from 'styled-components/native';

type Props = {
  value: string,
  onChangeText: (x: string) => void,
  style: StyleProp<ViewStyle>
};

const StyledTextInput = styled.TextInput`
  color: ${({ theme }) => theme.primaryColor};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.secondaryColor};
`;

const TextInput = (props: Props) => {

  return (
    <StyledTextInput { ...props }/>
  );
};


export default TextInput;