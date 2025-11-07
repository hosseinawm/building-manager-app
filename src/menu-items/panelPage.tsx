// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';
// type
import { NavItemType } from 'types';

// assets
import { IconHome, IconMenu } from '@tabler/icons-react';

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const icons = {
  IconHome,
  IconMenu
};
const panelPage: NavItemType = {
  id: 'panels',
  title: <FormattedMessage id="panels" />,
  type: 'group',
  children: [
    {
      id: 'buildings',
      title: <FormattedMessage id="panel" />,
      type: 'item',
      url: '/panel',
      icon: icons.IconHome
    },
    {
      id: 'manager-panel',
      title: <FormattedMessage id="manager-panel" />,
      type: 'item',
      url: '/manager',
      icon: icons.IconMenu
    }
  ]
};

export default panelPage;
