import { View, Text } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/MealsList";
import { FavouritesContext } from "../store/favourites-context";
import { MEALS } from "../data/dummy-data";

export default function FavouritesScreen() {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length !== 0) {
    return <MealsList items={favouriteMeals} />;
  } else {
    return (
      <View>
        <Text>Please add meals to favourites</Text>
      </View>
    );
  }
}
