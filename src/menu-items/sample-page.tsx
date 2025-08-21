// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';
// type
import { NavItemType } from 'types';

// assets
import { IconBrandChrome } from '@tabler/icons-react';

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const icons = {
  IconBrandChrome
};
const samplePage: NavItemType = {
  id: 'sample-page',
  title: <FormattedMessage id="courts-plan" />,
  icon: icons.IconBrandChrome,
  type: 'group',
  url: '/factor'
};

export default samplePage;
