import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({dataPoints}) => {
    return dataPoints.map((data) => (
       <View key={data} style={styles.list}>
       
       <Text style={styles.textItem} >{data}</Text>
       </View>
    )
    )
  
}

export default List

const styles = StyleSheet.create({
    list: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#351'
    },
    textItem: {
        textAlign: 'center',
        color: 'white'
    }
})