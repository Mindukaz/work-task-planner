import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function DisplayView() {


  return (
    <ScrollView style={styles.container}>
      <Text>This will pick and display bertween the 3 main screens</Text>
      <Text>This will pick and display bertween the 3 main screens</Text>
      <Text>This will pick and display bertween the 3 main screens</Text>
      <Text>This will pick and display bertween the 3 main screens</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});