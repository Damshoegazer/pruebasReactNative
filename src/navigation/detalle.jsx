

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detalle from "../screens/Detalle";

const Stack = createNativeStackNavigator()

const DetalleNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="detalle"
        screenOptions={() => ({
            headerStyle: {
                backgroundColor: "#7C77B9"
            }
        })}
        >
            <Stack.Screen name="detalle" component={Detalle} />
        </Stack.Navigator>
    )
}

export default DetalleNavigator 