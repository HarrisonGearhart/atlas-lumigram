import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// Screen component for creating or adding a new post
export default function AddPostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Post Screen</Text>
    </View>
  );
}

// Styling configuration for layout and text
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full screen height
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
