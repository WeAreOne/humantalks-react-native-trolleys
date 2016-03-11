import React, {Component, View, Text, Image, StyleSheet, Platform} from 'react-native';
import TabsView from './TabsView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    banner: {
        alignSelf: 'center'
    },
    title: {
        color: '#e20026',
        fontWeight: '200',
        fontSize: 23,
        textAlign: 'center',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : 'HelveticaNeue-Light'
    }
})

class AppView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../Assets/logo_200.png')} style={styles.banner}/>
                <Text style={styles.title}>Shopping Trolleys in UK Rivers</Text>
                <TabsView />
            </View>
        );
    }
}

export default AppView;