import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import IncidentMarker from './IncidentMarker';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

class Map extends Component {
    render(){
        return(
            <IncidentMap
                data={this.props.data}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC5w20ZOrvAVFgJXqohNs5Spxdrb9y4ivw`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh`, width: `100vw` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

const IncidentMap = withScriptjs(withGoogleMap((props) => {
    const markers = props.data.map(incident => <IncidentMarker
                                                    location={ {lat: parseFloat(incident.latitude_x), lng: parseFloat(incident.longitude_x)} }
                                                    title={incident.incident_type_desc}
                                                /> );

    return(
        <GoogleMap
            defaultZoom={12}
            center={ {lat:39.1031, lng:-84.5120} }
        >
            {markers}
        </GoogleMap>
    );
}));

export default Map;