import React, { Component, Fragment } from "react";
import {Scroll} from '../Header/HeaderLayouts'
import { MainPhoto, MainNav, Portfolio, Contacts, About } from "./MainLayouts";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <MainPhoto />
        <MainNav />
        <Portfolio/>
        <Scroll/>
        <About />
        <Contacts />
      </Fragment>
    );
  }
}
