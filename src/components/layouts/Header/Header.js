import React, { Component } from "react";
import { SocialContainer,Logo,Scroll, NavBar } from "./HeaderLayouts";

export default class extends Component {
  render() {
    return (
      <header>
        <SocialContainer />
        <Logo/>
        <Scroll/>
        <NavBar/>
      </header>
    );
  }
}
