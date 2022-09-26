import Input from './Input'

function Register(){
    return(
        <form id="register">
            <h2>Register</h2>
            <Input type="text" id="firstName" placeholder="First Name"/>
            <Input type="text" id="lastName" placeholder="Last Name"/>
            <Input type="email" id="email" placeholder="E-mail"/>
            <Input type="password" id="password" placeholder="Password"/>
            <Input type="submit" id="submitRegister" value="Complete"/>
        </form>
    )
}

export default Register