/* REACT */
import { Share } from 'react-native';

/* CONFIGS */
import { DEEP_LINK_PATTERN } from "src/config";

export const shareBook = async (bookId: number) => {
  try {
    const result = await Share.share({
      message:
        `Shared book: ${DEEP_LINK_PATTERN}://bookId=${bookId}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.warn("result.activityType = ", result.activityType);
      } else {
        console.warn("Shared successfully");
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    console.error(error as Error);
  }
}