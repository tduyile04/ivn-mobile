import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Spinner } from 'native-base';
import { StyleSheet, FlatList, View } from 'react-native';

import ActivePost from './activePost';
import Header from '../../shared-components/Header';
import CommentTab from '../../shared-components/CommentTab';
import HorizontalLine from '../../shared-components/HorizontalLine';
import Comment from './comment';

import { getPost } from '../../actions';

class Comments extends Component {
  componentDidMount() {
    this.props.getPost(this.props.postId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.postId !== this.props.postId) {
      this.props.getPost(this.props.postId)
    }
  }

  renderComments = (item, index) => {
    if (index === 0) {
      return <ActivePost {...item} />
    }
    if (index === 1) {
      return this.props.loading 
        ? <Spinner size="small" color="#000" /> 
        : <Comment item={item} />
    }
    return <Comment item={item} />
  }

  render () {
    const { 
      comments,
      postId, 
      userAvatar, 
      userFullName, 
      userParty,
      postTimePosted,
      postContent,
      postTags,
      postLikes,
      postComments 
    } = this.props;

    const postDetail = {
      userAvatar, 
      userFullName, 
      userParty,
      postTimePosted,
      postContent,
      postTags,
      postLikes,
      postComments
    };
    
    const commentList = comments.length === 0 
      ? [postDetail] 
      : [postDetail, ...comments]

    return (
      <Container>
        <Header back title='Comments' />
          <Content style={styles.content}>
        
            <FlatList 
              data={commentList}
              renderItem={({ item, index }) => (
                <View>
                  {this.renderComments(item, index)}
                  <HorizontalLine />
                </View>
              )}
              keyExtractor={item => item.id || postId}
            />
          </Content>
        <CommentTab postId={postId} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
  }
});

const mapStateToProps = state => ({
  comments: state.post.comments,
  loading: state.post.commentLoading || state.post.postLoading
})

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
