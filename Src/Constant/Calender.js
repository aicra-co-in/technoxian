import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';

const Calender = () => {
  const [selected, setSelected] = useState('');
  const [events, setEvents] = useState({});
  const [eventText, setEventText] = useState('');

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };

  const onAddEvent = () => {
    if (!selected || !eventText) {
      // Handle invalid input
      return;
    }

    const eventData = {
      selected: true,
      disableTouchEvent: true,
      selectedDotColor: 'orange',
      text: eventText,
      // Add more properties as needed for your events
    };

    setEvents((prevEvents) => {
      return { ...prevEvents, [selected]: eventData };
    });

    // Clear the event text input
    setEventText('');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            ...events,
          }}
        />
      </View>
      <View style={styles.agendaContainer}>
        <Text style={styles.selectedDateText}>Selected Date: {selected}</Text>
        <TextInput
          style={styles.eventInput}
          placeholder="Enter event"
          value={eventText}
          onChangeText={(text) => setEventText(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={onAddEvent}>
          <Text>Add Event</Text>
        </TouchableOpacity>
        {events[selected] && (
          <View style={styles.agendaItem}>
            <Text>{events[selected].text}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 0.5,
  },
  agendaContainer: {
    flex: 0.5,
    padding: 16,
  },
  selectedDateText: {
    marginBottom: 10,
  },
  eventInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  agendaItem: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default Calender;
