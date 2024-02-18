import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Block from "./Block";
import Text from "./Text";
import * as theme from "../constants/theme";

const Card = ({
  shadow = true,
  border = true,
  title = null,
  style,
  children,
  ...props
}) => {
  const renderHeader = () => {
    if (!title) return null;

    return (
      <Block row space="between" style={styles.header}>
        <Text caption>{title}</Text>
        <TouchableOpacity>{/* <Icon options /> */}</TouchableOpacity>
      </Block>
    );
  };

  const cardStyles = [
    styles.card,
    shadow && styles.shadow,
    border && styles.border,
    style,
  ];

  return (
    <Block style={cardStyles} {...props}>
      {renderHeader()}
      {children}
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 25,
    backgroundColor: theme.colors.white,
  },
  header: {
    paddingBottom: 24,
  },
  border: {
    borderColor: theme.colors.card,
    borderWidth: 1,
  },
  shadow: {
    shadowColor: theme.colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 2,
  },
});

export default Card;
