
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
/* import { SafeAreaView, StyleSheet, View, ActivityIndicator, Text, StatusBar } from 'react-native'; */


import TabsNavigators from './navigation/tabs'




export default function App() {
  
  const [loaded] = useFonts({
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });
  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
            <SafeAreaView style={styles.container}>
            <View style={styles.tab}>
            <NavigationContainer style={styles.navigationContainer}>
              
                <TabsNavigators />
             
            </NavigationContainer>
            </View>
            </SafeAreaView>
          
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    flex:1,
    backgroundColor: 'transparent',
    
    
  },
  
  navigationContainer: {
    backgroundColor: 'red',
    
  }

    
});
