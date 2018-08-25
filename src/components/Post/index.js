import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';

import Feed from './feed';
import Header from '../../shared-components/Header';
import CommentTab from '../../shared-components/CommentTab';
import HorizontalLine from '../../shared-components/HorizontalLine';
import Comment from './comment';

class Post extends Component {
  render () {
    return (
      <Container>
        <Header back title='Comments' />
          <Content style={styles.content}>
            <Feed />
            <HorizontalLine />
            <Comment />
            <HorizontalLine />
            <Comment />
            <HorizontalLine />
            <Comment />
            <HorizontalLine />
            <Comment />
          </Content>
        <CommentTab />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
  }
});

export default  Post;
