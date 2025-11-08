import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

type Props = {};
const CustomAutocomplete: React.FC<Props> = () => {
  return (
    <Autocomplete
      disablePortal
      options={['test', 'test2']}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};
export default CustomAutocomplete;
