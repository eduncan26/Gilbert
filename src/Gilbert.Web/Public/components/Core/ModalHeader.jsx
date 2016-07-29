import Header from './Header';

export default class ModalHeader extends Header {

    /** @override */
    handleClick(event) {
        event.preventDefault();
        this.props.closeModal();
    }
}