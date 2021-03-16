import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import store from '../redux/store';

export default function Task(props) {

  return (
    <TouchableOpacity 
      onLongPress={() => store.dispatch(props.function(props.name, props.location))}
      style={styles.opacity}>

      <Text style={styles.text}> {props.name}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
      fontSize: 22,
      paddingLeft: 20,
      paddingBottom: 5,
      color: 'teal'
  },

  opacity: {

      borderBottomColor: "white",
      borderBottomWidth: 1,

      marginBottom: 10,
      paddingBottom: 10
}
});