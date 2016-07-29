import React from 'react';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ReactModal {...this.props}>
                {this.props.children}
            </ReactModal>
        );
    }
}
