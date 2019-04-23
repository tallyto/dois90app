import React, { Component } from "react";

import { View, Text, Button, FlatList, RefreshControl } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";

export default class PizzasTradicionais extends Component {
  state = {
    dados: [],
    refreshing: false
  };

  atualizarDados = () => {
    this.setState({ refreshing: true });
    this.fazerRequisicao();
    this.setState({ refreshing: false });
  };

  async fazerRequisicao() {
    try {
      const response = await api.get("/api/PizzasTradicionais");
      const dados = response.data;

      const value = await AsyncStorage.getItem("@pizzasTradicionais");

      await AsyncStorage.setItem("@aux", JSON.stringify(dados));
      const aux = await AsyncStorage.getItem("@aux");

      if (value == null) {
        await AsyncStorage.setItem(
          "@pizzasTradicionais",
          JSON.stringify(dados)
        );
        this.setState({ dados: dados });
      } else if (value.length != aux.length) {
        await AsyncStorage.setItem(
          "@pizzasTradicionais",
          JSON.stringify(dados)
        );
        this.setState({ dados: dados });
      }
    } catch (e) {
      // saving error
      alert(e);
    }
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem("@pizzasTradicionais");
      if (value !== null) {
        this.setState({ dados: JSON.parse(value) });
      } else {
        try {
          this.fazerRequisicao();
        } catch (e) {
          // saving error
          alert(e);
        }
      }
    } catch (e) {
      // error reading value
      alert(e);
    }
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dados}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.atualizarDados}
            />
          }
        />
      </View>
    );
  }
}
