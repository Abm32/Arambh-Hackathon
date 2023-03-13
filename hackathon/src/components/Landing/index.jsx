import {SOCIALS, TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';
import CountdownTimer from './countdown';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
      <CountdownTimer
        targetDate={new Date('2023-04-01T10:30:00.999Z')}
        onExpire={() => console.log('Countdown expired!')}
        intervalDelay={1000}
      />
    </div>
    
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      
      <div className="buttom-group">
        

        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn
            class="register"
            type="Register "
            overlay="Hackers registration"
          />
        </a>
      </div>
    </div>
  );
};


export {Btn, Myinfo};
