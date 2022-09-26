import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Home from './Home'

function App() {
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/register' element={<Register />}/>
            </Routes>
        </Router>
    );
}

export default App;