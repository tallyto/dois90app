import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Nosso Cardápio"
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.logoView}>
          <Image style={styles.logoImg} source={require("../img/logo.jpg")} />
        </View>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("PizzasTradicionais");
            }}
          >
            <View style={styles.buttonView}>
              <Text style={styles.textButton}>Pizzas Tradicionais</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("EspecialCasa");
            }}
          >
            <View style={styles.buttonView}>
              <Text style={styles.textButton}>Especialidades da Casa</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("PizzasEspeciais");
            }}
          >
            <View style={styles.buttonView}>
              <Text style={styles.textButton}>Pizzas Especiais</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("PizzasNobres");
            }}
          >
            <View style={styles.buttonView}>
              <Text style={styles.textButton}>Pizzas Nobres</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Promotion");
            }}
          >
            <View style={styles.buttonView}>
              <Text style={styles.textButton}>Promoções</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.textButton}>Localização</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoImg: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  },
  logoView: {
    height: "20%",
    width: "100%",
    backgroundColor: "#231F20"
  },
  buttonView: {
    backgroundColor: "#231F20",
    padding: 20,
    margin: 5,
    alignItems: "center",
    borderRadius: 10
  },
  textButton: {
    color: "#D0AC67",
    fontWeight: "bold",
    fontSize: 18
  }
});

export default HomeScreen;
