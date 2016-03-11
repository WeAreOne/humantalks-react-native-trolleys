import React, {Component, View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';


import ListView from './Tabs/ListView';
import TrolleyMapView from './Tabs/MapView';
import DataService from '../Services/DataService';


class TabsView extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        DataService.all().then(data => this.setState({data}));
    }
    render() {
        return (
            <ScrollableTabView tabBarUnderlineColor="#e20026" tabBarActiveTextColor="#e20026">
                <ListView tabLabel="Liste" data={this.state.data}/>
                <TrolleyMapView tabLabel="Carte" data={this.state.data}/>
            </ScrollableTabView>
        )
    }
}

export default TabsView;