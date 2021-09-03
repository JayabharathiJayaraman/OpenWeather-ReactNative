import React from 'react';
import { Title } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <>
            <View>
                <Title style={styles.text}> Here you can search for any Country or City. And it shows the current weather report.</Title>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    text: {
        color: 'rgb(66, 122, 141)',
        fontSize: 25,
        textAlign: "center",
    }
})

export default Home;