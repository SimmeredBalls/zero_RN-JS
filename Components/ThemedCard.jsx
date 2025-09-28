import { View, StyleSheet} from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, ...props }) => {
    const theme = Colors.ftstic

    
  return (
    <View
        style={[{ backgroundColor: theme.card }, styles.card ,style]}
        {...props}
    />
  )
}

export default ThemedView

const styles = StyleSheet.create({

    card: {
        borderRadius: 5,
        padding: 20,
    }

})

