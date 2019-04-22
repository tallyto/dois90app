import React, { Component } from "react";

import { View, Text, Button, FlatList,RefreshControl } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";
// import { Container } from './styles';

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
    const response = await api.get("/api/PizzasTradicionais");
    const dados = response.data;
    await AsyncStorage.setItem(
      "@pizzasTradicionais",
      JSON.stringify(dados)
    );
    this.setState({ dados: dados });
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem("@pizzasTradicionais");
      if (value !== null) {
        this.setState({ dados: JSON.parse(value) });
      } else {
        try {
          const response = await api.get("/api/PizzasTradicionais");
          const dados = response.data;
          await AsyncStorage.setItem(
            "@pizzasTradicionais",
            JSON.stringify(dados)
          );
          this.setState({ dados: dados });
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
