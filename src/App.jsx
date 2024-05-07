import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './global/Topbar';
// import { Login } from '@mui/icons-material';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import UserManagement from './UserManagement/UserManagement'
import VisitsPlanning from './VisitsPlanning/VisitsPlanning';
function App() {
  const { theme, colorMode } = useMode(); 
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'>
            <VisitsPlanning/>
            {/* <UserManagement /> */}
           {/* <Login />   */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
