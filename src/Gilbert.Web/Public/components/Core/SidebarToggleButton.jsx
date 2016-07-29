import React from 'react';

export default class SidebarToggleButton extends React.Component {

    render() {
        return <button type="button" id={this.props.buttonId} className={this.props.buttonClass} onClick={(e) => this.props.onClickHandler(e)}>
            <span className="sr-only">{this.props.actionName}</span>
            <i className="material-icons">{this.props.iconName}</i>
        </button>;
    }
}
