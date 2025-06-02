import React from "react";
import { GestureResponderEvent, Image, StyleSheet, TouchableOpacity } from "react-native";

import star from "../../assets/estrela.png";
import grayStar from "../../assets/estrelaCinza.png";

type StarProps = {
    onPress?: (event: GestureResponderEvent) => void; // Corrigido aqui
    disabled?: boolean;
    filled: boolean;
    large?: boolean;
};

export default function Star({
    onPress,
    disabled = true,
    filled,
    large = false,
}: StarProps) {
    const styles = stylesFunction(large);
    const getImage = () => filled ? star : grayStar;
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <Image source={getImage()} style={styles.star} />
        </TouchableOpacity>
    );
}

const stylesFunction = (large: boolean) => StyleSheet.create({
    star: {
        width: large ? 30 : 20,
        height: large ? 30 : 20,
        marginRight: 2,
    },
});