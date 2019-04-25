import React, { Component } from "react";

import { View, FlatList ,StyleSheet, Text} from "react-native";

export default class Promotion extends Component {
  state = {
    dados: [
      {
        id: '1',
        title: "2 Pizzas Tradicionais",
        description: "Pizzas tradicionais",
        valor: 50
      }
    ]
  };
  render() {
    return(
    <View style = {styles.container}> 
      <FlatList
          data={this.state.dados}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>R$ {item.valor}</Text>
            </View>
          )}
          />

    </View>) ;
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomColor: "#A5A5A5",
    borderBottomWidth: 1
  },
  text: {
    color: "#000000",
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  }
});
