import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Card } from "react-native-elements";
import AppHeader from "../components/Header";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader title="Home" />
      <Card>
        <Card.Title>MANCHESTER UNITED</Card.Title>
        <Card.Divider />
        <Image source={require("../../assets/images/gambar1.jpg")} style={styles.image} />
        <Text style={styles.text}>Di era Sir Alex Ferguson, Manchester United menjuarai Liga Champions berkat strategi cemerlang dan tim yang tangguh....</Text>
        <Button title="Go to Details" buttonStyle={styles.button} onPress={() => navigation.navigate("Details")} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  button: {
    backgroundColor: "#ee0000",
  },
});
