/** @format */

import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	Alert
} from 'react-native';
import Users from '../../services/Users';

function Login({ navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if(username.trim() === '') {
			return Alert.alert('Trường tài khoản không được để trống');
		}

		if(password.trim() === '') {
			return Alert.alert('Trường mật khẩu không được để trống');
		}

		if(username !== Users.username || password !== Users.password) {
			return Alert.alert('Tài khoản hoặc mật khẩu không đúng');
		}

		navigation.navigate('Products');
	}


	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.waper}>
				<Image
					source={require('../../imgs/logo.png')}
					style={styles.image}
				></Image>
				<TextInput
					style={[styles.input, styles.username]}
					placeholder='Username'
					onChangeText={(text) => setUsername(text)}
				></TextInput>
				<TextInput
					style={styles.input}
					placeholder='Password'
					secureTextEntry
					onChangeText={(text) => setPassword(text)}
				></TextInput>

				<TouchableOpacity
					style={styles.btnLogin}
					onPress={handleLogin}
				>
					<Text style={styles.textLogin}>Login</Text>
				</TouchableOpacity>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	waper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	input: {
		width: 300,
		height: 40,
		backgroundColor: 'rgba(0,0,0,.1)',
		borderRadius: 7,
		fontSize: 20,
		paddingHorizontal: 15,
	},
	username: {
		marginBottom: 10,
	},
	image: {
		width: 300,
		resizeMode: 'contain',
	},
	btnLogin: {
		width: 300,
		height: 40,
		borderRadius: 7,
		backgroundColor: '#000',
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textLogin: {
		color: '#fff',
		fontSize: 17,
		fontWeight: 'bold',
	},
});

export default Login;
