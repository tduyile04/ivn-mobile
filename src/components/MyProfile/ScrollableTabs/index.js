import React, { Component } from 'react';
import { Container, Content, View, Text, Tab, Tabs, Spinner, Icon, Button, Card } from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet, Image } from 'react-native';
import moment from 'moment'
import HorizontalLine from '../../../shared-components/HorizontalLine';
import { getUserPosts } from '../../../actions';
import defaultPicture from '../../../../assets/images/placeholder.png';
import { get } from '../../../modules/cache'

import About from './about';

const setAvatar = userAvatar => userAvatar ? { uri: userAvatar } : defaultPicture;
class ScrollableTabs extends Component {
  async componentDidMount() {
    const userId = await get('user_id')
    if (userId) {
      this.props.getUserPosts(userId)
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Tabs tabBarUnderlineStyle={styles.tabsStyle}>
          <Tab heading="About" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle}>
            <About />
          </Tab>
          <Tab heading="Posts" activeTextStyle={styles.activeTextStyle} tabStyle={styles.white} activeTabStyle={styles.white} textStyle={styles.textStyle}>
            <Content style={{ padding: 10 }}>
              { this.props.userPosts.length === 0 && this.props.loading && <Spinner size="small" color="#000" /> }
              { this.props.userPosts.length > 0 
                ?  this.props.userPosts.map((post) => {
                    return (
                    <Card key={post.id} transparent style={styles.card}>
                      <View style={styles.row}>
                        <Image
                          style={styles.profileImage}
                          source={setAvatar(post.avatar)}
                        />
                        <View style={styles.items}>
                          <View style={styles.info}>
                            <Text style={styles.name}>{post.author.firstName} {post.author.lastName}</Text>
                            <Icon name='dot-single' type='Entypo' style={styles.dots} />
                            <Text style={styles.blueText}>{moment(post.created_at).fromNow()}</Text>
                          </View>
                          <Text style={styles.description}>{post.content}</Text>
                          <View style={styles.postInfo}>
                            <Icon name='dot-single' type='Entypo' style={styles.dots} />
                            <Text style={styles.blueText}>{post.likes.length} Likes</Text>
                            <Icon name='dot-single' type='Entypo' style={styles.dots} />
                            <Text style={styles.blueText}>{post.comments.length} Comments</Text>
                          </View>
                        </View>
                      </View>
                    </Card> 
                )})
                : <Text style={styles.text}>No post(s) available yet</Text>}
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: 'transparent'
  },
  tabsStyle: {
    backgroundColor: '#628AFF',
    borderBottomWidth:0
  },
  white: {
    backgroundColor: '#fff',
  },
  activeTextStyle: {
    color: '#628AFF',
    fontFamily: 'raleway-bold',
    backgroundColor: 'transparent'
  },
  textStyle: {
    color: '#3F3F3F',
    fontFamily: 'raleway-regular'
  },
  text: {
    fontFamily: 'raleway-regular',
    marginTop: 20,
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: 14,
  },
  userPostscard: {
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

const mapStateToProps = state => ({
  userPosts: state.post.userPosts,
  loading: state.post.userPostLoading,
})

const mapDispatchToProps = dispatch => ({
  getUserPosts: userId => dispatch(getUserPosts(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScrollableTabs);
