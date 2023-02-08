import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.borderStyle}>

          <Text style={styles.subTitle}>{children}</Text>    
          </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
      subTitle: {
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold',
       
        textAlign: 'center',
       
    },
      borderStyle: {
         borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginVertical: 4,
         marginHorizontal: 12,
        padding: 6,
    }
})