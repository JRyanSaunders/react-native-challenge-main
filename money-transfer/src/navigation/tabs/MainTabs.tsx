import React, { ReactElement } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../views/4-screens/Home";
import { MainTabRoutes } from "../stack-routes";

const Tab = createBottomTabNavigator();

export default function MainTabs(): ReactElement {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={MainTabRoutes.Home} component={Home} />
    </Tab.Navigator>
  );
}
