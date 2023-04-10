import { nanoid } from 'nanoid';
import webStudio from '../../images/project_web-studio.jpg';
import phonebook from '../../images/project_phonebook.jpg';
import iceCream from '../../images/project_icecreame.jpg';
import filmoteka from '../../images/project_filmoteka.jpg';
import petly from '../../images/project_petly.jpg';

const items = [
  {
    id: nanoid(),
    toSite: 'https://petly-project.vercel.app/',
    toGithub: 'https://github.com/MaksymDziubanchuk/petly',
    text: 'Petly',
    tech: 'HTML, Sass-module, JS, React/Redux, Axios, Node.js, MongoDB, Swagger, GIT',
    image: petly,
  },
  {
    id: nanoid(),
    toSite: 'https://nikstyles.github.io/goit-react-hw-08-phonebook/',
    toGithub: 'https://github.com/nikstyles/goit-react-hw-08-phonebook',
    text: 'Phonebook',
    tech: 'HTML, CSS, JS, React/Redux, WEBPACK, Axios, GIT',
    image: phonebook,
  },
  {
    id: nanoid(),
    toSite: 'https://nadtosonna.github.io/js-team-project-4/',
    toGithub: 'https://github.com/nadtosonna/js-team-project-4/',
    text: 'Filmoteka',
    tech: 'HTML, SASS, BEM, JS, PARCEL, Axios, Firebase, GIT',
    image: filmoteka,
  },
  {
    id: nanoid(),
    toSite: 'https://mkundeev.github.io/team-project/',
    toGithub: 'https://github.com/mkundeev/team-project',
    text: 'IceCream',
    tech: 'HTML, SASS, JS, WEBPACK, BEM, GIT',
    image: iceCream,
  },
  {
    id: nanoid(),
    toSite: 'https://nikstyles.github.io/goit-markup-hw-08/',
    toGithub: 'https://github.com/nikstyles/goit-markup-hw-08/',
    text: 'WebStudio',
    tech: 'HTML, CSS, GIT',
    image: webStudio,
  },
];

export default items;
