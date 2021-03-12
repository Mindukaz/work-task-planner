import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Task(props) {

  return (
    <View style={
        {
            backgroundColor: props.colour,

            borderColor: "black",
            borderWidth: 1,
            borderRadius: 9,

            marginBottom: 3
        }
        }>
      <Text style={styles.text}> {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
      fontSize: 22,
      paddingLeft: 20
  }
});