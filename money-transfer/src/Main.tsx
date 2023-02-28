import React from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import LineItem from "./components/LineItem/LineItem";
import { Section } from "./components/Section";
import { TextInput } from "./components/TextInput";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  zopa: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
  spacer: {
    marginVertical: 16,
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.zopa}>Zopa</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <>
          <Text>
            Below is a list of components you can use to build your application.
          </Text>
          <View style={styles.spacer} />
          <Text>TextInput</Text>
          <TextInput value="Default" />
          <TextInput value="Error, number" type="number" error={true} />
          <View style={styles.spacer} />
          <Text>Banner</Text>
          <Banner type="success" size="regular">
            Success banner
          </Banner>
          <Banner type="error" size="small">
            Error banner
          </Banner>
          <View style={styles.spacer} />
          <Text>Button</Text>
          <Button onPress={() => Alert.alert("OK!")}>Default</Button>
          <Button
            width="full"
            type="primary"
            onPress={() => Alert.alert("OK!")}
          >
            Primary; full-width
          </Button>
          <View style={styles.spacer} />
          <Text>Section and LineItem</Text>
          <Section header="Elements">
            <LineItem title="Title" />
            <LineItem title="Title" subtitle="Subtitle" />
            <LineItem
              title="Title"
              value="Value"
              subValue="Sub value"
              divider={false}
            />
          </Section>
          <View style={styles.spacer} />
        </>
      </ScrollView>
    </View>
  );
}
