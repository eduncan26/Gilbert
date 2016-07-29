import Header from './Header';

export default class LayoutHeader extends Header {

    /** @override */
    handleClick(event) {
        event.preventDefault();
        this.props.toggleSidebar();
    }
}
