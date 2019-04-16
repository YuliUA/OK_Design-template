import React, { Component } from 'react';
import {menuPortfolioTitle} from '../../../../store'

export default class extends Component {
    render() {
        return (
            <div className="mt-5">
                <ul className="portfolio-menu">
                    {
                        menuPortfolioTitle.map((el)=>{
                            return(
                                <li className="portfolio-menu_item " key={el}>
                                    <a href="/" className="portfolio-menu_link">{el}</a>
                                </li>
                            )
                        })
                    }
                </ul>

                <hr />
            </div>
        )
    }
}