/* REACT */
import { Dimensions, PixelRatio } from "react-native";

const { height, width } = Dimensions.get("window");

// paste your mockup sizes
const MOCKUP_WIDTH = 375;
const MOCKUP_HEIGHT = 778;

/**
 * Get size with scale factor
 * will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function getWidthWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (width / MOCKUP_WIDTH));
}
/**
 * Get size with scale factor
 * will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function getHeightWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}

/**
 * Get font with scale factor
 *  will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function getFontWithScaleFactor(size: number) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}
