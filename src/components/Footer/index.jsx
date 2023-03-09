import { useEffect, useState } from 'react';
import { FOOTER, SOCIALS, TOP_SECTION } from '../../Module/General';
import { Btn } from '../Landing/index.jsx';
import cross from './assets/cross.svg';
import Insta from './assets/icons8-instagram.svg';
import Insta from './assets/icons8-instagram.svg';
import Mail from './assets/icons8-mail.svg';
import './style.scss';
import './style.scss';
const GithubTemplate = ({hideTemplate}) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          Join us to{' '}
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Gear Up</a>,
          where we will be hosting PUBLIC workshops, tech talks, panel
          discussions, and career sessions!
        </p>
      </div>
      <img alt="" onClick={hideTemplate} src={cross} />
    </div>
  );
};

const Footer = () => {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.eventwb}>
              <img src="data:image/png;base64,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"/>
            </a>
          </div>
        </div>
        <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Fill the form" />
          </a>
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
            </a>
          )}
        </div>
        <div className="footer_info">
          <p>
            Contact us{' '}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{' '}
          </p>

          
          <p>Made with ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
