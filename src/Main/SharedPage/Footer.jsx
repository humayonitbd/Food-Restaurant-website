// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from "../../assets/footer-logo.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="bg-[#000929]">
        <footer className="footer py-32 text-white w-11/12 mx-auto text-lg">
          <aside>
            <img src={logo} alt="" />
            <p>
              At ReservQ, we invite you to embark on a <br /> journey of taste and
              delight.Our tables are <br /> more than just places.
            </p>
          </aside>
          <nav>
            <header className="footer-title">Quick Link</header>
            <Link className="link link-hover">My Account</Link>
            <Link className="link link-hover">About Us</Link>
            <Link className="link link-hover">Store Locator</Link>
            <Link className="link link-hover">Delivery</Link>
            <Link className="link link-hover">Pickup</Link>
          </nav>
          <nav>
            <header className="footer-title">Terms & Privacy</header>
            <Link className="link link-hover">Trust & Safety</Link>
            <Link className="link link-hover">Terms of Service</Link>
            <Link className="link link-hover">Privacy Policy</Link>
          </nav>
          <nav>
            <header className="footer-title">Subscribe our Newsletter</header>

            <h4>We accept Payment methods:</h4>
          </nav>
        </footer>
        <div className="flex justify-center items-center text-[#b9c2d7] py-2 border-t-2 ">
          <p className="text-lg">©2024 ReservQ. All rights reserved</p>
        </div>
      </div>
    );
};

export default Footer;