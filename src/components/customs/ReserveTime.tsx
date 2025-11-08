import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Flex from 'ui-component/Flex';

import LoadingButton from '@mui/lab/LoadingButton';
import { Stack, Typography } from '@mui/material';

import UserAutocomplete from './UserAutocomplete';

const ReserveTime: React.FC<Props> = ({ closeModal, courtID }) => {
  // -------------  HOOKS -------------
  const [loading, setLoading] = React.useState(false);
  // -------------  FUNCTIONS -------------
  const handleClick = () => {
    setLoading(true);
    closeModal();
  };

  return (
    <Stack spacing={2}>
      <Typography textAlign="center" variant="h4">
        {courtID} - 11:00
      </Typography>
      <UserAutocomplete />
      <Flex spacing={2}>
        <LoadingButton
          variant="outlined"
          color="success"
          onClick={handleClick}
          loading={loading}
          // disabled
        >
          <FormattedMessage id="book" />
        </LoadingButton>
      </Flex>
    </Stack>
  );
};

type Props = {
  closeModal: () => void;
  courtID: number;
};
export default ReserveTime;
