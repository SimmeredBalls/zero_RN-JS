import { Button } from 'react-native-paper'

const ThemedButton = ({ mode = "contained", ...props }) => {
    

    return (
        <Button
            mode={mode}
            // You can add default styles here if needed
            {...props}
        />
    )
}

export default ThemedButton