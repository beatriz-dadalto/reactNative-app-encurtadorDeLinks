import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from './pages/Home';
import MyLinks from './pages/MyLinks';
import ContactDev from './pages/ContactDev';

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: '#e83f9e',
        activeTintColor: '#FFF',
        marginTop: 16,
        labelStyle: {
          fontSize: 19,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Encurtar Link',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'cube' : 'cube-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="MyLinks"
        component={MyLinks}
        options={{
          title: 'Meus Links',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactDev"
        component={ContactDev}
        options={{
          title: 'BLink Apps',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={
                focused
                  ? 'chatbox-ellipses-outline'
                  : 'chatbox-ellipses-outline'
              }
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
