import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  ImageBackground,
  ImageBackgroundBase,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MoreDetails from "../dashboard-moreinfo/MoreInfo"

import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Octicons,
  Entypo,
} from '@expo/vector-icons';
import Avatar from '../../../assets/images/avatar.png';

import { ScrollView } from 'react-native-gesture-handler';

const Create = () => {
  const navigation = useNavigation();
  const [modalVisible ,setModalVisible] = React.useState(false);


  const handleNavigateToDetails = () => {
  setModalVisible(true)
    // navigation.navigate('CreateNewInvestmentPlan', {
    //   clickedcustomer,
    // });
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.container}>
          <Text style={styles.txt1b}>LIVE PROJECTS</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <View style={styles.viewcontainer}>
             
              <TouchableOpacity onPress={handleNavigateToDetails} style={styles.secbox}>
                <ImageBackground
                  imageStyle={{
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                  source={require('../../../assets/images/avatar.png')}
                  style={styles.imgbg}
                ></ImageBackground>
                <View style={styles.bottomtxtbox}>
                  <Text style={styles.bottomtxt}>JIIOJIOI</Text>
                </View>

                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>124, Brierley Hill, Dudley, West Midlands, SY3 3NH, AL	 </Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Task: </Text>
                  <Text style={styles.bottomtxt3}>Clean Gutter</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Start: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18am</Text>
                </View>
               <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>End: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18pm</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Project Status: </Text>
                  <Text style={styles.bottomtxt4}>Complete</Text>
                </View>
                
                
                
              </TouchableOpacity>
             
              <TouchableOpacity onPress={handleNavigateToDetails} style={styles.secbox}>
                <ImageBackground
                  imageStyle={{
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                  source={require('../../../assets/images/avatar.png')}
                  style={styles.imgbg}
                ></ImageBackground>
                <View style={styles.bottomtxtbox}>
                  <Text style={styles.bottomtxt}>JIIOJIOI</Text>
                </View>

                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>124, Brierley Hill, Dudley, West Midlands, SY3 3NH, AL	 </Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Task: </Text>
                  <Text style={styles.bottomtxt3}>Clean Gutter</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Start: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18am</Text>
                </View>
               <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>End: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18pm</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Project Status: </Text>
                  <Text style={styles.bottomtxt4}>Complete</Text>
                </View>
                
                
                
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNavigateToDetails} style={styles.secbox}>
                <ImageBackground
                  imageStyle={{
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                  source={require('../../../assets/images/avatar.png')}
                  style={styles.imgbg}
                ></ImageBackground>
                <View style={styles.bottomtxtbox}>
                  <Text style={styles.bottomtxt}>JIIOJIOI</Text>
                </View>

                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>124, Brierley Hill, Dudley, West Midlands, SY3 3NH, AL	 </Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Task: </Text>
                  <Text style={styles.bottomtxt3}>Clean Gutter</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Start: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18am</Text>
                </View>
               <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>End: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18pm</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Project Status: </Text>
                  <Text style={styles.bottomtxt4}>Complete</Text>
                </View>
                
                
                
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNavigateToDetails} style={styles.secbox}>
                <ImageBackground
                  imageStyle={{
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                  source={require('../../../assets/images/avatar.png')}
                  style={styles.imgbg}
                ></ImageBackground>
                <View style={styles.bottomtxtbox}>
                  <Text style={styles.bottomtxt}>JIIOJIOI</Text>
                </View>

                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>124, Brierley Hill, Dudley, West Midlands, SY3 3NH, AL	 </Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Task: </Text>
                  <Text style={styles.bottomtxt3}>Clean Gutter</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Start: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18am</Text>
                </View>
               <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>End: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18pm</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Project Status: </Text>
                  <Text style={styles.bottomtxt4}>Complete</Text>
                </View>
                
                
                
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNavigateToDetails} style={styles.secbox}>
                <ImageBackground
                  imageStyle={{
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                  source={require('../../../assets/images/avatar.png')}
                  style={styles.imgbg}
                ></ImageBackground>
                <View style={styles.bottomtxtbox}>
                  <Text style={styles.bottomtxt}>JIIOJIOI</Text>
                </View>

                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>124, Brierley Hill, Dudley, West Midlands, SY3 3NH, AL	 </Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Task: </Text>
                  <Text style={styles.bottomtxt3}>Clean Gutter</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Start: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18am</Text>
                </View>
               <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>End: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18pm</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Project Status: </Text>
                  <Text style={styles.bottomtxt4}>Complete</Text>
                </View>
                
                
                
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNavigateToDetails} style={styles.secbox}>
                <ImageBackground
                  imageStyle={{
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  }}
                  source={require('../../../assets/images/avatar.png')}
                  style={styles.imgbg}
                ></ImageBackground>
                <View style={styles.bottomtxtbox}>
                  <Text style={styles.bottomtxt}>JIIOJIOI</Text>
                </View>

                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>124, Brierley Hill, Dudley, West Midlands, SY3 3NH, AL	 </Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Task: </Text>
                  <Text style={styles.bottomtxt3}>Clean Gutter</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Start: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18am</Text>
                </View>
               <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>End: </Text>
                  <Text style={styles.bottomtxt3}>20-10-2022 10:18pm</Text>
                </View>
                <View style={styles.bottomtxtbox2}>
                  <Text style={styles.bottomtxt2}>Project Status: </Text>
                  <Text style={styles.bottomtxt4}>Complete</Text>
                </View>
                
                
                
              </TouchableOpacity>
              
             
            </View>
          </ScrollView>
          <Text style={styles.txt1b}>LATEST CLOCK-INS</Text>
          <ScrollView style={{backgroundColor:'rgb(102,200,37)',paddingHorizontal:20,paddingTop:10,paddingBottom:10}} showsVerticalScrollIndicator={false}>
            
            <View style={styles.clockbox}>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='calendar'
                  color='orange'
                  size={14}
                />
                <Text style={styles.bb}>12-22-2012</Text>
              </View>

              <View style={styles.aa}>
                <Entypo name='location-pin' color='yellow' size={14} />
                <View>
                  <Text style={styles.bb}>London</Text>
                </View>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='green'
                  size={14}
                />
                <Text style={styles.bb}>10:10am</Text>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='red'
                  size={14}
                />
                <Text style={styles.bb}>2:30pm</Text>
              </View>
            </View>
            <View style={styles.clockbox}>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                 name='calendar'
                  color='orange'
                  size={14}
                />
                <Text style={styles.bb}>12-22-2012</Text>
              </View>

              <View style={styles.aa}>
                <Entypo name='location-pin' color='yellow' size={14} />
                <View>
                  <Text style={styles.bb}>London</Text>
                </View>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='green'
                  size={14}
                />
                <Text style={styles.bb}>10:10am</Text>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='red'
                  size={14}
                />
                <Text style={styles.bb}>2:30pm</Text>
              </View>
            </View>
            <View style={styles.clockbox}>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                 name='calendar'
                  color='orange'
                  size={14}
                />
                <Text style={styles.bb}>12-22-2012</Text>
              </View>

              <View style={styles.aa}>
                <Entypo name='location-pin' color='yellow' size={14} />
                <View>
                  <Text style={styles.bb}>London</Text>
                </View>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='green'
                  size={14}
                />
                <Text style={styles.bb}>10:10am</Text>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='red'
                  size={14}
                />
                <Text style={styles.bb}>2:30pm</Text>
              </View>
            </View>
            <View style={styles.clockbox}>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                 name='calendar'
                  color='orange'
                  size={14}
                />
                <Text style={styles.bb}>12-22-2012</Text>
              </View>

              <View style={styles.aa}>
                <Entypo name='location-pin' color='yellow' size={14} />
                <View>
                  <Text style={styles.bb}>London</Text>
                </View>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='green'
                  size={14}
                />
                <Text style={styles.bb}>10:10am</Text>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='red'
                  size={14}
                />
                <Text style={styles.bb}>2:30pm</Text>
              </View>
            </View>
            <View style={styles.clockbox}>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                 name='calendar'
                  color='orange'
                  size={14}
                />
                <Text style={styles.bb}>12-22-2012</Text>
              </View>

              <View style={styles.aa}>
                <Entypo name='location-pin' color='yellow' size={14} />
                <View>
                  <Text style={styles.bb}>London</Text>
                </View>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='green'
                  size={14}
                />
                <Text style={styles.bb}>10:10am</Text>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='red'
                  size={14}
                />
                <Text style={styles.bb}>2:30pm</Text>
              </View>
            </View>
            <View style={styles.clockbox}>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                 name='calendar'
                  color='orange'
                  size={14}
                />
                <Text style={styles.bb}>12-22-2012</Text>
              </View>

              <View style={styles.aa}>
                <Entypo name='location-pin' color='yellow' size={14} />
                <View>
                  <Text style={styles.bb}>London</Text>
                </View>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='green'
                  size={14}
                />
                <Text style={styles.bb}>10:10am</Text>
              </View>
              <View style={styles.aa}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='red'
                  size={14}
                />
                <Text style={styles.bb}>2:30pm</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <MoreDetails   modalVisible={modalVisible}
  setModalVisible={setModalVisible} />
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  bb: {
    fontSize: 12,
    marginLeft: 7,
    fontFamily: 'Nunito_400Regular',
    alignItems: 'center',
    color:"#fff"
  },
  aa: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // color:"#fff"
  },
  clockbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderBottomColor: '#fff',
    paddingTop: 10,
    paddingBottom:20,
    marginBottom: 5,
  
  },
  container: {
    paddingTop: 20,

    height: '100%',
  },
  title: {
    color: '#0130B0',
    marginBottom: 10,
    fontSize: 20,
    fontFamily: 'GilroyBold',
  },
  subtitle: {
    color: '#2E3A59',
    fontSize: 15,
    fontFamily: 'Nunito_400Regular',
    marginBottom: 20,
  },

  headsec: {
    flexDirection: 'row',
    display: 'flex',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  sec1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  txt1: {
    color: '#2E3A59',

    fontSize: 16,
    fontFamily: 'Nunito_800ExtraBold',
  },
  txt1b: {
    color: '#2E3A59',

    fontSize: 16,
    fontFamily: 'Nunito_800ExtraBold',
    marginTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  txt2: {
    color: '#2E3A59',
    // marginBottom: 80,
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
    fontWeight: '500',
  },

  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  secbox: {
    backgroundColor: '#fff',
    width: '48%',
    height: 280,
borderRadius:10,
    marginBottom: 20,
  },
  viewcontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  paddingHorizontal: 20,

  },
  imgbg: {
    height: 110,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  riskbox: {
    position: 'absolute',
    bottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  risk: {
    color: '#fff',
    backgroundColor: '#1B64E5',
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 10,
    borderRadius: 20,
    fontFamily: 'Nunito_600SemiBold',
  },
  bottomtxtbox: {
    paddingHorizontal: 10,
    marginTop:10
  },
  bottomtxt: {
    color: '#2E3A59',
    fontSize: 13,
    fontFamily: 'Nunito_600SemiBold',
  },
  bottomtxtbox2: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',

    marginBottom: 5,
  },
  bottomtxt2: {
    color: 'rgba(46, 58, 89, 0.7)',
    fontSize: 10,
    fontFamily: 'Nunito_600SemiBold',
  },
  bottomtxt3: {
    color: '#2E3A59',
    fontSize: 11,
    fontFamily: 'Nunito_600SemiBold',
  },
  bottomtxt4: {
    color: '#348045',
    fontSize: 11,
    fontFamily: 'Nunito_600SemiBold',
  },
  scroll: {
    paddingTop: 20,

    maxHeight: 800,
  },
});




{/* <TouchableOpacity onPress={handleNavigateToDetails} style={styles.secbox}>
<ImageBackground
  imageStyle={{
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  }}
  source={require('../../../assets/images/avatar.png')}
  style={styles.imgbg}
></ImageBackground>
<View style={styles.bottomtxtbox}>
  <Text style={styles.bottomtxt}>JIIOJIOI</Text>
</View>

<View style={styles.bottomtxtbox2}>
  <Text style={styles.bottomtxt2}>Account: </Text>
  <Text style={styles.bottomtxt3}>₦30,952.61</Text>
</View>
<View style={styles.bottomtxtbox2}>
  <Text style={styles.bottomtxt2}>Status: </Text>
  <Text style={styles.bottomtxt3}>Scheduling</Text>
</View>
<View style={styles.bottomtxtbox2}>
  <Text style={styles.bottomtxt2}>Start: </Text>
  <Text style={styles.bottomtxt3}>20-10-2022 10:18am</Text>
</View>
<View style={styles.bottomtxtbox2}>
  <Text style={styles.bottomtxt2}>End: </Text>
  <Text style={styles.bottomtxt3}>20-10-2022 10:18pm</Text>
</View>
<View style={styles.bottomtxtbox2}>
  <Text style={styles.bottomtxt2}>Post: </Text>
  <Text style={styles.bottomtxt3}>hsshshhs</Text>
</View>
<View style={styles.bottomtxtbox2}>
  <Text style={styles.bottomtxt2}>Estimate: </Text>
  <Text style={styles.bottomtxt3}>abababa</Text>
</View>
<View style={styles.bottomtxtbox2}>
  <Text style={styles.bottomtxt2}>Postal: </Text>
  <Text style={styles.bottomtxt3}>jm,kkkk</Text>
</View>

</TouchableOpacity> */}