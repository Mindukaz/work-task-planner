import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import { connect } from 'react-redux'

import TaskSection from './TaskSection'
import * as labels from '../js/constants';



export function Week(props) {

  const newList = props.custom.concat(props.standalone)

  function checkTasks(title, list) {
    if (list.length > 0) {
      return <TaskSection name={title} tasks={list} finished={false} />
    }
    return null
  }

  return (
    <ScrollView style={styles.container}>
      {checkTasks(labels.SINGLE, newList)}
      {checkTasks(labels.DAILY, props.daily)}
      {checkTasks(labels.WEEKLY, props.weekly)}
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
    standalone: state.tasks.standalone,
    daily: state.tasks.daily,
    weekly: state.tasks.weekly,
    custom: state.tasks.custom
  }
}

export default connect(mapStateToProps)(Week)