import React from 'react';

export default class Header extends React.Component {

    render() {
        return <header>
            <nav className="navbar">
                <button type="button" className="navbar-toggle pull-left">
                    <span className="sr-only">Toggle Navigation</span>
                    <i className="material-icons">menu</i>
                </button>
            </nav>
        </header>;
    }
}
