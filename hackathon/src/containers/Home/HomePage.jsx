import {UseMedia} from 'hooks/useMedia';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Logo, LogoSectionAbout} from '../../components/About/index.jsx';
import {Accordion} from '../../components/Accordian/index.jsx';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import {Myinfo} from '../../components/Landing/index.jsx';
import {FirstPrize, PrizeHeading} from '../../components/Prizes/index.jsx';
import {Rules, RuleHeading} from '../../components/Rules/index.jsx';
import {Tracks, TrackHeading} from '../../components/Tracks/index.jsx';
import Media from '../../components/Socials/index.jsx';
import {
  Sponsor,
  SponsorsHead,
  SponsorUS,
  Sponsorbtn
} from '../../components/Sponsors/sponsors.jsx';
import {JoinTeam, Member} from '../../components/Team';
import {
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  Prizeinfo,
  Trackinfo,
  Tracksinfo,
  Rulesinfo,
  sponsorLogos,
  TeamInfo,
  TOP_SECTION
} from '../../Module/General';
import MyCalender from '../calender';
import './about.css';
import pattern from './assets/pattern4.png';


const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} />{' '}
        </Col>
      ))}
    </Row>
  );
};

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

// Track group
const TrackGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Tracks icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
};

//Rules group
const RulesGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Row key={i} className="" sm={12} lg={4} md={4}>
          <Rules content={s.content} />
        </Row>
      ))}
    </Row>
  );
};

// Prize group ending
const TeamMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={7}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={5}>
              <MyCalender />
            </Col>
          </Row>
          

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Tracks here ***** */}
        <Row className="tracksection" id="tracks">
          <TrackHeading type="Tracks" />
          {Trackinfo.map(TrackGroup)}
          {Tracksinfo.map(TrackGroup)}
        </Row>

        {/* ********Rules here ***** */}
        <Row className="rulesection" id="rules">
          <div class="sty">
          <RuleHeading type="Rules" />
          </div>  
          {Rulesinfo.map(RulesGroup)}
        </Row>
        {/* ********Rules ending here ***** */}

        <Row className="sponsorSection" id="">
          <Sponsorbtn />
        </Row>

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <div class="sty">
          <PrizeHeading type="Prize section" />
          </div>
          <p class="nw">To be disclosed...</p>
          
        </Row>
        {/* ********Prizes ending here ***** */}

        

        {/* ********Sponsors here  {sponsorLogos.map(SponsorGroup)} ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          
          <SponsorUS />
          
         
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}

        {/* ********Team here ***** */}
        <h1 id="team">Our Team</h1>
        
        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}

        {/* ********Judges here {JudgesInfo.map(TeamMembers)}***** */}

        <h1 id="team">Judges</h1>
        <p class="neww">To be disclosed..</p>
        
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
