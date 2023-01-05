import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, Image,TouchableWithoutFeedback,Dimensions, Animated, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const link1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Testclass = ({navigation}) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  
  return (
    <SafeAreaView style={styles.Firstpage}>
      <Animated.View style={[
          {
            opacity: fadeAnim
          }
        ]}> 
     <Image
        style={styles.logo}
        source={{
          uri:link1,
        }}
      />
      <Text style={{fontSize: 50}}>App</Text>
      
      </Animated.View>
      <Button
       title="Go"
      onPress={() =>
        navigation.navigate('Page')
      }
    />
    </SafeAreaView>


  )
};

const Firstpage = (navigation) => {
  return (
    <SafeAreaView>
      <View>
      <Text>forums</Text>
      <Text>main</Text>
      <Text>inbox</Text>
      </View>
      </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Testclass}/>
        <Stack.Screen name="Page" component={Firstpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Firstpage: {
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
    
    
  },
  logo: {
    width: windowWidth*0.3,
    height: windowWidth*0.3,
    opacity:5,
    
  }
});



export default MyStack;