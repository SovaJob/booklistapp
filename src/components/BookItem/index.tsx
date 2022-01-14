/* REACT */
import React from 'react';
import {
  TouchableOpacity
} from 'react-native';

/* MODELS*/
import {
  IBookListItem
} from "src/models"

/* STYLES */
import styled from 'styled-components/native';
import styles from './styles';

const BookListItemContainer = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.primaryColor};
`;

const StyledTitle = styled.Text`
  color: ${({ theme }) => theme.primaryColor};
`;

const StyledAuthorSubtitle = styled.Text`
  color: ${({ theme }) => theme.secondaryColor};
`;

const StyledDetailsSubtitle = styled.Text`
  color: ${({ theme }) => theme.subtitleColor};
`;

interface IBookListItemExpanded extends IBookListItem {
  onPress: (x: number) => void
}

const BookItem = (props: IBookListItemExpanded ) => {
  const {
    book_author,
    book_publication_city,
    book_publication_country,
    book_publication_year,
    book_pages,
    book_title,
    id,
    onPress
  } = props;
  return (
    <TouchableOpacity onPress={() => {onPress(id)}}>
      <BookListItemContainer style={styles.container}>
        <StyledTitle
          numberOfLines={2}
        >
          {book_title}
        </StyledTitle>
        <StyledDetailsSubtitle
          numberOfLines={0}
        >
          {`Year: ${book_publication_year}\nPages: ${book_pages}\npublicationRegion: ${book_publication_country}, ${book_publication_city}`}
        </StyledDetailsSubtitle>

        <StyledAuthorSubtitle
          numberOfLines={2}
        >
          {book_author.join(", ")}
        </StyledAuthorSubtitle>
      </BookListItemContainer>
    </TouchableOpacity>
  );
};


export default BookItem;