import React, { Component } from 'react'
import ImgCard from './ImgCard'
import { imgSrc } from '../../../../store'

export default class extends Component {

    render() {
        return (
            <div className="grid" id="portfolio">
                {
                    imgSrc.map((el) => {
                        return <ImgCard src={el.src} key={el.id}/>
                    })
                }
            </div>
        )
    }
}