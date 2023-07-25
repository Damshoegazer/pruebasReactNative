import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../screens/Onboarding";

const Stack = createNativeStackNavigator()

const OnboardingNavigator = () => {
    return(
        <Stack.Navigator screenOptions={() => ({
            
            headerStyle: {
                backgroundColor: "#8FBFE0"
            },
            headerTitleStyle: {
                fontFamily: 'Inter-Bold'
            }
        })}>
            <Stack.Screen name="onboarding" component={Onboarding} options={{tabBarLabel: 'Homelala'}} />
        </Stack.Navigator>
    )
}

export default OnboardingNavigator