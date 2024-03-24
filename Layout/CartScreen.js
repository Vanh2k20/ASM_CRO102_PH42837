import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity  onPress={()=>navigation.goBack()}>
                <Image style={{ width: 20, height: 20 }}
                    source={require('../Image/back.png')}/>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Giỏ hàng</Text>
                <TouchableOpacity style={{ width: 50 }}>
                <Image style={{ width: 26, height: 26 }}
                    source={require('../Image/delete.png')}/>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
})