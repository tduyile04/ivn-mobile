import React, { Component } from 'react';
import { Container, Content, Textarea, Form } from 'native-base';
import { StyleSheet, Text } from 'react-native';
import Header from '../../shared-components/Header';

class TextEditor extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header back title='Post a question' share/>
        <Content padder style={styles.content}>
          <Form>
            <Textarea rowSpan={15} placeholder="What is on your mind?" multiline/>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    marginTop: 10,
  }
})

export default TextEditor;
