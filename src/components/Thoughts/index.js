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
import {StyleSheet, Image, Alert, FlatList} from 'react-native';
import Header from '../../shared-components/Header'
import {getCandidateThoughts} from '../../actions/posts';
import {get} from '../../modules/cache'

class Thoughts extends Component {
		state = {
			clicked: false,
			thoughts: [],
			loading: false,
			userId: null
		}

		async componentDidMount() {
			let userId = await get('user_id');
			if (userId) {
				this.setState({loading: true})
				await this.props.getCandidateThoughts(userId)
			}
		}

		componentWillReceiveProps(nextProps) {
			if (nextProps.thoughts != null) {
				this.setState({loading: false, thoughts: nextProps.thoughts})
			}
		}

		handleRefresh = () => null
		fetchMorePosts = () => null

		render() {
			if (this.state.loading) {
				return (<Spinner size="small" color="#000"/>)
			}

			return (
				<Container>
					<Header title='Daily Thoughts' menu/>
					<Content style={styles.textViewStyle}>
						<FlatList
							data={this.state.thoughts}
							renderItem={({item}) => {
							return (
								<React.Fragment>
									<Text
										style={[
										styles.textStyle, {
												fontFamily: "raleway-bold",
												textAlign: "center",
												fontSize: 18,
												color: '#628AFF'
										}
									]}>{item.title}</Text>
									<Text style={styles.textStyle}>
										{item.content}
									</Text>
								</React.Fragment>
							)
						}}
						keyExtractor={item => item.id}
						refreshing={this.state.refreshing}
						onEndReachedThreshold={0.5}/>
					</Content>
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

const mapStateToProps = state => ({thoughts: state.post.thoughts, error: state.post.error, loading: state.post.loading})

const mapDispatchToProps = dispatch => ({
		getCandidateThoughts: userId => dispatch(getCandidateThoughts(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Thoughts);