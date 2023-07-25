import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "../screens/Home";

const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
    return(
        <Stack.Navigator screenOptions={() => ({
            headerStyle: {
                backgroundColor:"#1D8A99"
            }
        })}>
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    )
}

export default HomeNavigator 