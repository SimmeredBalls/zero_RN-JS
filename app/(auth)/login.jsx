import {StyleSheet} from 'react-native'
import {Link} from 'expo-router'

import ThemedCard from '../../Components/ThemedCard'
import ThemedText from '../../Components/ThemedText'
import ThemedView from '../../Components/ThemedView'
import Spacer from '../../Components/Spacer'

const Login = () => {
    return (
        <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText title={true} style={styles.title}>
            Login to your Account
        </ThemedText>

        <Spacer height={100} />
        <Link href="/register" replace>
            <ThemedText style={{ textAlign: "center"}}>
                Register Instead
            </ThemedText>
        </Link>

        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
})