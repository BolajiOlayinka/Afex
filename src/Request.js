import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Request() {
    return (
        <div>
        <Header/>
        <Sidebar/>
        <div className="content-wrapper">
        Repayments ************ Incoming
        </div>
           
        </div>
    )
}
