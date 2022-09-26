import Input from './Input'
import register from '../functions/register'

function Register(){
    return(
        <form id="register" onSubmit={register}>
            <h2>Register</h2>
            <Input type="text" placeholder="First Name" required/>
            <Input type="text" placeholder="Last Name" required/>
            <Input type="email" placeholder="E-mail" required/>
            <Input type="password" placeholder="Password" required/>
            <Input type="date" required/>
            <Input type="submit" value="Complete"/>
        </form>
    )
}

export default Register