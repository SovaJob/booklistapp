/* REACT */
import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import {
  View,
  FlatList
} from "react-native";

/* COMPONENTS */
import { useDispatch, useSelector } from "react-redux";

/* CUSTOM COMPONENTS */
import {
  Search,
  BookItem
} from "src/components"

/* REDUX ACTIONS */
import {
  getBooksNextPage,
  getBookDetails
} from "src/redux/books/actions"

/* MODELS*/
import {
  TRootState,
  IBookListItem,
  BooksState
} from "src/models"

/* STYLES */
import styles from "./styles";

const MainScreen = () => {
  const {
    books,
  } = useSelector((reduxState: TRootState): BooksState => reduxState.books);

  const [searchPhrase, setSearchPhrase] = useState("");

  const dispatch = useDispatch();

  const listRef: MutableRefObject<FlatList<any>| null> = useRef(null);

  useEffect(() => {
    if (listRef?.current && books.length) {
      listRef.current.scrollToIndex({index: 0})  
    }
    
    dispatch(getBooksNextPage(searchPhrase));
  }, [searchPhrase]);

  const onItemPress = (bookId: number) => {
    dispatch(getBookDetails(bookId));
  }

  return (
    <View style={styles.container}>
      <Search
        value={searchPhrase}
        onChangeText={setSearchPhrase}
      />
      <FlatList
        ref={listRef}
        data={books}
        renderItem={({item} : {item: IBookListItem}) => (
          <BookItem
            {...item}
            onPress={onItemPress}
          />
        )}
        onEndReached={() => {dispatch(getBooksNextPage(searchPhrase));}}
        onEndReachedThreshold={0.9}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default MainScreen;
