import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title , Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { VIEWS } from '../../components/Home/constants';

const HeaderTab = ({menu, back, title, setActive}) => {
  const backfn = (view) => setActive ? setActive(view) : Actions.pop();
  return (
    <Header style={styles.header} hasTabs>
      <Left>
        { menu && 
          <Button transparent onPress={() => Actions.drawerOpen()}>
            <Icon name='menu' type='MaterialCommunityIcons' style={{color: '#3F3F3F', marginLeft: 10 }}/> 
          </Button> }
        { back && 
        <Button transparent onPress={() => backfn(VIEWS.feed)}>
          <Icon name='chevron-left' type='MaterialCommunityIcons' style={{color: '#3F3F3F', marginLeft: 10 }}/>
        </Button> }
      </Left>
      <Body>
        <Title style={styles.title}>{title}</Title>
      </Body>
      <Right>
      </Right>
    </Header>
  );
}

export default HeaderTab;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomWidth:0
  },
  title: {
    color: '#3F3F3F',
  },
});