import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

// Removed: Appbar, useTheme
// Removed: Appbar from 'react-native-paper' import

// Import your custom components
import ThemedView from '../Components/ThemedView';   // Main screen container
import ThemedText from '../Components/ThemedText';   // Text component
import ThemedCard from '../Components/ThemedCard';   // Your custom card component
import Spacer from '../Components/Spacer';

const Dashboard = () => {

    // Removed: theme, appbarStyle, contentColor definitions

    const infoTiles = [
        { id: 1, title: 'Total Projects', value: '4' },
        { id: 2, title: 'Open Tasks', value: '17' },
        { id: 3, title: 'Last Login', value: 'Today' },
    ];

    return (
        // Use ThemedView as the overall screen container
        <ThemedView style={styles.container}>
            
            {/* REMOVED: <Appbar.Header ... /> */}

            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                <ThemedText title={true} style={styles.greeting}>
                    Welcome Back, User!
                </ThemedText>
                
                <Spacer height={30} />
                
                {/* Information Tiles */}
                <View style={styles.tileContainer}>
                    {infoTiles.map(tile => (
                        <ThemedCard key={tile.id} style={styles.tileCard}>
                            <ThemedText style={styles.tileValue}>
                                {tile.value}
                            </ThemedText>
                            <ThemedText style={styles.tileTitle}>
                                {tile.title}
                            </ThemedText>
                        </ThemedCard>
                    ))}
                </View>

                <Spacer height={40} />
                
                {/* Primary Card Area */}
                <ThemedCard>
                    <ThemedText title={true} style={{marginBottom: 10}}>
                        Quick Actions
                    </ThemedText>
                    <ThemedText>
                        This is the main content area. You can put charts, tables, or navigation buttons here.
                    </ThemedText>
                </ThemedCard>
            
            </ScrollView>
        </ThemedView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
    },
    greeting: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    tileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    tileCard: {
        width: '32%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tileValue: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    tileTitle: {
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
    },
});