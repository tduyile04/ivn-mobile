import React, { Component } from 'react';
import { Footer, FooterTab, Text, Button, Icon, Item, Input, rounded, View, Content } from 'native-base';
import { StyleSheet } from 'react-native';

export default class CommentTab extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Content>
            <View style={styles.center}>  
              <View style={styles.container}>
                <Item rounded style={styles.comment}>
                  <Input 
                    placeholder='Write a comment' 
                    placeholderTextColor="#C7C7CB" 
                    multiline 
                    style={styles.input} 
                  />
                </Item>
                <Button style={styles.button}>
                  <Icon name='send' />
                </Button>
              </View>
            </View>
          </Content>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1, 
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '90%',
    paddingTop: 7,
    paddingBottom: 7,
  },
  comment: {
    width: '83%', 
    backgroundColor: 'white',
    height: 40
  },
  button: {
    width: '15%',
    backgroundColor: '#628AFF',
    borderRadius: 5,
    height: 40
  },
  input: {
    color:"#3F3F3F", 
    fontFamily:"museosans-500", 
    fontSize: 13,
    paddingLeft: 18,
    marginTop: -10
  },
});
