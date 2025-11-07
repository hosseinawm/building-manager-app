// third-party
import { FormattedMessage } from 'react-intl';
// types
import { NavItemType } from 'types';

// assets
import { IconHelp, IconSitemap, IconBriefcase } from '@tabler/icons-react';

// constant
const icons = {
  IconHelp,
  IconSitemap,
  IconBriefcase
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other: NavItemType = {
  id: 'sample-docs-roadmap',
  icon: IconHelp,
  type: 'group',
  children: [
    {
      id: 'documentation',
      title: <FormattedMessage id="documentation" />,
      type: 'item',
      url: '/documentation',
      icon: icons.IconBriefcase

      // external: true
      // target: true
    },
    {
      id: 'support',
      title: <FormattedMessage id="support" />,
      type: 'item',
      url: '/support',
      icon: icons.IconHelp,
      external: true
    }
  ]
};

export default other;
