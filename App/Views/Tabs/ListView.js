import React, {Component, View, Text, ScrollView, StyleSheet, Platform} from 'react-native';
import JSONUtils from '../../Utils/JSONUtils';

const styles = StyleSheet.create({
    title: {
        alignSelf: 'flex-start',
        fontSize: 18,
        color: '#555',
        fontWeight: 'bold',
        marginBottom: 5
    },
    condensed: {
        fontFamily: Platform.OS === 'android' ? 'sans-serif-condensed' : 'HelveticaNeue-CondensedBold'
    },
    rowData: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    rowDataTitle: {
        fontSize: 15,
        color: 'black',
        flex: 1,
        textAlign: 'center'
    },
    card: {
        flex: 1,
        marginBottom: 10,
        elevation: 1,
        borderWidth: 1,
        borderColor: '#FFF',
        shadowColor: '#999',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 0
        },
        padding: 5,
    }
});

class ListView extends Component {
    constructor() {
        super();
        this.state = {
            rivers: []
        }
    }
    componentWillReceiveProps(nextProps) {
        let rivers = JSONUtils.transform(nextProps.data);
        this.setState({rivers});
    }
    render() {
        return  (
            <ScrollView style={{flex: 1, flexWrap: 'wrap', height: 500}}>
                <View style={{flex: 1}}>
                {
                    this.state.rivers.map((r, i) => {
                         return (
                             <View key={i} style={styles.card}>
                                <Text style={[styles.title, styles.condensed]}>{r.name}</Text>
                                {
                                    r.data.map((d, j) => {
                                        return (
                                            <View key={j} style={styles.rowData}>
                                                <Text style={styles.condensed}>Year</Text>
                                                <Text style={[styles.rowDataTitle, {flex: 1, textAlign:'center'}]}>{d.year}</Text>

                                                <Text style={styles.condensed}>Nb. trolleys</Text>
                                                <Text style={[styles.rowDataTitle, {flex: 1, textAlign:'center'}]}>{d.number_of_trolleys}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                         )
                    })
                }
                </View>
            </ScrollView>

        );
    }
}

export default ListView;