import React from 'react';
import { StyleSheet} from 'react-native';
import { connect } from 'react-redux'

import Week from './Week'
import WeekFinished from './WeekFinished'
import Configuration from './Configuration'

import store from '../redux/store';
import * as views from '../js/constants';



export function DisplayView() {

  switch (store.getState().view){
    case views.TASK_VIEW:
      return (<Week />)
      
    case views.F_TASK_VIEW:
      return (<WeekFinished />)
      
    case views.CONFIG_VIEw:
      return (<Configuration />) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


function mapStateToProps(state){
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(DisplayView)
