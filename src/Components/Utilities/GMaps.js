/* global google */

import React from 'react';

import { setLocation } from '../../Actions/actionsCreator';

import { connect } from "react-redux";

var currentPlace = null;

function initAutocomplete(currentPlaceState) {
    // var map = new google.maps.Map($("#map"), {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    // var input = $("#pac-input");
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

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
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            currentPlace = {};

            place.address_components.map((place, index) => {
                var types = place.types[0];
                currentPlace.streetNumber = types == "street_number" ? place.long_name : currentPlace.streetNumber;
                currentPlace.route = types == "route" ? place.long_name : currentPlace.route;
                currentPlace.sublocality = types == "sublocality_level_1" ? place.long_name : currentPlace.sublocality;
                currentPlace.locality = types == "locality" ? place.short_name : currentPlace.locality;
                currentPlace.province = types == "administrative_area_level_1" ? place.long_name : currentPlace.province;
                currentPlace.country = types == "country" ? place.long_name : currentPlace.country;
                currentPlace.postalCode = types == "postal_code" ? place.long_name : currentPlace.postalCode;
            });

            currentPlaceState = currentPlace;

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);



    });

    var infoWindow = new google.maps.InfoWindow({ map: map });
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


class GMaps extends React.Component {


    componentDidMount() {
        initAutocomplete(this.props.currentPlace);

        // var place = currentPlace.map((object, index) =>
        //     <p key={index}> {JSON.stringify(object)} </p>
        // )
    }

    render() {

        // var a = this.props;

        return (
            <div style={{ height: `500px` }}>
                <h1> MAPA </h1>

                {currentPlace ? currentPlace.map((object, index) =>
                    <p key={index}> {JSON.stringify(object)} </p>
                ) : null
                }

                <div className="input-text-container">
                    <input id="pac-input" className="inputMaterial" type="text" required placeholder=" " />
                    <label>Search Box</label>
                    <hr />
                </div>
                {/*<input id="pac-input" className="controls" type="text" placeholder="Search Box" />*/}
                <div id="map"></div>
            </div>
        );
    }
}

/*
const GMaps = (props) => {

    props.componentDidMount();

    return (
        <div>
            <input id="pac-input" type="text" placeholder="Search Box" />
            <div id="map"></div>
        </div>
    );


}*/



const mapStateToProps = state => {
  return {
    currentPlace: state.maps.currentPlace
  };
}


const mapDispatchToProps = dispatch => {
  return {
    setLocation(currentPost, activePost) {
      dispatch(setLocation(currentPost));
    }
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GMaps);

// export default GMaps;

