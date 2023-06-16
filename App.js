import {
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import Header from "./src/components/header";
import Search from "./src/components/searchBar";
import { BannerMovies, Texto } from "./src/components/banner";
import Filmes from "./src/data/filmes";
import CardFilmes from "./src/components/cardFilmes";
import Series from "./src/data/series";

export default function App() {
  return (
    <ScrollView style={styles.AndroidSafeArea}>
      <StatusBar />
      <View style={styles.container}>
        <Header></Header>
        <Search></Search>

        <BannerMovies></BannerMovies>
        <View style={{ width: "90%" }}>
          <FlatList
            horizontal={true}
            data={Filmes}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardFilmes
                titulo={item.nome}
                imagem={item.imagem}
                nota={item.nota}
              ></CardFilmes>
            )}
          />
        </View>
        <View style={{ width: "90%" }}>
          <Texto texto={"Meus favoritos:"}></Texto>
          <FlatList
            horizontal={true}
            data={Series}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardFilmes
                titulo={item.nome}
                imagem={item.imagem}
                nota={item.nota}
              ></CardFilmes>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141A29",
    alignItems: "center",
  },
  AndroidSafeArea: {
    flex: 1,
  },
});
