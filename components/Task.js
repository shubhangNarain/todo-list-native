import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
            </View>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.circular}></View>
        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        borderRadius: 7,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#66BFBF',
        opacity: 0.4,
        borderRadius: 5
    },
    text: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#66BFBF',
        borderWidth: 2,
        borderRadius: 5,

    },
})


export default Task
