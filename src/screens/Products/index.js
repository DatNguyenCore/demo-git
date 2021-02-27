/** @format */

import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	TouchableOpacity,
	Alert,
} from 'react-native';
import data from '../../services/Products';
import Header from '../../components/Header';

function moneyFormat(price, sign = 'VND') {
	const pieces = parseFloat(price).toFixed(1).split('');
	let ii = pieces.length - 2;
	while ((ii -= 3) > 0) {
		pieces.splice(ii, 0, ',');
	}
	return sign + ' ' + pieces.join('');
}

function ItemList({ data }) {
	return (
		<TouchableOpacity onPress={() => Alert.alert('Buy')}>
			<View style={styles.container}>
				<View style={styles.containerImage}>
					<Image
						style={styles.image}
						source={{
							uri: data.thumbImage,
						}}
					></Image>
				</View>
				<View style={styles.content}>
					<Text style={styles.header} numberOfLines={2}>
						{data.name}
					</Text>
					<Text style={styles.price}>
						Price: {moneyFormat(data.price)}
					</Text>
					<Text>Colour: {data.colour}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

function Products({ navigation }) {
	return (
		<View style={styles.waper}>
			<Header
				title='Products'
			></Header>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ItemList data={item}></ItemList>}
			></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	waper: {
		flex: 1,
	},
	container: {
		padding: 10,
		backgroundColor: '#fff',
		marginVertical: 10,
		marginHorizontal: 10,
		flexDirection: 'row',
		borderRadius: 7,
		overflow: 'hidden',
	},
	containerImage: { width: 100, height: 150 },
	image: {
		width: 100,
		height: 150,
		resizeMode: 'contain',
	},
	content: {
		marginLeft: 10,
		flex: 1,
	},
	header: {
		fontSize: 20,
		marginBottom: 10,
	},
	price: {
		fontSize: 15,
		marginBottom: 10,
	},
});

export default Products;
