import { StyleSheet,View, FlatList } from "react-native";
import React from 'react'
import MealItem from "./MealItem";


const MealsList = ({items}) => {
 const renderMeal = (itemData) => {
   const item = itemData.item;
   const mealProps = {
     title: item.title,
     imageUrl: item.imageUrl,
     duration: item.duration,
     affordability: item.affordability,
     complexity: item.complexity,
     id: item.id,
   };

   return <MealItem {...mealProps} />;
 };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default MealsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});