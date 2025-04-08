import "./App.css";
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import BodyDesktop from './components/BodyDesktop';
import Profile from "./components/profile";
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/analytics" element={<BodyDesktop/>} />
        <Route path="/" element={<Navigate to="analytics" />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App