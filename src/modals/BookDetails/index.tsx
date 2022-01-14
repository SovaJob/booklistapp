/* REACT */
import React from 'react';
import {
  View,
  Modal,

} from 'react-native';

/* COMPONENTS */
import { useDispatch, useSelector } from "react-redux";

/* CUSTOM COMPONENTS */
import {
  InfoRow
} from "src/components"

/* REDUX ACTIONS */
import { dropDetailsModal } from "src/redux/books/actions"

/* UTILS */
import { shareBook } from "src/utils/share";

/* MODELS */
import {
  TRootState,
  BooksState
} from "src/models"

/* STYLES */
import styled from 'styled-components/native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BlurTouchableBG = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.blurBg};
`;

const DataContainer = styled.View`
  background-color: ${({ theme }) => theme.dataContainer};
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.primaryColor};
`;

const Details = styled.Text`
  color: ${({ theme }) => theme.secondaryColor};
`;

const ShareBtn = styled.TouchableOpacity`
  border-color: ${({ theme }) => theme.primaryColor};
`;

const BoolDetails = () => {
  const {
    bookDetailsModalVisible,
    selectedBookDetails
  } = useSelector((reduxState: TRootState): BooksState => reduxState.books);

  const dispatch = useDispatch()
  
  if (!bookDetailsModalVisible) {
    return null
  }  

  return (
    <Modal animationType="slide" transparent visible={bookDetailsModalVisible} onRequestClose={() => {}}>
      <BlurTouchableBG
        style={styles.container}
        activeOpacity={1}
        onPress={() => { dispatch(dropDetailsModal()) }}
      >
        <DataContainer style={styles.dataContainer}>
          {
            !selectedBookDetails ? (
              <Details style={styles.loading}>
                LOADING
              </Details>
            ) : (
              <View style={styles.infoContainer}>
                <Title style={styles.title}>
                  {selectedBookDetails.book_title}
                </Title>
                <InfoRow
                  title="Publication year"
                  details={`${selectedBookDetails.book_publication_year}`}
                />
                <InfoRow
                  title="Publication place"
                  details={`${selectedBookDetails.book_publication_country}, ${selectedBookDetails.book_publication_city}`}
                />
                <InfoRow
                  title="Book pagination"
                  details={`${selectedBookDetails.book_pagination}`}
                />
                <ShareBtn
                  style={styles.shareBtn}
                  onPress={() => {shareBook(selectedBookDetails.id)}}
                >
                  <Title>
                    SHARE
                  </Title>
                </ShareBtn>
              </View>
              
            )
          }


        </DataContainer>
      </BlurTouchableBG>
    </Modal>
  );
};


export default BoolDetails;