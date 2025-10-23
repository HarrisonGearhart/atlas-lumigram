import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// Screen for user registration with navigation options
export default function RegisterScreen() {
  const router = useRouter(); // Hook to manage navigation between screens

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Screen</Text>

      {/* Navigate to main tabs after creating an account */}
      <Button
        title="Create Account"
        onPress={() => router.replace('/(tabs)')}
      />

      {/* Return to the login screen */}
      <Button
        title="Back to Login"
        onPress={() => router.back()}
      />
    </View>
  );
}

// Styles for layout and text 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Centers content horizontally
    justifyContent: 'center', // Centers content vertically
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
