import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class extends Component{
    render(){
        return(
            <div className="scroll-content text-center position-relative">
            	<a className="d-inline-block" href="#portfolio">
                    <FontAwesomeIcon icon={['fas','chevron-down']} size="2x"/>
                </a>
			</div>
        )
    }
}