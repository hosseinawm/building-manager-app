import { CSSProperties } from 'react';

import { Stack } from '@mui/material';

type FlexSxProps = CSSProperties & {
  mb?: string;
  bgcolor?: string;
};

type Props = {
  children: React.ReactNode;
  sx?: FlexSxProps;
  [key: string]: any;
};
const Flex: React.FC<Props> = ({ children, sx, ...props }) => {
  return (
    <Stack sx={{ ...sx }} {...props} direction="row">
      {children}
    </Stack>
  );
};

export default Flex;
