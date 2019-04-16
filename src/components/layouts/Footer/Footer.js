import React, { Component } from 'react';
import {contacts} from '../../../store'

export default class extends Component {
    render() {
        return (
            <footer id="footer" className="mt-5">
                <div className="container text-center">
                    <p className="mb-0">© IT Tech. 2019</p>
                    <p className="mb-0">
                       {contacts.filter((index)=>{
                           return contacts.indexOf(index) !== 0
                       }).map((el)=><a href={el} key={el}>{el}</a>)}
                    </p>
                </div>
            </footer>
        )
    }
}