import React from 'react';
import { View , Text } from 'native-base';
import { StyleSheet } from 'react-native';

const Listings = ({followers, following, endorsements, members, countStyle}) => {
    return (
      <View style={styles.secondaryInfo}>
          <View>
            <Text style={[styles.count, countStyle]}>{followers}</Text>
            <Text style={styles.title}>Followers</Text>
          </View>
          <View>
            <Text style={[styles.count, countStyle]}>{following}</Text>
            <Text style={styles.title}>Following</Text>
          </View>
          {
            (endorsements || endorsements === 0) && (
              <View>
                <Text style={[styles.count, countStyle]}>{endorsements}</Text>
                <Text style={styles.title}>Endorsements</Text>
              </View>
            )
          }
          {
            (members || members === 0) && (
              <View>
                <Text style={[styles.count, countStyle]}>{members}</Text>
                <Text style={styles.title}>Members</Text>
              </View>
            )
          }
      </View>
    );
}

const styles = StyleSheet.create({
    secondaryInfo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: "90%"
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
    }
});

export default Listings;
