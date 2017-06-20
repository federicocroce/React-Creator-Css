import React from 'react';
import $ from 'jquery-lite'


import ReactTestUtils from 'react-dom/test-utils';

const generateKeyValue = (data) => {
    if ($.isEmptyObject(data)) return;
    return Object.keys(data).map((element, index) => {
        return (
            <div key={index}>
                <label>{data[element].key}</label>
                <label>{data[element].value}</label>
            </div>
        )
    })
};

const KeyValue = (props) => {

    return (
        <div className="value-key-location">
            {generateKeyValue(props.dataKeyValue)}
        </div>
    )
}


export default KeyValue;