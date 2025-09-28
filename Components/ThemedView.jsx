import { View } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, ...props }) => {
    const theme = Colors.ftstic

    
  return (
    <View
        style={[{ backgroundColor: theme.background }, style]}
        {...props}
    />
  )
}

export default ThemedView

