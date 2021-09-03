import React from 'react';
import { Title } from 'react-native-paper';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';

const Home = (props) => {
    return (
        <>
            <View>
                <Title style={styles.text}>{props.home}</Title>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    text: {
        color: 'rgb(66, 122, 141)',
        fontSize: 25,
        textAlign: "center",
    },
    image: {
        width: "50",
        height: "100",
    }
})

export default Home;