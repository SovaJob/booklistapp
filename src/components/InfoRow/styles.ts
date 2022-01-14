/* REACT */
import { StyleSheet } from "react-native";

/* UTILS */
import { getHeightWithScaleFactor, getWidthWithScaleFactor, getFontWithScaleFactor } from "src/utils/layout";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: getHeightWithScaleFactor(10)
  },
  title: {
    width: getWidthWithScaleFactor(70),
    fontSize: getFontWithScaleFactor(10),
    fontWeight: "bold"
  },
  details: {
    width: getWidthWithScaleFactor(180),
    marginLeft: getWidthWithScaleFactor(15),
    fontSize: getFontWithScaleFactor(10),
  }
});
