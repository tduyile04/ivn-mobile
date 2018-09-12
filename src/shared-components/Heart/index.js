import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Icon } from 'native-base';

const Heart = ({ filled, style, ...props}) => {
  return (
    <Animated.View {...props} style={[styles.heartView, style]}>
      {!filled && <Icon name='heart-outline' type='MaterialCommunityIcons' style={styles.numbHeart} />}
      {filled && <Icon name='heart' type='MaterialCommunityIcons' style={styles.heart} />}
    </Animated.View> 
  )
}

const styles = {
  heartView:{
    width: '10%',
    marginTop: 20,
  },
  heart: {
    color: '#FF6D6D',
    height: 30,
    width: 30
  },
  numbHeart: {
    color: '#777',
    height: 30,
    width: 30,
  },
}
export default Heart;
