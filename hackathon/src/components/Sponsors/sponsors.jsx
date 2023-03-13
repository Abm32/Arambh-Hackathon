import {TOP_SECTION} from '../../Module/General';
import {Btn} from '../Landing/index.jsx';
import './sponsors.scss';

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="Arambh Hackathon"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>To be disclosed... </h3>
      <a href={TOP_SECTION.JUDGES_FORM_LINK}>
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Fill the form" />
      </a>{' '}
    </div>
  );
}

function Sponsorbtn() {
  return (
    <div className="joinT sponsorUS">
        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          <Btn className="sponsor_btn" type="Register" overlay="Fill the form" />
        </a>{' '}
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS, Sponsorbtn};
