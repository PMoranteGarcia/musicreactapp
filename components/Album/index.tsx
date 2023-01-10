import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import style from './style'
import { Album } from '../../types'
import { useNavigation } from '@react-navigation/native'

export type AlbumProps = {
    album: Album
}

const AlbumComponent = (props: AlbumProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('AlbumScreen', {id: props.album.id})
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={style.container}>
                <Image source={{ uri: props.album.imageUri }} style={style.image} />
                <Text style={style.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback >
    )
}

export default AlbumComponent;