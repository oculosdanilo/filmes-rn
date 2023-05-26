import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function CardFilmes() {
    return(
        <TouchableOpacity style={styles.containerJogos}>
            <Image style={styles.images} source={require(`../Img/gato.jpg`)}></Image>
            <Text style={styles.titulo}>Gatoo de Botas</Text>
            <Text style={styles.textNota}>6.9</Text>
        </TouchableOpacity>
    )
}