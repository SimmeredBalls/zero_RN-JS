import { Text } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedText = ({ style, title=false, ...props }) => {
    const theme = Colors.ftstic

    const textColor = theme.text

    return (
        <Text 
            style={[{ color: textColor }, style]}
            {...props}
        />
    )
}

export default ThemedText