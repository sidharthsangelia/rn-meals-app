import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { Platform } from "react-native";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";

import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FavouriteContextProvider from "./store/favourites-context";
 

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.textLight,
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
        contentStyle: { backgroundColor: Colors.background },
        sceneContainerStyle: { backgroundColor: Colors.background },
        drawerContentStyle: { backgroundColor: Colors.primaryLight },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: Colors.primary,
        drawerActiveBackgroundColor: Colors.accent,
        // animation: "slide_from_right",
      }}
    >
      <Drawer.Screen
        name="Categoies"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="favourites"
        component={FavouritesScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// 🎨 Define a modern, sleek color palette for food theme
const Colors = {
  primary: "#3E2C23", // deep cocoa brown
  primaryLight: "#5B4033", // lighter brown for subtle contrast
  accent: "#F2A65A", // warm orange highlight
  background: "#ffedd4ff", // light, creamy background
  textLight: "#FFFFFF",
  textDark: "#2C1A12",
};

// 🖌 Custom Navigation Theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <FavouriteContextProvider>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary },
              headerTintColor: Colors.textLight,
              headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
              contentStyle: { backgroundColor: Colors.background },
              // animation: "slide_from_right",
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={({ route }) => ({
                title: route.params.categoryTitle,
              })}
            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}
