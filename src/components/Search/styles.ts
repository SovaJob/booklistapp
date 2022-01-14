/* REACT */
import { StyleSheet } from "react-native";

/* UTILS */
import { getHeightWithScaleFactor, getWidthWithScaleFactor, getFontWithScaleFactor } from "src/utils/layout";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: getHeightWithScaleFactor(40),
    flexDirection: "row",
    paddingHorizontal: getWidthWithScaleFactor(15),
    alignItems: "center",
  },
  title: {
    fontSize: getFontWithScaleFactor(20),
    fontWeight: "bold"
  },
  input: {
    flex: 1,
    marginLeft: getWidthWithScaleFactor(15),
    fontSize: getFontWithScaleFactor(20),
  }
});
