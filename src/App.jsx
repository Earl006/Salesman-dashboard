import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './global/Topbar';
// import { Login } from '@mui/icons-material';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import UserManagement from './UserManagement/UserManagement';
import Clients from './Clients/Clients';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import Performance from './Performance/Performance';
import Feedback from './Feedback/Feedback';
import VisitPlanning from './Visit Planning/VisitPlanning';
import TaskManagement from './Task Management/TaskManagement';
import { Route } from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';


function App() {
  const { theme, colorMode } = useMode(); 
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'>
            <Topbar />
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/UserManagement" element={<UserManagement />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/TaskManagement" element={<TaskManagement />} />
            <Route path="/VisitPlanning" element={<VisitPlanning />} />
            <Route path="/Performance" element={<Performance />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/Orders" element={<Orders />} />
           {/* <Login />   */}
           </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
