import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Arrowback from '../../../assets/svgs/backShape';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notifications = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerbox}>
          <TouchableOpacity onPress={handleBack}>
              <Arrowback />
            </TouchableOpacity>
            <Text style={styles.nottext}>Notifications</Text>
            
          </View>
          
          <View style={styles.headerbox3}>
            <View style={{ flex: 1 }}>
              <View style={styles.txt22}>
                <Text style={styles.new22}>Halo Goal invitation</Text>
                <Text style={styles.time}>Apr 28, 2020</Text>
              </View>
              <Text style={styles.newclear22}>
                Idris Akintunde has invited you to contribute N5000 to his Halo
                goal plan
              </Text>
            </View>
          </View>
          <View style={styles.headerbox3}>
            <View style={{ flex: 1 }}>
              <View style={styles.txt22}>
                <Text style={styles.new22}>Halo Goal invitation</Text>
                <Text style={styles.time}>Apr 28, 2020</Text>
              </View>
              <Text style={styles.newclear22}>
                Idris Akintunde has invited you to contribute N5000 to his Halo
                goal plan
              </Text>
            </View>
          </View>
          <View style={styles.headerbox3}>
            <View style={{ flex: 1 }}>
              <View style={styles.txt22}>
                <Text style={styles.new22}>Halo Goal invitation</Text>
                <Text style={styles.time}>Apr 28, 2020</Text>
              </View>
              <Text style={styles.newclear22}>
                Idris Akintunde has invited you to contribute N5000 to his Halo
                goal plan
              </Text>
            </View>
          </View>

         
          
        
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#fff',
    height: '100%',
  },
  cancel: {
    width: 40,
    height: 40,
  },
  headerbox: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    //alignItems: 'center',
    marginBottom: 40,
  },
  headerbox2: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: '#66C825',
  },
  headerbox2a: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#66C825',
  },

  nottext: {
    color: '#66C825',
    fontSize: 20,
    fontFamily: 'GilroyBold',
  },
  new: {
    color: '#66C825',
    fontSize: 15,
    fontFamily: 'GilroyBold',

    fontWeight: '500',
  },
  
  headerbox3: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderBottomColor: '#66C825',
  },
  img4: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  txt22: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    // width:"60%",

    //flexWrap: 'wrap',
    // marginRight:10,

    //flexShrink: 1
  },
  new22: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'Nunito_600SemiBold',
  },
  newclear22: {
    color: '#000',
    fontSize: 11,
    fontFamily: 'Nunito_600SemiBold',
    marginTop: 8,
  },
  time: {
    color: '#66C825',
    fontSize: 11,
    fontFamily: 'Nunito_600SemiBold',
  },
});
