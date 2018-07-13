import React from 'react';
import { View , Text } from 'react-native';

const Listings = () => {
    return (
      <View style={styles.secondaryInfo}>
          <View>
            <Text style={styles.count}>21,098</Text>
            <Text style={styles.countTitle}>Followers</Text>
          </View>
          <View>
            <Text style={styles.count}>50</Text>
            <Text style={styles.countTitle}>Following</Text>
          </View>
          <View>
            <Text style={styles.count}>19,205</Text>
            <Text style={styles.countTitle}>Endorsements</Text>
          </View>
      </View>
    );
}

const styles = {
    secondaryInfo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 40,
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
}

export default Listings;
