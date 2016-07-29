import React from 'react';
import Header from './Core/LayoutHeader';
import Sidebar from './Core/Sidebar';

const headerProps = {
    navClass: 'navbar',
    toggleButtonClass: 'navbar-toggle pull-left',
    toggleButtonIcon: 'menu',
    ariaActionName: 'Open Sidebar'
};

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            isSidebarOpen: false
        };
    }

    onRouteChanged() {
        this.handleMenuClick.bind(this);
    }

    handleMenuClick() {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
    }

    forceMenuClosed() {
        this.setState({ isSidebarOpen: false });
    }

    keydownHandler(e) {

        if (e.key === 'Escape' && this.state.isSidebarOpen)
            this.forceMenuClosed();
    }

    render() {
        const sidebarState = () => {
            return this.state.isSidebarOpen;
        };

        return <div onKeyDown={(e) => this.keydownHandler(e)} >
            <Header {...headerProps} toggleSidebar={this.handleMenuClick.bind(this)} isOpen={sidebarState} />
            <Sidebar toggleSidebar={this.handleMenuClick.bind(this)} isOpen={sidebarState}  />
            <main>{this.props.children}</main>
        </div>;
            }
}
