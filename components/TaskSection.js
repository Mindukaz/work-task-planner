import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Task from './Task'

export default function TaskSection(props) {


    const tasks = props.tasks.map( task =>
        <Task name={task} location={props.name} finished={props.finished}/>
    )

    return (
        <View style={styles.container}>


            <Text style= {
                {
                    color: 'orange',
                    marginBottom: 10,
                    fontSize: 25,
                    marginLeft: 10
                }}> 


                {props.name}
            </Text>
            
            <View style={styles.border}></View>
            
            {tasks}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 25  
    },

    border: {
        borderBottomColor:'white',
        borderBottomWidth: 1,
        marginBottom: 10
    }

});