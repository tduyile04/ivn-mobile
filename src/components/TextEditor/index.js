import React, { Component } from 'react';
import { Container, Content, Textarea, Form } from 'native-base';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { createPosts } from '../../actions';

import Header from '../../shared-components/Header';

class TextEditor extends Component {
  state = {
    content: ''
  }

  handleShare = async () => {
    const { content } = this.state;
    if (content && content.trim() !== '') {
      await this.props.createPosts(content)
      Actions.home()
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header back title='Post a question' share onShare={this.handleShare}/>
        <Content padder style={styles.content}>
          <Form>
            <Textarea 
              rowSpan={15} 
              placeholder="What is on your mind?"
              onChangeText={content => this.setState({ content })}
              multiline/>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
  error: state.post.error,
  loading: state.post.loading
})

const mapDispatchToProps = dispatch => ({
  createPosts: content => dispatch(createPosts(content))
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    marginTop: 10,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
