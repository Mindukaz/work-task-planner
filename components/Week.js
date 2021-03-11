import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';

export default function Week() {
  return (
    <ScrollView style={styles.container}>
      <Text>Weekly task list</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});