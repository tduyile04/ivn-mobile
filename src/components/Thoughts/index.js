import React, { Component } from 'react'
import { Text, View, Container, Button, Icon, Spinner, Content } from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet, Image, Alert,FlatList } from 'react-native';
import Header from '../../shared-components/Header'
import { getCandidateThoughts } from '../../actions/posts';
import { get } from '../../modules/cache'

class Thoughts extends Component {

    state = {
        clicked: false,
        thoughts: [],
        loading:  false,
        userId:null
    }

    async componentDidMount(){
        let userId = await get('user_id');
        if (userId) {
            this.setState({
                loading:true
            })
            await this.props.getCandidateThoughts(userId)
        }
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps.candidateWeek)
        if(nextProps.thoughts != null){
            this.setState({
                loading:false,
                thoughts:nextProps.thoughts
            })
        }
    }

    handleRefresh = () => null
    fetchMorePosts = () =>  null


    render() {

        if (this.state.loading){
            return(
                <Spinner size="small" color="#000" />
            )
        }

    return (
      <Container>
        <Header title='Daily Thoughts' menu />
        <Content style={styles.textViewStyle}>
            <FlatList
                data={this.state.thoughts}
                renderItem={({ item }) =>  {

                    return (
                        <React.Fragment>
                            <Text style={[ styles.textStyle, { fontFamily: "raleway-bold", textAlign: "center", fontSize: 18, color: '#628AFF' } ]}>{item.title}</Text>
                            <Text style={styles.textStyle}>
                                {item.content}
                            </Text>
                            {/*<Text style={styles.textStyle}>(1) A candidate for an election to the office of Governor of a State shall be deemed to have been duly elected to such office where, being the only candidate nominated for the election-*/}
                                {/*(a) he has a majority of YES votes over NO votes cast at the election; and*/}
                                {/*(b) he has not less than one-quarter of the votes cast at the election in each of at least two-thirds of all the local government areas in the State, but where the only candidate fails to be elected in accordance with this subsection, then there shall be fresh nominations.</Text>*/}

                            {/*<Text style={styles.textStyle}>(2) A candidate for an election to the office of Governor of a State shall be deemed to have been duly elected where, there being two or more candidates –*/}
                                {/*(a) he has the highest number of votes cast at the election; and*/}
                                {/*(b) he has not less than one-quarter of all the votes cast in each of at least two-thirds of all the local government areas in the State.</Text>*/}
                            {/*<Text style={styles.textStyle}>3) In default of a candidate duly elected in accordance with subsection (2) of this section there shall be a second election in accordance with subsection (4) of this section at which the only candidates shall be*/}
                                {/*(a) the candidate who secured the highest number of votes cast at the election; and*/}
                                {/*(b) one among the remaining candidates who secured a majority of votes in the highest number of local government areas in the State, so however that where there are more than one candidate with a majority of votes in the highest number of local government areas, the candidate among them with the next highest total of votes cast at the election shall be the second candidate.</Text>*/}
                            {/*<Text style={styles.textStyle}>(4) In default of a candidate duly elected under subsection (2) of this section, the Independent National Electoral Commission shall within seven days of the result of the election held under that subsection, arrange for an election between the two candidates and a candidate at such election shall be deemed to have been duly elected to the office of Governor of a State if –*/}
                                {/*(a) he has a majority of the votes cast at the election; and*/}
                                {/*(b) he has not less than one-quarter of the votes cast at the election in each of at least two-thirds of all the local government areas in the State.</Text>*/}
                            {/*<Text style={styles.textStyle}>(5) In default of a candidate duly elected under subsection (4) of this section, the Independent National Electoral Commission shall within seven days of the result of the election held under that subsection, arrange for another election between the two candidates to which that sub-paragraph relates and a candidate at such election shall be deemed to have been duly elected to the office of governor of a State if he has a majority of the votes cast at the election.</Text>*/}
                            {/*<Text style={styles.textStyle}>The proper role of government is to create an enabling environment in which traditions and values of the constitution will be able to take root and where rights and duties are set out.*/}
                                {/*In this process, the separation of powers must be facilitated. Government must allow institutions to work and must allow citizens to exercise their rights, to live in accordance with their religious beliefs and cultural values, without interference*/}

                                {/*Question become is INEC operating and abiding by their guidelines and the rule of law? Is this a case of fairness and equity or are there other forces involved ??*/}
                            {/*</Text>*/}
                        </React.Fragment>
                    )
                }}
                keyExtractor={item => item.id}
                refreshing={this.state.refreshing}
                onEndReachedThreshold={0.5}
            />


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
    display: "flex",
  },
  textStyle: {
    fontFamily: "raleway-regular",
    fontSize: 12,
    paddingBottom: 10
  },
  center: {
    alignItems: "center",
  }
})


const mapStateToProps = state => ({
    thoughts: state.post.thoughts,
    error: state.post.error,
    loading: state.post.loading
})

const mapDispatchToProps = dispatch => ({
    getCandidateThoughts: userId=> dispatch(getCandidateThoughts(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Thoughts);