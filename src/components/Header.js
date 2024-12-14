import React from "react";
import { Header } from "react-native-elements";

export default function AppHeader({ title }) {
  return <Header centerComponent={{ text: title, style: { color: "#fff", fontSize: 20 } }} containerStyle={{ backgroundColor: "#ee0000" }} />;
}
