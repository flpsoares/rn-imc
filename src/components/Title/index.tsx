import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

export const Title: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>IMC</Text>
    </View>
  )
}
