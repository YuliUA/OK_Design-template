import React, { Component } from 'react'
import { menuItemTitle } from '../../../../store'

export default class extends Component {

   

    render() {
        return (
            <div className="container-nav">
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <nav id="nav-bar">
                    <ul>
                        {menuItemTitle.map((el) => {
                            return <li key={el.id}>
                                <a href={el.href} className="d-inline-block">{el.title}</a>
                            </li>
                        })}
                    </ul>
                </nav>
                <label htmlFor="nav-toggle">
                    <div className="nav-icon" >
                        <div className="nav-icon-x"></div>
                    </div>
                </label>



            </div>


        )
    }
}