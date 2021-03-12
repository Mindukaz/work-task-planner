import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';

import TaskSection from './TaskSection'


// this function will loop through a list of tasks
// and it will only render a section when it has tasks in it.


export default function Week() {


  // TEST DATA. THIS WILL BE REPLACED WITH ACTUAL DATA 
  // WITH FILE I/O. 


  const t = {

    standalone: {
      colour: "red",
      tasks: ["tidy up hoses", "fix hose puncture", "palettes", "hose adaptors"]
    },

    daily: {
      colour: "green",
      tasks: ["dustpans", "oil bycket", "vats", "brooms and brushes"]
    },

    weekly: {
      colour: "blue",
      tasks: ["roof", "clean freezer", "powerwash corral", 
              "powerwash drivethru", "powerwash patio", "clean monitors",
              "step ladders", "external bins", "compactor", "D/T booths", 
              "OSCAR", "chiller", "stockroom"]
    }
  }

  // REMOVE THE ABOVE LATER

  return (
    <ScrollView style={styles.container}>
      <TaskSection name="Standalone Tasks" tasks={t.standalone} />
      <TaskSection name="Daily Tasks" tasks={t.daily} />
      <TaskSection name="Weekly Tasks" tasks={t.weekly} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
});