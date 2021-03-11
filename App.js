import React from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';

import store from './redux/store'

import NavigationBar from './components/NavigationBar'
import DisplayView from './components/DsiplayView'
import { Provider } from 'react-redux';

export default function App() {

  return (
    <Provider store = {store}>
        <View style={styles.container}>

          <StatusBar 
            translucent = {false}
          />

          <DisplayView />
          <NavigationBar />
        </View>
    </Provider>

    
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1
  },
});
