import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./pages/home";
import PizzasTradicionais from "./pages/pizzasTradicionais";
import PizzasEspeciais from "./pages/pizzasEspeciais";
import EspecialCasa from "./pages/especialCasa";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    PizzasTradicionais: PizzasTradicionais,
    PizzasEspeciais: PizzasEspeciais,
    EspecialCasa: EspecialCasa
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
