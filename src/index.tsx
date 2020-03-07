import React, { memo } from "react";
import { AppRegistry, Platform } from "react-native";
import { App, Navigation, Redux } from "./containers";
import { Config } from "./utils";

export const Main = memo(function Main() {
  return (
    <Redux>
      <App>
        <Navigation />
      </App>
    </Redux>
  );
});

AppRegistry.registerComponent(Config.app.name, () => Main);
if (Platform.OS === Config.os.web) {
  AppRegistry.runApplication(Config.app.name, {
    rootTag: document.getElementById("root")
  });
}