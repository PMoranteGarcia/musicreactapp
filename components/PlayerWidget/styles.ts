import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: '#131313',
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center'
    },
    image: {
        width: 75,
        height: 75
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },
    artist: {
        color: 'lightgray',
        fontSize: 16
    }
})

export default styles