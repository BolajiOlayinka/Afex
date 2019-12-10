import React, { Component } from 'react';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            title: "Farmers Loan Manager"
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Sidebar/>

                {/* <h2>{this.state.title}</h2> */}
            </div>
        )
    }
}
