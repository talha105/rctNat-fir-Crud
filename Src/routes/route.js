import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from "../components/todo";
import Login from "../chatapp/login"
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="Todo" component={Todo}/>
          <Stack.Screen options={{headerShown:false}} name="login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}