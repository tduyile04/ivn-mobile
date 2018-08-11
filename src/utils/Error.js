import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({validationError, apiError}) => (
  <View>
    {validationError && validationError.map((error, index)=> <Text key={index} style={styles.error}>{error}</Text>)}
    {apiError && <Text style={styles.error}>{apiError}</Text>}
  </View>
)

const styles = StyleSheet.create({
  error: {
    color: 'red'
  }
});