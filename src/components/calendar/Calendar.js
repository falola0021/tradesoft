import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import { View } from 'react-native';
import React from 'react';

export default class Example extends React.Component {
  render() {
    return (
      <View style={{  flex: 1 }}>
       <Calendar
        markingType={'period'}
        markedDates={{
        
          '2022-02-21': {startingDay: true, color: '#F1E22E', textColor: '#000'},
          '2022-02-22': {color: '#F1E22E', textColor: '#000'},
          '2022-02-23': {color: '#F1E22E', textColor: '#000'},
          '2022-02-24': {color: '#F1E22E', textColor: '#000'},
          '2022-02-25': {endingDay: true, color: '#F1E22E', textColor: '#000'}
        }}

/>
      </View>
    );
  }
}
