import React from "react";
import { Image, Text } from "react-native";
import styles from "./styles";

export default function BannerMovies() {
  return (
    <>
      <Text style={styles.textBanner}>Em cartaz:</Text>
      <Image source={require(`../../Img/2.jpg`)} style={styles.imageBanner} />
    </>
  );
}