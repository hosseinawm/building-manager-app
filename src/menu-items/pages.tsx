// third-party
import { FormattedMessage } from 'react-intl';
import { NavItemType } from 'types';

// assets
import { IconBug, IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,
  IconBug
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages: NavItemType = {
  id: 'pages',
  title: <FormattedMessage id="pages" />,
  caption: <FormattedMessage id="pages-caption" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'settings',
      title: <FormattedMessage id="settings" />,
      type: 'item',
      url: '/settings'
    },
    {
      id: 'maintenance',
      title: <FormattedMessage id="maintenance" />,
      type: 'collapse',
      icon: icons.IconBug,
      children: [
        {
          id: 'error',
          title: <FormattedMessage id="error-404" />,
          type: 'item',
          url: '/pages/maintenance/error',
          target: true
        },
        {
          id: 'coming-soon',
          title: <FormattedMessage id="coming-soon" />,
          type: 'collapse',
          children: [
            {
              id: 'coming-soon',
              title: (
                <>
                  <FormattedMessage id="coming-soon" /> 02
                </>
              ),
              type: 'item',
              url: '/pages/maintenance/coming-soon/',
              target: true
            }
          ]
        },
        {
          id: 'under-construction',
          title: <FormattedMessage id="under-construction" />,
          type: 'item',
          url: '/pages/maintenance/under-construction',
          target: true
        }
      ]
    }
  ]
};

export default pages;
