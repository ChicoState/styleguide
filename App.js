import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import CameraView from './components/cameraView'
import RecommendationView from './components/recommendationView'
import MainView from './components/mainView'
import ColorPickerView from './components/ColorPickerView';
import appcolors from './config/appcolors';
import PopularPaletteView from './components/PopularPaletteView';
import PaletteView from './components/PaletteView';
import PaletteSelectionView from './components/PaletteSelectionView';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Popviewstacknav() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PopularPalette" component={PopularPaletteView} />
      <Stack.Screen name="PaletteSelectionView" component={PaletteSelectionView} />
      <Stack.Screen name="PaletteView" component={PaletteView} />
    </Stack.Navigator>
  );
}

function CameraViewStackNav() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cameranav" component={CameraView} />
      <Stack.Screen name="Recommendations" component={RecommendationView} />
      <Stack.Screen name="PaletteSelectionView" component={PaletteSelectionView} />
      <Stack.Screen name="PaletteView" component={PaletteView} />
    </Stack.Navigator>
  );
}

function ColorPickStackNav() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ColorPicknav" component={ColorPickerView} />
      <Stack.Screen name="PaletteSelectionView" component={PaletteSelectionView} />
      <Stack.Screen name="PaletteView" component={PaletteView} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Popular') {
              iconName = focused ? 'pricetags' : 'pricetags-outline';
            } else if (route.name === 'Camera') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'ColorPick') {
              iconName = focused ? 'ios-color-filter' : 'ios-color-filter-outline';
            } else if (route.name === 'Recommendations') {
              iconName = focused ? 'contrast' : 'contrast-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: appcolors.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={MainView} />
        <Tab.Screen name="Popular" component={Popviewstacknav} />
        <Tab.Screen name="Camera" component={CameraViewStackNav} />
        <Tab.Screen name="ColorPick" component={ColorPickStackNav} />

      </Tab.Navigator>
    </NavigationContainer >
  )
}

export default App