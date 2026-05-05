import { AppRoutes } from './Routes';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppRoutes />
      </Box>
    </Box>
  );
}

export default App;
