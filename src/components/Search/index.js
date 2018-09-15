import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native';
import { Container } from 'native-base';

import SearchBar from './SearchBar';
import ScrollableTabs from './ScrollableTabs';
import { searchUser, searchParty } from '../../actions/search'

class Search extends React.Component {
  state = { search: '' }

  componentDidMount() {

  }
  handleChange = (value) => {
    console.log(value)
    this.setState({ search: value })
  }
  handleSearch = () => {
    this.props.dispatch(searchUser(this.state.search))
    this.props.dispatch(searchParty(this.state.search))
  }
  render () {
    return (
      <Container style={styles.container}>
        <SearchBar handleChange={this.handleChange} search={this.handleSearch} />
        <ScrollableTabs users={this.props.users} parties={this.props.parties} loading={this.props.loading} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50
  },
});

const mapStateToProps = state => ({
  users: state.search.users,
  parties: state.search.parties,
  loading: state.search.loading
})
const mapDispatchToProps = dispatch => ({
  searchUser: (q) => dispatch(searchUser(q)),
  searchParty: (q) => dispatch(searchParty(q))
})

export default connect(mapStateToProps)(Search);
