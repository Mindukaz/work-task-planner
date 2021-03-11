import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import { selectView } from '../redux/actions'
import store from '../redux/store';

import * as views from '../js/constants'

export default function NavigationBar() {

  


  return (
    <View style={styles.container}>
      
      <View style={styles.button}>
      <Button 
        title="Tasks"
        color="#121212"
        onPress = { () => store.dispatch(selectView(views.TASK_VIEW))}
      />
      </View>
      
      <View style={styles.button}>
      <Button 
        title="Finished Tasks"
        color="#121212"
        onPress = { () => store.dispatch(selectView(views.F_TASK_VIEW))}
      />
      </View>
      
      <View style={styles.button}>
      <Button 
        title="Config"
        color="#121212"
        onPress = { () => store.dispatch(selectView(views.CONFIG_VIEw))}
      />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    
    
  },

  button: {
      flex: 1,
      color: 'red',
      marginHorizontal: 0.5
  }
});