/* global google */

import React from 'react';

import { initGMaps } from '../../../Actions/actionsCreator';
import KeyValue from '../KeyValue';
import GMaps from './GMaps';

import { connect } from "react-redux";

import $ from 'jquery-lite'

var currentPlace = null;

// const initAutocomplete = (mapElement, searchBox) => {
//     // var map = new google.maps.Map($("#map"), {
//     var map = new google.maps.Map(mapElement, {
//         center: { lat: -33.8688, lng: 151.2195 },
//         zoom: 13,
//         mapTypeId: 'roadmap'
//     });

//     return map;

//     // Create the search box and link it to the UI element.
//     // var input = $("#pac-input");


//     // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

//     // Bias the SearchBox results towards current map's viewport.
//     // map.addListener('bounds_changed', function () {
//     //     searchBox.setBounds(map.getBounds());
//     // });


//     // Listen for the event fired when the user selects a prediction and retrieve
//     // more details for that place.

// };


// const setCurrentPosition = (map, markers, infoWindow) => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };

//             var icon = {
//                 url: pos.icon,
//                 size: new google.maps.Size(71, 71),
//                 origin: new google.maps.Point(0, 0),
//                 anchor: new google.maps.Point(17, 34),
//                 scaledSize: new google.maps.Size(25, 25)
//             };

//             infoWindow.setPosition(pos);

//             infoWindow.setContent('Location found.');

//             markers.push(new google.maps.Marker({
//                 map: map,
//                 icon: icon,
//                 title: pos.name,
//                 position: pos
//             }));

//             map.setCenter(pos);
//         }, function () {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }


// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'Error: The Geolocation service failed.' :
//         'Error: Your browser doesn\'t support geolocation.');
// }


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

const addListener = (props, searchBox, mapElement, markers) => {
    // searchBox.addListener('places_changed', function (currentPlaceState) {
    var places = searchBox.getPlaces();
    // var markers = [];

    if (places.length == 0) {
        return;
    }

    // Clear out the old markers.
    markers.forEach(function (marker) {
        marker.setMap(null);
    });
    // props.gMapsElements.markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
        if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
        }
        var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.

        markers.push(new google.maps.Marker({
            map: mapElement,
            icon: icon,
            title: place.name,
            position: place.geometry.location
        }));

        currentPlace = {};
        // console.log(place.address_components);
        place.address_components.map((place, index) => {
            var types = place.types[0];

            switch (types) {
                case 'street_number':
                    currentPlace.streetNumber = {
                        key: 'Número: ',
                        value: place.long_name
                    }
                    // currentPlace.streetNumber = place.long_name;
                    break;
                case 'route':
                    currentPlace.route = {
                        key: 'Dirección: ',
                        value: place.long_name
                    }
                    // currentPlace.route = place.long_name;
                    break;
                case 'sublocality_level_1':
                    currentPlace.sublocality = {
                        key: 'Zona: ',
                        value: place.long_name
                    }
                    // currentPlace.sublocality = place.long_name;
                    break;
                case 'locality':
                    currentPlace.locality = {
                        key: 'Localidad: ',
                        value: place.short_name
                    }
                    // currentPlace.locality = place.short_name;
                    break;
                case 'administrative_area_level_1':
                    currentPlace.province = {
                        key: 'Provincia: ',
                        value: place.short_name
                    }
                    // currentPlace.province = place.long_name;
                    break;
                case 'country':
                    currentPlace.country = {
                        key: 'País: ',
                        value: place.long_name
                    }
                    // currentPlace.country = place.long_name;
                    break;
                case 'postal_code':
                    currentPlace.postalCode = {
                        key: 'Código Postal: ',
                        value: place.long_name
                    }
                    // currentPlace.postalCode = place.long_name;
                    break;

                default:
                    return currentPlace
            }
        });

        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
    });
    mapElement.fitBounds(bounds);

    var gMapsElements = {
        currentPlace,
        markers,
        map: mapElement
    }
    // gMapsElements gMapsElements.markers

    props.initGMaps(gMapsElements);

};



class GMapsSechBoxAnda extends React.Component {


    componentDidMount() {

        var mapElement = document.getElementById('map');
        var input = document.getElementById('pac-input');
        var markers = [];

        var map = initAutocomplete(mapElement);

        var infoWindow = new google.maps.InfoWindow({ map: map });
        var searchBox = new google.maps.places.SearchBox(input);

        // setCurrentPosition(map, markers, infoWindow);
        searchBox.addListener('places_changed', addListener.bind(null, this.props, searchBox, map, markers));
    }

    render() {

        // var a = this.props;

        return (

            <div style={{ height: `500px` }}>
                {/*<KeyValue dataKeyValue={this.props.gMapsElements.currentPlace} />*/}
                <div>

                    <KeyValue dataKeyValue={this.props.gMapsElements.currentPlace} />

                    <div>
                        <div className="input-text-container">
                            <input id="pac-input" className="inputMaterial" type="text" required placeholder=" " />
                            <label>Search Box</label>
                            <hr />
                        </div>
                    </div>
                </div>
                <div id="map"></div>
            </div>


        );
    }
}


const mapStateToProps = state => {
    return {
        gMapsElements: state.maps.gMapsElements
    };
}


const mapDispatchToProps = dispatch => {
    return {
        initGMaps(gMapsElements) {
            dispatch(initGMaps(gMapsElements));
        }
    };
}

// initGMaps(gMapsElements) {
//             dispatch(initGMaps(gMapsElements));
//         }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GMapsSechBoxAnda);

// export default GMapsSechBoxAnda;

