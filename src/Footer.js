import React from 'react';

function Footer() {
    return (
        <div className="footer-padding">
  <div className="footer">
    <p>Made by Paul August. &copy; {(new Date().getFullYear())} </p>
  </div>
</div>
    )
}

export default Footer;