import { StyleSheet, Text, View } from 'react-native'
import React , {memo}from 'react'

const NothingCom = ({intss, valuess}) => {
  return (
      <View>
        {console.log(" ========= Nothing is called",)}
      <Text onPress={intss}> NothingCom {valuess} </Text>

    </View>
  )
}

export default memo(NothingCom)

const styles = StyleSheet.create({})