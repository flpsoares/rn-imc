import { StyleSheet } from 'react-native'
import { css_primary } from '../../../css-variables'

export const styles = StyleSheet.create({
  title: {
    color: css_primary,
    fontSize: 32
  },
  text: {
    color: css_primary,
    fontSize: 52,
    fontWeight: 'bold'
  },
  shareButton: {
    backgroundColor: '#1877f2',
    borderRadius: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  shareText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
