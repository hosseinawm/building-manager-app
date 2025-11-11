// third-party
import { FormattedMessage } from 'react-intl';
import { NavItemType } from 'types';

// assets
import { IconUsers, IconBusinessplan, IconCreditCardPay, IconWallet } from '@tabler/icons-react';

// constant
const icons = {
  IconUsers,
  IconBusinessplan,
  IconCreditCardPay,
  IconWallet
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages: NavItemType = {
  id: 'managing',
  title: <FormattedMessage id="managing" />,
  // caption: <FormattedMessage id="pages-caption" />,
  type: 'group',
  children: [
    {
      id: 'residents-managing',
      title: <FormattedMessage id="residents" />,
      type: 'item',
      url: '/manager/residents',
      icon: icons.IconUsers
    },
    // {
    //   id: 'charges',
    //   title: <FormattedMessage id="charges" />,
    //   type: 'item', //=> collapse for menu
    //   url: '/manager/charges',
    //   icon: icons.IconBusinessplan
    // icon: icons.IconBug,
    // children: [
    //   {
    //     id: 'error',
    //     title: <FormattedMessage id="error-404" />,
    //     type: 'item',
    //     url: '/pages/maintenance/error',
    //     target: true
    //   },
    //   {
    //     id: 'coming-soon',
    //     title: <FormattedMessage id="coming-soon" />,
    //     type: 'collapse',
    //     children: [
    //       {
    //         id: 'coming-soon',
    //         title: (
    //           <>
    //             <FormattedMessage id="coming-soon" /> 02
    //           </>
    //         ),
    //         type: 'item',
    //         url: '/pages/maintenance/coming-soon/',
    //         target: true
    //       }
    //     ]
    //   },
    //   {
    //     id: 'under-construction',
    //     title: <FormattedMessage id="under-construction" />,
    //     type: 'item',
    //     url: '/pages/maintenance/under-construction',
    //     target: true
    //   }
    // ]
    // },
    {
      id: 'paid-list',
      title: <FormattedMessage id="paid-list" />,
      type: 'item',
      url: '/manager/costs',
      icon: icons.IconCreditCardPay
    },
    {
      id: 'income-list',
      title: <FormattedMessage id="income-list" />,
      type: 'item',
      url: '/manager/incomes',
      icon: icons.IconWallet
    }
  ]
};

export default pages;
