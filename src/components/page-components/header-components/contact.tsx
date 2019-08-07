import React, { Component } from "react";
import "../../component-styles/contact.css";
class Contact extends Component {
  render() {
    return (
      <div className="contactSection">
        <h1>Contact Us</h1>
        <p>
          Have a question? Need help? You can find us using information listed
          below.
        </p>
        <p>
          <b>Email</b>: stojanovic.lazar.lazar@gmail.com
        </p>
        <p>
          <b>Phone Number</b>: 0695035600
        </p>
        <p>
          <b>Adress</b>: Cara Lazara 9 <em>Leskovac</em>
        </p>
      </div>
    );
  }
}

export default Contact;
