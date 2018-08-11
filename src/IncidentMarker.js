import React, { Component } from 'react';
import { Marker } from "react-google-maps";

class IncidentMarker extends Component {
    render(){
        return (
            <Marker
                position={this.props.location}
                title={this.props.title}
            />
        )
    }
}

export default IncidentMarker;