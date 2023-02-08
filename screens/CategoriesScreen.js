import { StyleSheet, FlatList } from 'react-native';
import React from 'react';

import { CATEGORIES } from '../dummy/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';





const CategoriesScreen = ({ navigation }) => {
    const renderItems = (itemData) => {
        const navigateHandler = () => {
            navigation.navigate('MealsOverView', {
                categoryId: itemData.item.id
            });
        }
    return <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
         navigate={navigateHandler}

    />;
}

  return (
      <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderItems}
          numColumns={2}
          />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})