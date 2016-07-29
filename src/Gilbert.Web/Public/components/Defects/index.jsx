import React from 'react';
import FloatingActionButton from '../Core/FloatingActionButton';
import AddDefectModal from './AddDefectModal';

export default class Defects extends React.Component {
    constructor() {
        super();

        this.state = {
            isModalOpen: false
        };
    }

    openModal() {
        updateModalState.call(this, true);
    }

    closeModal() {
        updateModalState.call(this, false);
    }

    afterModalOpen() {
        console.log('do something');
    }

    render() {
        return (
            <div>
                Defects!
                <FloatingActionButton itemName="Defect" onClickHandler={this.openModal.bind(this)} />
                <AddDefectModal
                    isOpen={this.state.isModalOpen}
                    afterOpenHandler={this.afterModalOpen.bind(this)}
                    onOpenHandler={this.openModal.bind(this)}
                    onCloseHandler={this.closeModal.bind(this)}
                />
            </div>
        );
    }
}

function updateModalState(isModalOpen) {
    this.setState({ isModalOpen });
}