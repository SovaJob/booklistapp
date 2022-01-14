/* REACT */
import React from "react";

/* COMPONENTS */
import styled from 'styled-components/native';

/* CUSTOM COMPONENTS */
import TextInput from "../TextInput"

/* STYLES */
import styles from "./styles";

const SearchContainer = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.secondaryColor};
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.primaryColor};
`;

type Props = {
  value: string,
  onChangeText: (x: string) => void
};

const Search = (props: Props) => {
  const {
    value,
    onChangeText
  } = props;


  return (
    <SearchContainer style={styles.container}>
      <Title style={styles.title}>Search:</Title>
      <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
      />
    </SearchContainer>
  );
};

export default Search;
