import React from 'react';
import { View , Text } from 'native-base';
import { StyleSheet } from 'react-native';

const Listings = ({followers, following, endorsements, members}) => {
    return (
      <View style={styles.secondaryInfo}>
          <View>
            <Text style={styles.count}>{followers}</Text>
            <Text style={styles.countTitle}>Followers</Text>
          </View>
          <View>
            <Text style={styles.count}>{following}</Text>
            <Text style={styles.countTitle}>Following</Text>
          </View>
          {
            endorsements && (
              <View>
                <Text style={styles.count}>{endorsements}</Text>
                <Text style={styles.countTitle}>Endorsements</Text>
              </View>
            )
          }
          {
            members && (
              <View>
                <Text style={styles.count}>{members}</Text>
                <Text style={styles.countTitle}>Members</Text>
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
    countTitle: {
      fontSize: 12,
      fontFamily: 'raleway-regular',
      color: "#3F3F3F",
    }
});

export default Listings;
