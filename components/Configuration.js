import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput} from 'react-native';
import { connect } from 'react-redux'

import TaskSection from './TaskSection'
import { editTask, addTask } from '../redux/actions'
import store from '../redux/store';
import * as labels from '../js/constants';


export function Configuration(props) {

  const [name, setName] = useState("")
  const [interval, setInterval] = useState("")
  const [nameErr, setNameErr] = useState("")
  const [intervalErr, setIntervalErr] = useState("")

  function addTaskf() {
      console.log("task added")
      if(name === "") {
        setNameErr("A name is required")
        return
      }

      setNameErr("")


      // for some reason this only sets it to upper case on the
      // second click.........
      setInterval(interval.toUpperCase())

      console.log(interval)

      if(  interval !== labels.ONCE
        && interval !== labels.DAILY 
        && interval !== labels.WEEKLY
        && interval !== labels.MONYHLY
        && interval !== labels.MONTHLY3 
        && interval !== labels.MONTHLY6 
        && interval !== labels.YEARLY) {
          setIntervalErr("Interval needs to be one of the above")
          return
        }

        
        setIntervalErr("")

       store.dispatch(addTask(name, interval))

       console.log(store.getState().config)
  }


  return (
    <ScrollView style={styles.container}>

      <View style={styles.addTask}>

          <Text style={styles.textLabel}>Task Name:</Text>
          <TextInput 
            style={styles.textInput} 
            onChangeText={(val) => setName(val)}
          />
          <Text style={styles.errText}>{nameErr}</Text>

          <Text style={styles.textLabel}>Task Interval: </Text>
          <Text style={styles.textLabel}>(O, D, W, M, 3M, 6M, Y)</Text>
          <TextInput 
            style={styles.textInput} 
            onChangeText={(val) => setInterval(val)}
          />
          <Text style={styles.errText}>{intervalErr}</Text>

          <TouchableOpacity
            style={styles.addTaskButton}
            onPress={() => addTaskf()}
          >
            <Text>Add Task</Text>
          </TouchableOpacity>
        
      </View>

      <TaskSection name={"Tasks"} tasks={props.allTasks} function={editTask} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    paddingTop: 10
  },

  textInput: {
      borderWidth: 1,
      margin: 10,
      width: '80%',
      padding: 8,
      backgroundColor: '#A9A9A9'
  },

  textLabel: {
    marginLeft: 10,
    color: 'white'
  },

  addTask: {
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },

  addTaskButton: {
    backgroundColor: 'green',
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    height: '10%',
    borderWidth: 1
  },

  errText: {
    color: 'red',
    marginLeft: 12
  }
});

function mapStateToProps(state){
  return {
    allTasks: state.config.allTasks
  }
}

export default connect(mapStateToProps)(Configuration)