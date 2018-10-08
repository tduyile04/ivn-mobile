import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import {Card, View, Text, Button, Icon, Item, Input,Spinner} from 'native-base';
import {StyleSheet, Image, Animated, FlatList} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { createComments } from '../../actions';

class CommentTextBox extends Component{
    constructor(props){
			super(props)
			this.state = {
				comment: '',
				loading:false
			}
    }

    handleComment = async () => {
			this.setState({
				loading:true
			}, async () => {
				await this.props.createComments(this.state.comment, this.props.postId)
				this.setState({ comment: '',loading:false })
				this.props.onFinish(this.props.postId)
			})
    }

    render() {
			return(
				<React.Fragment>
					<Item rounded style={styles.comment}>
						<Input
							placeholder='Write a comment'
							placeholderTextColor="#C7C7CB"
							multiline
							style={styles.input}
							value={this.state.comment}
							onChangeText={comment => this.setState({ comment })}
						/>
					<Button style={styles.button} onPress={() => {this.handleComment()}}>
						{this.state.loading==false 
						? <Icon name='send' style={styles.buttonText} />
						: <Spinner size="small" color="#3F3F3F" />}
					</Button>
					</Item>
				</React.Fragment>
			)
    }
}

const styles = StyleSheet.create({
	comment: {
		width: '90%',
		backgroundColor: 'white',
		height: 40
	},
	button: {
		width: '20%',
		backgroundColor: 'white',
		borderRightColor: "#3F3F3F",
		marginLeft: "10%",
		borderRadius: 20,
		borderBottomWidth: 0,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0.5,
		height: 38
	},
	buttonText: {
		color: '#3F3F3F',
		fontFamily:"raleway-regular",
		fontSize: 28,
	},
	input: {
		color:"#3F3F3F",
		fontFamily:"museosans-500",
		fontSize: 13,
		paddingLeft: 18,
		marginTop: -10
	},
})

const mapDispatchToProps = dispatch => ({
  createComments: (comment, postId) => dispatch(createComments(comment, postId))
})

export default connect(null, mapDispatchToProps)(CommentTextBox);