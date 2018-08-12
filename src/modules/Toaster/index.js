import { StyleSheet } from 'react-native';
import { Toast }  from 'native-base';

export default {
  show(error) {
    Toast.show({
      text: error,
      buttonText: 'x',
      duration: 3000,
      textStyle: [styles.text, { padding: 5 }],
      buttonTextStyle: [styles.text],
      position: 'top'
    })
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'raleway-regular',
    fontSize: 16,
  },
});
