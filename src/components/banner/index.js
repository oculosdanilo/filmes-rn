import React from "react";
import { Image, Text } from "react-native";
import styles from "./styles";

var imagens = [
  require("../../Img/1.jpg"),
  require("../../Img/2.jpg"),
  require("../../Img/3.jpg"),
  require("../../Img/4.jpg"),
];

function BannerMovies() {
  return (
    <>
      <Text style={styles.textBanner}>Em cartaz:</Text>
      <Image
        source={imagens[Math.floor(Math.random() * 4)]}
        style={styles.imageBanner}
      />
    </>
  );
}

function Texto({ texto }) {
  return <Text style={styles.textBanner}>{texto}</Text>;
}

export { BannerMovies, Texto };
