/* COMPONENTS */
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TRootStackParamList = {
  MainScreen: undefined;
};

export type TMainProps = NativeStackScreenProps<TRootStackParamList, 'MainScreen'>;
