import React from 'react';
import { View , Text } from 'native-base';
import { StyleSheet } from 'react-native';

const Listings = ({followers, following, posts, endorsements, members, countStyle}) => {
    return (
      <View style={styles.center}>
        <View style={styles.secondaryInfo}>
          { posts && (
            <View style={styles.center}>
              <Text style={[styles.count, countStyle]}>{following}</Text>
              <Text style={styles.title}>posts</Text>
            </View>
            )
          }
          <View style={styles.center}>
            <Text style={[styles.count, countStyle]}>{followers}</Text>
            <Text style={styles.title}>followers</Text>
          </View>
          {
            (following || following === 0) && (
              <View>
                <Text style={[styles.count, countStyle]}>{following}</Text>
                <Text style={styles.title}>Following</Text>
              </View>
            )
          }
          {
            (endorsements || endorsements === 0) && (
              <View style={styles.center}>
                <Text style={[styles.count, countStyle]}>{endorsements}</Text>
                <Text style={styles.title}>endorsements</Text>
              </View>
            )
          }
          {
            (members || members === 0) && (
              <View style={styles.center}>
                <Text style={[styles.count, countStyle]}>{members}</Text>
                <Text style={styles.title}>members</Text>
              </View>
            )
          }
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    secondaryInfo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%'
    },
    count: {
      fontSize: 25,
      fontFamily: 'raleway-bold',
      color: "#3F3F3F",
    },
    title: {
      fontSize: 12,
      fontFamily: 'raleway-regular',
      color: "#3F3F3F",
    },
    center: {
      alignItems: 'center'
    }
});

export default Listings;
