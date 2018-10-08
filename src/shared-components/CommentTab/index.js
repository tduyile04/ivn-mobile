import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Footer, FooterTab, Text, Button, Icon, Item, Input, rounded, View, Content } from 'native-base';
import { StyleSheet } from 'react-native';

import { createComments, createThoughtsComments } from '../../actions';

class CommentTab extends Component {
  state = {
    comment: ''
  }

  componentDidMount() {
    this.isMounted = true;
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  handleComment = async () => {
    if (this.props.thoughts) {
      await this.props.createThoughtsComments(this.state.comment, this.props.thoughtId)
    }
    if (this.props.comments) {
      await this.props.createComments(this.state.comment, this.props.postId)
    }
    if (this.isMounted) {
      this.setState(() => ({ comment: '' }))
    }
  }

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
                    value={this.state.comment}
                    onChangeText={comment => this.setState({ comment })}
                  />
                </Item>
                <Button style={styles.button} onPress={this.handleComment}>
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

const mapDispatchToProps = dispatch => ({
  createComments: (comment, postId) => dispatch(createComments(comment, postId)),
  createThoughtsComments: (comment, thoughtId) => dispatch(createThoughtsComments(comment, thoughtId))
})

export default connect(null, mapDispatchToProps)(CommentTab);