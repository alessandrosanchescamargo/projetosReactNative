import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
export default function Detalhes(){
    return<>
        
            <Text style={estilos.titulo}>Enterprise team collaboration.</Text>
            <Text style={estilos.texto}>Bring together your files, your tools,projects and people. Including a new mobile and desktop application.</Text>
            <View style={estilos.viewBtn}>           
                <TouchableOpacity style={estilos.sigin}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.register}>
                   <Text style={estilos.textoBtn}>Register</Text>
                </TouchableOpacity>
            </View>
        
    </>
}

const estilos = StyleSheet.create({
    titulo:{
        marginTop: 10,
        fontSize: 36,
        lineHeight: 50,
        textAlign: "center",
        fontWeight:"bold"
        
    },
    texto:{
        marginTop: 15,
        color:"#AFAFAF",
        fontSize: 20,
        lineHeight: 20,
        textAlign: "center"
    },
    viewBtn: {
        flexDirection: "row-reverse",
        justifyContent: "center",
        marginTop: 200

    },
    register: {
        paddingHorizontal: 50,
        paddingVertical:20,
        borderRadius: 20,
        zIndex:1,
        backgroundColor:"#000", 
    },
    sigin:{
        paddingHorizontal: 50,
        paddingVertical:20,
        marginLeft: -30,
        borderRadius: 20,
        backgroundColor:"#afafaf", 
    },
    textoBtn:{
        color:"#fff"
    },
})