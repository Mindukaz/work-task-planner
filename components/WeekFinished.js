import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';


// THIS SECTION WILL BE ALOMOS A COMPLETE COPY OF THE 
// TASKS COMPONENT. JUST ONE VARIATION. THE SLIDE FUNTION WILL
// DO THE OPPOSITE


export default function WeekFinished() {
  return (
    <ScrollView style={styles.container}>
      <Text>Monday</Text>
      <Text>Tuesday</Text>
      <Text>Wednesday</Text>
      <Text>Thursday</Text>
      <Text>Friday</Text>
      <Text>Saturday</Text>
      <Text>Sunday</Text>

      <Text>This section will show what tasks got done on what days</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    
  },
});