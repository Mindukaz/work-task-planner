import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';

export default function Configuration() {
  return (
    <ScrollView style={styles.container}>
      <Text> Configuration view</Text>
      <Text> 
        This section will be the seeting of the app. Anything from
        the colours to the task and at what intervals they repeat. 
        This section will also allow the removal of tasks, editing them,
        etc. 
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});