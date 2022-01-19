import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/system';

import Box from '@mui/material/Box';










/*function BorderColor() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles2, borderColor: 'primary.main' }} />
      <Box sx={{ ...commonStyles2, borderColor: 'secondary.main' }} />
      <Box sx={{ ...commonStyles2, borderColor: 'error.main' }} />
      <Box sx={{ ...commonStyles2, borderColor: 'grey.500' }} />
      <Box sx={{ ...commonStyles2, borderColor: 'text.primary' }} />
    </Box>
  );
}


*/



const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

function Example() {
  return (
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
  );
}




function App() {

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    border: 12,
    width: '5rem',
    height: '5rem',
    borderWidth:12,
  };

  const commonStyles2 = {
    bgcolor: 'background.paper',
    border: 12,
    width: '5rem',
    height: '5rem',
  };
  
  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box 
      
      //borderColor={"red"}

      sx={{ borderColor:"red", ...commonStyles, 
        width:"5rem", height:"5rem", border:1,
        borderRadius: '50%', borderWidth:6, borderColor:"red" }} 
      />
      <Box sx={{ ...commonStyles2, borderRadius: '50%', borderWidth:6, borderColor:"red" }} />
    </Box>

    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Example />

      <Box sx={{ ...commonStyles, borderRadius: '50%', borderWidth:6, borderColor:"#F11" }} />
      <Box sx={{ ...commonStyles, borderRadius: 1 }} />
      <Box sx={{ ...commonStyles, borderRadius: '16px', borderColor:"blue" }} />


    </Box>  
  </ThemeProvider>
  </>

  );
}



export default App;
