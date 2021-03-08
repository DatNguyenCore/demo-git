/** @format */

import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

function ButtonBuy({ number = 12, onAddProduct, onSubProduct }) {

	return (
		<>
			{number === 0 && (
				<TouchableOpacity
					style={{
						backgroundColor: '#000',
						width: '100%',
						height: 40,
						borderRadius: 7,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onPress={onAddProduct}
				>
					<Text
						style={{
							color: '#fff',
							fontSize: 15,
							fontWeight: 'bold',
						}}
					>
						Add to card
					</Text>
				</TouchableOpacity>
			)}
			{number !== 0 && (
				<View
					style={{
						width: '100%',
						height: 40,
						borderRadius: 7,
						overflow: 'hidden',
						flexDirection: 'row',
						justifyContent: 'space-between',
						borderWidth: 1,
						borderColor: 'rgba(0,0,0,.1)',
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						elevation: 5,
						alignItems: 'center',
					}}
				>
					<TouchableOpacity
						style={{
							height: 40,
							width: 80,
							backgroundColor: '#000',
							justifyContent: 'center',
							alignItems: 'center',
							borderTopLeftRadius: 7,
							borderBottomLeftRadius: 7,
						}}
						onPress={onAddProduct}
					>
						<Text
							style={{
								color: '#fff',
								fontWeight: 'bold',
							}}
						>
							ADD
						</Text>
					</TouchableOpacity>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						{number}
					</Text>
					<TouchableOpacity
						style={{
							height: 40,
							width: 80,
							backgroundColor: '#000',
							justifyContent: 'center',
							alignItems: 'center',
							borderTopRightRadius: 7,
							borderBottomRightRadius: 7,
						}}
						onPress={onSubProduct}
					>
						<Text
							style={{
								color: '#fff',
								fontWeight: 'bold',
							}}
						>
							SUB
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</>
	);
}

export default ButtonBuy;