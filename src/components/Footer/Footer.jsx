import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Contact Us</h6>
    <a className="link link-hover">Phone:0198292929</a>
    <a className="link link-hover">Email: soil@gmail.com</a>
    <a className="link link-hover">Address: Road-10, House-10,Sector-10,Uttara,Dhaka</a>
  </nav>
  <nav>
    <h6 className="footer-title">Book Category</h6>
    <a className="link link-hover">Fiction</a>
    <a className="link link-hover">History</a>
    <a className="link link-hover">Science</a>
    <a className="link link-hover">Drama</a>
  </nav>
  <nav>
    <h6 className="footer-title">Discover</h6>
    <Link to='/'><a className="link link-hover">Home</a></Link>
    <a className="link link-hover">Books</a>
    <a className="link link-hover">Collections</a>
  </nav>
</footer>
    );
};

export default Footer;