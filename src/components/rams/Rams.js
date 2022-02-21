import React,{useState} from 'react';


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


import AddRams from './AddRams';

import { Feather } from '@expo/vector-icons';

const Notes = () => {
  const [visible, setVisible] = React.useState(false);
  const [risk, setRisk] = React.useState(true);
  const [method, setMethod] = React.useState(false);
  const [checked, setChecked] = React.useState(false);


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

  return (
    <View>
      <View style={styles.btncotainer}>
        <TouchableOpacity onPress={handleAddNote} style={styles.btn}>
          <Text style={styles.btntxt}>Additional Risks</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.riskbox}>
        <TouchableOpacity onPress={handleRisk} style={styles.risktab}>
          <View style={risk? styles.checkwrapper :styles.checkwrapper2}>
            <View style={risk? styles.check : styles.check2}></View>
          </View>
          <Text style={risk? styles.riskname:styles.riskname2}>Available Risks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMethod} style={styles.risktab}>
          <View style={method? styles.checkwrapper :styles.checkwrapper2}>
            <View style={method? styles.check : styles.check2}></View>
          </View>
          <Text style={method? styles.riskname:styles.riskname2}>Method Statements</Text>
        </TouchableOpacity>
      </View>
      {risk &&
      <View>

      <View>
        <View style={styles.notebox}>
          <View style={styles.sec1}>
            <Text style={styles.txta}>This is a risk you should note</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.notebox}>
          <View style={styles.sec1}>
            <Text style={styles.txta}>This is a risk you should note</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.notebox}>
          <View style={styles.sec1}>
            <Text style={styles.txta}>This is a risk you should note</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.notebox}>
          <View style={styles.sec1}>
            <Text style={styles.txta}>This is a risk you should note</Text>
          </View>
        </View>
      </View>
      </View>
}
{method &&
      <View>

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
<TouchableOpacity  onPress={() => {
        setChecked(!checked);
      }} style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:20,marginBottom:30}}>

<Checkbox


      status={checked ? 'checked' : 'unchecked'}
      // onPress={() => {
      //   setChecked(!checked);
      // }}
      color={`#66C825`} uncheckedColor={`#66C825`}

    />
        <Text style={{fontSize: 12,
    fontFamily: 'Nunito_600SemiBold',}}>I HAVE READ THE RISKS</Text>
</TouchableOpacity>
      <AddRams modalVisible={visible} setModalVisible={setVisible} />
    </View>
  );
};
const styles = StyleSheet.create({
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

export default Notes;
