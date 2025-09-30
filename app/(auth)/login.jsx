import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';

// Keep your existing components
import ThemedText from '../../Components/ThemedText';
import ThemedView from '../../Components/ThemedView';
import Spacer from '../../Components/Spacer';

// 1. Import the new wrapper components for RNP functionality
import ThemedTextInput from '../../Components/ThemedTextInput';
import ThemedButton from '../../Components/ThemedButton';

const Login = () => {
    // 2. Add state for email and password input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
        console.log('Login successful! Redirecting to Dashboard.', email, password);
        router.replace('/dashboard'); 
    };

    return (
        // Added padding to the container for better form layout
        <ThemedView style={[styles.container, styles.padding]}>

            <Spacer height={50} />

            <ThemedText title={true} style={styles.title}>
                Login to your Account
            </ThemedText>

            <Spacer height={40} />

            {/* 3. Email Input using ThemedTextInput */}
            <ThemedTextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
            />
            
            <Spacer height={15} />

            {/* 4. Password Input using ThemedTextInput */}
            <ThemedTextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            <Spacer height={30} />

            {/* 5. Login Button using ThemedButton */}
            <ThemedButton 
                mode="contained" // Makes this the primary, filled button
                onPress={handleLogin}
            >
                Login
            </ThemedButton>
            
            <Spacer height={20} />

            {/* 6. Register Link: Use Link with asChild to wrap the ThemedButton */}
            <Link href="/register" replace asChild>
                <ThemedButton mode="text">
                    Register Instead
                </ThemedButton>
            </Link>

        </ThemedView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    padding: {
        paddingHorizontal: 25, // Add horizontal padding for form content
    },
    title: {
        textAlign: "center",
        fontSize: 24, // Increased font size for better visual hierarchy
        fontWeight: 'bold',
        marginBottom: 30
    },
    input: {
        // Any specific style adjustments for the inputs go here
    }
});