import React, { Component, Fragment } from "react";
import { Header, Footer,Main } from "./layouts";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faInstagram, faPinterestP} from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebookF, faInstagram, faPinterestP, faChevronDown);

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main/>
        <Footer />
      </Fragment>
    );
  }
}
