import { useState } from 'react';
import { useIntl } from 'react-intl';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';

type Props = {
  handleCancel: () => Promise<unknown>;
};
const CancelButton: React.FC<Props> = ({ handleCancel }) => {
  // -------------  HOOKS -------------
  const intl = useIntl();
  const [firstClick, setFirstClick] = useState(false);
  const [loading, setLoading] = useState(false);

  // -------------  FUNCTIONS -------------
  const confirmClick = async () => {
    setLoading(true);
    await handleCancel();
    setLoading(false);
  };
  const handleOnClick = () => {
    if (firstClick) {
      confirmClick();
    }
    setFirstClick(true);
  };
  const handleMouseLeave = () => setFirstClick(false);
  // -------------  JSX -------------
  return (
    <Box position="relative" display="inline-block" onMouseLeave={handleMouseLeave} sx={{ overflow: 'hidden' }}>
      <LoadingButton
        onClick={handleOnClick}
        size="small"
        loading={loading}
        color={firstClick ? 'error' : 'primary'}
        variant="outlined"
        startIcon={firstClick ? <ThumbUpOffAltIcon /> : null}
      >
        {intl.formatMessage({ id: 'cancel' })}
      </LoadingButton>
    </Box>
  );
};

export default CancelButton;
