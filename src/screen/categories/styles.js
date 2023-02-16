import { StatusBar, StyleSheet } from "react-native";

import { COLORS } from '../../constants/colors/colors';
import { FONTS } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // justifyContent: 'center',
      // alignItems: 'center'
      // marginTop: StatusBar.currentHeight,
    },
    title: {
      color: COLORS.color10,
      fontFamily: FONTS.bitterLight,
      fontSize: 25,
      margin: 10
    },
    containerList: {
      flex: 1,
    },
    contentContainerStyle: {
      paddingTop: 10,
      paddingBottom: 10
    }
});