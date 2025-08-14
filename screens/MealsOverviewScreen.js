import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const catTitle = route.params.categoryTitle;
  const catColor = route.params.categoryColor;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem data={itemData.item}/>;
  }

  return (
    <View style={styles.container}>
      {/* <Text>MealsOverviewScreen - {catId} , {catTitle} , {catColor}</Text> */}
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
       
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
