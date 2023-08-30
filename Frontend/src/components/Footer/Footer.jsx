import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__addr">
        <h1 className="footer__logo">SnapTravel</h1>

        <h2>Contact</h2>

        <address>
          IACSD, Akurdi, Pune<br />

          <a className="footer__btn" href="mailto:snaptravel@gmail.com">Email Us</a>
        </address>
      </div>

      <ul className="footer__nav" style={{ textAlign: 'right' }}>


        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2023 SnapTravel. All rights reserved.</p>

        <div className="legal__links">
          <span></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
