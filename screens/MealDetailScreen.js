import React, { useLayoutEffect, useMemo } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  // find the single meal (fixes the '=' vs '===' bug)
  const meal = useMemo(() => MEALS.find((m) => m.id === mealId), [mealId]);
  function headerButtonPressHandler() {
    console.log("Pressed");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.title ?? "Meal Detail",
      headerRight: () => {
        return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, meal]);

  if (!meal) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Meal not found.</Text>
      </View>
    );
  }

  // Pastel accent palette (subtle, vivid but not loud)
  const Pastel = {
    bg: "#FFF8F0", // warm cream
    card: "#FFFFFF",
    text: "#2B2B2B",
    subtext: "#666",
    badgeBlue: "#D9EAFD",
    badgeBlueText: "#0F4C81",
    badgeGreen: "#DFF6E5",
    badgeGreenText: "#1B6C4B",
    badgePink: "#FFE2EC",
    badgePinkText: "#B23A6F",
    chip: "#EFEAF7",
    chipText: "#5A3E85",
    divider: "#EEE",
  };

  // Map complexity/affordability to pastel tags
  const complexityColor = {
    simple: { bg: Pastel.badgeGreen, text: Pastel.badgeGreenText },
    challenging: { bg: Pastel.badgeBlue, text: Pastel.badgeBlueText },
    hard: { bg: Pastel.badgePink, text: Pastel.badgePinkText },
  }[meal.complexity?.toLowerCase()] || {
    bg: Pastel.chip,
    text: Pastel.chipText,
  };

  const affordabilityColor = {
    affordable: { bg: "#E7F5FF", text: "#155E75" },
    pricey: { bg: "#F3E8FF", text: "#6B21A8" },
    luxurious: { bg: "#FFF3D6", text: "#8E5C00" },
  }[meal.affordability?.toLowerCase()] || {
    bg: Pastel.chip,
    text: Pastel.chipText,
  };

  return (
    <ScrollView style={[styles.screen, { backgroundColor: Pastel.bg }]}>
      {/* Hero card */}
      <View style={styles.heroCard}>
        <Image source={{ uri: meal.imageUrl }} style={styles.heroImage} />
        <View style={styles.heroContent}>
          <Text
            style={[styles.title, { color: Pastel.text }]}
            numberOfLines={2}
          >
            {meal.title}
          </Text>

          {/* Meta badges */}
          <View style={styles.badgesRow}>
            <View style={[styles.badge, { backgroundColor: Pastel.badgeBlue }]}>
              <Text style={[styles.badgeText, { color: Pastel.badgeBlueText }]}>
                {meal.duration} min
              </Text>
            </View>

            <View
              style={[styles.badge, { backgroundColor: complexityColor.bg }]}
            >
              <Text style={[styles.badgeText, { color: complexityColor.text }]}>
                {meal.complexity?.toUpperCase()}
              </Text>
            </View>

            <View
              style={[styles.badge, { backgroundColor: affordabilityColor.bg }]}
            >
              <Text
                style={[styles.badgeText, { color: affordabilityColor.text }]}
              >
                {meal.affordability?.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Ingredients */}
      <View style={[styles.card, { backgroundColor: Pastel.card }]}>
        <Text style={[styles.sectionTitle, { color: Pastel.text }]}>
          Ingredients
        </Text>
        <View style={styles.divider} />
        {meal.ingredients.map((ing, idx) => (
          <View key={`ing-${idx}`} style={styles.rowItem}>
            <View style={styles.bullet} />
            <Text style={[styles.rowText, { color: Pastel.text }]}>{ing}</Text>
          </View>
        ))}
      </View>

      {/* Steps */}
      <View style={[styles.card, { backgroundColor: Pastel.card }]}>
        <Text style={[styles.sectionTitle, { color: Pastel.text }]}>Steps</Text>
        <View style={styles.divider} />
        {meal.steps.map((step, idx) => (
          <View key={`step-${idx}`} style={styles.stepRow}>
            <View style={styles.stepIndexWrap}>
              <Text style={styles.stepIndex}>{idx + 1}</Text>
            </View>
            <Text style={[styles.stepText, { color: Pastel.text }]}>
              {step}
            </Text>
          </View>
        ))}
      </View>

      {/* Dietary chips */}
      <View style={[styles.card, { backgroundColor: Pastel.card }]}>
        <Text style={[styles.sectionTitle, { color: Pastel.text }]}>
          Dietary
        </Text>
        <View style={styles.divider} />
        <View style={styles.chipsRow}>
          <DietChip label="Gluten-Free" active={meal.isGlutenFree} />
          <DietChip label="Vegan" active={meal.isVegan} />
          <DietChip label="Vegetarian" active={meal.isVegetarian} />
          <DietChip label="Lactose-Free" active={meal.isLactoseFree} />
        </View>
      </View>

      <View style={{ height: 24 }} />
      <StatusBar style="light" />
    </ScrollView>
  );
}

/** Small presentational chip */
function DietChip({ label, active }) {
  return (
    <View style={[styles.chip, { opacity: active ? 1 : 0.45 }]}>
      <Text style={styles.chipText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  /** Hero */
  heroCard: {
    borderRadius: 18,
    overflow: "hidden",
    margin: 16,
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  heroImage: {
    width: "100%",
    height: 220,
  },
  heroContent: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 0.3,
    marginBottom: 10,
  },
  badgesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  badge: {
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  badgeText: {
    fontSize: 12.5,
    fontWeight: "700",
    letterSpacing: 0.4,
  },

  /** Cards */
  card: {
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 14,
    padding: 14,
    elevation: 2,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginBottom: 8,
  },

  /** Ingredients rows */
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#C6B7EF", // soft lavender dot
    marginRight: 10,
  },
  rowText: {
    fontSize: 15,
    lineHeight: 22,
  },

  /** Steps rows */
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 8,
  },
  stepIndexWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9EAFD", // pastel blue
    marginRight: 10,
    marginTop: 2,
  },
  stepIndex: {
    fontSize: 13,
    fontWeight: "800",
    color: "#0F4C81",
  },
  stepText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },

  /** Chips */
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: "#EFEAF7", // pastel purple
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  chipText: {
    fontSize: 12.5,
    fontWeight: "700",
    color: "#5A3E85",
    letterSpacing: 0.2,
  },

  /** Fallback */
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  errorText: {
    fontSize: 16,
    color: "#B23A6F",
    fontWeight: "700",
  },
});
