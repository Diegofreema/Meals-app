import { StyleSheet, Text, View , Pressable} from 'react-native'
import React from 'react'

const CategoryGridTile = ({title, color, navigate}) => {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
          <Pressable android_ripple={{color: '#ccc'}} style={[styles.press]} onPress={navigate}>
              <View style={styles.innerContainer}>
                  <Text style={styles.title}>{title }</Text>
              </View>
          </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    press: {
        flex: 1,
       
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})