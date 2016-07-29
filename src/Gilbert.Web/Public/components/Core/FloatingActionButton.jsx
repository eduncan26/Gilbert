import React from 'react';

export default class FloatingActionButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <button type="button" className="floating-action-btn" onClick={(e) => this.props.onClickHandler(e)}>
            <span className="sr-only">Add {this.props.itemName}</span>
            <i className="material-icons">add</i>
        </button>;
    }
}