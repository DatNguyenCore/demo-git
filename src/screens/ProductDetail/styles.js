import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    item: {
        marginHorizontal: 16,
        marginVertical: 8
    },
    header: {
        fontSize: 18,
        fontWeight: '700'
    },
    info: {
        fontSize: 15
    },
    itemContainer: {
        width,
        height: 400
    },
    img: {
        width,
        height: 400
    }
})

export default styles;