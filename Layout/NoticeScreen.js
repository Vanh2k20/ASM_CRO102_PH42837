import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoticeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>THÔNG BÁO</Text>
      </View>

      <View style={{}}>
        <Text style={{textAlign: 'center'}}>Hiện chưa có thông báo nào cho bạn</Text>
      </View>
    </View>
  )
}

export default NoticeScreen

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
})