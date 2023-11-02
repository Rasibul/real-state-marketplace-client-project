import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element = {<Home></Home>} />
      <Route path ='/sign-in' element = {<SignIn></SignIn>} />
      <Route path ='/sign-up' element = {<SignUp></SignUp>} />
      <Route path ='/profile' element = {<Profile></Profile>} />
      <Route path ='/about' element = {<About></About>} />
    </Routes>
    </BrowserRouter>
  )
};

export default App;