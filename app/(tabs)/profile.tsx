import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// Screen component for displaying the user's profile information
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

// Styles for centering content and text
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
