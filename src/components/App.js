import {BrowserRouter as Router,Route,Link,Routes}from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Input from './Input'
import Alert from "./Alert";

function App() {
    return (
        <Router>
            <header>
                <Link to="/"><Input type="button" value="Home"/></Link>
                <Link to="/login"><Input type="button" value="Login"/></Link>
                <Link to="/register"><Input type="button" value="Register"/></Link>
            </header>
            <main>
                <Alert text=""/>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path='/register' element={<Register />}/>
                </Routes>
            </main>
        </Router>
    );
}

export default App;