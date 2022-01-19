import * as React from 'react';
import Box from '@mui/material/Box';

export default function GridTemplateAreas() {
  return (
    <Box
      sx={{
        width: '100%',
        //height: '140px',
        backgroundColor:"magenta",
        minHeight:"100%",


        color: '#fff',
        '& > .MuiBox-root > .MuiBox-root': {
          p: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }
        
        
      }}
    >
      <Box
        sx={{
          backgroundColor:"pink",
          minHeight:"100%",
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: '50px auto 50px',
          gridTemplateAreas: `"header header header header"
        "main main . sidebar"
        "footer footer footer footer"`,
        }}
      >
        <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
        <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main', flexGrow:1, height:"auto" }}>Main</Box>
        <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box>
        <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark'}}>Footer</Box>
      </Box>
    </Box>
  );
}
