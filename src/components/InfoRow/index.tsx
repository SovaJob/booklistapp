/* REACT */
import React from 'react';
import {
  View,
} from 'react-native';

/* COMPONENTS */
import styled from 'styled-components/native';

/* MODELS */
import {
  TBookInfoRow
} from "src/models"

/* STYLES */
import styles from './styles';

const Title = styled.Text`
  color: ${({ theme }) => theme.primaryColor};
`;

const Details = styled.Text`
  color: ${({ theme }) => theme.secondaryColor};
`;

const InfoRow = (props: TBookInfoRow ) => {
  const {
    title,
    details
  } = props;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>
        {`${title}:`}
      </Title>
      <Details style={styles.details}>
        {details}
      </Details>
    </View>
  );
};


export default InfoRow;