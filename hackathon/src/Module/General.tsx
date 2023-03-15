import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Join Arambh Hackathon',
  Typed_effect: ['24 hours of creation', 'Win awesome prizes'],
  
  SHORT_DESCRIPTION:
    'Join us on 1-2 April 2023 for the Arambh Hackathon, where you can collaborate with other fellow hackers and engage in 24 hours of creation, innovation, and fun.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK:
    'https://forms.gle/WHNwvTqyF6K6JDjr8',
  HACKERS_REGISTRATION_FORM_LINK:
    '#home'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/iedc_cek/',
  eventwb: 'https://arambh.iedccek.com/',
  email: "mailto:Iedccek+hackathon@gmail.com",
  mailid: 'Iedccek+hackathon@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Arambh Hackathon?',
  LONG_DESCRIPTION:
    'Arambh Hackathon, taking place on April 1-2, 2023, invites hackers, artists, coders, designers, tech enthusiasts, creatives, and developers from all backgrounds to join and compete for exciting prizes while collaborating with fellow participants. The event will provide a unique opportunity to learn from one another and experiment with new technologies, and aims to create an inclusive and diverse community of attendees.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: '#'
  },
  JOIN_TEAM: {
    required: true,
    src: '#'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 4,
  year: 2023
};

const schedule = [
  {
    day: '1-4-2023',
    events: [
      {
        title: 'Arambh Hackathon',
        timings: 'Starts from 10.30 AM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '2-4-2023',
    events: [
      {
        title: 'Arambh Hackathon',
        timings: 'Ends at 10.30 AM',
        link: 'https://google.com'
      },
      
    ]
  },
  
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall Second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Third Second',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Beginner',
      content: 'Your project will qualify for this category if atleast 50% '
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Project with most creative designs will be UI/UX track'
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: 'Best Web App with Qoom',
      content: 'Must use qoom in your project to win this category'
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

const Trackinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-book"></i>,
      type: 'Education',
      content:
        ''
    },
    {
      icon: <i className=" second fas fa-4x fa-hand-holding-heart"></i>,
      type: 'Healthcare',
      content:
        ''
    },
  ],
];

const Tracksinfo = [
  [
    //Array 2
    {
      icon: <i className=" third fas fa-4x fa-cog"></i>,
      type: 'Productivity & Networking',
      content:
        ''
    },
    {
      icon: <i className=" fourth fas fa-4x fa-globe"></i>,
      type: 'Environment Sustainability',
      content:
        ''
    }
  ],
];

const Rulesinfo = [
  [
    //Array 1
    {
      
      content:
        '1. The team can consist of two to four members.'
    },
    {
    
      content:
        '2. Participants will be given a set of problem statements from which they are required to select one statement and build a hardware/software prototype.'
    },
    {

      content:
        '3. Hackaton will be conducted in two rounds where in the first round participants should submit an abstract on their product and for the second round the participants are required to submit their final product along with a presentation.'
    },
    {

      content:
        '4. Participants are required to submit the abstract within the first two hours and an evaluation will be conducted on every five hour gap.'
    },
    {

      content:
        '5. There will be no shortlisting since the participants are limited to twenty teams.'
    },
    {

      content:
        '6. Mentors will be assigned for participants.'
    },
    {

      content:
        '7. Participants should bring system and resources required for the hackathon.'
    },
    {

      content:
        '8. WiFi, power and accommodation facilities will be provided.'
    },
    {

      content:
        '9. what do I need to bring? A valid government-issued photo ID, laptop, phone, chargers etc.'
    },
    {

      content:
        '10. Any doubts? reach out to us at iedccek@gmail.com'
    },
  ],
  
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      name: 'Abhiram N J',
      role: 'Organizer',
      github: 'https://github.com/twilighty-abhi',
      linkedin: 'https://www.linkedin.com/in/abhiram-n-j/',
      img: me
    },
    {
      name: 'Anand S',
      role: 'Organizer',
      github: 'https://github.com/AnandSuresh02',
      linkedin: 'https://www.linkedin.com/in/anand-s-41311a235/',
      img: moon
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'Arambh Hackathon is open to all undergraduate students from all colleges.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 2 - 4 members in it at maximum."
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need to do is to fill our form above and we will get you through everything remaining.'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (Iedccek+hackathon@gmail.com) we would happy to help you.'
      },
      {
        label: 'I am a beginner. Can I still participate in the Hackathon?',
        content:
          'Yes, absolutely! Hackathons are great opportunities for beginners to learn new skills, collaborate with others, and gain practical experience in a supportive environment. Remember, the most important thing is to have fun, learn, and challenge yourself. Good luck!'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will recieveing Arambh swag!.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  Trackinfo,
  Tracksinfo,
  Rulesinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
