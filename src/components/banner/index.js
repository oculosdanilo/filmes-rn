import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const imagem = Math.floor(Math.random() * 4 + 1);

export default function BannerMovies() {
  return (
    <>
      <Text style={styles.textBanner}>Em cartaz:</Text>
      <Image source={require(`../../Img/${imagem}.jpg`)} style={styles.imageBanner} />
    </>
  );
}