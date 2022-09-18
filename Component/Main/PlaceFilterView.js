import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class PlaceFilterView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ModalDropdown style={styles.selectNode} options={['option 1', 'option 2']} defaultValue="全部分类" />
                <Text>|</Text>
                <ModalDropdown style={styles.selectNode} options={['option 1', 'option 2']} defaultValue="附近" />
                <Text>|</Text>
                <ModalDropdown style={styles.selectNode} options={['option 1', 'option 2']} defaultValue="智能排序" />
                <Text>|</Text>
                <ModalDropdown style={styles.selectNode} options={['option 1', 'option 2']} defaultValue="筛选" />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        // 改变主轴的方向
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-around",
        borderBottomWidth: 0.5,
        padding: 5,
        paddingTop: 15,
        borderColor: '#999'
    },
    selectNode: {
        paddingLeft: 5,
        paddingRight: 15,
    }
})