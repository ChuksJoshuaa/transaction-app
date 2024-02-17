import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

const LinksScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>This is a link page.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
});

export default LinksScreen;
