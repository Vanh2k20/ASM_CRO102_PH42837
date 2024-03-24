import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>PROFILE</Text>
      </View>

      <View style={styles.infor}>
        <Image source={require('../Image/pesonal.png')} style={{ width: 60, height: 60 }} />
        <Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Lê Đăng Sang</Text>
          {'\n'} sangldph42693@fpt.edu.vn
        </Text>
      </View>

      <View style={styles.option}>
        <Text style={styles.textGray}>Chung 
        {'\n'}_________________________________________________</Text>
        <Text onPress={() => navigation.navigate('ManageUser')}>Chỉnh sửa thông tin</Text>
        <Text>Cẩm năng trồng cây</Text>
        <Text>Lịch sử giao dịch</Text>
        <Text>Q & A</Text>
      </View>

      <View style={styles.option}>
        <Text style={styles.textGray}>Bảo mật và điều khoản 
        {'\n'}_________________________________________________</Text>
        <Text>Điền khoản và điều kiện</Text>
        <Text>Chính sách quyền riêng tư</Text>
        <Text style={{color: 'red'}} onPress={()=> navigation.navigate('LoginScreen')}>Đăng xuất</Text>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16
  },
  header: {
    width: "100%",
    paddingVertical: 20
  },
  infor:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  option:{
    gap: 18,
    marginTop: 26
  },
  textGray:{
    color: 'gray'
  }
})