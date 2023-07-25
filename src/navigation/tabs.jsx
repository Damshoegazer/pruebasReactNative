import { StyleSheet, View, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeTab from './home';
import DetalleTab from './detalle';
import OnboardingTab from './onboarding';
import { Ionicons } from '@expo/vector-icons/';
import { AntDesign } from '@expo/vector-icons'; 



const TabsNavigators = () => {

    const Tab = createBottomTabNavigator()

    return(
        
        <Tab.Navigator initialRouteName='home' 
        screenOptions={() => ({
            
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: 'Inter-Bold',
                fontSize: 14,
                marginTop: -10,
                color: '#FFF0F5',
                
            },
            tabBarStyle: { 
                width: '90%',
                height: 60,
                alignSelf: 'center',
                marginBottom: -70, 
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20,
                borderTopLeftRadius:20, 
                borderTopRightRadius:20,
                backgroundColor: "#F4D160",
                transform: [{translateY: -90}],
                

                shadowColor: "#000",
                shadowOffset: {
	                width: 0,
	                height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,
                
            }
        })}
        
        >
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({focused}) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={30} color="#FFF0F5" />
                )

                
            }} name='Home' component={HomeTab} />
            <Tab.Screen 
            
            options={{
                tabBarLabel: 'Detalle',
                tabBarIcon: ({focused}) => (
                    <AntDesign style={styles.detalle}  name={focused ? 'minuscircle' : 'minuscircleo' } size={30} color="#FFF0F5" />
                )
            }}
            name='Detalle' component={DetalleTab} />
            <Tab.Screen
            options={{
                
                tabBarLabel: 'Onboarding',
                tabBarIcon: ({focused}) => (
                    <AntDesign name={focused ? 'codesquare' : 'codesquareo'} size={30} color="#FFF0F5" />
                )
            }}
            name='Onboarding' component={OnboardingTab} />
        </Tab.Navigator>
        
    )
}

const styles = StyleSheet.create({
    detalle:{
        
    }
})



export default TabsNavigators;