// Assuming this file is now named ThemedCard.jsx
import { View, StyleSheet} from 'react-native'
import { Colors } from '../constants/Colors'

// RENAMED component to reflect its purpose
const ThemedCard = ({ style, ...props }) => {
    // Assuming Colors.ftstic is still accessible after resolving previous errors
    const theme = Colors.ftstic

    return (
        <View
            // Use 'theme.card' color for the background
            style={[{ backgroundColor: theme.card }, styles.card ,style]}
            {...props}
        />
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 8, // Slightly increased for a softer look
        padding: 20,
        marginVertical: 5, // Add a small margin for spacing when stacked
        // Add a subtle shadow manually if desired (React Native Paper's Surface handles this better)
        // elevation: 2, 
    }
})