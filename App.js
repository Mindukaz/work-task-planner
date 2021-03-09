import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';

import NavigationBar from './components/NavigationBar'
import DisplayView from './components/DsiplayView'

export default function App() {



  // NEED TO MAKE STATE WORK HERE, IN SOME WAY. THEN FINISH MAKING THE 'DYNAMIC' MAIN VIEW SCREEN.
  // HOPEFULLY YOU WILL ACTUALLY GET BACK TO WORKING ON THIS, YOU DUMBASS. DONT ABANDON THIS PROJECT,
  // LIKE YOU ABANDON EVERYTHING ELSE YOU DO, DUMBASS.

  const [taskView, setTastView] = useState(true)
  const [fTaskView, setFTaskView] = useState(false)
  const [conf, setConf] = useState(false)

  return (
    <View style={styles.container}>

      <StatusBar 
        translucent = {false}
      />

      <DisplayView />
      <NavigationBar />
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1
  },
});
