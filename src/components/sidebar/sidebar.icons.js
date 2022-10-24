import {
  faHome,
  faList,
  faFire,
  faUserGear,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

export const SIDEBAR_ICONS = [
  {
    id: uuidv4(),
    tag: faHome,
    name: 'Home',
    nav: '/home',
  },
  {
    id: uuidv4(),
    tag: faFire,
    name: 'Trending',
    nav: '/trending',
  },
  {
    id: uuidv4(),
    tag: faList,
    name: 'My List',
    nav: '/mylist',
  },
  {
    id: uuidv4(),
    tag: faUserGear,
    name: 'User',
    nav: '/user',
  },
];

export const CHOICES_ICONS = [
  {
    id: 'edit',
    tag: faPenToSquare,
    name: 'Edit',
  },
  {
    id: 'delete',
    tag: faTrash,
    name: 'Delete',
  },
];
