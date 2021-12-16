import React, { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Vibration,
  FlatList
} from 'react-native'
import { Result } from '../Result'
import { styles } from './style'

interface ImcListProps {
  id: number
  imc: string
}

export const Form: React.FC = () => {
  const [imc, setImc] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [buttonMessage, setButtonMessage] = useState('Calcular')
  const [error, setError] = useState('')
  const [imcList, setImcList] = useState<ImcListProps[]>([])

  const validator = () => {
    if (imc === '') {
      Vibration.vibrate()
      return setError('Campo obrigatório')
    }
  }

  const imcCalculator = () => {
    const replacedHeight = height.replace(',', '.')
    const totalImc = (
      Number(weight) /
      (Number(replacedHeight) * Number(replacedHeight))
    ).toFixed(2)
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
    setImc(totalImc)
  }

  const handleSubmit = () => {
    if (height !== '' && weight !== '' && imc === '') {
      imcCalculator()
      setButtonMessage('Calcular novamente')
      setError('')
    } else {
      validator()
      setButtonMessage('Calcular')
      setImc('')
      setHeight('')
      setWeight('')
    }
  }

  return (
    <View style={styles.container}>
      {imc ? (
        <Result imc={Number(imc)} />
      ) : (
        <>
          <Text style={styles.text}>Altura</Text>
          <Text style={styles.errorMessage}>{error}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex: 1.75"
            keyboardType="numeric"
          />
          <Text style={styles.text}>Peso</Text>
          <Text style={styles.errorMessage}>{error}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex: 80"
            keyboardType="numeric"
          />
        </>
      )}
      <View style={styles.form}>
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitText}>{buttonMessage}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, height: '100%' }}>
        <FlatList
          style={styles.listImcs}
          showsVerticalScrollIndicator={false}
          data={imcList.reverse()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Text style={styles.resultImcItem}>
                Resultado IMC:{' '}
                <Text style={styles.textResultItemList}>{item.imc}</Text>
              </Text>
            )
          }}
        />
      </View>
    </View>
  )
}
