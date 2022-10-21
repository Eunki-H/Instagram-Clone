import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { firebase } from '../../firebase' 

const handleSignout = async () => {
    try {
        await firebase.auth().signOut()
        console.log('Signed out successfully!')
    } catch (error) {
        console.log(error)
    }
}

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSignout}>
            <Image 
            style={styles.logo} 
            source={require('../../assets/header-logo.png')} 
            />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                <Image 
                source={{
                    uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
                }} 
                style={styles.icon} 
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                source={{
                    uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                }} 
                style={styles.icon} 
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadbadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
                <Image 
                source={{
                    uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
                }} 
                style={styles.icon} 
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    iconsContainer: {
        flexDirection: 'row',
    },

    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },

    unreadbadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        botton: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        zIndex: 100,
    },

    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    },
})

export default Header
