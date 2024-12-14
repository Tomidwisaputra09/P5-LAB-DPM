import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Button } from "react-native-elements";
import AppHeader from "../components/Header";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader title="Details" />
      <Card>
        <Card.Title>Manchester United Juara UCL</Card.Title>
        <Card.Divider />

        {/* Gambar Manchester United */}
        <Image source={require("../../assets/images/gambar3.jpg")} style={styles.image} />

        <Text style={styles.text}>
          Manchester United adalah salah satu klub sepak bola terbesar di dunia. Mereka telah memenangkan Liga Champions UEFA (UCL) sebanyak 3 kali, yaitu pada tahun 1968, 1999, dan 2008. Keberhasilan ini menjadikan mereka salah satu tim
          tersukses di kompetisi Eropa.
        </Text>

        <Text style={styles.text}>
          Pada era Sir Alex Ferguson, Manchester United meraih 2 dari 3 gelar UCL mereka, yaitu pada tahun 1999 dan 2008. Keberhasilan pertama mereka di bawah Sir Alex datang pada 1999 setelah kemenangan dramatis di final melawan Bayern
          Munich, di mana mereka membalikkan keadaan di menit-menit terakhir pertandingan. Pada 2008, mereka kembali meraih gelar setelah mengalahkan Chelsea di final yang juga dramatis melalui adu penalti.
        </Text>

        <Button title="Back to Home" buttonStyle={styles.button} onPress={() => navigation.goBack()} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  text: {
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ee0000",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 15,
  },
});
