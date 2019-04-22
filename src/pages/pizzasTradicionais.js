import React, { Component } from "react";

import { View, Text, Button } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";
// import { Container } from './styles';

export default class PizzasTradicionais extends Component {
  state = {
    dados: []
  };

  pegarDados = async () => {
    const response = await api.get("/api/PizzasTradicionais");

    const dados = response.data;

    this.setState({ dados: dados });
    //this.setState({ dados: dados});
  };

  componentDidMount() {}

  render() {
    return (
      <View>
        <Text>Pizzas</Text>

        {this.state.dados.map(pizzas => (
          <View key={pizzas._id}>
            <Text style={{ fontWeight: "bold" }}>{pizzas.title}</Text>
            <Text>{pizzas.description}</Text>
          </View>
        ))}
        <Button onPress={this.pegarDados} title="Pegar dados" />
      </View>
    );
  }
}
