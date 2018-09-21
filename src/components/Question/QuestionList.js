import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { Container, Card, View, Text, Button, Icon, Spinner } from 'native-base';
import { StyleSheet, Image, ScrollView, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getQuestions } from '../../actions'
import { Heart } from '../../shared-components/Buttons';
import defaultPicture from '../../../assets/images/placeholder.png'
import HorizontalLine from '../../shared-components/HorizontalLine'
import Header from '../../shared-components/Header';

const setAvatar = userAvatar => userAvatar ? userAvatar : defaultPicture;
class QuestionList extends Component {
  state = {
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

  async componentDidMount() {
    await this.props.getQuestions(user.id)
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


  render() {
    const bouncyHeart = this.state.scale.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, .8, 1]
    })
    const { liked } = this.state;
    const heartButtonStyle = {
      transform: [
        { scale: bouncyHeart }
      ]
    }
    const postTags= ['Change2019', 'RealChange']

    const { loading, questions } = this.props;
    if (loading) {
      return <Spinner size="small" color="#000" />
    }
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <Header title='Questions' menu />
        {questions.map(question => {
            return (
              <View key={question.id}>
                <Card transparent style={styles.card}>
                  <View style={styles.row}>
                    <Image
                      style={styles.profileImage}
                      source={setAvatar(question.asker.avatar)}
                    />
                    <View style={styles.items}>
                      <View style={styles.info}>
                        <Text style={styles.name} onPress={() => Actions.userProfile({id: question.asker.id})}>{question.asker.firstName} {question.asker.lastName}</Text>
                        <Icon name='dot-single' type='Entypo' style={styles.dots} />
                        <Text style={styles.blueText}>{moment(question.created_at).fromNow()}</Text>
                      </View>
                      { question.position && <Text style={styles.position}>{question.position}</Text> }
                      { question.title && <Text style={styles.title}>{question.title }</Text> }
                      { question.imageSrc && <Image style={styles.image} source={{ uri: question.imageSrc }} /> }
                      <Text style={styles.description}>{question.question}</Text>
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
                        <Button transparent onPress={() => triggerLike(postId)}>
                          <Animated.View style={heartButtonStyle}>
                            <Heart filled={liked} />
                          </Animated.View>
                        </Button>
                      </View>
                      <View style={styles.postInfo}>
                        <Icon name='dot-single' type='Entypo' style={styles.dots} />
                        <Text style={styles.blueText}>{question.likes.length} Likes</Text>
                        <Icon name='dot-single' type='Entypo' style={styles.dots} />
                        <Text
                          style={styles.blueText}
                          onPress={() => Actions.comments({
                            userAvatar: question.asker.avatar,
                            userFullName: question.asker.firstName + ' ' + question.asker.lastName,
                            userParty: question.party,
                            postTimePosted: question.created_at,
                            userPosition: question.position,
                            postId: question.id,
                            postTitle: question.position,
                            postContent: question.question,
                            postTags: postTags,
                            postLikes: question.likes.length,
                            postComments: question.comments.length
                          })}>{question.comments.length} Comments</Text>
                      </View>
                      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                        <View style={{ display: "flex", flexDirection: "row", paddingRight: 10, paddingTop: 5 }}>
                          <Text style={{ fontFamily: 'raleway-medium', fontSize: 11, fontStyle: "italic" }}>Question For: </Text>
                          <Text style={{ fontFamily: 'raleway-bold', fontSize: 11 }}>{question.candidate.firstName} {question.candidate.lastName}</Text>
                        </View>
                        <Image source={setAvatar(question.candidate.avatar)} style={{ width: 20, height:20, borderRadius: 10 }} />
                      </View>
                    </View>
                  </View>
                </Card>
                <HorizontalLine />
              </View>
            )
        })}
      </ScrollView>
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

const mapStateToProps = state => ({
  questions: state.question.questions,
  loading: state.question.loading,
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  getQuestions: (candidate, page, limit) => dispatch(getQuestions(candidate, page, limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);