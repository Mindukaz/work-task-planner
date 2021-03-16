import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';
import { connect } from 'react-redux'
import TaskSection from './TaskSection'
import { unfinishTask } from '../redux/actions'


// THIS IS WHERE I STOPPED. IMPLEMENTING FUCNTIONALITY SO SWITCH TASKS
// BETWEEN FINISHED AND UNFINISHED. LAST THING I DID WAS IMPLEMENT
// THE ACTION FUNCTION. CONFUSION AROSE THERE. START FROM THERE.


export function WeekFinished(props) {

  return (
    <ScrollView style={styles.container}>
      <TaskSection name={"Monday"} tasks={props.monday} function={unfinishTask}/>
      <TaskSection name={"Tuesday"} tasks={props.tuesday} function={unfinishTask} />
      <TaskSection name={"Wednesday"} tasks={props.wednesday} function={unfinishTask} />
      <TaskSection name={"Thursday"} tasks={props.thursday} function={unfinishTask} />
      <TaskSection name={"Friday"} tasks={props.friday} function={unfinishTask} />
      <TaskSection name={"Saturday"} tasks={props.saturday} function={unfinishTask} />
      <TaskSection name={"Sunday"} tasks={props.sunday} function={unfinishTask} />
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