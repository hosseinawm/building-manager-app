// src/components/ModernSearch.tsx
import React from 'react';
import { Box, Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const SearchRoot = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 680,
  padding: '6px 8px',
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
  boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
}));

const Input = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: '8px 12px',
  fontSize: 16,
  color: theme.palette.text.primary
}));

export default function ModernSearch() {
  // Placeholder state for visual only; no API calls
  const [value, setValue] = React.useState('');

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <SearchRoot elevation={2} aria-label="search-field">
        {/* <Divider sx={{ height: 28, mx: 1 }} orientation="vertical" flexItem /> */}

        <Input placeholder="جستجو" value={value} onChange={(e) => setValue(e.target.value)} inputProps={{ 'aria-label': 'search-input' }} />

        {value && (
          <IconButton aria-label="clear" onClick={() => setValue('')} sx={{ padding: 1.5 }}>
            <CloseIcon color="action" />
          </IconButton>
        )}

        <IconButton aria-label="search" sx={{ padding: 1.5 }}>
          <SearchIcon color="action" />
        </IconButton>
      </SearchRoot>
    </Box>
  );
}
