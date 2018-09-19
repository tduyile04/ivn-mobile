import React from 'react';
import { View, Text, Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { FollowButton, UnfollowButton } from '../../../shared-components/Buttons';

const UserActions = ({id, endorseUser, followUser, unfollowUser, withdrawEndorsement, endorsed, following}) => {
  return (
    <View style={styles.actionSection}>
      { !endorsed &&
          <Button transparent dark onPress={() => endorseUser(id)}>
            {/* <Icon type="MaterialIcons" name='plus-one' style={styles.plusIcon} /> */}
            <Text style={styles.text}>Endorse</Text>
          </Button> 
      }
      {
        endorsed && 
        <Button transparent dark onPress={() => withdrawEndorsement(id)}>
          {/* <Icon type="MaterialCommunityIcons" name='cancel' style={styles.plusIcon} /> */}
          <Text style={styles.text}>Unedorse</Text>
        </Button> 
      }
      { following ? <UnfollowButton /> : <FollowButton /> }
    </View>
  );
}


const styles = StyleSheet.create({

  // endorseAction: {
  //   textAlign: 'center',
  //   color: '#FFFFFF',
  //   fontFamily: 'raleway-bold',
  //   fontSize: 13,
  //   textAlign: 'center',
  // },
  // followAction: {
  //   textAlign: 'center',
  //   fontFamily: 'raleway-bold',
  //   fontSize: 13,
  //   color: '#000000',
  //   textAlign: 'center',
  // },
  // endorseActionView: {
  //   backgroundColor: '#628AFF',
  //   // backgroundColor: '#ff6277',
  //   flex: 3,
  //   height: 60,
  //   justifyContent: 'center',
  //   borderTopRightRadius: 30,
  //   borderBottomRightRadius: 30,
  //   borderTopLeftRadius: 0,
  //   borderBottomLeftRadius: 0,
  // },
  // unendorseActionView: {
  //   backgroundColor: '#ff6277',
  //   flex: 3,
  //   height: 60,
  //   justifyContent: 'center',
  //   borderTopRightRadius: 30,
  //   borderBottomRightRadius: 30,
  //   borderTopLeftRadius: 0,
  //   borderBottomLeftRadius: 0,
  // },
  // followActionView: {
  //   flex: 4,
  //   height: 60,
  //   justifyContent: 'center',
  //   backgroundColor: 'transparent',
  // },
  // userIcon: {
  //   marginRight: -7,
  //   fontSize: 14,
  // },
  // plusIcon: {
  //   marginRight: -11,
  //   fontSize: 18,
  // }
});

export default UserActions;
