import { TextInput } from 'react-native-paper'

const ThemedTextInput = (props) => {
    // We rely on the global PaperProvider theme for colors and styling.
    // Use the 'mode' prop to switch between 'flat' (default) or 'outlined'.

    return (
        <TextInput
            mode="outlined" // Set a default mode
            {...props}
        />
    )
}

export default ThemedTextInput