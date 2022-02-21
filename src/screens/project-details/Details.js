import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Arrowback from '../../components/back-button/Back';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../../../assets/images/avatar.png';
import Notes from '../../components/notes/Notes';
import Rams from '../../components/rams/Rams';
import Calendar from '../../components/calendar/Calendar';
import Live from "../../components/live/Live"

import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Octicons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';
import { set } from 'react-native-reanimated';

const Notifications = () => {
  const navigation = useNavigation();
  const [note, setNote] = React.useState(true);
  const [rams, setRams] = React.useState(false);
  const [calendar, setCalendar] = React.useState(false);
  const [live, setLive] = React.useState(false);
  

  const handleNote = () => {
    setLive(false);
    setNote(true);
    setRams(false);
    setCalendar(false);
  };
  const handleRams = () => {
    setLive(false);
    setNote(false);
    setRams(true);
    setCalendar(false);
  };
  const handleCalendar = () => {
    setLive(false);
    setNote(false);
    setRams(false);
    setCalendar(true);
  };
  const handleLive = () => {
    setLive(true);
    setNote(false);
    setRams(false);
    setCalendar(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

    <SafeAreaView>
      <View style={styles.container}>
          <View style={styles.headerbox}>
            <Arrowback />
            <Text style={styles.nottext}>Project Overview</Text>
          </View>
          <View>
            <Image style={styles.img} source={Avatar} />
          </View>
          <View style={styles.detailspage}>
            <Text style={styles.title}>jiiojioi</Text>
            <Text style={styles.address}>
              125, Brierley Hill, Dudley, West Midlands, SY3 3NH, AL
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.moredetailsbox}
            >
              <View style={styles.itemcontainer}>
                <MaterialCommunityIcons
                  name='calendar-check-outline'
                  color='#66C825'
                  size={25}
                />
                <Text style={styles.temtext1}>Start</Text>

                <Text style={styles.temtext}>10-11-2020 11:02 AM</Text>
              </View>
              <View style={styles.itemcontainer}>
                <MaterialCommunityIcons
                  name='calendar-check'
                  color='#66C825'
                  size={25}
                />
                <Text style={styles.temtext1}>End</Text>

                <Text style={styles.temtext}>10-11-2020 11:02 AM</Text>
              </View>
              <View style={styles.itemcontainer}>
                <MaterialIcons
                  name='workspaces-outline'
                  color='#66C825'
                  size={25}
                />
                <Text style={styles.temtext1}>Signoff Type</Text>

                <Text style={styles.temtext}>RBC project sign off</Text>
              </View>
              <View style={styles.itemcontainer}>
                <MaterialCommunityIcons
                  name='format-list-bulleted-type'
                  color='#66C825'
                  size={25}
                />
                <Text style={styles.temtext1}>Project Type</Text>

                <Text style={styles.temtext}>Full</Text>
              </View>
              <View style={styles.itemcontainer}>
                <Feather name='user-check' color='#66C825' size={25} />
                <Text style={styles.temtext1}>Account</Text>

                <Text style={styles.temtext}>aa</Text>
              </View>
              <View style={styles.itemcontainer}>
                <AntDesign name='contacts' color='#66C825' size={25} />
                <Text style={styles.temtext1}>Contact Name</Text>

                <Text style={styles.temtext}>Curtis Name ntest testtt </Text>
              </View>
              <View style={styles.itemcontainer1}>
                <MaterialCommunityIcons
                  name='contacts-outline'
                  color='#66C825'
                  size={25}
                />
                <Text style={styles.temtext1}>Contact Phone</Text>

                <Text style={styles.temtext}>+24356787355</Text>
              </View>
            </ScrollView>
            <View style={styles.tabs}>
              <TouchableOpacity onPress={handleNote} style={note? styles.tab:styles.tab2}>
                <Text style={ note? styles.tabtext:styles.tabtext2}>Notes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRams} style={rams ? styles.tab:styles.tab2}>
                <Text style={ rams ? styles.tabtext: styles.tabtext2}>Rams</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCalendar} style={calendar ? styles.tab:styles.tab2}>
                <Text style={calendar? styles.tabtext: styles.tabtext2}>Calendar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLive} style={live ? styles.tab:styles.tab2}>
                <Text style={live? styles.tabtext: styles.tabtext2}>Live</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contentcontainer}>
              {note &&
              <Notes/>
}
{rams &&
              <Rams/>
}
{calendar &&
              <Calendar/>
}
{live &&
              <Live/>
}
            </View>
          </View>
        
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  contentcontainer:{
    marginTop:20
  },
  tabtext: {
    fontSize: 14,
    fontFamily: 'Nunito_600SemiBold',
    color: '#66C825',
  },
  tab: {
    paddingVertical: 7,
    width: '25%',
    borderBottomColor: '#66C825',
    borderBottomWidth: 3,
    alignItems: 'center',
    
  },
  tabtext2: {
    fontSize: 14,
    fontFamily: 'Nunito_600SemiBold',
    color: '#A9A9A9',
  },
  tab2: {
    paddingVertical: 7,
    width: '25%',
    borderBottomColor: 'rgba(220,220,220,0.4)',
    borderBottomWidth: 3,
    alignItems: 'center',
  },
  tabs: {
    marginTop: 30,
   

    display: 'flex',
    flexDirection: 'row',
  },

  container: {
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
    marginBottom: 20,
    paddingHorizontal: 20,
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
  img: {
    width: '100%',
    resizeMode: 'contain',
    height: 270,
  },
  detailspage: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Nunito_600SemiBold',
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  address: {
    fontSize: 10,
    fontFamily: 'Nunito_600SemiBold',
    color: 'rgba(46, 58, 89, 0.7)',

    marginTop: 10,
  },
  moredetailsbox: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  itemcontainer: {
    width: 80,
    alignItems: 'center',
  },
  itemcontainer1: {
    width: 80,
    alignItems: 'center',
    marginLeft: 15,
  },
  temtext: {
    fontSize: 10,
    fontFamily: 'Nunito_600SemiBold',
    color: 'rgba(46, 58, 89, 0.6)',
    textAlign: 'center',
    marginTop: 5,
  },
  temtext1: {
    fontSize: 10,
    fontFamily: 'Nunito_600SemiBold',
    color: '#000',
    // fontWeight:"bold",
    textAlign: 'center',
    marginTop: 5,
  },
});
