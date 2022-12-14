import {
  faHome,
  faList,
  faFire,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

export const SIDEBAR_ICONS = [
  {
    id: uuidv4(),
    tag: faHome,
    name: 'Home',
    nav: '/home',
  },
  // {
  //   id: uuidv4(),
  //   tag: faFire,
  //   name: 'Trending',
  //   nav: '/trending',
  // },
  {
    id: uuidv4(),
    tag: faList,
    name: 'My List',
    nav: '/mylist',
  },
];
