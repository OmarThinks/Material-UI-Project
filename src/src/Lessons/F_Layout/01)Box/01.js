import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function BoxSx() {
  return (
    <Container 
    sx={{width:"100%", height:"100%"}}>
    <Box
    component="button"
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'red',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >Hello
      </Box>
      </Container>
  );
}
