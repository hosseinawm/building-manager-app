import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Flex from 'ui-component/Flex';

import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { Box, ButtonGroup, IconButton, Typography } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const filter = createFilterOptions<TUserOptionType>();

const UserAutocomplete: React.FC<TUserAutocompleteProps> = ({ readonly = false }) => {
  // -------------  HOOKS -------------
  const intl = useIntl();
  const [open, toggleOpen] = React.useState(false);
  const [value, setValue] = React.useState<TUserOptionType | null>(null);

  // -------------  FUNCTIONS -------------
  const filterOptions = (options: TUserOptionType[], params: any) => {
    const filtered = filter(options, params);

    const { inputValue } = params;
    const isExisting = options.some((option) => inputValue === option.userId);
    if (inputValue !== '' && !isExisting && !readonly) {
      filtered.push({
        inputValue,

        username: `${intl.formatMessage({ id: 'add' })} "${inputValue}"`
      });
    }

    return filtered;
  };
  const handleOnChange = (_: any, newValue: string | TUserOptionType | null) => {
    console.log('newValue', newValue);
    if (typeof newValue === 'string') {
    } else if (newValue && newValue.userId) {
      setValue(newValue);
    } else {
      toggleOpen(true);
      setValue(null);
    }
  };
  const handleGetOptionLabel = (option: TUserOptionType | string) => {
    if (typeof option === 'string') {
      return option;
    }
    return `${option.username} - ${option.phoneNumber}`;
  };
  const handleRenderOption = (props: any, option: TUserOptionType) => {
    const { key, ...optionProps } = props;
    return (
      <li key={key} {...optionProps}>
        {option.username}-{option.phoneNumber}
      </li>
    );
  };

  // -------------  JSX -------------
  return (
    <>
      {open && !readonly ? (
        <CreateUser toggleOpen={toggleOpen} setValue={setValue} />
      ) : (
        <Autocomplete
          value={value}
          onChange={handleOnChange}
          filterOptions={filterOptions}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={UsersOption}
          getOptionLabel={handleGetOptionLabel}
          renderOption={handleRenderOption}
          freeSolo
          sx={{ minWidth: '300px' }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                intl.formatMessage({ id: 'username' }) +
                ' ' +
                intl.formatMessage({ id: 'or' }) +
                ' ' +
                intl.formatMessage({ id: 'phoneNumber' })
              }
              //   helperText={intl.formatMessage({ id: 'enter_username_phone_hint', defaultMessage: 'Format: username - phoneNumber' })}
            />
          )}
        />
      )}
    </>
  );
};

//  ===============================================================================

const CreateUser: React.FC<TCreateUserProps> = ({ toggleOpen, setValue }) => {
  // -------------  HOOKS -------------
  const intl = useIntl();
  const [userValue, setUserValue] = React.useState<TUserOptionType>(initialUserState);

  // -------------  FUNCTIONS -------------
  const handleClose = () => {
    toggleOpen(false);
    setValue(null);
    setUserValue(initialUserState);
  };
  const handleSubmit = () => {
    setValue(userValue);
    toggleOpen(false);
  };
  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserValue({
      ...userValue,
      username: event.target.value
    });
  const onPhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserValue({
      ...userValue,
      phoneNumber: event.target.value
    });

  return (
    <Box>
      <Typography>
        <FormattedMessage id="create-user-message" />
      </Typography>
      <Flex>
        <TextField
          autoFocus
          margin="dense"
          value={userValue.username}
          onChange={onUsernameChange}
          label={intl.formatMessage({ id: 'username' })}
          type="text"
          variant="standard"
          sx={{ flexGrow: 1 }}
        />
        <TextField
          margin="dense"
          value={userValue.phoneNumber}
          onChange={onPhoneNumberChange}
          label={intl.formatMessage({ id: 'phoneNumber' })}
          type="number"
          variant="standard"
          sx={{ flexGrow: 1 }}
        />
        <ButtonGroup variant="outlined" size="small" orientation="vertical" sx={{ px: 1 }}>
          <IconButton onClick={handleSubmit} disabled={!userValue.username || !userValue.phoneNumber}>
            <DoneIcon />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

type TCreateUserProps = {
  toggleOpen: (value: boolean) => void;
  setValue: (state: TUserOptionType | null) => void;
};
type TUserAutocompleteProps = {
  readonly?: boolean;
};

type TUserOptionType = {
  inputValue?: string;
  userId?: string;
  username?: string;
  phoneNumber?: string;
};
const initialUserState = {
  phoneNumber: '',
  username: '',
  userId: undefined
};
const UsersOption: readonly TUserOptionType[] = [
  { userId: 'id1', phoneNumber: '222', username: 'hamed' },
  { userId: 'id2', phoneNumber: '222', username: 'ali' },
  { userId: 'id3', phoneNumber: '222', username: 'mina' }
];

export default UserAutocomplete;
