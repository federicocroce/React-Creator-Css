/* global google */

import React from 'react';

// import { setCurrentPlace } from '../../../Actions/actionsCreator';
import { initGMaps } from '../../../Actions/actionsCreator';
import KeyValue from '../KeyValue';
import GMapsSechBox from './GMapsSechBox';

import { connect } from "react-redux";

import $ from 'jquery-lite'

var currentPlace = null;

const initAutocomplete = (mapElement) => {
    // var map = new google.maps.Map($("#map"), {
    var map = new google.maps.Map(mapElement, {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        mapTypeId: 'roadmap'
    });

    return map;

    // Create the search box and link it to the UI element.
    // var input = $("#pac-input");


    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    // map.addListener('bounds_changed', function () {
    //     searchBox.setBounds(map.getBounds());
    // });


    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.

};


const setCurrentPosition = (map, markers, infoWindow) => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var icon = {
                url: pos.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            infoWindow.setPosition(pos);

            infoWindow.setContent('Location found.');

            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: pos.name,
                position: pos
            }));

            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}


const renderSerchBox = () => {
    return <GMapsSechBox/>
}


class GMaps extends React.Component {


    componentDidMount() {

        var gMapsElements = {};

        var mapElement = document.getElementById('map');
        // var input = document.getElementById('pac-input');
        gMapsElements.markers = [];

        gMapsElements.map = initAutocomplete(mapElement);

        gMapsElements.infoWindow = new google.maps.InfoWindow({ map: gMapsElements.map });

        // setCurrentPosition(gMapsElements.map, gMapsElements.markers, gMapsElements.infoWindow);
        
        this.props.initGMaps(gMapsElements);
    }

    render() {


        return (
            <div style={{ height: `500px` }}>
                {renderSerchBox()}
                <div id="map"></div>
            </div>
        );
    }
}


// const mapStateToProps = state => {
//     return {
//         gMaps: state.maps
//     };
// }


const mapDispatchToProps = dispatch => {
    return {
        initGMaps(gMapsElements) {
            dispatch(initGMaps(gMapsElements));
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(GMaps);

// export default GMaps;

