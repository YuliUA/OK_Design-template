import React, { Component } from 'react';
import {mainPhoto} from '../../../../store'

export default class extends Component {
    render() {
        return (
            <div className="main-photo">
                <img  src={mainPhoto} className="" alt="interior"/>
            </div>
        )
    }
}