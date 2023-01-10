import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5
    },
    image: {
        width: 75,
        height: 75
    },
    rightContainer: {
        justifyContent: 'space-around',
        margin: 6
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    artist: {
        color: 'lightgray',
        fontSize: 16
    }
})

export default styles