/** @format */

import React from 'react';
import {
	View,
	Text,
	FlatList,
	Image,
	ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Products from '../../services/Products';
import ButtonBuy from '../../components/ButtonBuy';
import { useState } from 'react/cjs/react.development';

function Item({ uri }) {
	return (
		<View style={styles.itemContainer}>
			<Image source={{ uri }} style={styles.img}></Image>
		</View>
	);
}

function ProductDetail({ navigation, route }) {
	const { idProduct } = route.params;
    const [number, setNumber] = useState(0);
	const product = Products.filter((item) => item.id === idProduct)[0];

    const handleAddProduct = () => {
        setNumber(state => state + 1);
    }

    const handleSubProduct = () => {
        setNumber(state => state - 1);
    }

	return (
		<View style={styles.container}>
			<Header
				onBack={() => navigation.goBack()}
				title='Product detail'
			></Header>
			<ScrollView>
				<View style={styles.content}>
					<View
						style={{
							height: 400,
						}}
					>
						<FlatList
							showsHorizontalScrollIndicator={false}
							pagingEnabled={true}
							horizontal={true}
							data={product.carouselImages}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item }) => {
								return <Item uri={item}></Item>;
							}}
						></FlatList>
					</View>

                    <View style={{marginTop: 8, marginHorizontal: 16}}>
                        <ButtonBuy
                            number={number}
                            onAddProduct={handleAddProduct}
                            onSubProduct={handleSubProduct}
                        ></ButtonBuy>
                    </View>

					<View style={styles.item}>
						<Text style={styles.header}>Product name</Text>
						<Text style={styles.info}>{product.name}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Product detail</Text>
						<Text style={styles.info}>{product.details}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Product colour</Text>
						<Text style={styles.info}>{product.colour}</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Product sizes</Text>
						<Text style={styles.info}>
							{product.sizes.toString()}
						</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.header}>Product price</Text>
						<Text style={styles.info}>{product.price}</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

export default ProductDetail;
