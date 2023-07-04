import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ROUTES from './statics/routes';
import About_me from './pages/About_Me/About_Me';
import Projects from './pages/Projects/Projects';

const AppSwitch = () => {
    return (
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUTME} element={<About_me />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
      </Routes>
    );
  }
  
  export default AppSwitch;