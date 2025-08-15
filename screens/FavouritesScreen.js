import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
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
      <View style={styles.emptyContainer}>
        <Ionicons name="star-outline" size={64} color="#B23A6F" />
        <Text style={styles.emptyTitle}>No favourites yet</Text>
        <Text style={styles.emptySubtitle}>
          Tap the ★ icon on a meal to add it to your favourites list.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFF8F0", // pastel background
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#5A3E85", // pastel purple
    marginTop: 12,
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 300,
  },
});
