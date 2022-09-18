import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import HomeNavigateView from './HomeNavigateView';

import PlaceListView from './PlaceListView';

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*导航栏*/}
                {/* <Text >123</Text> */}
                <HomeNavigateView />
                {/* <ScrollView> */}
                {/*头部的view*/}
                {/* <Text >123</Text> */}
        
                <PlaceListView />
                {/* </ScrollView> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

