import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// Screen for user login and navigation to registration or main tabs
export default function LoginScreen() {
  const router = useRouter(); // Hook for navigating between screens

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      {/* Button to log in and navigate to main tab layout */}
      <Button
        title="Log In"
        onPress={() => router.replace('/(tabs)')}
      />

      {/* Button to navigate to the registration screen */}
      <Button
        title="Go to Register"
        onPress={() => router.push('/register')}
      />
    </View>
  );
}

// Styling for layout and text appearance
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full screen height
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
  title: {
    fontSize: 24, // Prominent text size
    fontWeight: 'bold', // Bold text
    marginBottom: 20, // Space between title and buttons
  },
});
