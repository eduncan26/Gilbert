import React from 'react';
import Modal from '../Core/Modal';
import Header from '../Core/ModalHeader';

const headerProps = {
    headerClass: 'modal-header',
    toggleButtonClass: 'modal-btn',
    toggleButtonIcon: 'close',
    ariaActionName: 'Cancel Adding ',
    callToAction: 'New Defect'
}

export default class AddDefectModal extends Modal {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                className="default-modal"
                overlayClassName="default-modal-backdrop"
                isOpen={this.props.isOpen}
                onAfterOpen={this.props.onAfterOpenHandler}
                onRequestClose={this.props.onCloseHandler}
            >
                <Header {...headerProps} closeModal={this.props.onCloseHandler} />
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="defect-title">Defect Description</label>
                        <input type="text" className="form-control" id="defect-title" placeholder="Description" />

                        <label htmlFor="defect-steps">Steps to Reproduce</label>
                        <textarea className="form-control" rows="5" id="defect-steps" />

                        <label from="defect-severity">Severity</label>
                        <select id="defect-severity" className="form-control" value="Severity">
                            <option value="critical">Critical</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </form>
            </Modal>
        );
    }
}
