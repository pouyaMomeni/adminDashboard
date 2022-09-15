import LoginPage from './pages/loginPage'
import SingUpPage from './pages/signUpPage'
import Dashboard from './pages/dashbord'
import './assets/login.css'
import DashHome from './pages/dashHome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './components/privateRoute'
import NotFound from './components/notFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='singUp' element={<SingUpPage />} />
        <Route path='Home' element={<DashHome />} />
        <Route path='*' element={<NotFound />} />
        <Route path='dashboard' element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
