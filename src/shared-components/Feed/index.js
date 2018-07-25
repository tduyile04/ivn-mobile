import React from 'react';
import { Content, Card, View, Text, Button, Icon } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import HorizontalLine from '../HorizontalLine';

const Feed = () => {
  return (
    <Content>
      <Card transparent style={styles.card}>
        <View style={styles.row}>
          <Image
            style={styles.profileImage}
            source={{uri: 'https://i.ytimg.com/vi/GtHEFawysgs/maxresdefault.jpg'}}
          />
          <View style={styles.items}>
            <View style={styles.info}>
              <Text style={styles.name}>Emma Simpson</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>PDP</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>12m</Text>
            </View>
            <Text style={styles.position}>Former. Minister for Women Affairs</Text>
            <Text style={styles.title}>President Buhari meets Vancoise</Text>
            <Image
              style={styles.image}
              source={{uri: 'http://www.signalng.com/wp-content/uploads/president-buhari-meets-president-francoise-hollande-at-elysee-1.jpg'}}
            />
            <Text style={styles.description}>
              Mauris non tempor quam, et lacinia sapien. 
              Mauris accumsan eros eget libero posuere vulputate.
            </Text>
            <View style={styles.row}>
              <View style={styles.tagSection}>
                <Button bordered small rounded style={styles.tagBtn}>
                  <Text style={styles.tagText}>Change2019</Text>
                </Button>
                <Button bordered small rounded style={styles.tagBtn}>
                  <Text style={styles.tagText}>RealChange</Text>
                </Button>
              </View>
              <View style={styles.likeSection}>
                <Icon name='heart' type='MaterialCommunityIcons' style={styles.heart} />
              </View>
            </View>
            <View style={styles.postInfo}>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>7,541 Likes</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>212 Comments</Text>
            </View>
          </View>
        </View>
      </Card>

      <HorizontalLine />

      <Card transparent style={styles.card}>
        <View style={styles.row}>
          <Image
            style={styles.profileImage}
            source={{uri: 'https://i.pinimg.com/736x/19/a8/6c/19a86c6673349bb21910dd4b3bb18e68.jpg'}}
          />
          <View style={styles.items}>
            <View style={styles.info}>
              <Text style={styles.name}>Juan Hansen</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>APC</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>30m</Text>
            </View>
            <Text style={styles.description}>
              <Text style={[styles.description, styles.bold]}>@minister-marquis</Text> Mauris non tempor quam, et lacinia sapien. 
            Mauris accumsan eros eget libero posuere vulputate...
            </Text>
            <View style={styles.row}>
              <View style={styles.tagSection}>
                <Button bordered small rounded style={styles.tagBtn}>
                  <Text style={styles.tagText}>Change2019</Text>
                </Button>
                <Button bordered small rounded style={styles.tagBtn}>
                  <Text style={styles.tagText}>RealChange</Text>
                </Button>
              </View>
              <View style={styles.likeSection}>
                <Icon name='heart-outline' type='MaterialCommunityIcons' style={styles.numbHeart} />
              </View>
            </View>
            <View style={styles.postInfo}>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>7,541 Likes</Text>
              <Icon name='dot-single' type='Entypo' style={styles.dots} />
              <Text style={styles.blueText}>212 Comments</Text>
            </View>
          </View>
        </View>
      </Card>
    </Content>
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
    marginTop: 12
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
    marginTop: 8,
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
    color: '#555',
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
