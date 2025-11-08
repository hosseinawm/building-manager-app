// types
import { NavItemType } from 'types';

// menu import
import panelPage from './panelPage';
import pages from './pages';
import other from './other';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [panelPage, pages, other]
};

export default menuItems;
