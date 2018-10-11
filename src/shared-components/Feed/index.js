import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { Content, Card, View, Text, Button, Icon, Spinner } from 'native-base';
import { StyleSheet, Image, FlatList, Animated } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import { Heart } from '../../shared-components/Buttons';
import Post from '../../shared-components/Posts'
import CommentBox from '../../components/Comments';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      liked: false,
      scale: new Animated.Value(0),
      animations: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
      ],
    }
  }

  triggerLike = async (postId) => {
    await this.props.likePost(postId);
    Animated.spring(this.state.scale, {
      toValue: 2,
      friction: 3
    }).start(() => {
      this.state.scale.setValue(0);
    });
    return false;
  }

  async componentDidMount() {
    await this.props.getPosts(this.props.page, this.props.limit)
  }

  fetchMorePosts = async () => {
    await this.props.getPosts(this.props.page, this.props.limit)
    this.setState(() => ({ refreshing: false }))
  }

  handleRefresh = () => {
    this.setState(() => ({
      refreshing: true
    }), () => {
      this.props.getPosts(this.props.page, this.props.limit)
    })
  }

  renderPostDetails=(post)=>{
      const { liked } = this.state;
      const bouncyHeart = this.state.scale.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [1, .8, 1]
      })
      const heartButtonStyle = {
          transform: [
              { scale: bouncyHeart }
          ]
      }
    return(
        <React.Fragment>
          <Post
            key={post.id}
            userId={post.author.id}
            userAvatar={post.author && post.author.avatar}
            userFullName={`${post.author && post.author.firstName} ${post.author && post.author.lastName}`}
            userParty={'APC'}
            postId={post.id}
            postTimePosted={post.created_at}
            postContent={post.content}
            postComments={post.comments && post.comments.length}
            postLikes={post.likes && post.likes.length}
            setActive={this.props.setActive}
            liked={post.liked}
            triggerLike={this.triggerLike}
            comments={post.comments}
            onAddNewComment={async () => {
              await this.props.getPosts(this.props.page, this.props.limit)
            }}
          />
        </React.Fragment>
    )
  }

  render() {
    const { setActive, posts, loading } = this.props;
    const { liked } = this.state;
    const bouncyHeart = this.state.scale.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, .8, 1]
    })
    const heartButtonStyle = {
      transform: [
        { scale: bouncyHeart }
      ]
    }

    return (
      <Content>
        <FlatList
          data={posts}
          renderItem={({ item: post }) => (
            this.renderPostDetails(post)
          )}
          keyExtractor={item => item.id}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.fetchMorePosts}
          onEndReachedThreshold={0.5}
          ListFooterComponent={ () => <Spinner size="small" color="#000" /> }
        />
      </Content>
    );
  }
}

export default Feed;
