import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import BodyDesktop from './components/BodyDesktop';
import Profile from "./components/profile";
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Analytics" element={<BodyDesktop/>} />
        <Route path="/" element={<BodyDesktop/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App