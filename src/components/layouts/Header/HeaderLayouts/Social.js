import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class extends Component {
    render() {
        return (
            <ul className="list-socials ">
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com">
                        <FontAwesomeIcon icon={["fab", "pinterest-p"]} size="2x"/>
                    </a>
                </li>
            </ul>
        )
    }
}