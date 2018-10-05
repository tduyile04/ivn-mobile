import React from 'react';
import {Image, StyleSheet, scroll} from 'react-native';
import {Text, View, Button, Icon, Form, Item, Label, Input, Textarea} from 'native-base';

import {FollowButton, UnfollowButton} from '../../../shared-components/Buttons';
import defaultPicture from '../../../../assets/images/placeholder.png';

const EditableUserProfile = ({
                                 id,
                                 user,
                                 endorseUser,
                                 withdrawEndorsement,
                                 endorsed,
                                 following,
                                 unfollowUser,
                                 followUser,
                                 candidate,
                             }) => {
    const avatar = user && user.avatar ? {uri: user.avatar} : defaultPicture;
    return (
        <View style={styles.content}>
            <View style={styles.row}>
                <View style={styles.profileImageSection}>
                    <Image
                        style={styles.profileImage}
                        source={avatar}
                    />
                </View>
                <View style={styles.center}>
                  <View style={styles.secondaryInfo}>
                    <View style={styles.center}>
                      <Text>
                        <Text style={styles.count}>12,345</Text>
                        <Text style={styles.title}> Followers</Text>
                      </Text>
                    </View>
                    <View style={styles.center}>
                      <Text>
                        <Text style={styles.count}>3,456</Text>
                        <Text style={styles.title}> Followers</Text>
                      </Text>
                    </View>
                  </View>
                </View>
            </View>
            <Form style={styles.form}>
              <View style={styles.column}>
                <View style={styles.formItem}>
                  <Item stackedLabel>
                    <Label style={styles.labelColor}>Full Name</Label>
                    <Input value="" placeholder=""/>
                  </Item>
                </View>
                <View style={styles.formItem}>
                  <Item stackedLabel>
                    <Label style={styles.labelColor}>Email</Label>
                    <Input value="" placeholder=""/>
                  </Item>
                </View>
                <View style={styles.formItem}>
                  <Item stackedLabel>
                    <Label style={styles.labelColor}>Phone</Label>
                    <Input value="" placeholder=""/>
                  </Item>
                </View>
                <View style={styles.formItem}>
                  <Item stackedLabel>
                    <Label style={styles.labelColor}>Bio</Label>
                    <Textarea
                      rowSpan={5}
                      value=""
                      placeholder=""
                      style={{width:"100%"}}/>
                  </Item>
                </View>
              </View>
            </Form>
            <Button block info>
              <Text>Save</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
    },
    form:{
      top:'7%',
    },
    formItem:{

    },
    row: {
        flexDirection: 'row'
    },
    column:{
      flexDirection:'column'
    },
    labelColor:{
      color:'#97A1B3'
    },
    profileImage: {
        width: 68,
        height: 68,
        borderRadius: 33,
        marginTop: -25,
    },
    secondaryInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%'
    },
    count: {
      fontSize: 14,
      fontFamily: 'raleway-bold',
      color: "#3F3F3F",
    },
    title: {
      fontSize: 14,
      fontFamily: 'raleway-regular',
      color: "#3F3F3F",
    },
    center: {
      alignItems: 'center',
      marginTop:'3%'
    }
});

export default EditableUserProfile;
