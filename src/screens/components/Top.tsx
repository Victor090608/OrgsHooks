import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import logo from "../../assets/logo.png";

export default function Top() {
    return <View style={styles.top}>
        <Image source={logo} style={styles.Image} />
        <Text style={styles.welcome}>Olá Victor!</Text>
        <Text style={styles.caption}>Encontre os melhores produtores</Text>
    </View>
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#f6f6f6',
        padding: 16,
    },
    Image: {
        width: 70,
        height: 30,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 16,
        lineHeight: 26,

    }
})