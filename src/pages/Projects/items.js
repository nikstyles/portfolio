import { nanoid } from 'nanoid';
import webStudio from '../../images/project_web-studio.jpg';
import phonebook from '../../images/project_phonebook.jpg';

const items = [
  {
    id: nanoid(),
    toSite: 'https://nikstyles.github.io/goit-react-hw-08-phonebook/',
    toGithub: 'https://github.com/nikstyles/goit-react-hw-08-phonebook',
    text: 'Phonebook',
    tech: [],
    image: phonebook,
  },
  {
    id: nanoid(),
    toSite: 'https://nadtosonna.github.io/js-team-project-4/',
    toGithub: 'https://github.com/nadtosonna/js-team-project-4/',
    text: 'Filmoteka',
    tech: [],
    image: webStudio,
  },
  {
    id: nanoid(),
    toSite: 'https://mkundeev.github.io/team-project/',
    toGithub: 'https://github.com/mkundeev/team-project',
    text: 'IceCream',
    tech: [],
    image: webStudio,
  },
  {
    id: nanoid(),
    toSite: 'https://nikstyles.github.io/goit-markup-hw-08/',
    toGithub: 'https://github.com/nikstyles/goit-markup-hw-08/',
    text: 'WebStudio',
    tech: [],
    image: webStudio,
  },
];

export default items;
