import { View, Text, TouchableOpacity, StyleSheet, Image,Modal } from 'react-native';
import React from 'react';
import Pic from '../../../assets/images/splash.png';
import AddNote from "./AddNote"

import {
    
    Feather,
   
  } from '@expo/vector-icons';

const Notes = () => {
    const [visible, setVisible] = React.useState(false);


const handleAddNote = () => {
    setVisible(true)
}

  return (
    <View>
      <View style={styles.btncotainer}>
        <TouchableOpacity onPress={handleAddNote} style={styles.btn}>
          <Text style={styles.btntxt}>Add Note</Text>
        </TouchableOpacity>
       
      </View>
      <View>
          <View style={styles.notebox}>
            <Image style={styles.img} source={Pic} />
            <View style={styles.sec1}>
              <Text style={styles.txta}>admin test update</Text>
              <Text style={styles.txtb}>17-06-2021 08:05</Text>
            </View>
            <View style={styles.sec2}>
              <Text style={styles.txta}>This is test</Text>
              <TouchableOpacity style={styles.downloadbox}>
              <Feather
                  name='download'
                  color='#66C825'
                  size={12}
                />
              <Text style={styles.download}> Download Attatchment </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.notebox}>
            <Image style={styles.img} source={Pic} />
            <View style={styles.sec1}>
              <Text style={styles.txta}>admin test update</Text>
              <Text style={styles.txtb}>17-06-2021 08:05</Text>
            </View>
            <View style={styles.sec2}>
              <Text style={styles.txta}>This is test</Text>
              <TouchableOpacity style={styles.downloadbox}>
              <Feather
                  name='download'
                  color='#66C825'
                  size={12}
                />
              <Text style={styles.download}> Download Attatchment </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.notebox}>
            <Image style={styles.img} source={Pic} />
            <View style={styles.sec1}>
              <Text style={styles.txta}>admin test update</Text>
              <Text style={styles.txtb}>17-06-2021 08:05</Text>
            </View>
            <View style={styles.sec2}>
              <Text style={styles.txta}>This is test</Text>
              <TouchableOpacity style={styles.downloadbox}>
              <Feather
                  name='download'
                  color='#66C825'
                  size={12}
                />
              <Text style={styles.download}> Download Attatchment </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.notebox}>
            <Image style={styles.img} source={Pic} />
            <View style={styles.sec1}>
              <Text style={styles.txta}>admin test update</Text>
              <Text style={styles.txtb}>17-06-2021 08:05</Text>
            </View>
            <View style={styles.sec2}>
              <Text style={styles.txta}>This is test</Text>
              <TouchableOpacity style={styles.downloadbox}>
              <Feather
                  name='download'
                  color='#66C825'
                  size={12}
                />
              <Text style={styles.download}> Download Attatchment </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <AddNote   modalVisible={visible} setModalVisible={setVisible}/>
    </View>
  );
};
const styles = StyleSheet.create({
  btncotainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom:20
  },
  btn: {
    backgroundColor: '#66C825',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
  },
  btntxt: {
    fontSize: 12,
    fontFamily: 'Nunito_600SemiBold',
    color: '#fff',
  },
  notebox:{
      display:'flex',
      flexDirection:"row",
      alignItems:"center",
      marginTop:10,
      paddingBottom:15,
      borderBottomColor: 'rgba(220,220,220,0.4)',
      borderBottomWidth: 1,
     
      
 
  },
  img:{
      width:35,
      height:35,
      borderRadius:50,
      marginRight:10
  },
  txta:{
    fontSize: 12,
    fontFamily: 'Nunito_600SemiBold',
    color: '#000',
  },
  txtb:{
    fontSize: 10,
    fontFamily: 'Nunito_600SemiBold',
    color: 'rgba(46, 58, 89, 0.7)',
  },
  sec1:{
      marginRight:10,
      width:"40%",
   
      
  },
  sec2:{
   
    width:"50%",
 
},
downloadbox:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
},
download:{
    color:"#66C825",
    fontSize: 10,
    fontFamily: 'Nunito_600SemiBold',
}
  
});

export default Notes;
