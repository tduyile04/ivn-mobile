import React, { Component } from 'react';
import { Content, Card, View, Text, Button, Icon, Spinner } from 'native-base';
import { StyleSheet, Image, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LikeButton, LikedButton } from '../../shared-components/Buttons';
import HorizontalLine from '../HorizontalLine';

const Post = ({ 
  userAvatar, 
  userFullName, 
  userParty,
  postTimePosted,
  userPosition,
  postTitle,
  postImageSrc,
  postContent,
  postTags,
  postLikes,
  postComments,
  setActive
 }) => {
  return (
    <View>
      <Card transparent style={styles.card}>
        <View style={styles.row}>
          <Image
            style={styles.profileImage}
            source={{ uri: userAvatar || 'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg' }}
          />
          <View style={styles.items}>
            <View style={styles.info}>
              <Text style={styles.name}>{userFullName}</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText} onPress={() => Actions.partyProfile()}>{userParty}</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>{postTimePosted}m</Text>
            </View>
            { userPosition && <Text style={styles.position}>{userPosition}</Text> }
            { postTitle && <Text style={styles.title}>{postTitle}</Text> }
            { postImageSrc && <Image style={styles.image} source={{ uri: postImageSrc }} /> }
            <Text style={styles.description}>{postContent}</Text>
            <View style={styles.row}>
              <View style={styles.tagSection}>
                { postTags.length > 0 && postTags.map(tag => {
                  return (
                    <Button bordered small rounded style={styles.tagBtn} key={tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </Button>
                  )
                })}
              </View>
              <LikedButton />
            </View>
            <View style={styles.postInfo}>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>{postLikes} Likes</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}  onPress={() => Actions.post()}>{postComments} Comments</Text>
            </View>
          </View>
        </View>
      </Card>
      <HorizontalLine />
    </View>
  )
}

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    }
  }

  async componentDidMount() {
    await this.props.getPosts(this.props.page, this.props.limit) 
  }

  fetchMorePosts = async () => {
    await this.props.getPosts(this.props.page, this.props.limit) 
    this.setState(() => ({ refreshing: false }))
  }

  handleRefresh = () => {
    console.log("are you refreshing")
    this.setState(() => ({
      refreshing: true
    }), () => {
      this.props.getPosts(this.props.page, this.props.limit) 
    })
  }

  render() {
    const { setActive, posts, loading } = this.props;
    return (
      <Content>
        {/* <Post 
          userAvatar={'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg'}
          userFullName={'Emma Simpson'}
          userParty={'PDP'}
          postTimePosted={12}
          userPosition={'Former. Minister for Women Affairs'}
          postTitle={'President Buhari meets Vancoise'}
          postImageSrc={'http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg'}
          postContent={'Mauris non tempor quam, et lacinia sapien. \
            Mauris accumsan eros eget libero posuere vulputate.'}
          postTags={['Change2019', 'RealChange']}
          postLikes={7541}
          postComments={212}
          setActive={setActive}
        /> */}

        <FlatList
          data={posts}
          renderItem={({ item: post }) => (
            <Post
              key={post.id} 
              userAvatar={post.author.avatar}
              userFullName={`${post.author.firstName} ${post.author.lastName}`}
              userParty={'APC'}
              postTimePosted={10}
              postContent={post.content}
              postTags={['Change2019', 'RealChange']}
              postLikes={post.comments.length}
              postComments={post.likes.length}
              setActive={setActive}
            />
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
  }
});

export default Feed;
