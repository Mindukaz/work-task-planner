import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import { finishTask, unfinishTask } from '../redux/actions';
import store from '../redux/store';

export default function Task(props) {

  // props.name will be replaced with props.task.
  // right now tasks are just strings, but later they
  // will be actual objects


  if(props.finished){
    return (
      <TouchableOpacity 
        onLongPress={() => store.dispatch(unfinishTask(props.name, props.location))}
        style={styles.opacity}>
        <Text style={styles.text}> {props.name}</Text>
      </TouchableOpacity>
    );
  }


  return (
    <TouchableOpacity 
      onLongPress={() => store.dispatch(finishTask(props.name, props.location))}
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