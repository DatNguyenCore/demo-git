/** @format */

import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native';

function Login({ navigation }) {
	return (
		<View style={styles.waper}>
			<Image
				source={require('../../imgs/logo.png')}
				style={styles.image}
			></Image>
			<TextInput
				style={[styles.input, styles.username]}
				placeholder='Username'
			></TextInput>
			<TextInput
				style={styles.input}
				placeholder='Password'
				secureTextEntry
			></TextInput>

			<TouchableOpacity
				style={styles.btnLogin}
				onPress={() => navigation.navigate('Products')}
			>
				<Text style={styles.textLogin}>Login</Text>
			</TouchableOpacity>
		</View>
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
