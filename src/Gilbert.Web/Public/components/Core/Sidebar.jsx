import React from 'react';
import { Link } from 'react-router';
import AppSettings from '../../constants/Application';
import ToggleButton from './SidebarToggleButton';
import Footer from './Footer';

function toggleMenu(event, isForced) {
    if (isForced) {
        this.props.toggleSidebar();
    }

    const tag = event.target.tagName;
    const isBackButton = tag === 'BUTTON' || tag === 'I';
    const isBackdrop = event.target.id === 'backdrop' && event.target.className === 'on';

    if (isBackButton || isBackdrop) {
        this.props.toggleSidebar();
    }
}

export default class Sidebar extends React.Component {
    constructor() {
        super();
    }

    get isOnClass() {
        return this.props.isOpen() ? 'on' : '';
    }

    handleClick(event) {
        toggleMenu.call(this, event);
    }

    closeMenu(event) {
        toggleMenu.call(this, event, true);
    }

    render() {
        return <div>
            <div id="backdrop" className={this.isOnClass} onClick={(e) => this.handleClick(e)}/>
            <aside id="left-navigation" className={this.isOnClass}>
                <div id="left-navigation-heading">
                    <ToggleButton
                        onClickHandler={this.handleClick.bind(this)}
                        buttonId="left-navigation-close"
                        buttonClass="btn btn-link"
                        actionName="Close Sidebar"
                        iconName="arrow_back"
                    />
                    <h1>{AppSettings.Name}</h1>
                </div>
                <div id="left-navigation-links">
                    <ul>
                        <li><Link to="/" onClick={(e) => this.closeMenu(e)} >Dashboard</Link></li>
                        <li><Link to="/defects" onClick={(e) => this.closeMenu(e)}>Defects</Link></li>
                    </ul>
                </div>
                <Footer />
            </aside>
        </div>;
    }
}
