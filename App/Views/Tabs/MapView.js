import React, {Component, View, Text, Image, StyleSheet, Picker} from 'react-native';
import MapView from 'react-native-maps';
import ModalPicker from 'react-native-modal-picker'

import JSONUtils from '../../Utils/JSONUtils';

class TrolleyMapView extends Component {
    constructor() {
        super();
        this.state = {
            points: [],
            years: [],
            yearSelected: 0
        }
    }
    componentWillReceiveProps(nextProps) {
        let rivers = JSONUtils.transform(nextProps.data);
        let years = rivers[0].data.map(row => row.year);

        this.setState({years, yearSelected: years[0]});
        rivers.map(river => {
            fetch('https://maps.googleapis.com/maps/api/geocode/json?address=River '+ river.name+', UK')
                .then(res => res.json(), err => err)
                .then(res => {
                if (res.results && res.results.length) {
                    this.setState(
                        {
                            points: [
                                ...this.state.points,
                                {
                                    data: river.data,
                                    river: river,
                                    coordinate: {
                                        latitude: res.results[0].geometry.location.lat,
                                        longitude: res.results[0].geometry.location.lng
                                    }
                                }]
                        }
                    )
                }
            });
        });

    }
    render() {
        let points = this.state.points.map(p => {
            let data = p.data.filter(d => d.year === this.state.yearSelected);
            let nbTrolleys = data.length ? data[0].number_of_trolleys: 'N/A';
            return {...p, title: `${p.river.name}: ${nbTrolleys} trolley(s)`}
        });
        let years = this.state.years.map((y,i) => {
            return {key: i, label: y}
        });
        return  (
            <View>
                <View>
                    <ModalPicker
                        data={years}
                        initValue="Select a year"
                        onChange={(year) => this.setState({yearSelected: year.label})}
                    />
                </View>
                <MapView
                    style={{flex: 1, flexDirection: 'row', height: 500}}
                    initialRegion={{
                      latitude: 52.0756986,
                      longitude: -2.093136,
                      latitudeDelta: 2.022,
                      longitudeDelta: 0.0421,
                }}>
                    {points.map((marker, k) => (
                        <MapView.Marker
                            coordinate={marker.coordinate}
                            key={k}
                            title={marker.title}
                        />
                    ))}
                </MapView>
            </View>
        );
    }
}

export default TrolleyMapView;