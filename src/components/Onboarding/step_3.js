import React from 'react';
import { Text, View, Button, Icon } from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Step3 = ({styles, switchStep}) =>
  <View style={styles.center}>
    <Image
      style={styles.icon}
      source={require('../../../assets/images/icon_2.png')}
    />
    <Text style={[styles.bold, styles.heading]}>Party Information</Text>
    <View style={styles.row}>
      <Icon active name='location' type='EvilIcons' style={styles.location} />
      <Text style={styles.text}>NG</Text>
    </View>
    <Text style={styles.text}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Text>
    <Button block dark style={styles.button} onPress={() => Actions.login()}>
      <Text style={styles.bold}>COMPLETE</Text>
    </Button>
    <View style={styles.dotsView}>
      <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
      <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
      <Icon active name='circle' type='FontAwesome' style={styles.dots} />
    </View>
  </View>

export default Step3;
