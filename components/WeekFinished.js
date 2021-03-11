import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';

export default function WeekFinished() {
  return (
    <ScrollView style={styles.container}>
      <Text>Finished task view</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    
  },
});