

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity
} from 'react-native';
import { FontAwesome} from '@expo/vector-icons';



import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {




  return (
    <SafeAreaView style={{ flex: 1 }}>
   <View style={styles.sidename}>
       <FontAwesome name='user-circle-o' color='#f6f3f4' size={47} />

       <Text style={styles.name}>Hi Adedayo</Text>
       </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList  {...props} />
        
       
      </DrawerContentScrollView>
         <TouchableOpacity  style={styles.logout}>
     

           <Text style={styles.logouttext}>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  sidename:{
    marginHorizontal:10,
    marginTop:70,
    borderBottomWidth:0.5,
    borderBottomColor:"#66C825",
    paddingBottom:20
  },
  name:{
    fontSize: 18,
    fontFamily: 'GilroyBold',
    color:"#66C825",
    marginTop:10
  },
  contentbox:{
    display:"flex",
    flexDirection:'row',
    alignItems:"center",
    paddingHorizontal:15,
    paddingVertical:18,
    borderBottomWidth:0.5,
    borderBottomColor:"#66C825",
  },
  contenttext:{
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
    marginLeft:20,
    color:"#66C825"
  },
  logout:{
    bottom:0,
    position:"absolute",
    alignItems:"center",
   
    paddingVertical:18,
   
    backgroundColor:"#66C825",
    width:"100%"
  },
  logouttext:{
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
   
    color:"#fff"
  },

});

export default CustomSidebarMenu;
