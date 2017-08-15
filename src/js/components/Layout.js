import React from 'react';
import Header from './Header';
import Light from './Light';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.room_id = "0";
    }

    render() {
        return (
            <div>
                <Header />
                <hr/>
                <h2>Hello from room number {this.room_id}</h2>
                <Light />
            </div>
        );
    }
}