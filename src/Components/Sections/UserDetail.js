import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {reset} from 'redux-form';

const UserDetail = props => {

    const user = props.object[Object.keys(props.object)[0]]; // Mapeo de objecto desde firebase

    return (
        <div onClick={() => {props.setSelected(props.object); props.resetForm();}}>
            <h1>{user.name}</h1>
        </div>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        setSelected(selected) {
            dispatch(React.actions.actionsUser.setSelected(selected))
        },
        resetForm() {
            dispatch(reset('User'));
        }
    };
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(UserDetail));