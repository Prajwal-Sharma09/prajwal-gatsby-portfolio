import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Prajwal  Sharma', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Prajwal Sharma.',
  subtitle: 'I am a Web Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'My name is Prajwal Sharma. I am 22 yrs old Web Developer. I am highly passionate developer who loves coding, software engineering and the web platform. ',
  paragraphTwo:
    "I've proficient understanding of front-end technologies, including HTML5, CSS3, JavaScript with strong proficiency in JavaScript ES6, including DOM manipulation and the JavaScript object model. I've good understanding of React.js, React Hooks, State Management and it's ecosystem along with experience building user interfaces for websites and web applications. I'm familiar with RESTful APIs along with SQL and NoSQL databases. I've knowledge of code versioning tools, such as Git and also have decent understanding with popular React.js workflows with Redux.",
  paragraphThree:
    'Apart from coding and web development, I love Football, Snooker and Trekking and other fun extra curricular activities.',
  resume: `{pdf}`,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'react-ecommerce.png',
    title: 'React E-commerce Design',
    info: 'UI design of an ecommerce application using react.js',

    url: 'https://react-ecommerce-design.netlify.app/',
    repo: 'https://github.com/Prajwal-Sharma09/react-ecommerce-design', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-ui-design.png',
    title: 'React UI Design',
    info: 'Complete responsive website design using styled-components and react.js',

    url: 'https://react-ui-design.netlify.app/',
    repo: 'https://github.com/Prajwal-Sharma09/react-ui-design', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-admin-dashboard.png',
    title: 'React Admin Dashboard',
    info: 'Functional Admin dashboard created using react css and react-components',

    url: 'https://admindashboardreact.netlify.app/',
    repo: 'https://github.com/Prajwal-Sharma09/react-admin-dashboard', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'syangjasandesh.png',
    title: 'Syangja Sandesh',
    info: 'News portal for our personal business build with wordpress.',

    url: 'https://syangjasandesh.com/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'prajwalsharmawqu09@gmail.com',
  btn: 'PING ME!',
  email: 'prajwalsharmawqu09@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/prajwal.sharma.750/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/prajwal_sharma09/?hl=en',
    },

    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Prajwal-Sharma09',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
