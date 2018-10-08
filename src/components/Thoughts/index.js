import React, {Component} from 'react'
import {
	Text,
	View,
	Container,
	Button,
	Icon,
	Spinner,
	Content
} from 'native-base';
import {connect} from 'react-redux';
import { StyleSheet, Image, Alert, FlatList, KeyboardAvoidingView } from 'react-native';
import Header from '../../shared-components/Header'
import CommentTab from '../../shared-components/CommentTab';
import Comment from '../Comments/comment'
import { getCandidateThoughts } from '../../actions';
import { get } from '../../modules/cache'

class Thoughts extends Component {
		state = {
			userId: null
		}

		async componentDidMount() {
			let userId = await get('user_id');
			if (userId) {
				await this.props.getCandidateThoughts()
			}
		}

		handleRefresh = () => null
		fetchMorePosts = () => null

		render() {
			const { comments, commentsLoading, thoughts, loading } = this.props;
			console.log("the loading -> ", thoughts)
			return (
				<Container>
					<Header title='Daily Thoughts' back />
					{loading ? <Spinner size="small" color="#000"/> : null}
					{!loading && <Content style={styles.textViewStyle}>
						<Text
							style={[
							styles.textStyle, {
								fontFamily: "raleway-bold",
								textAlign: "center",
								fontSize: 18,
								color: '#628AFF'
							}
						]}>{thoughts[0].title}</Text>
						<Text style={styles.textStyle}>
							{thoughts[0].content}
						</Text>
						<Text style={[
							styles.textStyle, 
							{ fontFamily: "raleway-bold" }
						]}>Comments</Text>
						{!commentsLoading 
							? <FlatList
									data={comments}
									renderItem={({item}) => <Comment item={item} />}
									keyExtractor={item => item.id}
									refreshing={this.state.refreshing}
									onEndReachedThreshold={0.5}/>
								: <Spinner size="small" color="#000"/>}
					</Content>}
					<KeyboardAvoidingView behavior="padding" enabled>
						{!loading ? <CommentTab thoughtId={thoughts[0].id} thoughts />: null}
					</KeyboardAvoidingView>
				</Container>
			)
		}
}

const styles = StyleSheet.create({
	containerStyle: {
		padding: 10
	},
	textViewStyle: {
		marginTop: 5,
		padding: 10,
		display: "flex"
	},
	textStyle: {
		fontFamily: "raleway-regular",
		fontSize: 12,
		paddingBottom: 10
	},
	center: {
		alignItems: "center"
	}
})

const mapStateToProps = state => ({
	thoughts: state.thought.thoughts,
	comments: state.thought.comments, 
	error: state.thought.error, 
	loading: state.thought.thoughtsLoading,
	commentsLoading: state.thought.commentsLoading
})

const mapDispatchToProps = dispatch => ({
	getCandidateThoughts: () => dispatch(getCandidateThoughts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Thoughts);