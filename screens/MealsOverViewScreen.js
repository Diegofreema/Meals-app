import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../dummy/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

const MealsOverViewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

 

  return (
    <MealsList items={displayedMeals}/>
  );
};

export default MealsOverViewScreen;


