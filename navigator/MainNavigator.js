import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Layout/HomeScreen';
import SearchScreen from '../Layout/SearchScreen';
import NoticeScreen from '../Layout/NoticeScreen';
import ProfileScreen from '../Layout/ProfileScreen';
import PlantSceen from '../Layout/PlantSceen';
import ManageUser from '../Layout/ManageUser';
import Payment from '../Layout/Payment';
import DetailProduct from '../Layout/DetailProduct';
import PlantaSceen from '../Layout/PlantaScreen';
import CartScreen from '../Layout/CartScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#D17842',
            tabBarInactiveBackgroundColor: 'white',
            tabBarActiveBackgroundColor: 'white',
        }}>
            <Tab.Screen name=' ' component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Image style = {{width: 20, height: 20}}
                    source={require('../Image/home.png')} tintColor={color} />
                }} />

            <Tab.Screen name='  ' component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Image style = {{width: 20, height: 20}}
                    source={require('../Image/search.png')} tintColor={color} />
                }} />

            <Tab.Screen name='   ' component={NoticeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Image style = {{width: 20, height: 20}}
                    source={require('../Image/notification.png')} tintColor={color} />
                }} />

            <Tab.Screen name='     ' component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Image style = {{width: 20, height: 20}}
                    source={require('../Image/user.png')} tintColor={color} />
                }} />
        </Tab.Navigator>
    )
}


const MainNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ManageUser' component={ManageUser} />
            <Stack.Screen name='Payment' component={Payment} />
            <Stack.Screen name='DetailProduct' component={DetailProduct} />
            <Stack.Screen name='PlantSceen' component={PlantSceen} />
            <Stack.Screen name='PlantaSceen' component={PlantaSceen} />
            <Stack.Screen name='CartScreen' component={CartScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})