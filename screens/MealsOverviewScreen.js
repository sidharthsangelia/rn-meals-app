import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

export default function MealsOverviewScreen({ navigation, route }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  return <MealsList items={displayMeals} />;
}
