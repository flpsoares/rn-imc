import React from 'react'
import { Text, View, Share, TouchableOpacity } from 'react-native'
import { styles } from './style'

interface ResultProps {
  imc: number
}

export const Result: React.FC<ResultProps> = ({ imc }) => {
  const onShare = async () => {
    const result = await Share.share({
      title: 'MEU IMC',
      message: `olha meu imc ai caraio ${imc}`
    })
  }

  return (
    <View>
      <Text style={styles.title}>Seu imc é: </Text>
      <Text style={styles.text}>{imc}</Text>
      <TouchableOpacity onPress={onShare} style={styles.shareButton}>
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
    </View>
  )
}
