import { StyleSheet } from 'react-native'
import { css_background, css_primary } from '../../../css-variables'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    alignItems: 'center',
    padding: 20
  },
  form: {
    width: '100%'
  },
  text: {
    fontSize: 20,
    width: '100%'
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: css_background
  },
  submitButton: {
    backgroundColor: css_primary,
    height: 60,
    borderRadius: 40,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  errorMessage: {
    fontSize: 12,
    color: css_primary,
    fontWeight: 'bold',
    marginRight: 'auto'
  },
  listImcs: {},
  resultImcItem: {
    fontSize: 26,
    color: css_primary,
    height: 50,
    width: '100%'
  },
  textResultItemList: {
    fontSize: 28,
    fontWeight: 'bold'
  }
})
