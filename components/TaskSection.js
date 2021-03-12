import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Task from './Task'

export default function TaskSection(props) {


    const tasks = props.tasks.tasks.map( task =>
        <Task name={task} colour={props.tasks.colour}/>
    )

    return (
        <View style={styles.container}>


            <Text style= {
                {
                    color: props.tasks.colour,
                    marginBottom: 10,
                    fontSize: 25
                }}> 


                {props.name}
            </Text>
            
            
            
            {tasks}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 25  }
});