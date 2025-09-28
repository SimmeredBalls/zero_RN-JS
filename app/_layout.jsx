import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

    const theme = Colors.ftstic

  return (
    <>
        <StatusBar value="auto" />
        <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.background},
            headerTintColor: theme.general,
        }}>

            <Stack.Screen name="index" options={{ title: "Home" }} />
            
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        </Stack>
    </>
  )
}

export default RootLayout