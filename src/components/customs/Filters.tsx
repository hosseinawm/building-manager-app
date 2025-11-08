import React from 'react';
import { useIntl } from 'react-intl';

import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import UserAutocomplete from './UserAutocomplete';

const Filters: React.FC<Props> = () => {
  const [value, setValue] = React.useState('female');
  const intl = useIntl();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <RadioGroup value={value} onChange={handleChange} row>
        <FormControlLabel label={intl.formatMessage({ id: 'empties' })} control={<Radio />} value="empty" />
        <FormControlLabel label={intl.formatMessage({ id: 'booked' })} control={<Radio />} value="booked" />
      </RadioGroup>
      <Box>
        <UserAutocomplete readonly />
      </Box>
    </>
  );
};
type Props = {};
export default Filters;
