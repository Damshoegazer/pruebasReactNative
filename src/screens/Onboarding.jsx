


import { View, Text, StyleSheet } from 'react-native';

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <Text>hola esto es un Onboarding</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#8FBFE0"
    }
})


export default Onboarding;
