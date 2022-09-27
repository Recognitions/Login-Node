import Input from './Input'

function Login(){
    return(
        <form id="login">
            <h2>Login</h2>
            <Input type="email" id="email" placeholder="E-mail"/>
            <Input type="password" id="password" placeholder="Password"/>
            <Input type="submit" id="submitlogin" value="Complete"/>
        </form>
    )
}

export default Login