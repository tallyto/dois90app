{this.state.dados.map(pizzas => (
    <View key={pizzas._id}>
      <Text style={{ fontWeight: "bold" }}>{pizzas.title}</Text>
      <Text>{pizzas.description}</Text>
    </View>
  ))}