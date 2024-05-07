import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './global/Topbar'
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import UserManagement from './UserManagement/UserManagement';
import Clients from './Clients/Clients';
import Products from './Products/Products';
// import Orders from './Orders/Orders';
// import Performance from './Performance/Performance';
// import Feedback from './Feedback/Feedback';
// import VisitPlanning from './Visit Planning/VisitPlanning';
// import TaskManagement from './Task Management/TaskManagement';
 import { Routes, Route } from 'react-router-dom';



function App() {
  const { theme, colorMode } = useMode(); 
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'>
            <UserManagement />
           {/* <Login />   */}
           </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
