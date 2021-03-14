import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';
import { connect } from 'react-redux'
import TaskSection from './TaskSection'


// THIS IS WHERE I STOPPED. IMPLEMENTING FUCNTIONALITY SO SWITCH TASKS
// BETWEEN FINISHED AND UNFINISHED. LAST THING I DID WAS IMPLEMENT
// THE ACTION FUNCTION. CONFUSION AROSE THERE. START FROM THERE.


export function WeekFinished(props) {

  return (
    <ScrollView style={styles.container}>
      <TaskSection name={"Monday"} tasks={props.monday} finished={true}/>
      <TaskSection name={"Tuesday"} tasks={props.tuesday} finished={true} />
      <TaskSection name={"Wednesday"} tasks={props.wednesday} finished={true} />
      <TaskSection name={"Thursday"} tasks={props.thursday} finished={true} />
      <TaskSection name={"Friday"} tasks={props.friday} finished={true} />
      <TaskSection name={"Saturday"} tasks={props.saturday} finished={true} />
      <TaskSection name={"Sunday"} tasks={props.sunday} finished={true} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    
  },
});

function mapStateToProps(state){
  return {
    monday: state.finishedTasks.monday,
    tuesday: state.finishedTasks.tuesday,
    wednesday: state.finishedTasks.wednesday,
    thursday: state.finishedTasks.thursday,
    friday: state.finishedTasks.friday,
    saturday: state.finishedTasks.saturday,
    sunday: state.finishedTasks.sunday
  }
}

export default connect(mapStateToProps)(WeekFinished)