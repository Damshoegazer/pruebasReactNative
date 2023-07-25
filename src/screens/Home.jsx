


import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DATA from '../DATA.json'

const Home = () => {
    return (
        <View style={styles.container}>
        <View style={styles.textCont}>
            <Text style={styles.text}>hola esto es un Home</Text>
        </View>
        <View>
            <FlatList 
            data={DATA}
            renderItem={({item}) => 
        <Text style={styles.text}>{item.title} </Text>
        }
        keyExtractor={item => item.id}
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#1D8A99"
    },
    textCont: {
        backgroundColor: "transparent",
    },
    text: {
        fontFamily: "Inter-Bold",
        fontSize: 30
    }
})

export default Home;
