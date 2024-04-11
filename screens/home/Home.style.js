import { COLORS, SIZES } from "../../constants";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    //fontFamily: 'bold',
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    //fontFamily: 'bold',
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
