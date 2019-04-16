import React,{Component} from 'react'
export default class extends Component{
    
    render(){
        return(
            <div className="image">
                <img src={this.props.src} className="res-image" alt="portfolio "/>
            </div>
	    )
    }
}