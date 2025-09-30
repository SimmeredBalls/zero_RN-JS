// root _layout.jsx

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper'; 

// 1. Import your custom theme
import { CustomTheme } from '../constants/Colors'; 

const RootLayout = () => {

    return (

        <PaperProvider theme={CustomTheme}>
            <StatusBar style="auto" />
            <Stack 
                screenOptions={{
                    // This style now applies to the Home and Dashboard screen headers
                    headerStyle: { backgroundColor: CustomTheme.colors.background },
                    headerTintColor: CustomTheme.colors.onSurface,
                }}
            >
                <Stack.Screen name="index" options={{ title: "Home" }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="dashboard" options={{ title: "Dashboard" }} /> 
            </Stack>
        </PaperProvider>
    )
}

export default RootLayout