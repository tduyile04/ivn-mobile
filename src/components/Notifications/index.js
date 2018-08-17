import React, { Component } from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';
import { Card, Icon } from 'native-base';
import HorizontalLine from '../../shared-components/HorizontalLine';

export default class Notifications extends Component {

  render() {
    return (
      <View>
        <Card transparent style={styles.card}>
          <View style={styles.row}>
            <Image
              style={styles.profileImage}
              source={{uri: 'https://i.pinimg.com/736x/19/a8/6c/19a86c6673349bb21910dd4b3bb18e68.jpg'}}
            />
            <View style={styles.right}>
              <View style={[styles.row, styles.user]}>
                  <Text style={styles.name}>Emma Simpson</Text>
                  <Icon name='dot-single' type='Entypo' style={styles.dots} />
                  <Text style={styles.blueText}>12m</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.notify}>Asked <Text style={styles.notifyBold}>Michelle Morgan</Text> a question</Text>
              </View>
            </View>
          </View>
        </Card>
        
        <HorizontalLine />

        <Card transparent style={styles.card}>
          <View style={styles.row}>
            <Image
              style={styles.profileImage}
              source={{uri: 'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg'}}
            />
            <View style={styles.right}>
              <View style={[styles.row, styles.user]}>
                  <Text style={styles.name}>Michelld Morgan</Text>
                  <Icon name='dot-single' type='Entypo' style={styles.dots} />
                  <Text style={styles.blueText}>12m</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.notify}>Asked <Text style={styles.notifyBold}>Michelle Morgan</Text> a question</Text>
              </View>
            </View>
          </View>
        </Card>

        <HorizontalLine />

        <Card transparent style={styles.card}>
          <View style={styles.row}>
            <Image
              style={styles.profileImage}
              source={{uri: 'https://i.pinimg.com/736x/19/a8/6c/19a86c6673349bb21910dd4b3bb18e68.jpg'}}
            />
            <View style={styles.right}>
              <View style={[styles.row, styles.user]}>
                  <Text style={styles.name}>Emma Simpson</Text>
                  <Icon name='dot-single' type='Entypo' style={styles.dots} />
                  <Text style={styles.blueText}>12m</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.notify}>Asked <Text style={styles.notifyBold}>Michelle Morgan</Text> a question</Text>
              </View>
            </View>
          </View>
        </Card>

        <HorizontalLine />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 25,
    marginBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
  },
  row: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  name: {
    fontFamily: 'raleway-bold',
    fontSize: 12,
    color: '#000'
  },
  blueText: {
    fontFamily: 'museosans-500',
    fontSize: 12,
    color: '#628AFF',
  },
  dots: {
    color: '#D8D8D8',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  right: {
    marginLeft: 20,
    flex: 1,
  },
  user: {
    alignItems: 'center',
    marginTop: -12,
  },
  notify: {
    fontFamily: 'SFProText-regular',
    marginTop: - 5,
    color: '#4F5764',
    lineHeight: 18,
    fontSize: 12,
  },
  notifyBold: {
    fontFamily: 'SFProText-SemiBold'
  }
});