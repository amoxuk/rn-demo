import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import PlaceTypeView from './PlaceTypeView';
import PlaceFilterView from './PlaceFilterView';
export default class PlaceListView extends Component {
    _flatList;

    //渲染每一行数据为text组件
    _renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.itemList}>
                <Image source={require('../../image/react-native-logo.png')} style={styles.itemImage} />
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item.item.title}</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                        <Text style={{ marginRight: 5 }}>{item.item.position}</Text>
                        <Text style={{ marginRight: 5, color: "#999" }}>|</Text>
                        <Text style={{ marginRight: 5 }}>{item.item.model}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    //行间分割线
    _separator = () => {
        return <View style={{ height: 1, backgroundColor: '#7b7b7b' }} />
    };

    render() {
        var data = [
            {
                title: '3+1健身工作室',
                position: "西丽",
                model: "私教工作室",
            },
            {
                title: '黑石子私人健身会所',
                position: "西丽",
                model: "私教工作室",
            },
            {
                title: '一加健身',
                position: "西丽",
                model: "私教工作室",
            },
            {
                title: 'ZT7健身工作室',
                position: "西丽",
                model: "私教工作室",
            }, {
                title: '同乐体育中心',
                position: "西丽",
                model: "私教工作室",
            }, {
                title: '篮球场',
                position: "西丽",
                model: "私教工作室",
            }, {
                title: '足球场',
                position: "西丽",
                model: "私教工作室",
            }, {
                title: '羽毛球场',
                position: "西丽",
                model: "私教工作室",
            }, {
                title: '乒乓球场',
                position: "西丽",
                model: "私教工作室",
            },
        ];
        // data += data

        return (
            <View style={styles.container}>
                <View style={styles.trailList}>
                    <FlatList
                        ListHeaderComponent={
                            <>
                                <PlaceTypeView />
                                <PlaceFilterView />
                            </>
                        }
                        ref={(flatList) => this._flatList = flatList}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        data={data}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 15,
        paddingBottom: 5,
        marginBottom: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    searchBox: {
        flex: 1,
        height: 35,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor: '#E6E7E8',
        borderRadius: 5,
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 7,
        marginRight: 7,
        width: 18,
        height: 18,
    },
    inputText: {
        alignSelf: 'center',
        marginTop: 0,
        flex: 1,
        height: 30,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 18,
        lineHeight: 30,
        textAlignVertical: 'center',
        textDecorationLine: 'none'
    },
    trailList: {
        flex: 20,
        width: 400,
        // height: 100,
        marginLeft: 5,
        marginRight: 5,
    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#0d0d0d',
        fontSize: 30,
        flex: 1,
        height: 180,
        backgroundColor: '#fff',
    },
    itemList: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: 5,
        paddingBottom: 5,
        paddingTop: 5,
    },
    itemContainer: {
        flex: 4.1,
        marginLeft: 5,
        justifyContent: 'center',
    },
    itemImage: {
        height: 80,
        width: 80,
        flex: 1,
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
    },
    itemTitle: {
        fontSize: 15,
        color: '#42a5cb',
        fontWeight: '700',
    },
});
