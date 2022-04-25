import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import top from "../../../../assets/topo.png";

const Width = Dimensions.get("screen").width
export default function Topo(){
    return <>
        <Image source={top} style={estilos.imagem} />
    </>
}
const estilos = StyleSheet.create({
    imagem: {
        width:"100%",
        height: 550/568*Width,
    }
})