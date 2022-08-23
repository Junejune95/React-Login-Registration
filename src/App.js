import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'

// components
import LandingPage from './components/pages/Landingpage';
import LoginPage from './components/pages/Loginpage';
import RegisterPage from './components/pages/RegisterPage';
import HomePage from './components/pages/Homepage';
import ForgetPasswordPage from './components/pages/Forgetpasswordpage';


function App() {
  return (
    <Router>
    <div>
        <Routes>
            <Route exact path="/" element={ <LandingPage/> } />
            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/register" element={ <RegisterPage/> } />
            <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
            <Route path="/home" element={ <HomePage/> } />
        </Routes>
        <Footer />
    </div>
</Router>
  );
}

export default App;


const Footer = () => {
  return (
      <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://seinmama.zunezune.me/" target="_blank" rel="noopener noreferrer">Sein Ma Ma</a></p>
  )
}

const FooterStyle = {
  background: "black",
  fontSize: ".8rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}
