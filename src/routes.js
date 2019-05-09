import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";

import HomeScreen from "./pages/home";
import PizzasTradicionais from "./pages/pizzasTradicionais";
import PizzasEspeciais from "./pages/pizzasEspeciais";
import EspecialCasa from "./pages/especialCasa";
import PizzasNobres from "./pages/pizzasNobres";
import Promotion from "./pages/Promotion";

const TabNavigator = createMaterialTopTabNavigator({
  PizzasTradicionais: PizzasTradicionais,
  EspecialCasa: EspecialCasa,
  PizzasEspeciais: PizzasEspeciais,  
  PizzasNobres: PizzasNobres,
  
},{
  tabBarOptions: {
    labelStyle: {
      fontSize: 10
    },
    style: {
      backgroundColor: "#231F20"
    }
  },
  navigationOptions: {
    title: "Nossas Pizzas"
  }
}
)
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    TabPizzas: TabNavigator,
    Promotion: Promotion
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#231F20"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "normal"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
