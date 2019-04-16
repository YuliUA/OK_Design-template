import React, { Component } from 'react'
import Social from '../../Header/HeaderLayouts/Social'
import {contacts} from '../../../../store'

export default class extends Component {
    render() {
        return (
            <section className="contacts-container" id="contacts">
                <h4 className="section-title">Контакти</h4>
                <ul className="list-contact">
                    {contacts.map((el)=>{
                        return (
                            <li key={el}><a href={el}>{el}</a></li>
                        )
                    })}
                </ul>
                <div className="social-container">
                    <Social />
                </div>
                <div className="form-connect">
                    <form method="" >
                        <div className="row m-0">
                            <div className="form-group col-sm-6">
                                <input type="text" className="form-control rounded-0 border-top-0 border-left-0 border-right-0" name="username" id="name" placeholder="ВАШЕ ІМ'Я" autoComplete="off" />
                            </div>
                            <div className="form-group col-sm-6">
                                <input type="email" className="form-control rounded-0 border-top-0 border-left-0 border-right-0" name="useremail" id="email" placeholder="ВАШ EMAIL" required="" />
                            </div>
                            <div className="form-group col-sm-12">
                                <textarea className="form-control rounded-0 border-top-0 border-left-0 border-right-0" rows="5" name="ask" placeholder="ПОВІДОМЛЕННЯ" required=""></textarea>
                            </div>
                            <div className="send-button col-12">
                                <button type="submit" className="btn text-uppercase border-0 d-block text-center m-auto"><span>Надіслати</span></button>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
        )
    }
}