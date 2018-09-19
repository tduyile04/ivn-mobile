import React from 'react';
import { View, Text, Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

const UserActions = ({id, endorseUser, followUser, unfollowUser, withdrawEndorsement, endorsed, following}) => {
  return (
    <View style={styles.actionSection}>
      { !endorsed &&
          <Button style={styles.endorseActionView} onPress={() => endorseUser(id)}>
            <Icon type="MaterialIcons" name='plus-one' style={styles.plusIcon} />
            <Text style={styles.endorseAction}>Endorse</Text>
          </Button> 
      }
      {
        endorsed && 
        <Button style={styles.unendorseActionView} onPress={() => withdrawEndorsement(id)}>
          {/* <Icon type="MaterialCommunityIcons" name='cancel' style={styles.plusIcon} /> */}
          <Text style={styles.endorseAction}>Unendorse</Text>
        </Button> 
      }
      {
        !following &&
        <Button style={styles.followActionView} light onPress={() => followUser(id)}>
          <Icon type="Feather" name='user-plus' style={styles.userIcon} />
          <Text style={styles.followAction}>Follow</Text> 
        </Button>
      }
      {
        following &&
        <Button style={styles.followActionView} light onPress={() => unfollowUser(id)}>
          <Icon type="Feather" name='user-minus' style={styles.userIcon} />
          <Text style={styles.followAction}>Unfollow</Text>
        </Button>
      }
    </View>
  );
}


const styles = StyleSheet.create({
  actionSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 37,
  },
  endorseAction: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'raleway-bold',
    fontSize: 13,
    textAlign: 'center',
  },
  followAction: {
    textAlign: 'center',
    fontFamily: 'raleway-bold',
    fontSize: 13,
    color: '#000000',
    textAlign: 'center',
  },
  endorseActionView: {
    backgroundColor: '#628AFF',
    // backgroundColor: '#ff6277',
    flex: 3,
    height: 60,
    justifyContent: 'center',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  unendorseActionView: {
    backgroundColor: '#ff6277',
    flex: 3,
    height: 60,
    justifyContent: 'center',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  followActionView: {
    flex: 4,
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  userIcon: {
    marginRight: -7,
    fontSize: 14,
  },
  plusIcon: {
    marginRight: -11,
    fontSize: 18,
  }
});

export default UserActions;
