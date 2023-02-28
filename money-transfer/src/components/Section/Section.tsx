import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../colors";

export interface ISectionProps {
  header?: string;
  children?: React.ReactNode
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 0,
  },
  header: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: colors.greyDark,
  },
  divider: {
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: StyleSheet.hairlineWidth,
  },
});

export const Section: FC<ISectionProps> = ({ children, header }) => (
  <View style={styles.container}>
    {header ? <Text style={styles.header}>{header}</Text> : <></>}
    <View style={styles.divider} />
    <View>{children}</View>
    <View style={styles.divider} />
  </View>
);

export default Section;
