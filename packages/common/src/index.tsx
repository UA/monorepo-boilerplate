import * as React from "react";
import { Image, Text, View } from "react-native";
import { store } from "./redux/store";
import Users from "./pages/Users";
import { Provider } from "react-redux";

interface PropsApp {
  text: String;
}

export const App: React.FC<PropsApp> = (props) => {
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Users />
      </View>
    </Provider>
  );
};
export default App;
