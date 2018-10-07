import axios from 'axios'
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { get, remove } from '../../modules/cache';

const logout = () => {
	remove('token')
	return Actions.login();
}

export default (token) => {

  let instance = axios.create({
		baseURL: 'https://ivotenaija.herokuapp.com/',
		headers: {
				'Authorization': `${token}`
		}
	})

	instance.interceptors.response.use(function (response) {
		// Do something with response data
		return response;
	}, function (error) {
		const sources = error.response.data;
		// Do something with response error
		if(sources.status.code == 403) {
			Alert.alert(
					'UnAuthorize',
					sources.error.message,
					[
							{text:'ok', onPress:()=>logout()}
					]
			)
		}
		return Promise.reject(error);
	});

  return instance;
}


