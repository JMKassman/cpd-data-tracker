import React, {Component} from 'react';
import './App.css';
import Map from './Map.js';
import flag from './Flag_of_Cincinnati,_Ohio.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.getData()
            .catch(err => console.log(err));
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
            <div className="App" id="grid-container">
                <header className="App-header">
                    <img src={flag} className="App-logo" alt="Flag of Cincinnati"/>
                    <h1 className="App-title">CPD Data Tracker</h1>
                </header>
                    <Map id="grid-map" data={this.state.data}/>
                    <p id="grid-sidebar"> Test</p>
            </div>
        );
    }
}

export default App;
