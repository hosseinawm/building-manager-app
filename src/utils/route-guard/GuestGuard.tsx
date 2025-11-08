'use client';

import Loader from 'components/ui-component/Loader';
import { DASHBOARD_PATH } from 'config';
// project imports
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// types
import { GuardProps } from 'types';

// ==============================|| GUEST GUARD ||============================== //

/**
 * Guest guard for routes having no auth required
 * @param {PropTypes.node} children children element/node
 */

const GuestGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push(DASHBOARD_PATH);
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  if (isLoggedIn) return <Loader />;

  return children;
};

export default GuestGuard;
