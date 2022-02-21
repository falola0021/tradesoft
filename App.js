import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, LogBox } from 'react-native';
import Welcome from './src/screens/welcome/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import useFonts from './useFonts';

import Onboard1 from './assets/images/onboard1.png';
import Onboard2 from './assets/images/onboard2.png';
import Onboard3 from './assets/images/onboard3.png';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Progress from "./src/components/progressbar/Progress"


export const AgentContext = React.createContext();
import LoginScreen from './src/screens/login-screen/Login';
import ForgotScreen from './src/screens/forgot-password-screen/Forgot';
import RegisterScreen from './src/screens/register-screen/Register';
import DashboardScreen from './src/screens/dashboard-screen/Dashboard';
import NotificationScreen from './src/screens/notification-screen/Notification';
import ProjectDetails from './src/screens/project-details/Details'




const Root = () => {
  const Stack = createNativeStackNavigator();

  const [loading, setLoading] = useState(true);
  const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(false);
  const [Register, setRegister] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const checkForFirstTimeLoaded = async () => {
    const result = await AsyncStorage.getItem('isFirstTimeOpen');
    if (result === null) setIsFirstTimeLoad(true);
    setLoading(false);
  };

  useEffect(() => {
    checkForFirstTimeLoaded();
    LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);
  }, []);

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  const slides = [
    {
      key: 1,
      Img: Onboard1,
      title: 'Find jobs easily',
      desc: 'Signup on our platform to get access to over a hundred jobs daily with just some few clicks away',
    },
    {
      key: 2,
      Img: Onboard2,
      title: 'Manage job activities',
      desc: 'Use our task management tools and calender to manage the status of your assigned jobs',
    },
    {
      key: 3,
      Img: Onboard3,
      title: 'Clock-in and clock-out',
      desc: 'Easily manage your clock-in and clock-out even when there is poor or no internet',
    },
  ];

  const handleDone = () => {
    setIsFirstTimeLoad(false);
    AsyncStorage.setItem('isFirstTimeOpen', 'no');
    setRegister(true);
  };
  const handleLogin = () => {
    setIsFirstTimeLoad(false);
    AsyncStorage.setItem('isFirstTimeOpen', 'no');
    setRegister(false);
  };

  // //   const [index,setIndex]=React.useState(0)

// //   React.useEffect(()=>{
// //  const interval=setInterval(()=>{
// //    setIndex((index+1)%(10+1))
// //  },1000)

// // return()=>{
// //   clearInterval(interval)
// // }

// // },[index])


  if (loading) return null;
  if (isFirstTimeLoad)
    return (
      <>
        <StatusBar hidden />
        <Welcome
          onDone={handleDone}
          handleLogin={handleLogin}
          slides={slides}
        />
      </>
    );

  if (!isFirstTimeLoad)
    return (
      <AgentContext.Provider value={{}}>
        <Stack.Navigator>
          {!Register && (
            <Stack.Screen
              name='LoginScreen'
              options={{ headerShown: false, }}
              component={LoginScreen}
            />
          ) }
            <Stack.Screen
              name='RegisterScreen'
              options={{ headerShown: false }}
              component={LoginScreen}
            />
        
         {/* <Stack.Screen
            name='RegisterScreen'
            options={{ headerShown: false }}
            component={RegisterScreen}
          /> */}
                    
          <Stack.Screen
            name='ForgotScreen'
            options={{ headerShown: false }}
            component={ForgotScreen}
          />
          <Stack.Screen
            name='DashboardScreen'
            options={{ headerShown: false,statusBarStyle:"dark" }}
            component={DashboardScreen}
          />
          <Stack.Screen
            name='NotificationScreen'
            options={{ headerShown: false }}
            component={NotificationScreen}
          />
          <Stack.Screen
            name='ProjectDetails'
            options={{ headerShown: false }}
            component={ProjectDetails}
          />
           
          
        </Stack.Navigator>
      </AgentContext.Provider>
    );
};

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

