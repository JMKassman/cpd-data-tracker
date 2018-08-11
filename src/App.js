import React, {Component} from 'react';
import './App.css';
import Map from './Map.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.getData()
            .catch(err => console.log(err))
            .then(() => console.log(this.state));
    }

    getData = async () => {
        const response = await fetch(
            "https://data.cincinnati-oh.gov/resource/cxea-umgx.json?$where=CREATE_TIME_INCIDENT > \"2018-01-01T00:00:00.000\" AND LATITUDE_X IS NOT NULL AND LONGITUDE_X IS NOT NULL AND INCIDENT_TYPE_DESC IS NOT NULL&$limit=1000&$order=CREATE_TIME_INCIDENT DESC",
            {
                headers: {
                    "X-App-Token": "fiVFmZER4onnuOjXihZIHgU74"
                }
            }
        );
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        this.setState({
            data: body
        });
    };

    render() {
        return (
            <div id="map">
                <Map data={this.state.data}/>
            </div>
        );
    }
}

export default App;
