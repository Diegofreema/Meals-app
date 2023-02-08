import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = ({
  id,
  title,
  imageUrl,
  affordability,
  duration,
  complexity,
}) => {
  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.navigate("MealsDetail", {
      title: title,
      id: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={navigationHandler}>
        <View>
          <View>
            <Image style={styles.imageStyle} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            affordability={affordability}
            duration={duration}
            complexity={complexity}
            textStyle={styles.textStyle}
            style={styles.style}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  textStyle: {
    color: "black",
  },
  style: {
    color: "black",
  },
});
