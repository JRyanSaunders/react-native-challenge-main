import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "../../../../Desktop/react-native-challenge-main/money-transfer/src/navigation/stacks/AppStack";
import { FormContextProvider } from "../../../../Desktop/react-native-challenge-main/money-transfer/src/data/form-context";

export default function App() {
  return (
    <NavigationContainer>
      <FormContextProvider>
        <AppStack />
      </FormContextProvider>
    </NavigationContainer>
  );
}
