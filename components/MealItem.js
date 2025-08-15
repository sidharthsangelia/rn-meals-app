import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({ data }) {
  // Color coding for complexity
  const complexityColors = {
    simple: "#4CAF50", // green
    challenging: "#FF9800", // orange
    hard: "#F44336", // red
  };

  // Color coding for affordability (with better yellow contrast)
  const affordabilityColors = {
    affordable: "#2196F3", // blue
    pricey: "#9C27B0", // purple
    luxurious: "#B8860B", // richer gold for text contrast
  };

  // Light background shades for tags
  const getTagBg = (color) => {
    return color + "22"; // semi-transparent for light background
  };
  const navigation = useNavigation();
  function pressHandler() {
    navigation.navigate("MealDetail", {
      mealId: data.id,
    });
  }

 

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && { transform: [{ scale: 0.998 }], opacity: 0.9 },
      ]}
      android_ripple={{ color: "#ddd" }}
      onPress={ pressHandler}
    >
      <Image style={styles.image} source={{ uri: data.imageUrl }} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>

        <View style={styles.metaContainer}>
          <View style={[styles.tag, { backgroundColor: "#E3F2FD" }]}>
            <Text style={[styles.tagText, { color: "#1565C0" }]}>
              {data.duration} mins
            </Text>
          </View>

          <View
            style={[
              styles.tag,
              {
                backgroundColor: getTagBg(
                  complexityColors[data.complexity.toLowerCase()]
                ),
              },
            ]}
          >
            <Text
              style={[
                styles.tagText,
                { color: complexityColors[data.complexity.toLowerCase()] },
              ]}
            >
              {data.complexity.toUpperCase()}
            </Text>
          </View>

          <View
            style={[
              styles.tag,
              {
                backgroundColor: getTagBg(
                  affordabilityColors[data.affordability.toLowerCase()]
                ),
              },
            ]}
          >
            <Text
              style={[
                styles.tagText,
                {
                  color: affordabilityColors[data.affordability.toLowerCase()],
                },
              ]}
            >
              {data.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
    margin: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
  },
  metaContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  tagText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
