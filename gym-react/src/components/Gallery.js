import React from 'react';
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import './css.css';

const Gallery = () => {
  return (
    <div>
      <table className="gallery-table">
        <tr>
          <Menu />
          <td className="gallery-table-header">
            <table style={{ position: 'absolute', left: '15%' }}>
              <tr>
                <td>
                  <img className="galimg" src={a} alt="a" />
                </td>
                <td>
                  <img className="galimg" src={b} alt="b" />
                </td>
                <td>
                  <img className="galimg" src={c} alt="c" />
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <p className="check-out">
                    check <br />
                    out <br />
                    the <br />
                    cool <br />
                    css
                  </p>
                  <a href="gallery.zip" download>
                    Download our gallery
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

const Menu = () => (
  <td className="menu">
    <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
        <a href="gallery.html">Gallery</a>
        <br />
        <a href="register.html">Register</a>
        <br />
        <a href="staff.html">Our staff</a>
        <br />
        <a href="pricing.html">Pricing</a>
        <br />
        <a href="contact.html">Contact</a>
        <br />
      </div>
    </div>
  </td>
);

export default Gallery;
