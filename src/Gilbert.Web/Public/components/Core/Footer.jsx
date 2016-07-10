import React from 'react';
import App from '../../constants/Application';

export default class Footer extends React.Component {

    get currentYear() {
        const date = new Date();
        return date.getFullYear();
    }

    render() {
        return <footer>
            <span className="copyright">&copy; {this.currentYear} {App.Name}</span>
        </footer>;
    }
}
