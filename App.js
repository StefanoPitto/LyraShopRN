import { NavigationContainer } from "@react-navigation/native";
import FavoriteContextProvider from "./src/Context/FavoritesContextProvider";
import { Navigator } from "./src/Navigator/Navigator";

export default function App() {
  return (
    <FavoriteContextProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </FavoriteContextProvider>
  );
}
