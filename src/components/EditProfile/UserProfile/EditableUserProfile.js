import React,{Component} from 'react';
import {Image, StyleSheet, scroll,Alert,TextInput} from 'react-native';
import {Text, View, Button, Icon, Form, Item, Label, Input, Textarea} from 'native-base';
import { connect } from 'react-redux';
import { userEditProfile } from '../../../actions/user';
import { get } from '../../../modules/cache'
import {FollowButton, UnfollowButton} from '../../../shared-components/Buttons';
import defaultPicture from '../../../../assets/images/placeholder.png';

class EditableUserProfile extends Component{

    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            // email:'',
            phone:'',
            bio:'',
        }
    }

    componentWillReceiveProps(){
			const { user } = this.props;
			this.setState({
					firstName: user.firstName,
					lastName: user.lastName,
					// email:user.email,
					bio: user.bio,
			})
    }

    componentDidUpdate(nextProps){
			const { user } = nextProps;
			this.setState({
				firstName: user.firstName,
				lastName: user.lastName,
				// email:user.email,
				bio: user.bio,
			})
    }

    handleName=(value)=>{
      this.setState({ firstName:value })
    }

     onSave = async () => {
			const userId = await get('user_id');
			let data = {
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				// email: this.state.email,
				bio: this.state.bio,
				phoneNumber: this.state.phone
			};
			await this.props.userEditProfile(data,userId)
			if(this.props.message) {
				alert(this.props.message)
			}
    }

    render(){
			const { user } = this.props;
			const avatar = user && user.avatar ? {uri: user.avatar} : defaultPicture;
			return (
				<View style={styles.content}>
					<View style={styles.row}>
						<View style={styles.profileImageSection}>
							<Image
								style={styles.profileImage}
								source={avatar}
							/>
						</View>
						<View style={styles.center}>
							<View style={styles.secondaryInfo}>
								<View style={styles.center}>
									<Text>
										<Text style={styles.count}>{this.props.followers}</Text>
										<Text style={styles.title}> Followers</Text>
									</Text>
								</View>
								<View style={styles.center}>
									<Text>
										<Text style={styles.count}>{this.props.followings}</Text>
										<Text style={styles.title}> Followings</Text>
									</Text>
								</View>
							</View>
						</View>
					</View>
					<Form style={styles.form}>
						<View style={styles.column}>
							<View style={styles.formItem}>
								<Item stackedLabel>
										<Label style={styles.labelColor}>Full Name</Label>
										<TextInput 
											value={this.state.firstName} 
											placeholder=""
											editable = {true}
											onChangeText={(text) =>this.handleName(text)} />
								</Item>
							</View>
							{/* <View style={styles.formItem}>
								<Item stackedLabel>
									<Label style={styles.labelColor}>Email</Label>
									<TextInput 
										value={this.state.email} 
										editable = {true} 
										placeholder="" 
										onChangeText={(text)=>this.setState({email:text})} />
								</Item>
							</View> */}
							<View style={styles.formItem}>
								<Item stackedLabel>
									<Label style={styles.labelColor}>Phone</Label>
									<TextInput value={this.state.phone} placeholder="" onChangeText={(text) => this.setState({phone:text})}/>
								</Item>
							</View>
							<View style={styles.formItem}>
								<Item stackedLabel>
									<Label style={styles.labelColor}>Bio</Label>
									<Textarea
										rowSpan={5}
										value={this.state.bio}
										placeholder=""
										onChangeText={(text) => this.setState({ bio:text })}
										style={{width:"100%"}}/>
								</Item>
							</View>
						</View>
					</Form>
					<Button block info onPress={() => this.onSave()}>
						<Text>Save</Text>
					</Button>
				</View>
			);
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
    },
    form:{
      top:'7%',
    },
    formItem:{

    },
    row: {
        flexDirection: 'row'
    },
    column:{
      flexDirection:'column'
    },
    labelColor:{
      color:'#97A1B3'
    },
    profileImage: {
        width: 68,
        height: 68,
        borderRadius: 33,
        marginTop: -25,
    },
    secondaryInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%'
    },
    count: {
      fontSize: 14,
      fontFamily: 'raleway-bold',
      color: "#3F3F3F",
    },
    title: {
      fontSize: 14,
      fontFamily: 'raleway-regular',
      color: "#3F3F3F",
    },
    center: {
      alignItems: 'center',
      marginTop:'3%'
    }
});

const mapStateToProps = state => ({
    userloading: state.user.userloading,
    message: state.user.message,
})

const mapDispatchToProps = dispatch => ({
    userEditProfile: (data,userId)=> dispatch(userEditProfile(data,userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditableUserProfile);
