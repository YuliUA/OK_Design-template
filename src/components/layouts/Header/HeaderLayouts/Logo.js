import React, {Component} from 'react'
import logo from '../../../../content/img/logo.jpg'

export default class extends Component{
    render(){
        return(
            <div className="container text-center m-auto" id="logo">
				<a className=" " href="#logo">
					<img src={logo} alt="logo"/>
				</a>
		    </div>
        )
    }
}