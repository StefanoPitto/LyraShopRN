import { NavigationContainer } from "@react-navigation/native";
import CartContextProvider from "./src/Context/CartContext/CartContextProvider";
import FavoriteContextProvider from "./src/Context/FavoriteContext/FavoritesContextProvider";
import { Navigator } from "./src/Navigator/Navigator";

export default function App() {
  return (
    <FavoriteContextProvider>
      <CartContextProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </CartContextProvider>
    </FavoriteContextProvider>
  );
}
