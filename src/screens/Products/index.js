import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Products() {
    return (
        <View style={styles.waper}>
            <Text>Products</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Products;