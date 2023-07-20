import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import FAQScreen from '../screens/FAQScreen';
import MRScreen from '../screens/MRScreen';
import MedScreen from '../screens/MedScreen';

//Creando la barra inferior con botones
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "FAQs":
                iconName = "frequently-asked-questions"
                break;
        
            case "Expediente":
                iconName = "file-outline"
                break;                
                
            case "Mediciones":
                iconName = "tape-measure" 
                break;
        }

        return (
            <Icon
                type="material-community"
                name={iconName}
                fontSize={22}
                color={color}
            />
        )
    }
    
    return (
        <Tab.Navigator
            initialRouteName="Expediente" //asigna como inicio por defecto expediente
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color)
            })}
        >

            <Tab.Screen name = 'FAQs' component = { FAQScreen } options = {{headerShown: false}}/>
            <Tab.Screen name = 'Expediente' component = { MRScreen } options = {{headerShown: false}}/>
            <Tab.Screen name = 'Mediciones' component = { MedScreen } options = {{headerShown: false}}/>
        </Tab.Navigator>
    );

}