import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// Screen component displaying the user's favorite items
export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Screen</Text>
    </View>
  );
}

// Styles for layout and text
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
