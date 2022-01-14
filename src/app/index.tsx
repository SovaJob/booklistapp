/* REACT */
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Linking,
  Alert
} from "react-native";

/* COMPONENTS */
import { Provider, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components/native";


/* CUSTOM MODULES */
import store from "src/redux/store";
import Navigator from "src/navigation";
import BoolDetails from "src/modals/BookDetails"

/* REDUX ACTIONS */
import {
  getBookDetails
} from "src/redux/books/actions"

/* STYLES */
import styles from "./styles";
import { defaultTheme } from "src/config/styles/theme";

const App = () => {
  const [deepLinkUrl, setDeepLinkUrl] = useState("");
  const dispatch = useDispatch()

  const deepLinkCallback = ({url}: {url: string}) => {
    if (url) {
      setDeepLinkUrl(url);
    }
  }

  const getInitialUrl = async () => {
    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      setDeepLinkUrl(initialUrl);
    }
  }

  useEffect(() => {
    getInitialUrl();
    const deepLinkListener = Linking.addEventListener('url', deepLinkCallback)

    return () => {
      deepLinkListener.remove()
    }
  },[])

  useEffect(() => {
    if(deepLinkUrl) {
      const parts = deepLinkUrl.split("=");
      const bookId = parseInt(parts[parts.length - 1], 10);
      dispatch(getBookDetails(bookId))
      setDeepLinkUrl("")
    }
  }, [deepLinkUrl])
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaView style={styles.root}>
        <Navigator />
        <BoolDetails />
      </SafeAreaView>
    </ThemeProvider>
)};

const AppProvider = () => (
  <Provider store={store}>
        <App />
  </Provider>
);

export default AppProvider;
