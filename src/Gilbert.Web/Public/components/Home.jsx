import React from 'react';
import Header from './Core/Header';
import Footer from './Core/Footer';

export default class Home extends React.Component {

    render() {
        return <div>
            <Header />
            <div>Hello, Evan</div>
            <Footer />
        </div>;
    }
}
