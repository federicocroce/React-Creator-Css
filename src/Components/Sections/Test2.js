import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class className extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.clear();
        if (this.props.name.list.length == 0)
            this.props.fetchObjects();
    }

    render() {

        const props = this.props;

        return (
            <div>
                <div className='list-container'>
                    {props.name.list.length > 0 ? props.name.list.map((item, index) => { return <React.components.Post key={index} index={index} object={item} /> }) : null}
                </div>

                <React.components.Button className='primary-button' label='VOLVER' back />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchObjects() {
            React.actions.actionsPost.fetchObjects(dispatch)
        },
        clear() {
            dispatch(React.actions.actionsPost.clear());
        },
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(className));