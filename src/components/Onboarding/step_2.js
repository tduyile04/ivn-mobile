import React from 'react';
import { Text, View, Button, Icon } from 'native-base';
import { Image } from 'react-native';

const Step2 = ({styles, switchStep}) =>
  <View style={styles.center}>
    <Image
      style={styles.icon}
      source={require('../../../assets/images/icon_3.png')}
    />
    <Text style={[styles.bold, styles.heading]}>Like Candidate</Text>
    <View style={styles.row}>
      <Icon active name='location' type='EvilIcons' style={styles.location} />
      <Text style={styles.text}>NG</Text>
    </View>
    <Text style={styles.text}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Text>
    <Button block dark bordered style={styles.button} onPress={() => switchStep(3)}>
      <Text style={styles.bold}>NEXT</Text>
    </Button>
    <View style={styles.dotsView}>
      <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
      <Icon active name='circle' type='FontAwesome' style={styles.dots} />
      <Icon active name='circle-o' type='FontAwesome' style={styles.dots} />
    </View>
  </View>

export default Step2;
