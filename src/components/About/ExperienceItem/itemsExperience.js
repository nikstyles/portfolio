import { nanoid } from 'nanoid';
import dniprom from '../../../images/logo_dniprom.svg';
import polikam from '../../../images/logo_polikam.png';

const items = [
  {
    id: nanoid(),
    logoCompany: dniprom,
    title: 'Graphic Designer',
    timePeriod: '01.2019 - 01.2022',
    text: `Creation of design of leaflets, catalogues. Construction tool branding. Package design. 3D modeling of
        accessories (Cinema 4d). Photo retouching. Rebranding from TM Foresta to
        Dnipro-M of such a number of units. Website banner. Merch (cups,
        t-shirts, paper clips...) Layout of instructions.`,
  },
  {
    id: nanoid(),
    logoCompany: polikam,
    title: 'Graphic Designer',
    timePeriod: '03.2018 - 08.2018',
    text: `Creation or resize of graphic layouts. Designing sales points 
        according to the brand book. Layout of presentations. There was an 
        opportunity to cooperate with such brands as: NESCAFE, Nesquik, 
        Lion, Purina ONE, PRO PLAN, Gourmet, Friskies, Dog Chow, Nestle
        Fitness, Optimeal.`,
  },
];

export default items;
