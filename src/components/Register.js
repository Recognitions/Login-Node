import Input from './Input'
import register from '../functions/register'

function Register(){
    return(
        <form id="register" onSubmit={register}>
            <h2>Register</h2>
            <Input type="text" placeholder="First Name"/>
            <Input type="text" placeholder="Last Name"/>
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Password"/>
            <Input type="date"/>
            <Input type="submit" value="Complete"/>
        </form>
    )
}

export default Register