import React, { Component } from 'react';
import { Container, Content, Textarea, Form } from 'native-base';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { submitQuestions } from '../../actions';

import Header from '../../shared-components/Header';

class Question extends Component {
  state = {
    question: ''
  }

  handleAsk = async () => {
    const { question } = this.state;
    if (question && question.trim() !== '') {
      await this.props.submitQuestions(this.props.userId, question)
      Actions.home()
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header back title='Ask Question' ask onAsk={this.handleAsk}/>
        <Content padder style={styles.content}>
          <Form>
            <Textarea 
              rowSpan={15} 
              placeholder="Ask me anything?"
              onChangeText={question => this.setState({ question })}
              multiline/>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.question.questions,
  error: state.post.error,
  loading: state.post.loading
})

const mapDispatchToProps = dispatch => ({
  submitQuestions: (candidateId, question) => dispatch(submitQuestions(candidateId, question))
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    marginTop: 10,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Question);
