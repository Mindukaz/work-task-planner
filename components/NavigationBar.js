import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function NavigationBar() {

  


  return (
    <View style={styles.container}>
      
      <View style={styles.button}>
      <Button 
        title="Tasks"
        color="#121212"
        onPress = {() => console.log("Task button")}
      />
      </View>
      
      <View style={styles.button}>
      <Button 
        title="Finished Tasks"
        color="#121212"
        onPress = {() => console.log("finito button")}
      />
      </View>
      
      <View style={styles.button}>
      <Button 
        title="Config"
        color="#121212"
        onPress = {() => console.log("conf")}
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