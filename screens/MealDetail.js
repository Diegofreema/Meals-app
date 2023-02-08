import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { MEALS } from "../dummy/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite} from '../store/redux/favorite'
// import { FavoritesContext } from "../store/context/favorites-context";

const MealDetail = ({ route, navigation }) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const title = route.params.title;
  const mealId = route.params.id;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const { duration, complexity, affordability, imageUrl, ingredients, steps } =
    selectedMeal;

  const mealsIsFavorite = favoriteMealIds.includes(mealId);

  const pressHandler = () => {
    if (mealsIsFavorite) {
      dispatch(removeFavorite({id: mealId}))
      // favoriteMealsCtx.removeFavorite(mealId);
    } else {
      dispatch(addFavorite({ id: mealId }));

      // favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal Details",
      contentStyle: { backgroundColor: "white" },
      headerRight: () => {
        return (
          <IconButton
            onPress={pressHandler}
            icon={mealsIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, pressHandler]);

  return (
    <ScrollView style={{ marginBottom: 0 }}>
      <Image style={styles.img} source={{ uri: imageUrl }} />
      <Text style={styles.title}> {selectedMeal.title} </Text>
      <View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          textStyle={styles.textStyle}
          style={styles.style}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ maxWidth: "80%" }}>
          <Subtitle>Ingredients</Subtitle>
          <List dataPoints={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List dataPoints={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "#351",
  },
  textStyle: {
    color: "#351",
  },
  style: {
    color: "#351",
  },
});
