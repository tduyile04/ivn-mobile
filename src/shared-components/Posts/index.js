import React from 'react';
import moment from 'moment'
import {Card, View, Text, Button, Icon, Item, Input} from 'native-base';
import {StyleSheet, Image, Animated, FlatList} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Heart } from '../../shared-components/Buttons';
import HorizontalLine from '../HorizontalLine';
import defaultPicture from '../../../assets/images/placeholder.png';
import Comment from '../../components/Comments/comment';
import CommentTextBox from '../CommentTextBox';

const setAvatar = userAvatar => userAvatar ? { uri: userAvatar } : defaultPicture;

const state = {
  comments: 'test',
  commentViewLimit: 2
}

const handleComment= comment => {
  state.comments = comment;
}

const Post = ({
  id,
  userId,
  userAvatar,
  userFullName,
  userParty,
  postTimePosted,
  userPosition,
  postId,
  postTitle,
  postImageSrc,
  postContent,
  postTags,
  postLikes,
  postComments,
  liked,
  triggerLike,
  heartButtonStyle,
  comments=[],
  onAddNewComment = null
 }) => {
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
    : [...comments]

  return (
    <View key={postId}>
      <Card transparent style={styles.card}>
        <View style={styles.row}>
          <Image
            style={styles.profileImage}
            source={setAvatar(userAvatar)}
          />
          <View style={styles.items}>
            <View style={styles.info}>
              <Text style={styles.name} onPress={() => Actions.userProfile({id: userId})}>{userFullName}</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>{moment(postTimePosted).fromNow()}</Text>
            </View>
            { userPosition && <Text style={styles.position}>{userPosition}</Text> }
            { postTitle && <Text style={styles.title}>{postTitle}</Text> }
            { postImageSrc && <Image style={styles.image} source={{ uri: postImageSrc }} /> }
            <Text style={styles.description}>{postContent}</Text>
            <View style={styles.row}>
              <View style={styles.tagSection}>
                <CommentTextBox
                  postId={postId}
                  onFinish={(res)=>{
                    if(onAddNewComment != null){
                        onAddNewComment(res)
                    }
                  }}
                />
              </View>

            </View>
            <View style={styles.postInfo}>
              <Button transparent onPress={() => triggerLike(postId)}>
                <Animated.View style={heartButtonStyle}>
                  <Heart filled={liked} />
                </Animated.View>
              </Button>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>{postLikes} Likes</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>{postComments} Comments</Text>
            </View>
            {postComments > 0 &&
              <FlatList
                  data={commentList}
                  renderItem={({ item, index }) => (
                    <View>
                      {(index > state.commentViewLimit - 3 && index < state.commentViewLimit) && <Comment item={item} />}
                      {(index < state.commentViewLimit - 1 && commentList.length - 1 > state.commentViewLimit - 1) && <HorizontalLine />}
                      {(index >= 2 && index === commentList.length - 1) && 
                        <Text style={[styles.blueText, { paddingLeft: '10%' }]} onPress={() => Actions.comments({
                          userAvatar,
                          userFullName,
                          userParty,
                          postTimePosted,
                          userPosition,
                          postId,
                          postTitle,
                          postContent,
                          postTags,
                          postLikes,
                          postComments
                        })}>
                          View all {postComments} comments
                        </Text>}
                    </View>
                  )}
                  keyExtractor={item => item.id || postId}
              />
            }

          </View>
        </View>
      </Card>
      <HorizontalLine />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  row: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  image: {
    alignSelf: 'stretch',
    width: null,
    height: 182,
    marginTop: 12,
    marginBottom: 8,
  },
  items: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  name: {
    fontFamily: 'raleway-bold',
    fontSize: 12,
    color: '#000'
  },
  position: {
    fontFamily: 'raleway-medium',
    fontSize: 10,
    color: '#97A1B3',
  },
  title: {
    marginTop: 11,
    fontFamily: 'raleway-bold',
    color: '#000',
    fontSize: 14,
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    color: '#000',
    fontFamily: 'SFProText-regular',
  },
  tagSection: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
  },
  tagBtn: {
    borderColor: '#628AFF',
    marginRight: 6,
    marginTop: 6,
  },
  tagText: {
    color: '#628AFF',
  },
  likeSection:{
    width: '10%',
    marginTop: 20,
  },
  heart: {
    color: '#FF6D6D',
    height: 30,
    width: 30
  },
  numbHeart: {
    color: '#333',
    height: 30,
    width: 30
  },
  dots: {
    color: '#D8D8D8'
  },
  blueText: {
    fontFamily: 'museosans-500',
    fontSize: 12,
    color: '#628AFF',
  },
  bold: {
    fontFamily: 'raleway-bold',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postInfo: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  comment: {
      width: '75%',
      backgroundColor: 'white',
      height: 40
  },
  button: {
      width: '21%',
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
  }
});

export default Post;