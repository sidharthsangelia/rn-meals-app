import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem';

export default function MealsList({items}) {
   function renderMealItem(itemData) {
    return <MealItem data={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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
