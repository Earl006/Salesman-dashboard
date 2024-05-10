import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './global/Topbar';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import UserManagement from './UserManagement/UserManagement';
import Clients from './Clients/Clients';
import Products from './Products/Products';
// import Orders from './Orders/Orders';
// import Performance from './Performance/Performance';
 import Feedback from './Feedback/Feedback';
import VisitsPlanning from './VisitsPlanning/VisitsPlanning';
 import TaskManagement from './Task Management/TaskManagement';
 import { Routes, Route } from 'react-router-dom';
// import { Dashboard } from '@mui/icons-material';


function App() {
  const { theme, colorMode } = useMode(); 
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
          <Topbar />
            <Routes>
            {/* <Route path='/' element={<Dashboard />} /> */}
            <Route path="/manage-users" element={<UserManagement />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tasks" element={<TaskManagement />} />
            <Route path="/visits" element={<VisitsPlanning />} />
            <Route path="/feedback" element={<Feedback />} />
            {/* // <Route path="/performance" element={<Performance />} />
            // <Route path="/orders" element={<Orders />} /> */} 
           {/* <Login />   */}
           </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
