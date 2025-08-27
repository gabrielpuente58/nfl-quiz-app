import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CheatPage() {
  return (
    <React.Fragment>
      <Stack.Screen
        options={{
          title: "Cheat Page",
          headerStyle: {
            backgroundColor: "#841584",
          },
          headerTintColor: "#fff",
        }}
      />
      <View style={styles.container}>
        <Text style={{ fontSize: 20, padding: 20, textAlign: "center" }}>
          This is the cheat page. Here you can find answers to all questions.
        </Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
