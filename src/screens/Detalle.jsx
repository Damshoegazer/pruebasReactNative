


import { View, Text, StyleSheet } from 'react-native';

const Detalle = () => {
    return (
        <View style={styles.container}>
            <Text>hola esto es un Detalle</Text>
        </View>
    );
}

export default Detalle;

const styles = StyleSheet.create({
    container: {
        flex:1,

        backgroundColor: "#7C77B9"
    }
})