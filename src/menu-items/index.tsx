// types
import { NavItemType } from 'types';

import other from './other';
import pages from './pages';
// menu import
import samplePage from './sample-page';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [samplePage, pages, other]
};

export default menuItems;
