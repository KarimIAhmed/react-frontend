import './App.css';
// import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import SearchComponent from "./components/SearchComponent";
function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginComponent/>}/>
                <Route exact path="/signup" element={<SignUpComponent/>}/>
                <Route exact path="/search" element={<SearchComponent/>}/>
            </Routes>
        </Router>

    </div>
  );
}

export default App;
