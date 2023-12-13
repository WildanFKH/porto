import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Wildan</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer_link">Testimonials</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/brecilient.property" className="footer_social-link" target="_blank"><i className="bx bxl-instagram"></i></a>
                <a href="https://wa.me/message/2W3KJ7F7G3FTM1" className="footer_social-link" target="_blank"><i className="bx bxl-whatsapp"></i></a>
                <a href="https://www.linkedin.com/in/wildan-faizul-khanafi-02865121b?" className="footer_social-link" target="_blank"><i className="bx bxl-linkedin"></i></a>
            </div>

            <span className="footer_copy">&#169; WildanKhanafi. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer