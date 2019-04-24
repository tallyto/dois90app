import React, { Component } from "react";

import { StyleSheet, Text, View, Image } from "react-native";

export default class headerPizza extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewPrecos}>
          <View style={styles.viewImage}>
            <Image style={styles.image} source={require("../img/pizzaM.png")} />
            <Text>Pizza Média </Text>
            <Text>5 Fatias R$ 35</Text>
          </View>

          <View style={styles.viewImage}>
            <Image style={styles.image} source={require("../img/pizzaG.png")} />
            <Text>Pizza Grande </Text>
            <Text>8 Fatias R$ 42</Text>
          </View>

          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={require("../img/pizzaGG.png")}
            />
            <Text>Pizza Família </Text>
            <Text>10 Fatias R$ 50</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#000000"
  },
  viewPrecos: {
    height: "auto",
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  viewImage: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 75,
    height: 75
  }
});
