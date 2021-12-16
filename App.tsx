import React from 'react'
import { StyleSheet, Pressable, Keyboard } from 'react-native'
import { css_background } from './css-variables'
import { Form } from './src/components/Form'
import { Title } from './src/components/Title'

export default function App() {
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Title />
      <Form />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: css_background,
    paddingTop: 80
  }
})
