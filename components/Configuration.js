import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';

export default function Configuration() {
  return (
    <ScrollView style={styles.container}>
      <Text> Configuration view</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});