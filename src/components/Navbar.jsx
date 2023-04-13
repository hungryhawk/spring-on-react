import React, { useState } from 'react';
import navMenu from '../utils/navMenu.js';

function Navbar() {
  const [show, setShow] = useState('');

  return (
    <>
      {navMenu.map((item, index) => (
        <>
          <div
            className="menu-item"
            key={index}
            onClick={() =>
              show !== item.title ? setShow(item.title) : setShow('')
            }
          >
            <span>{item.title}</span>
            <i className={item.menuItem.length > 0 ? 'down' : 'hide'}></i>
            <span
              className={`arrow ${show === item.title ? 'arrow-reverse' : ''}`}
            ></span>
            <ul className={item.menuItem.length > 0 ? 'dropdown' : 'hide'}>
              {item.menuItem.map((item, idn) => (
                <li key={idn} className="dropdown-item">
                  <a href="/" className="dropdown-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={show === item.title ? 'is-block' : 'hide'}>
            {item.menuItem.map((item) => (
              <a href="/" className="block-link">
                {item}
              </a>
            ))}
          </div>
        </>
      ))}
    </>
  );
}

export default Navbar;
