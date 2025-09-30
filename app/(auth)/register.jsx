import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';

// Keep your existing components
import ThemedText from '../../Components/ThemedText';
import ThemedView from '../../Components/ThemedView';
import Spacer from '../../Components/Spacer';

// Import the new wrapper components for RNP functionality
import ThemedTextInput from '../../Components/ThemedTextInput';
import ThemedButton from '../../Components/ThemedButton';

const Register = () => {
    // 1. Add state for all three required inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // Add your registration logic here (e.g., validation, API call)
        console.log('Registration successful! Redirecting to Dashboard.', email, password);
        router.replace('/dashboard');
    };

    return (
        // 2. Use ThemedView for the container with padding
        <ThemedView style={[styles.container, styles.padding]}>

            <Spacer height={30} />

            <ThemedText title={true} style={styles.title}>
                Register a New Account
            </ThemedText>

            <Spacer height={40} />

            {/* 3. Email Input */}
            <ThemedTextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
            />
            
            <Spacer height={15} />

            {/* 4. Password Input */}
            <ThemedTextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            <Spacer height={15} />

            {/* 5. Confirm Password Input */}
            <ThemedTextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.input}
            />

            <Spacer height={30} />

            {/* 6. Register Button */}
            <ThemedButton 
                mode="contained" // Primary, filled button
                onPress={handleRegister}
            >
                Register
            </ThemedButton>
            
            <Spacer height={20} />

            {/* 7. Link to Login: Use Link with asChild to wrap the ThemedButton */}
            <Link href="/login" replace asChild>
                <ThemedButton mode="text">
                    Login Instead
                </ThemedButton>
            </Link>

            <Spacer height={30} />

        </ThemedView>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Centers content, but padding is added in the component style array
        justifyContent: "center",
    },
    padding: {
        paddingHorizontal: 25, // Added horizontal padding for form content
    },
    title: {
        textAlign: "center",
        fontSize: 24, // Increased font size to match login
        fontWeight: 'bold',
        marginBottom: 30
    },
    input: {
        // Optional: style adjustments for the inputs
    }
});