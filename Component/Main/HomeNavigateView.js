import React, { Component } from 'react';
import { TextInput, Text, View, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class HomeNavigateView extends Component {
    render() {
        return (
            <View style={styles.navigatorStyle}>

                {/* <TouchableHighlight onPress={() => { alert('地点') }}>
                    <Text style={styles.leftTextStyle}>
                        {""}
                    </Text>
                </TouchableHighlight> */}
                <Text style={styles.leftTextStyle}>文体场地</Text>
                <TextInput underlineColorAndroid="transparent" placeholder="输入商家、品类、商圈" style={styles.textInputStyle}>
                </TextInput>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    navigatorStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        width: width,
        backgroundColor: '#0077ff',
        color: 'white',
        flexDirection: 'row',//设置主轴的方向
        alignItems: 'center',//垂直居中，设置侧轴的对齐方式
        justifyContent: 'space-around',//设置主轴的对齐方式
    },

    leftTextStyle: {
        color: 'white',
        marginLeft: 5,
    },

    textInputStyle: {
        marginTop: Platform.OS === 'ios' ? 16 : 0,
        width: width * 0.71,
        height: Platform.OS === 'ios' ? 35 : 30,
        backgroundColor: 'white',
        borderRadius: Platform.OS === 'ios' ? 17.5 : 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 1,
        paddingBottom: 1,
        textAlign: 'left',
        fontSize: 12,
    },

    rightViewStyle: {
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 64 : 44,
        alignItems: 'center',
        marginRight: 5,
    },

    navigatorImageStyle: {
        width: 25,
        height: 25,
        marginLeft: 5,
    }
});
