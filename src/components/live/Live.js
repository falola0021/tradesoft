import React,{useState,useEffect,useRef} from 'react';


import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  
} from 'react-native';
import Pic from '../../../assets/images/splash.png';
import { Checkbox } from 'react-native-paper';


import AddExpenses from './AddExpenses';

import { Feather } from '@expo/vector-icons';
import moment from "moment"

const Notes = () => {
  const [visible, setVisible] = React.useState(false);
  const [risk, setRisk] = React.useState(true);
  const [method, setMethod] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [clockInTime, setClockInTime] = React.useState("00:00:00");
  const [travelTime, setTravelTime] = React.useState("00:00:00");

  const [startClockIn, setStartClockIn] = React.useState(false);
  const [startTravel, setStartTravel] = React.useState(false);

  const tick = useRef();

  const handleClockIn = () => {
    setStartClockIn(!startClockIn);
  };
 
  useEffect(() => {
    if (startClockIn) {
      tick.current = setInterval(() => {
   setClockInTime(moment().format("LTS"))
}, 1000);
    } else {
      setClockInTime("00:00:00")
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [startClockIn]);




  const handleTravelTime = () => {
    setStartTravel(!startTravel);
  };
 
  useEffect(() => {
    if (startTravel) {
      tick.current = setInterval(() => {
   setTravelTime(moment().format("LTS"))
}, 1000);
    } else {
      setTravelTime("00:00:00")
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [startTravel]);



// const handleClockOut = () => {
//   clearInterval(setClockInTime("00:00:00")
//   );
// };


// const handleStopTravel = () => {
//   clearInterval(setTravelTime("00:00:00")
//   );
// };

  const handleRisk = () => {
    setRisk(true);
    setMethod(false);
  };
  const handleMethod = () => {
    setRisk(false);
    setMethod(true);
  };

  const handleAddNote = () => {
    setVisible(true);
  };






  const styles = StyleSheet.create({
    timerboxcount:{
      color:"#000",
      fontSize: 12,
      fontWeight:"bold",
      fontFamily: 'Nunito_600SemiBold'
    },
    timerboxcountname:{
    
      paddingVertical:10,
      paddingHorizontal:12
    },
    timerboxtitle:{
      backgroundColor:startClockIn? '#F1E22E':"#66C825",
      paddingVertical:10,
      paddingHorizontal:12
  
    },
    timerboxname:{
      color:startClockIn? '#000':"#fff",
      fontSize: 12,
      fontFamily: 'Nunito_600SemiBold',
    },
    timerboxtitle2:{
      backgroundColor:startTravel? '#F1E22E':"#66C825",
      paddingVertical:10,
      paddingHorizontal:12
  
    },
    timerboxname2:{
      color:startTravel? '#000':"#fff",
      fontSize: 12,
      fontFamily: 'Nunito_600SemiBold',
    },
    timerbox:{
  display:"flex",
  flexDirection:"row",
  borderColor:"#66C825",
  borderWidth:1,
  
    },
  
  
    btncotainer: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 20,
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
    notebox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      paddingBottom: 15,
      borderBottomColor: 'rgba(220,220,220,0.4)',
      borderBottomWidth: 1,
    },
    img: {
      width: 35,
      height: 35,
      borderRadius: 50,
      marginRight: 10,
    },
    txta: {
      fontSize: 12,
      fontFamily: 'Nunito_600SemiBold',
      color: '#000',
    },
    txtb: {
      fontSize: 10,
      fontFamily: 'Nunito_600SemiBold',
      color: 'rgba(46, 58, 89, 0.7)',
    },
    sec1: {
      marginRight: 10,
      // width:"40%",
    },
    sec2: {
      width: '50%',
    },
    downloadbox: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    download: {
      color: '#66C825',
      fontSize: 10,
      fontFamily: 'Nunito_600SemiBold',
    },
    riskbox: {
      marginBottom: 20,
      marginTop: 10,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    },
    risktab: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    riskname: {
      fontSize: 13,
      fontFamily: 'Nunito_600SemiBold',
      color: '#66C825',
    },
    checkwrapper: {
      width: 14,
      height: 14,
      backgroundColor: '#fff',
      borderRadius: 20,
      display: 'flex',
      borderWidth: 1,
      borderColor: '#66C825',
      justifyContent: 'center',
      marginRight: 10,
      alignItems: 'center',
    },
    check: {
      width: 8,
      height: 8,
      backgroundColor: '#66C825',
      borderRadius: 20,
    },
    riskname2: {
      fontSize: 13,
      fontFamily: 'Nunito_600SemiBold',
     
      color: 'rgba(46, 58, 89, 0.4)',
  
    },
    checkwrapper2: {
      width: 14,
      height: 14,
      backgroundColor: '#fff',
      borderRadius: 20,
      display: 'flex',
      borderWidth: 1,
      borderColor: 'rgba(46, 58, 89, 0.4)',
      justifyContent: 'center',
      marginRight: 10,
      alignItems: 'center',
    },
    check2: {
      width: 8,
      height: 8,
      backgroundColor: '#fff',
      borderRadius: 20,
    },
  
  });


  return (
    <View>
      
      <View style={styles.riskbox}>
        <TouchableOpacity onPress={handleRisk} style={styles.risktab}>
          <View style={risk? styles.checkwrapper :styles.checkwrapper2}>
            <View style={risk? styles.check : styles.check2}></View>
          </View>
          <Text style={risk? styles.riskname:styles.riskname2}>Time Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMethod} style={styles.risktab}>
          <View style={method? styles.checkwrapper :styles.checkwrapper2}>
            <View style={method? styles.check : styles.check2}></View>
          </View>
          <Text style={method? styles.riskname:styles.riskname2}>Material Expenses</Text>
        </TouchableOpacity>
      </View>
      {risk &&
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
<View style={styles.timerbox}>
  <TouchableOpacity onPress={handleClockIn} style={styles.timerboxtitle}>
    <Text style={styles.timerboxname}>{ startClockIn?"Clock Out": " Clock In"}</Text>
  </TouchableOpacity>
  <View style={styles.timerboxcountname}>
    <Text style={styles.timerboxcount}>{clockInTime}</Text>
  </View>

</View>
<View style={styles.timerbox}>
  <TouchableOpacity onPress={handleTravelTime} style={styles.timerboxtitle2}>
    <Text style={styles.timerboxname2}>Start Travel</Text>
  </TouchableOpacity>
  <View style={styles.timerboxcountname}>
    <Text style={styles.timerboxcount}>{travelTime}</Text>
  </View>

</View>
      
      </View>
}
{method &&
      <View>
<View style={styles.btncotainer}>
        <TouchableOpacity onPress={handleAddNote} style={styles.btn}>
          <Text style={styles.btntxt}>Addit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.notebox}>
          <View style={styles.sec1}>
            <Text style={styles.txta}>This is a method you should note</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.notebox}>
          <View style={styles.sec1}>
            <Text style={styles.txta}>This is a method you should note</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.notebox}>
          <View style={styles.sec1}>
            <Text style={styles.txta}>This is a method you should note</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.notebox}>
          <View style={styles.sec1}>
            <Text style={styles.txta}>This is a method you should note</Text>
          </View>
        </View>
      </View>
      </View>
}

      <AddExpenses modalVisible={visible} setModalVisible={setVisible} />
    </View>
  );
};


export default Notes;
