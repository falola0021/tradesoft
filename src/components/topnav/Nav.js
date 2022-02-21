import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Logo from "../../../assets/images/logo.png"
import { useNavigation } from '@react-navigation/native';


const Nav = ({ navigationProps }) => {
  const navigation = useNavigation();
  

  const handleNotification=()=>{
navigation.navigate("NotificationScreen")
  }

  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuicon} onPress={navigationProps.toggleDrawer}>
        <MaterialCommunityIcons name='menu' color='#fff' size={33} />
        </TouchableOpacity>
         <Image style={styles.logo} source={Logo}/>
         <TouchableOpacity onPress={handleNotification}>
           <View style={styles.notify} >
             <Text style={styles.notifytext}>5</Text>
           </View>
         <MaterialCommunityIcons name='bell-outline' color='#fff' size={30} />
         </TouchableOpacity>
      
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66C825',
    height: 80,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    justifyContent: 'center',
    borderBottomColor:"#66C825",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",alignItems:"center"
  },
  logo:{
    width:140,
    height:20
  },
  notify:{
    position:"absolute",
    left:15,
    backgroundColor:"red",
   borderRadius:20,
   width:17,
   height:17,
   alignItems:"center",
   zIndex:1,
   bottom:15
  },
  notifytext:{
    color:'#fff',
    fontSize:10,
    fontFamily: 'Nunito_700Bold'

  },
  menuicon:{
    elevation:6
  }

});
