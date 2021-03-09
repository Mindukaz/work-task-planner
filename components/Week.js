import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Week() {
  return (
    <View style={styles.container}>
      <Text>Weekly task list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});