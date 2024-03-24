import { Image, StyleSheet, Text, TextInput, View, CheckBox, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Register = (props, ) => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [sdt, setsdt] = useState('')
    const [pass, setpass] = useState('')
    return (
        <View style={styles.container}>
            {/* <Image style={{ width: 100, height: 100 }}
                source={require('../Image/logo12.png')} /> */}
            <View style={{ width: '100%', gap: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', justifyContent: 'center', fontSize: 30 }}>Tạo tài khoản</Text>
                <TextInput style={styles.input}
                    placeholder='Họ tên' onChangeText={(txt) => {
                        setname(txt)
                    }} />
                <TextInput style={styles.input}
                    placeholder='E-mail' onChangeText={(txt) => {
                        setemail(txt)
                    }} />
                <TextInput style={styles.input}
                    placeholder='Số điện thoại' onChangeText={(txt) => {
                        setsdt(txt)
                    }} />
                <TextInput style={styles.input}
                    placeholder='Password' onChangeText={(txt) => {
                        setpass(txt)
                    }} />
                <Text style={{ textAlign: 'center' }}>Để đăng ký tài khoản, bạn đồng ý
                    <Text style={{ textDecorationLine: 'underline', color: 'green' }}>  Terms &{'\n'} Conditions</Text> and
                    <Text style={{ textDecorationLine: 'underline', color: 'green' }}> Privacy Policy</Text>
                </Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Đăng ký</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: 'green' }}>________________Hoặc________________</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Image style={styles.image}
                            source={require('../Image/google.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={[styles.image, { marginLeft: 40 }]}
                            source={require('../Image/facebook.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.text}>
                    <Text>Tôi đã có tài khoản</Text>
                    <TouchableOpacity onPress={()=> props.navigation.navigate('LoginScreen')}>
                        <Text style={{ color: 'green', marginLeft: 10 }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    input: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        borderRadius: 20,
        width: '90%',
        backgroundColor: 'green',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        width: 50,
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})