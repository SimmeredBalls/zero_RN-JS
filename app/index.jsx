import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import ThemedText from '../Components/ThemedText'
import ThemedView from '../Components/ThemedCard'


const Home = () => {
  return (
    <ThemedView style={styles.container}>



      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>

    </ThemedView>
    
  )
}

export default Home

const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      marginVertical: 20
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    link: {
      marginVertical: 10,
      borderBottomWidth: 1
    }
})


