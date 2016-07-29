import React from 'react';
import App from '../../constants/Application';
import DateService from '../../services/DateService';

let _dateService

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        _dateService = new DateService();
    }

    render() {
        return <footer>
            <span className="copyright">&copy; {_dateService.currentYear} {App.HoldingCompany}</span>
        </footer>;
    }
}
