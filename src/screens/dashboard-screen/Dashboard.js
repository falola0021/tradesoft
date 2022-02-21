import 'react-native-gesture-handler';

import React, { useState,useEffect } from 'react'
import { View, TouchableOpacity, Image} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TopNav from '../../components/topnav/Nav';

import Dashboard from '../../components/dashboard-pages/Dashboard';
import Projects from '../../components/dashboard-pages/Projects';
import ThirdPage from '../../components/dashboard-pages/page3';
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Octicons,
} from '@expo/vector-icons';

// Import Custom Sidebar
import CustomSidebarMenu from '../../components/side-menu/Sidebar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function FirstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Dashboard'>
      <Stack.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          header: () => <TopNav navigationProps={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
}


function SecondScreenStack({ navigation }) {
  const [isLongPressed,setIsLongPressed]=useState(true)
useEffect(() => {
  if(isLongPressed){
    setIsLongPressed(false)
  }
}, [isLongPressed])
  return (
    <Stack.Navigator
      initialRouteName='Projects'
      screenOptions={{
        header: () => <TopNav navigationProps={navigation} />,
      }}
    >
      <Stack.Screen
        name='Projects'
        component={Projects}
        options={{
          title: 'Projects', //Set Header Title
        }}
      />
      <Stack.Screen
        name='ThirdPage'
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function Dashboarddd() {
  return (
    <>
      <Drawer.Navigator
              drawerContent={(props) => <CustomSidebarMenu {...props} />}
        screenOptions={{
          drawerStyle: {
            width: '68%'},
          drawerItemStyle: { 
            paddingBottom:12,paddingTop: 0, borderBottomWidth:0.5,
            borderBottomColor:"#66C825",
           backgroundColor:"rgba(255, 255, 255, 0.1)",
           drawerActiveBackgroundColor:"red"
          
          },
           
         drawerActiveBackgroundColor:"#fff",
          drawerActiveTintColor: '#66C825',
          drawerInactiveTintColor: '#bdbdbd',
         
          
        }}


      >
        <Drawer.Screen
          name='Dashboard'
          
          options={{
          
            headerShown: false,
            drawerIcon: ({ color }) => (
                <MaterialCommunityIcons name={"view-dashboard-outline"} size={16} color={color} />
            ),
        }}
         
          component={FirstScreenStack}
        />
        <Drawer.Screen
          name='Projects'
          options={{
            headerShown: false,
            drawerIcon: ({ color }) => (
              <Octicons name={"project"} size={16} color={color} />
          ),
          }}
          component={SecondScreenStack}
        />
      </Drawer.Navigator>
    </>
  );
}

export default Dashboarddd;

