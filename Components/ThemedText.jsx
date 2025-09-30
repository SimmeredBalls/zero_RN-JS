import { Text } from 'react-native-paper'
import { Colors } from '../constants/Colors'

const ThemedText = ({ style, title=false, ...props }) => {
    const theme = Colors.ftstic

    const textColor = theme.text

    return (
        <Text 

            variant={title ? "titleLarge" : "bodyMedium"}

            style={[{ color: textColor }, style]}
            {...props}
        />
    )
}

export default ThemedText