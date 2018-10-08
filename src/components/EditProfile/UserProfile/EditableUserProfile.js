import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Form, Item, Label, Input, Textarea, Button, Text, Icon } from 'native-base';
import { userEditProfile } from '../../../actions/user';
import { get } from '../../../modules/cache'
import defaultPicture from '../../../../assets/images/placeholder.png';
import HorizontalLine from '../../../shared-components/HorizontalLine';

class EditableUserProfile extends Component{
  
  render() {
    const { user } = this.props;
    const avatar = user && user.avatar ? {uri: user.avatar} : defaultPicture;
    return (
      <View>  
        <View style={[styles.row, styles.padding]}> 
          <View style={styles.row}>
              <Image
                style={styles.profileImage}
                source={avatar}
              />
               <Icon name='circle-with-plus' type='Entypo' style={styles.icon}/>
          </View>
          <View style={[styles.row, styles.listing]}>
            <Text style={styles.text}>
              <Text style={styles.bold}>21,098</Text> Followers
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>15,210</Text> Following
            </Text>
          </View>
        </View>
        <Form style={styles.form}>
          <View style={styles.padding}>
            <Label style={styles.label}>Full Name</Label>
            <Input style={styles.inputText} />
          </View>
          <HorizontalLine lineStyle={styles.line}/>
          <View style={styles.padding}>
            <Label style={styles.label}>Email</Label>
            <Input  style={styles.inputText} />
          </View>
          <HorizontalLine lineStyle={styles.line} />
          <View style={styles.padding}>
            <Label style={styles.label}>Phone</Label>
            <Input  style={styles.inputText} />
          </View>
          <HorizontalLine lineStyle={styles.line} />
          <View style={styles.padding}>
            <Label style={styles.label}>Bio</Label> 
            <Textarea 
              rowSpan={4} 
              placeholder=""
              onChangeText={() => null}
              style={styles.inputText}
              />
          </View>
          <HorizontalLine lineStyle={styles.line} />
          <Button block primary style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>SAVE</Text>
          </Button>
        </Form>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  padding: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  row: {
    flexDirection: 'row',
  },
  saveBtn: {
    height: 60,
    backgroundColor: '#628AFF',
    borderRadius: 4,
    marginLeft: 40,
    marginRight: 40,
  },
  saveBtnText: {
    fontFamily: 'raleway-bold',
    fontSize: 16,
    color: '#FFFFFF'
  },
  icon: {
    fontSize: 20, 
    color: '#628AFF',
    marginTop: 25,
    marginLeft: -12,
  },
  profileImage: {
    width: 68,
    height: 68,
    borderRadius: 34,
    marginTop: -25,
  },
  userDetailsSection: {
    marginLeft: 29,
    marginTop: 10,
  },
  form: {
    marginTop: 30
  },
  inputText: {
    fontFamily: 'raleway-regular',
    fontSize: 16,
    color: '#000',
  },
  label: {
    fontFamily: 'raleway-SemiBold',
    fontSize: 12,
    color: "#97A1B3",
  },
  line: {
    marginTop: -5,
    marginBottom: 20
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
  text: {
    fontFamily: 'raleway-regular',
    fontSize: 14,
    color: '#000000',
    lineHeight: 16,
    marginLeft: 10,
    marginRight: 5,
  },
  listing: {
    marginTop: 10
  }
})
export default EditableUserProfile;
