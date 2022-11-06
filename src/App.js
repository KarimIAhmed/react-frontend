import './App.css';
// import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/signup" element={<SignUp/>}/>
            </Routes>
        </Router>

    </div>
  );
}

export default App;
