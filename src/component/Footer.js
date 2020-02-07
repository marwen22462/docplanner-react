import React from "react";

export default function Footer(props) {
  return (
    <div className='main-footer'>
      <div className='footer1'>
      <p>We are leaders in 10 countries</p>
      {props.footer.map((el, i) => (
        <a className='footer-links' href={el.href}>{el.name}</a>
      ))}
      </div>
      <p className='footer2'>
        This site uses cookies to deliver services in accordance with this
        Privacy Policy. You can specify the conditions for storing or accessing
        cookies on your browser.
      </p>
      <p className='footer3'>www.docplanner.com © 2020</p>
    </div>
  );
}
