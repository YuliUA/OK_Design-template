import React, { Component } from 'react'
import mePhoto from '../../../../content/img/me.jpg'

export default class extends Component {
    // state={
    //     showText: false
    // }

    // handleToggleText(e){
    //     e.preventDefault();
    //     this.setState({
    //         showText: !this.state.showText
    //     })
    // }
    render() {
        // let hidden ={
        //     display: this.state.showText? "inline": "none"
        // }
        // let shown ={
        //     display: this.state.showText? "none": "block"
        // }
        return (
            <section className="about-container" id="about">
                <h4 className="section-title">Про Мене</h4>
                <p className="about-content">
                    <img src={mePhoto} alt='Olha Koval' className="photo-owner"/>
                    Давайте знайомитись! <br/>Мене звуть Ольга, я люблю "дизайнити"- розробляти цікаві ідеї для приміщень, 
                    які несуть різні цілі, такі як робоча зона, відпочинок та розваги, дизайн для сім*ї. 
                    Навчалась у практикуючих дизайнерів та архітекторів Львова. Перші уроки та практичний 
                    досвід отримувала на об*єктах в процесах реалізації та розробки проектів майбутніх 
                    приватних будинків та громадських закладів.   Найчастіше займаюсь розробкою дизайну 
                    квартир, особистих кабінетів, індивідуальних зон для особистих та комерційних потреб.   
                    Кожна моя розробка несе якусь ідею, підходить до вподобань клієнта. 
                    Я ретельно працюю над концепцією і чітко з*ясовую  потреби замовника 
                    на стадії "знайомство".    Вам варто один раз мене побачити і почути. 
                    Запрошую Вас до розмови за чашкою кави. Я допоможу Вам знайти та реалізувати сміливі 
                    ідеї, які будуть Вам до душі. 
                    {/* <span id="dots" style={shown}><a href="" onClick={this.handleToggleText.bind(this)}>. . .</a></span>  */}
                    {/* <span id="more" style={hidden}>Class aptent taciti sociosqu ad litora torquent per conubia 
                    nostra, per inceptos himenaeos. Donec ut felis quis purus auctor congue nec elementum nisl. 
                    Suspendisse interdum quam vel ligula cursus vulputate. Aenean semper, mi eu iaculis fermentum, 
                    mauris libero finibus libero, eget semper felis urna in ante. Sed rhoncus ligula quis ipsum 
                    ultricies, a venenatis sem auctor. Aliquam vehicula bibendum dolor, ac euismod dui consequat quis. 
                    Morbi vel consectetur justo. Curabitur ullamcorper quam dui, id interdum diam dapibus et. Vestibulum 
                    malesuada suscipit semper. Maecenas sed condimentum arcu. Mauris dictum egestas erat, non tristique justo. 
                    Sed posuere feugiat massa sed sagittis. Curabitur nec ligula massa. Suspendisse sed pulvinar 
                    nibh. Etiam vitae felis ac ligula consectetur pellentesque. Nulla laoreet vestibulum 
                    leo elementum consequat.</span> */}
                </p>
            </section>

        )
    }
}