import React from 'react';
import { Link } from 'react-router-dom';
// import Clock from 'react-live-clock';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';
import Contact from '../Stats/Contact';
import strings from '../../static/language/strings';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <ul className="icons">
          {data.map(s => (
            <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
          ))}
        </ul>
      </header>
    </section>

    <section id="blurb">
      <Contact />
    </section>

    <section id="footer">
      <p><a href={strings.websiteGitRepo}>make your own web-site</a></p>
      <p className="copyright">&copy; {strings.name} <Link to="/">{strings.website}</Link>.</p>
    </section>
  </section>
);

export default Nav;
