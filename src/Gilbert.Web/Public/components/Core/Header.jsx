import React from 'react';
import ToggleButton from './SidebarToggleButton';

export default class Header extends React.Component {

    handleClick(event) {
        throw new Error('click event not handled');
    }

    render() {
        return <header className={this.props.headerClass}>
            <nav className={this.props.navClass}>
                <ToggleButton
                    onClickHandler={this.handleClick.bind(this)}
                    buttonClass={this.props.toggleButtonClass}
                    actionName={this.props.ariaActionName}
                    iconName={this.props.toggleButtonIcon}
                />
                <h1 className="header-call-to-action">{this.props.callToAction}</h1>
            </nav>
        </header>;
    }
}
