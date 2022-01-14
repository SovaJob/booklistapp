/* REACT */
import { StyleSheet } from "react-native";

/* UTILS */
import { getHeightWithScaleFactor, getWidthWithScaleFactor, getFontWithScaleFactor } from "src/utils/layout";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  dataContainer: {
    width: getWidthWithScaleFactor(300),
    maxHeight: getHeightWithScaleFactor(600),
    paddingHorizontal: getWidthWithScaleFactor(15),
    paddingVertical: getHeightWithScaleFactor(30),
    borderRadius: getHeightWithScaleFactor(10)
  },
  loading: {
    fontSize: getFontWithScaleFactor(30),
    textAlign: "center"
  },
  infoContainer: {
    flexDirection: "column"
  },
  title: {
    fontSize: getFontWithScaleFactor(12),
    fontWeight: "bold"
  },
  shareBtn: {
    borderWidth: getHeightWithScaleFactor(1),
    alignSelf: "center"
  }
});
