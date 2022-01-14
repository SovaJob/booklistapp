/* REACT */
import { StyleSheet } from "react-native";

/* UTILS */
import { getHeightWithScaleFactor, getWidthWithScaleFactor, getFontWithScaleFactor } from "src/utils/layout";

export default StyleSheet.create({
  container: {
    width: getWidthWithScaleFactor(375),
    height: getHeightWithScaleFactor(130),
    flexDirection: "column",
    paddingHorizontal: getWidthWithScaleFactor(15),
    paddingVertical: getHeightWithScaleFactor(15),
  },
  title: {
    fontSize: getFontWithScaleFactor(25),
    fontWeight: "bold"
  },
  subtitle: {
    marginLeft: getWidthWithScaleFactor(15),
    fontSize: getFontWithScaleFactor(20),
  }
});
