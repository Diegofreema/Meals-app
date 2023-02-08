import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
// import {FavoritesContext} from '../store/context/favorites-context'
import { MEALS } from '../dummy/dummy-data'
import { useSelector } from 'react-redux'

const FavoriteScreen = () => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  // const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter((meal) =>
      favoriteMealIds.includes(meal.id)
    );

    if(favoriteMeals == 0) {
      return (
        <View style={styles.rootContainer}>
          <Text style={styles.text}>You have no favorite meals yet</Text>
        </View>
      );
    }else {

      return <MealsList items={favoriteMeals} />;
    }

}

export default FavoriteScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  }
})