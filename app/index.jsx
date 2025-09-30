import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import ThemedText from '../Components/ThemedText';
import ThemedView from '../Components/ThemedView'; // Assuming ThemedCard is now ThemedView or you are using the correct name
// 1. Import ThemedButton
import ThemedButton from '../Components/ThemedButton';


const Home = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedText title={true} style={styles.title}>
        Welcome to the App
      </ThemedText>

      {/* 2. Login Link: Use Link with asChild to wrap a contained ThemedButton */}
      <Link href="/login" asChild>
        <ThemedButton mode="contained" style={styles.button}>
          Login
        </ThemedButton>
      </Link>

      {/* 3. Register Link: Use Link with asChild to wrap an outlined ThemedButton */}
      <Link href="/register" asChild>
        <ThemedButton mode="outlined" style={styles.button}>
          Register
        </ThemedButton>
      </Link>

    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Added padding for better layout
  },
  title: {
    fontSize: 24, // Consistent title size
    marginBottom: 40,
    textAlign: 'center',
  },
  // 4. New button style
  button: {
    marginVertical: 10,
    width: 200, // Fixed width for consistent button size
  },
  // Removed old 'link' and 'img' styles as they are no longer relevant
});