import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const data = [1, 2, 3, 4, 5]
export default class PlaceTypeView extends Component {
    render() {
        return (
            <View >
                {this.renderTypeList(1)}
                {this.renderTypeList(2)}
                {this.renderTypeList(3)}
            </View >
        )
    }
    renderTypeList(index) {
        let a = []
        data.map((d) => {
            let res = <View key={d} >
                <Image
                    style={styles.tinyLogo}
                    source={require('../../image/react-native-logo.png')}
                // source={{ uri: "http://p0.meituan.net/w.h/groupop/9aa35eed64db45aa33f9e74726c59d938450.png" }}
                >
                </Image>
                <View style={styles.cardText}>
                    <Text>图标图标{index}{d}</Text>
                </View>
            </View>
            a.push(res)
        })
        return <View style={styles.container}>{a}</View>
    }

    // return data.map((item) => {
    //     
    // })

}


const styles = StyleSheet.create({
    container: {
        // marginTop: 5,
        // 改变主轴的方向
        // alignContent: 'center',
        // alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#aa55aa'
    },
    cardText: {
        // marginLeft: 22
        // marginLeft: 12,
        // marginRight: 12,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 12,
        marginBottom: 0
    }
})